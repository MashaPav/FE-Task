import React from 'react';
import ReactDOM from 'react-dom'; // For react 17
import App from './App';

import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://nbj-test55.frontegg.com',
  clientId: '78820e01-8160-4312-bdb6-54683edb1cca'
};

// For react 18: 
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
ReactDOM.render(
    <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
        <App />
    </FronteggProvider>,
    document.getElementById('root')
);