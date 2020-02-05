import React from 'react';
import { ReusableProvider } from 'reusable'
import client from "./graphql/HasuraApolloClient"
import { ApolloProvider } from '@apollo/react-hooks';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Admin, User } from './components/Views'

const App = () =>
  (
    <div className="App">
      <ApolloProvider client={client}>
        <ReusableProvider>
          <Router>
            <Switch>
              <Route path="/admin">
                <Admin />
              </Route>
              <Route path="/">
                <User />
              </Route>
            </Switch>
          </Router>
        </ReusableProvider>
      </ApolloProvider>
    </div>
  );


export default App;
