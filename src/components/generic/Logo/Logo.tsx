'use client';
import Image from 'next/image';
import NextLink from 'next/link';
import logoImage from '@/assets/images/logo.svg';

const Logo = () => {
  return (
    <NextLink href="/">
      <Image src={logoImage} alt="logo" />
    </NextLink>
  );
};

export default Logo;
