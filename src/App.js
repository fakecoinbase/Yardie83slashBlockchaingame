import React from 'react';
import { ReusableProvider } from 'reusable'
import TopNavbar from './components/TopNavbar/TopNavbar'
import DashboardGrid from './components/DashboardGrid/DashboardGrid'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'https://blockchaingame-hasura-postgres.herokuapp.com/v1/graphql',
  headers:{
    "HASURA_GRAPHQL_UNAUTHORIZED_ROLE":"public"
  }
});

const App = () =>
  (
    <div className="App">
      <ApolloProvider client={client}>
        <ReusableProvider>
          <TopNavbar />
          <DashboardGrid />
        </ReusableProvider>
      </ApolloProvider>
    </div>
  );


export default App;
