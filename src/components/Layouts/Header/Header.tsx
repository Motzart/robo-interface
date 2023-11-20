'use client';
import { useGoogleLogin } from '@react-oauth/google';
import Logo from '@/components/generic/Logo';

const Header = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    onError: (error) => console.log(error),
  });

  return (
    <header className="col-span-2 flex justify-between items-center py-[10px] pr-[24px] pl-[10px] bg-white border-2 border-[#F4F6F9]">
      <Logo />
      <div className="flex-1 flex justify-end gap-[8px]">
        <div className="max-w-[160px] w-full">
          <button className="w-full p-[7px] rounded-[24px] border-2 border-[#4CADEA] text-[#4CADEA] font-semibold">
            Register
          </button>
        </div>
        <div className="max-w-[160px] w-full">
          <button
            onClick={() => login()}
            className="w-full p-[7px] rounded-[24px] border-2 bg-[#4CADEA] border-[#4CADEA] text-white font-semibold"
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
