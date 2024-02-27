
import React from 'react';

const editprofile = () => {
  return (
    <div>
      <h1 className='text-5xl m-10 font-bold'>Edit Profile</h1>
      {/* Add your profile editing components or content here */}
      <div className='m-10 flex flex-col lg:flex-row items-center gap-4'>
            <div className='w-[70%] bg-white p-5'>
                    <div className='flex gap-5 items-center'>
                        <div className="bg-[#CABDFF] w-3 h-8 rounded-lg"> 
                        </div>
                        <div>
                            <p className="font-bold text-lg">General information</p>
                        </div>
                    </div>
            </div>
            <div className='w-[30%]'>
                    <div className='flex gap-5 items-center'>
                        <div className="bg-[#CABDFF] w-3 h-8 rounded-lg"> 
                        </div>
                        <div>
                            <p className="font-bold text-lg">General information</p>
                        </div>
                    </div>
            </div>
      </div>
    </div>
  );
};

export default editprofile;