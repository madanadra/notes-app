import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { NotesApp } from './store/context'

ReactDOM.render(
  <React.StrictMode>
    <NotesApp>
      <App />
    </NotesApp>
  </React.StrictMode>,
  document.getElementById('root')
);
