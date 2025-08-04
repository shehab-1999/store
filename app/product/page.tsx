import { Metadata } from 'next';
import React from 'react'
export async function generateMetadata():Promise<Metadata | undefined>{

   
  return {
   
    openGraph: {
    title: 'متجر الأناقة - أحدث صيحات الموضة',
  description: 'اكتشف مجموعة حصرية من الملابس العصرية للرجال والنساء مع أفضل الأحذية والحقائب',
      type: "website",
     
     url: "https://store-silk-three.vercel.app/",
      siteName: "مستشفى المجد",
      images:[{
        url:"https://store-silk-three.vercel.app/opengraph-image.jpg",
        width: 1200,
          height: 630,}
      ]
    }
   
  };
}
export default function page() {
  return (
    <div>page</div>
  )
}
