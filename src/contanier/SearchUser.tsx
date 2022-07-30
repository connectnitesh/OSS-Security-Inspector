import React from 'react';
import { useSelector } from 'react-redux';
import { getStates } from '../selector';

import Input from '../component/layout/Input';

const SearchUser = () => {
  const { user } = useSelector(getStates);

  return (
    <div className="search-user">
      {!user?.login && <h2>Analyze open source github profiles and provide ratings.</h2>}
      <Input />
    </div>
  );
};

export default SearchUser;
