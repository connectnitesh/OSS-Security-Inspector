import { GetUserData } from '../../../api';

describe('GetUserData', () => {
  it('should return user data of connectnitesh', async () => {
    const data = await GetUserData('connectnitesh');

    expect(data.user).toBeTruthy();
    expect(data.repos).toBeTruthy();
    expect(data.isStarred).toBe(true);
  });
});
