'use client';
import Button from '@/components/generic/Button';
import { useGoogleLogin } from '@react-oauth/google';
import Logo from '@/components/generic/Logo';

const Header = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    onError: (error) => console.log(error),
  });

  return (
    <header className="col-span-2 flex justify-between items-center py-[10px] pr-[24px] pl-[10px] bg-white border-b-2 border-lightGray sm:col-span-1 sm:p-[10px]">
      <Logo />
      <div className="flex-1 flex justify-end gap-[8px] sm:gap-[5px]">
        <Button
          text="Register"
          onClick={() => {}}
          viewType="register"
          wrapperStyles="max-w-[160px] w-full sm:max-w-[110px]"
        />
        <Button
          text="Login"
          onClick={() => login()}
          viewType="login"
          wrapperStyles="max-w-[160px] w-full sm:max-w-[110px]"
        />
      </div>
    </header>
  );
};

export default Header;
