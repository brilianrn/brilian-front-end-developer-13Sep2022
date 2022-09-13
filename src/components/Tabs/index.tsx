import React, { FC } from 'react';
import styles from './Tabs.module.css';

interface TabsProps {
  active: string;
  setActive: (value: string) => void;
  tabs: Array<string>;
}

const Tabs: FC<TabsProps> = ({ active, setActive, tabs }) => {
  return (
    <React.Fragment>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          {tabs.map((item) => {
            return (
              <li key={item} className="mr-2" onClick={() => setActive(item)}>
                <p
                  className={`${
                    styles['items']
                  } cursor-pointer inline-block p-4 rounded-t-lg border-b-2 border-transparent px-4 ${
                    active === item
                      ? 'text-blue-600 border-blue-600 active dark:text-blue-500 dark:border-blue-500'
                      : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                  }`}
                >
                  {item}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Tabs;
