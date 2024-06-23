import {render, screen} from '@testing-library/react-native'

import HomeScreen from './index';

describe('HomeScreen', () => {
  it('renders the title correctly', () => {
    render(<HomeScreen />);
    const titleElement = screen.getByText('Olá!');
    expect(titleElement).toBeTruthy();
  });

  it('renders the step 1 text correctly', () => {
    render(<HomeScreen />);
    const step1Element = screen.getByText('Step 1: Try it');
    expect(step1Element).toBeTruthy();
  });

  it('renders the step 2 text correctly', () => {
    render(<HomeScreen />);
    const step2Element = screen.getByText('Step 2: Explore');
    expect(step2Element).toBeTruthy();
  });

  it('renders the step 3 text correctly', () => {
    render(<HomeScreen />);
    const step3Element = screen.getByText('Step 3: Get a fresh start');
    expect(step3Element).toBeTruthy();
  });
});