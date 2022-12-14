import { AxiosResponse } from 'axios';
import { APIData, Repository, User } from '../type';
import axiosInstance from './axiosInstance';

// Fetch data from https://api.github.com and return user data and repos as object
export const GetUserData = async (userName: string): Promise<APIData> => {
  try {
    const user: AxiosResponse<User> = await axiosInstance.get(`/${userName}`);
    const userData = user.data;

    const repos: AxiosResponse<Repository[]> = await axiosInstance.get(`/${userName}/repos?&per_page=250`);
    const reposData = repos.data;
    const forkedRepos = reposData.filter((r) => !r.fork);

    if (forkedRepos.length === 0) throw Error("Couldn't find any public repository.");

    const stars: AxiosResponse<Repository[]> = await axiosInstance.get(`/${userName}/starred?&per_page=250`);
    const starredRepos = stars.data;

    // Check if GitHub rater is starred
    const GITHUB_OSS = 519611455;
    const isStarred = starredRepos.map((r) => r.id).includes(GITHUB_OSS);

    return {
      user: userData,
      repos: forkedRepos,
      isStarred,
    };
  } catch (err) {
    throw err;
  }
};
