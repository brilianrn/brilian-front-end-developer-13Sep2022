import { Card, Tabs } from '@components/index';
import React, { useState } from 'react';
import { EducationType, ExperienceType } from '../dashboard.type';
import Education from './Education';
import Experience from './Experience';
import Profile from './Profile';

const MainCard = () => {
  const [tabs, _setTabs] = useState<Array<string>>([
    'Profile',
    'Education',
    'Experience',
  ]);
  const [educations, _setEducations] = useState<Array<EducationType>>([
    {
      title: 'Hactiv8 Indonesia',
      program: 'Immersive Full Stack Javascript Developer',
      duration: 'Jan 2021-Apr 2021',
      photo: '/assets/images/hacktiv8.svg',
    },
    {
      title: 'UPT-PK Surabaya',
      program: 'D3 Teknik Elektro Industri',
      duration: 'Sep 2015-Sep 2018',
      photo: '/assets/images/blk.svg',
    },
    {
      title: 'Institut Teknologi Sepuluh Nopember',
      program: 'D3 Teknik Elektro-Fakultas Vokasi',
      duration: 'Aug 2015-Aug 2018',
      photo: '/assets/images/its.svg',
    },
  ]);
  const [experiences, _setExperiences] = useState<Array<ExperienceType>>([
    {
      company: 'Aido Health Indonesia',
      position: 'Full Time as Full Stack Developer',
      duration: 'Jul 2022-Now',
      stacks: [
        'NodeJs',
        'ExpressJs',
        'MySQL',
        'ReactJs',
        'Redux',
        'iOS Native',
        'Laravel',
        'Trello',
      ],
      photo: '/assets/images/aido.svg',
    },
    {
      company: 'Nadi Health Berhard',
      position: 'Full Time as Full Stack Developer',
      duration: 'Oct 2021-Jun 2022',
      stacks: [
        'NodeJs',
        'ExpressJs',
        'Mongoose',
        'ReactJs',
        'Redux',
        'ClickUp',
      ],
      photo: '/assets/images/nadi.svg',
    },
    {
      company: 'PT Technova Optima Prima',
      position: 'Freelance as Full Stack Developer',
      duration: 'Dec 2021-Now',
      stacks: [
        'NodeJs',
        'ExpressJs',
        'MySQL',
        'ReactJs',
        'Redux',
        'NextJs',
        'Trello',
      ],
      photo: '/assets/images/technova.svg',
    },
    {
      company: 'PT Mediatechindo ( Media Digitech Indonesia )',
      position: 'Contract as Front End Developer',
      duration: 'Apr 2022-Jul 2022',
      stacks: ['NextJs', 'ReactJs', 'Redux', 'TailwindCSS', 'Jira'],
      photo: '/assets/images/mediatech.svg',
    },
    {
      company: 'PT Kognitif Skema Indonesia',
      position: 'Freelance as Front End Developer',
      duration: 'Feb 2022-Aug 2022',
      stacks: ['VueJs', 'Vuex', 'Bootstrap', 'Jira'],
      photo: '/assets/images/schema.svg',
    },
    {
      company: 'PT Surya Madistrindo',
      position: 'Full Time - Software Engineer',
      duration: 'May 2021-Oct 2021',
      stacks: ['Java Spring Boot', 'OracleDB', 'PL/SQL', 'Android Java Native'],
      photo: '/assets/images/sm.svg',
    },
    {
      company: 'PT Yakult Indonesia Persada',
      position: 'Full Time - Production Operator',
      duration: 'Feb 2019-Dec 2020',
      stacks: ['Electrical Engineering'],
      photo: '/assets/images/yakult.svg',
    },
    {
      company: 'PT Surya Baja Sentral Anugerah',
      position: 'Full Time - Technician',
      duration: 'Oct 2019-Dec 2019',
      stacks: ['Electrical Engineering'],
      photo: '/assets/images/sb.svg',
    },
  ]);
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  return (
    <React.Fragment>
      <div className="mt-3">
        <Card>
          <Tabs active={activeTab} setActive={setActiveTab} tabs={tabs} />
          <div className="mt-2">
            {activeTab === tabs[1] ? (
              <Education educations={educations} />
            ) : activeTab === tabs[2] ? (
              <Experience experiences={experiences} />
            ) : activeTab === tabs[0] ? (
              <Profile />
            ) : null}
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default MainCard;
