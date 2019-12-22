import React from 'react';
import {ReusableProvider} from 'reusable'
import TopNavbar from './components/TopNavbar/TopNavbar'
import DashboardGrid from './components/DashboardGrid/DashboardGrid'

const App = () =>
  (
    <div className="App">
      <ReusableProvider>
        <TopNavbar />
        <DashboardGrid />
      </ReusableProvider>
    </div>
  );


export default App;
