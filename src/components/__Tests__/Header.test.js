import { createRoot } from 'react-dom/client';
import Header from '../Header';
import React from 'react';

test('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<Header />);
});