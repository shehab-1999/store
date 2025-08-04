import './globals.css';
import type { Metadata } from 'next';

import { ThemeProvider } from '@/components/theme-provider';



export const metadata: Metadata = {
  title: 'متجر الأناقة - أحدث صيحات الموضة',
  description: 'اكتشف مجموعة حصرية من الملابس العصرية للرجال والنساء مع أفضل الأحذية والحقائب',
   openGraph: {
    title: 'متجر الأناقة - أحدث صيحات الموضة',
  description: 'اكتشف مجموعة حصرية من الملابس العصرية للرجال والنساء مع أفضل الأحذية والحقائب',
      type: "website",
     
      url: "https://store-silk-three.vercel.app/",
      siteName: "مستشفى المجد",
      images:[{
        url:"https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=500",
        width: 1200,
          height: 630,}
      ]
    }
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}