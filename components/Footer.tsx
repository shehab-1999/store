import React from 'react'
import { Button } from './ui/button'
import { ShoppingBag } from 'lucide-react'

export default function Footer() {
  return (
          <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16 border-t border-gray-800 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <ShoppingBag className="w-8 h-8 text-blue-400 dark:text-blue-300" />
                <h3 className="text-2xl font-bold mr-2">متجر الأناقة</h3>
              </div>
              <p className="text-gray-400 dark:text-gray-500">
                وجهتك الأولى للموضة العصرية والأناقة المميزة
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-gray-400 dark:text-gray-500">
                <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition-colors">الرئيسية</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition-colors">المنتجات</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition-colors">العروض</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition-colors">اتصل بنا</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">خدمة العملاء</h4>
              <ul className="space-y-2 text-gray-400 dark:text-gray-500">
                <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition-colors">الدعم الفني</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition-colors">سياسة الإرجاع</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition-colors">الشحن والتوصيل</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition-colors">الأسئلة الشائعة</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">تابعنا</h4>
              <p className="text-gray-400 dark:text-gray-500 mb-4">
                احصل على آخر العروض والتحديثات
              </p>
              <div className="flex space-x-4 space-x-reverse">
                <Button size="sm" variant="outline" className="text-gray-400 dark:text-gray-500 border-gray-600 dark:border-gray-700 hover:text-white dark:hover:text-gray-200 hover:border-gray-400 dark:hover:border-gray-500">
                  فيسبوك
                </Button>
                <Button size="sm" variant="outline" className="text-gray-400 dark:text-gray-500 border-gray-600 dark:border-gray-700 hover:text-white dark:hover:text-gray-200 hover:border-gray-400 dark:hover:border-gray-500">
                  تويتر
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 text-center text-gray-400 dark:text-gray-500">
            <p>&copy; 2025 متجر الأناقة. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
  )
}
