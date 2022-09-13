import Avatar from '@components/Avatar';
import React, { FC } from 'react';
import { ExperienceProps } from '../dashboard.type';

const Experience: FC<ExperienceProps> = ({ experiences }) => {
  return (
    <React.Fragment>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          {experiences.map((item, i) => {
            return i === experiences.length - 1 ? (
              <li key={item.company} className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Avatar photo={item.photo} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                      {item.company}
                    </p>
                    <p className="text-md text-gray-600 truncate dark:text-gray-500">
                      {item.position}
                    </p>
                    <p className="text-md text-gray-600 truncate dark:text-gray-500">
                      Stacks:{' '}
                      <span className="italic text-gray-500 truncate dark:text-gray-400">
                        {item.stacks.join(', ')}
                      </span>
                    </p>
                  </div>
                  <div className="text-sm inline-flex items-center font-semibold text-gray-900 dark:text-white">
                    {item.duration}
                  </div>
                </div>
              </li>
            ) : (
              <li key={item.company} className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Avatar photo={item.photo} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                      {item.company}
                    </p>
                    <p className="text-md text-gray-600 truncate dark:text-gray-500">
                      {item.position}
                    </p>
                    <p className="text-md text-gray-600 truncate dark:text-gray-500">
                      Stacks:{' '}
                      <span className="italic text-gray-500 truncate dark:text-gray-400">
                        {item.stacks.join(', ')}
                      </span>
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

export default Experience;
