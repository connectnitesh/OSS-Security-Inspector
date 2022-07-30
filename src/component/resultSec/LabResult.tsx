import React from 'react';
import ResultsList from './ResultList';

const LabResults: React.FC = () => {
  return (
    <div className="labdata">
      <div className="metric-container">
        <h4>Lab Results</h4>
        <div className="metric-grid" />
        <ResultsList />
      </div>
      <div className="muted results-info">
        <h4>Don&apos;t recommended to use repository having user score less than 50 </h4>
        Values are estimated and may vary. The{' '}
        <a href="https://github.com/connectnitesh/OSS-Security-Inspector#how-it-calculates">
          rating score is calculated
        </a>{' '}
        directly from these metrics.
      </div>
    </div>
  );
};

export default LabResults;
