import React from 'react';
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Navigator from './navigation/Navigation';
import { Theme } from './utils/styles/Theme';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000',
});

const client = new ApolloClient({
  cache,
  link,
});

export default () => (
  <ApolloProvider client={client}>
    <Theme>
      <Navigator />
    </Theme>
  </ApolloProvider>
);
