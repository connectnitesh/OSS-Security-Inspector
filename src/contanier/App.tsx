import React from 'react';
import Navbar from './Navbar';
import Results from './Result';
import SearchUser from './SearchUser';
import ResultsExplainer from './ResultExplainer';

import '../styles/index.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <SearchUser />
      <Results />
      <ResultsExplainer />
    </div>
  );
};

export default App;

