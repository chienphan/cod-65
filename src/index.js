import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Your name'

ReactDOM.render(
  React.createElement('h1', { style: { textAlign: 'center' }}, name),
  document.getElementById('root')
);
