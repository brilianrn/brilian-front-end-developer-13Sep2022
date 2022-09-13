import { Avatar } from '@components/index';
import React from 'react';

const DashboardCard = () => {
  return (
    <React.Fragment>
      <div className="p-6 w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-row">
          <Avatar
            photo={'/assets/images/brilianrn.svg'}
            photoHeight={100}
            photoWidth={100}
          />
          <div className="flex items-center ml-3">
            <div className="block">
              <p className="text-[35px] text-gray-900">
                Brilian Rachmad Nurwachidin (30 tahun)
              </p>
              <p className="text-[20px] italic text-gray-600">
                Full Stack Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashboardCard;
