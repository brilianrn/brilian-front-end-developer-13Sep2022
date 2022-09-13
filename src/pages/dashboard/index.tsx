import React from 'react';
import { MetaHead } from '@components/index';
import DashboardCard from './TopCard';
import MainCard from './MainCard';

const Dashboard = () => {
  return (
    <React.Fragment>
      <MetaHead />
      <div className="px-20 py-10">
        <DashboardCard />
        <MainCard />
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
