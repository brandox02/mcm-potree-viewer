import { NextResponse } from "../../../../node_modules/next/server";
import axios from 'axios';
import AdmZip from 'adm-zip';

export async function POST(request: Request) {
   async function unzipFileFromURL(url: string, outputDirectory: string) {
      try {
         console.log('eoo')
         // Fetch the zip file
         const response = await axios.get(url, { responseType: 'arraybuffer' });
         // console.log({ response })
         // await fetch(url);

         // Initialize the AdmZip object
         const zip = new AdmZip(response.data);

         // Extract the zip contents to the specified directory
         zip.extr(outputDirectory, true);

         console.log('Zip file successfully extracted to:', outputDirectory);
      } catch (error) {
         console.error('Error while unzipping:', error);
      }
   }

   const body = await request.json()
   console.log({ body })
   unzipFileFromURL(body.file, '/out');

   return NextResponse.json({
      igotchu: 'y el mordio como la manzana de la macbook'
   });
}