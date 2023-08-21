import React from 'react';
import { createRoot } from 'react-dom/client';
import StoreLocator from '../StoreLocator';

test('renders learn react link', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<StoreLocator />);
});

test('sample test', () => {
    expect(2 + 2).toBe(4);
});
