'use client';
import data from './data';
import NavItem from './NavItem';

const Nav = () => {
  return (
    <nav className="py-[24px] pl-[10px] bg-white border-2 border-t-0 border-[#F4F6F9]">
      <ul className="flex flex-col gap-[12px]">
        {data.map((item) => (
          <li key={item.key}>
            <NavItem data={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
