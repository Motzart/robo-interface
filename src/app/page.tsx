'use client';
import { useGoogleLogin } from '@react-oauth/google';

export default function Home() {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return (
    <div className="flex h-full flex-col items-center justify-between p-24">
      <h1>robot baba</h1>
      <button onClick={() => login()}>Sign in with Google 🚀 </button>
    </div>
  );
}
