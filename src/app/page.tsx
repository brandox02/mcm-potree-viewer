'use client';

import JSZip from 'jszip';
import { useState } from 'react';
import { json } from 'stream/consumers';


export default function Home() {
  const [url, setUrl] = useState('https://twincility.s3.amazonaws.com/4691.616893442152bunnyData.pts_converted.zip')

  const handleFileChange = async (e: any) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    console.log({ klk: process.env.NEXT_PUBLIC_API_URL });
    // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/point-cloud`, {
    //   method: 'POST',
    //   body: formData
    // });

    // const json = await response.json();
    // const { fileUrl } = json.data;

    // const response = await fetch('https://twincility.s3.amazonaws.com/4691.616893442152bunnyData.pts_converted.zip');
    // const blob = await response.blob();


    // unzipFileFromURL('https://twincility.s3.amazonaws.com/4691.616893442152bunnyData.pts_converted.zip');
    // console.log({ blob, response });
    // console.log({ json });
  };

  function onClick() {
    fetch('/api/render', {
      method: 'POST',
      body: JSON.stringify({
        file: 'https://twincility.s3.amazonaws.com/4691.616893442152bunnyData.pts_converted.zip'
      })
    })
  }

  return (
    <div>
      <div className="flex w-full h-screen items-center justify-center bg-grey-lighter">
        <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-blue">
          <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
          </svg>
          <span className="mt-2 text-base leading-normal">Select a file</span>
          <input type='file' className="hidden" onChange={handleFileChange} />
        </label>
        <button className='bg-red-500 p-5 mx-10 text-white' onClick={onClick}>Go ahead</button>
      </div>
    </div>
  )
}
