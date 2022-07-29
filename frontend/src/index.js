// require('file-loader?name=[name].[ext]!../src/index.html');
import React from 'react';  
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";  
import { Provider } from "react-redux";  
import store from "./redux/store.js";  
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';

import App from './App.js';  
  
const root = ReactDOM.createRoot(document.getElementById('app'));

const link = createHttpLink({
  uri: process.env.SERVER,
  // credentials: 'same-origin'
  credentials: 'include' // cors setup in express server.js
});

const client = new ApolloClient({
  uri: process.env.SERVER,
  cache: new InMemoryCache(),
  link,
});

root.render(
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <App />
        </Provider>
      </ApolloProvider>
    </BrowserRouter>
);