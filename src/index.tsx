import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app-root')!;
const root = createRoot(container);
root.render(<h1>Some title here</h1>);

// TODO
// 1. Check babel config
// 2. Add jest
// 3. Add chakra ui
