import * as React from 'react';
import Image from 'next/image';
import chatIcon from '../../assets/images/chat.png';
import Link from 'next/link';

const ModelCard = ({ model }: any) => {
  // relative absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100
  // relative bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-70
  return (
    <Link href="/conversations">
      <div className="relative bg-fixed opacity-100 transition duration-300 ease-in-out hover:opacity-70">
        <Image className="rounded-lg" src={model.img} alt="test-model" />
        <div className="z-10 w-10 h-10 shadow-lg absolute right-3 top-3 primary-gradient rounded-full backdrop-blur-lg">
          <Image src={chatIcon} alt="chat-icon" />
        </div>
        <div className="absolute bottom-0 px-3 md:px-4 py-3 font-medium z-20">
          <h2 className="text-white">{`${model.name}, ${model.age} years`}</h2>
          <p className="text-lightGray text-[14px]">{model.interests}</p>
        </div>
      </div>
    </Link>
  );
};

export default ModelCard;
