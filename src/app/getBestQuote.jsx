import React, { useState } from 'react';
import Image from "next/image";
import CosmeticImageNew from "../../public/images/industry/4.png";

const GetBestQuote = ({isOpen, onClose}) => {
   if (!isOpen) return null;

  return (
    <div className=''>
            <div className='bg-white max-w-3xl md:w-full rounded-3xl fixed top-12 left-0 right-0 mx-4 md:mx-auto z-[100] text-black overflow-hidden'>
                <div className='bg-white p-8 relative '>

                    <div className='cursor-pointer w-12 h-12 absolute right-1 top-1 flex items-center justify-center flex-col opacity-55' onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                    </div>

                    
                    <div className='mt-5'>
                        <div class="grid grid-cols-12 gap-8">

                            <div className='col-span-4'>
                                <div>
                                     <div className='h-[200px] overflow-hidden mb-3'><Image loading="lazy" src={CosmeticImageNew} alt="Ceramics" className="w-full h-full object-cover" /></div>
                                     <div className=''>
                                        <h3 className='text-xl font-semibold mb-2'>Ceramics</h3>
                                        <p className='text-sm'>Calcium Powder is a key raw material in ceramic production. </p>
                                     </div>
                                </div>
                            </div>
                             <div className='col-span-8'>
                            <p className='text-2xl mb-12'>Get Best Quote and details from "Skylab Microminerals" on your mobile quickly</p>
                            <div className="flex gap-4 mb-8">
                                <select
                                    className="px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="+1">+1</option>
                                    <option value="+44">+44</option>
                                    <option value="+91" selected>+91</option>
                                    <option value="+61">+61</option>
                                </select>

                                <input
                                    type="tel"
                                    placeholder="Enter mobile number"
                                    className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                                </div>
                                 <button className="py-4 px-12 rounded-xl bg-[#9b1c31] text-white inline-block mt-3 cursor-pointer">Submit Now</button>
                        </div>
                        </div>
                       
                    </div>

                   

                </div>
            </div>
            <div className='fixed bg-black/70 w-full h-full top-0 left-0 z-[99] backdrop-blur-lg'></div>
        </div>
  )
}

export default GetBestQuote
