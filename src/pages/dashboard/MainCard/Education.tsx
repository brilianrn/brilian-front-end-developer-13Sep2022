import Avatar from '@components/Avatar';
import React, { FC } from 'react';
import { EducationProps } from '../dashboard.type';

const Education: FC<EducationProps> = ({ educations }) => {
  return (
    <React.Fragment>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          {educations.map((item, i) => {
            return i === educations.length - 1 ? (
              <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Avatar photo={item.photo} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                      {item.title}
                    </p>
                    <p className="text-md text-gray-500 truncate dark:text-gray-400">
                      {item.program}
                    </p>
                  </div>
                  <div className="text-sm inline-flex items-center font-semibold text-gray-900 dark:text-white">
                    {item.duration}
                  </div>
                </div>
              </li>
            ) : (
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Avatar photo={item.photo} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                      {item.title}
                    </p>
                    <p className="text-md text-gray-500 truncate dark:text-gray-400">
                      {item.program}
                    </p>
                  </div>
                  <div className="text-sm inline-flex items-center font-semibold text-gray-900 dark:text-white">
                    {item.duration}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Education;
