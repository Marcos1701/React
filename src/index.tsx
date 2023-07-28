// import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App1.tsx'

const root = document.getElementById('root')
if (!root) {
  throw new Error('Could not find root element')
}
createRoot(root).render(<App />)
