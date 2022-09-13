import { MetaHead } from '@components/index';
import type { NextPage } from 'next';
import { default as Img } from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import styles from '../styles/Common.module.css';

const Home: NextPage = () => {
  const router = useRouter();

  const showDashboard = () => router.push('/dashboard');
  return (
    <React.Fragment>
      <MetaHead />
      <div
        className={`${styles['start-screen']} w-full h-screen flex justify-center items-center`}
      >
        <div className="text-center">
          <div>
            <p className="inline text-[50px] text-yellow-700">
              let`s start to introduce
              <span className="cursor-pointer ml-4" onClick={showDashboard}>
                <span className="mr-3">brilianrn</span>
                <Img
                  src="/assets/images/arrow-box-right.svg"
                  alt="Profil Keren Brilian"
                  height={35}
                  width={35}
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
