'use client';
import data from './data';
import NavItem from './NavItem';

const Nav = () => {
  return (
    <nav className="py-[24px] pl-[10px] bg-white border-r-2 border-lightGray whitespace-nowrap sm:order-2 sm:p-[10px] sm:pt-0 sm:border-0">
      <ul className="flex flex-col gap-[12px] sm:flex-row sm:justify-between sm:gap-0">
        {data.map((item) => (
          <li className="flex-1 sm:min-w-[58px]" key={item.key}>
            <NavItem data={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
