'use client';
import * as React from 'react';

const Profile = () => {
  return (
    <div>
      <div className="p-5 sm:p-5">
        <h2 className="text-2xl font-semibold leading-7 text-[#4C4C4C]">
          Profile Settings
        </h2>
      </div>
      <div className="p-5 sm:p-5 border-t border-gray-100">
        <h2 className="text-2xl font-semibold leading-7 text-[#4C4C4C]">
          Current Plan <span className="text-[#4CADEA]"> FREE </span>
        </h2>
      </div>
    </div>
  );
};

export default Profile;
