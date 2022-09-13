import { StaticImageData } from 'next/image';

export interface EducationType {
  title: string;
  program: string;
  duration: string;
  photo?: StaticImageData | string;
}

export interface EducationProps {
  educations: Array<EducationType>;
}

export interface ExperienceType {
  company: string;
  position: string;
  duration: string;
  stacks: Array<string>;
  photo?: StaticImageData | string;
}

export interface ExperienceProps {
  experiences: Array<ExperienceType>;
}
