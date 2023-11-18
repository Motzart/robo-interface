'use client';
import Logo from '@/components/generic/Logo';

const Header = () => {
  return (
    <header className="col-span-2 flex justify-between items-center py-[10px] pr-[24px] pl-[10px] bg-white border-2 border-lightGray">
      <Logo />
      <div className="flex-1 flex justify-end gap-[8px]">
        <div className="max-w-[160px] w-full">
          <button className="w-full p-[7px] rounded-[24px] border-2 border-blue text-blue font-semibold">
            Register
          </button>
        </div>
        <div className="max-w-[160px] w-full">
          <button className="w-full p-[7px] rounded-[24px] border-2 bg-blue border-blue text-white font-semibold">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
