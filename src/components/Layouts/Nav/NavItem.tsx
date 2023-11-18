'use client';
import Image from 'next/image';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { NavItem as TypeNavItem } from './data';
import {
  disabledPseudoStyles,
  activePseudoStyles,
  sharedStyles,
} from './styles';

const NavItem = ({ data }: { data: TypeNavItem }) => {
  const pathname = usePathname();
  const { icon, text, href, disabled } = data;

  const isActive = pathname === href;

  const sharedComponent = (
    <>
      <Image src={icon} alt={text} />
      <span>{text}</span>
    </>
  );

  if (disabled) {
    return (
      <div
        className={`relative cursor-not-allowed ${sharedStyles} ${disabledPseudoStyles}`}
      >
        {sharedComponent}
      </div>
    );
  }

  return (
    <div className={isActive ? `relative ${activePseudoStyles}` : ''}>
      <NextLink
        href={href}
        className={`${sharedStyles} ${
          isActive ? 'rounded-[16px] bg-[#EBF7FE] text-[#4CADEA]' : ''
        }`}
      >
        {sharedComponent}
      </NextLink>
    </div>
  );
};

export default NavItem;
