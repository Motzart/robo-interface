'use client';
import Image from 'next/image';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { NavItem as TypeNavItem } from './data';

const NavItem = ({ data }: { data: TypeNavItem }) => {
  const pathname = usePathname();
  const { icon, text, href, disabled } = data;

  const isActive = pathname === href;

  const disabledPseudoStyles =
    "after:content-['Soon'] after:absolute after:bottom-[-12px] after:bg-[#FF564E] after:rounded-[24px] after:px-[4px] after:text-white after:text-[11px] after:text-center after:font-medium";

  const activePseudoStyles =
    "after:content-[''] after:absolute after:right-0 after:top-0 after:w-[2px] after:h-full after:bg-[#4CADEA]";

  const sharedStyles =
    'flex flex-col items-center justify-center max-w-[76px] p-[7px] text-[12px] font-bold text-[#4C4C4C]';

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
