import React from 'react';
import '@testing-library/jest-dom';
import ResultsWrapper from '../../../../component/resultSec/ResultWrapper';
import { renderWithRouter } from '../../testHelper';

const wrap = () => renderWithRouter(<ResultsWrapper />);

describe('<ResultsWrapper />', () => {
  it('renders the ResultsWrapper component', () => {
    const component = wrap();

    expect(component).toBeTruthy();
  });
});
