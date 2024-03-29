"use client";
import { FaArrowLeftLong } from "react-icons/fa6";
import { BiMessageDetail } from "react-icons/bi";
import { LuBell } from "react-icons/lu";
<<<<<<< HEAD
import { useState } from "react";
import Link from "next/link";
=======
<<<<<<< HEAD
import { useState } from "react";
import Link from "next/link";
=======
import Link from "next/link";

>>>>>>> 9ae125e37cfac011150344b28b8d51696a52f170
>>>>>>> f64ec8a42435fb459e7a144c5e7f3829b47e8832

const DashboardTopNavbar = () => {
  const [isOptionsVisible, setOptionsVisible] = useState(false);

  const toggleOptions = () => {
    setOptionsVisible(!isOptionsVisible);
  };

  const navigateTo = (page) => {
    // Implement navigation logic based on the selected option
    console.log(`Navigating to ${page}`);
    toggleOptions(); // Close the modal after navigation
  };

  const logout = () => {
    // Implement logout logic
    console.log('Logging out');
    toggleOptions(); // Close the modal after logout
  };
  return (
    <div className="py-[20px] shadow-sm pl-4 pr-10 bg-white ">
      <div className="flex items-center justify-between ">
<<<<<<< HEAD
       <Link href={'/'}>
       <div className="flex items-center gap-[12px]">
            <FaArrowLeftLong size={18}/>
            <h2 className="text-[20px] font-semibold text-main cursor-pointer">Back to landing page</h2>
        </div>
       </Link>
        {/* profile section  */}
        <div className="flex gap-4 items-center">
          <Link href={'/users/message'}>
=======
        <div className="flex items-center gap-[12px]">
<<<<<<< HEAD
          <FaArrowLeftLong size={18} />
          <h2 className="text-[20px] font-semibold text-main">
            Back to landing page
          </h2>
=======
            <FaArrowLeftLong size={18}/>
            <Link href={'/'}><h2 className="text-[20px] font-semibold text-main cursor-pointer">Back to landing page</h2></Link>
>>>>>>> 9ae125e37cfac011150344b28b8d51696a52f170
        </div>

        {/* profile section  */}
        <div className="flex gap-4">
>>>>>>> f64ec8a42435fb459e7a144c5e7f3829b47e8832
          <div className="relative">
            <BiMessageDetail size={32} color="#6F767E" />
            <div className="w-[12px] h-[12px] rounded-full bg-[#ff6a5f] absolute top-0 right-0"></div>
          </div>
<<<<<<< HEAD
          </Link>
=======
>>>>>>> f64ec8a42435fb459e7a144c5e7f3829b47e8832

          <div className="relative">
            <LuBell size={32} color="#6F767E" />
            <div className="w-[12px] h-[12px] rounded-full bg-[#ff6a5f] absolute top-0 right-0"></div>
          </div>
          <div className="relative">
      <div
<<<<<<< HEAD
        className="cursor-pointer flex items-center gap-2"
        onClick={toggleOptions}
      >
        <img
          src="https://i.ibb.co/HP28p9X/Cover-photo.png"
          alt="Profile Image"
          className="rounded-full h-10 w-10"
        />
        <div>
          <p className="font-bold">Johan Smith</p>
          <p>Investor</p>
        </div>
      </div>

      {isOptionsVisible && (
        <div className="absolute top-full right-0 z-10 w-56 bg-white shadow-md rounded-md mt-2">
=======
        className="cursor-pointer"
        onClick={toggleOptions}
      >
        <img
          src="path-to-your-profile-image.jpg"
          alt="Profile Image"
          className="rounded-full h-10 w-10"
        />
      </div>

      {isOptionsVisible && (
        <div className="absolute top-full right-10 w-56 bg-white shadow-md rounded-md mt-2">
>>>>>>> f64ec8a42435fb459e7a144c5e7f3829b47e8832
          <Link href={'userprofile'}>
          <button
            className="w-full px-4 py-2 text-left hover:bg-gray-100"
            onClick={() => navigateTo('profile')}
          >
            Profile
          </button>
          </Link>
          <button
            className="w-full px-4 py-2 text-left hover:bg-gray-100"
            onClick={() => navigateTo('profile')}
          >
           Edit Profile
          </button>
          <button
            className="w-full px-4 py-2 text-left hover:bg-gray-100"
            onClick={() => navigateTo('dashboard')}
          >
            Updrate To Pro
          </button>
          <button
            className="w-full px-4 py-2 text-left hover:bg-gray-100"
            onClick={() => navigateTo('dashboard')}
          >
            Account settings
          </button>
          <button
            className="w-full px-4 py-2 text-left hover:bg-gray-100"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTopNavbar;
