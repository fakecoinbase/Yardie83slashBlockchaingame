import React from 'react';
import { ReusableProvider } from 'reusable'
import TopNavbar from './components/TopNavbar/TopNavbar'
import DashboardGrid from './components/DashboardGrid/DashboardGrid'
import client from "./graphql/HasuraApolloClient"
import { ApolloProvider } from '@apollo/react-hooks';

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
