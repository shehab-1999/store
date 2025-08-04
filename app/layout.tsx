import './globals.css';
import type { Metadata } from 'next';

import { ThemeProvider } from '@/components/theme-provider';



export const metadata: Metadata = {
  title: 'متجر الأناقة - أحدث صيحات الموضة',
  description: 'اكتشف مجموعة حصرية من الملابس العصرية للرجال والنساء مع أفضل الأحذية والحقائب',
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