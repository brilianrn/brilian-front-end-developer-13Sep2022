import { default as Img, StaticImageData } from 'next/image';
import React, { FC, ReactNode } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps {
  photo?: StaticImageData | string;
  photoHeight?: number;
  photoWidth?: number;
  children?: ReactNode;
}

const Avatar: FC<AvatarProps> = ({
  photo,
  photoHeight,
  photoWidth,
  children,
}) => {
  return (
    <React.Fragment>
      <Img
        src={photo || '/assets/images/user.svg'}
        alt={`Foto Profil Keren-Brilian`}
        height={photoHeight || 100}
        width={photoWidth || 100}
        className={styles['rounded-full']}
      />
    </React.Fragment>
  );
};

export default Avatar;
