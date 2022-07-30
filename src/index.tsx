import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContextWrapper from './context/GlobalContext/ContextWrapper';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContextWrapper>
      <App />
    </ContextWrapper>
  </React.StrictMode>
);
