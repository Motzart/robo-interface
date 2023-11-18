'use client';
import Button from '@/components/generic/Button';
import Logo from '@/components/generic/Logo';

const Header = () => {
  return (
    <header className="col-span-2 flex justify-between items-center py-[10px] pr-[24px] pl-[10px] bg-white border-2 border-lightGray">
      <Logo />
      <div className="flex-1 flex justify-end gap-[8px]">
        <Button
          text="Register"
          onClick={() => {}}
          viewType="register"
          wrapperStyles="max-w-[160px] w-full"
        />
        <Button
          text="Login"
          onClick={() => {}}
          viewType="login"
          wrapperStyles="max-w-[160px] w-full"
        />
      </div>
    </header>
  );
};

export default Header;
