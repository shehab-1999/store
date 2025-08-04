import React from 'react'
import { Button } from './ui/button'
import { ShoppingBag } from 'lucide-react'

export default function Hero() {
  return (
          <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 dark:from-blue-950 dark:via-purple-950 dark:to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            اكتشف أحدث صيحات
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-yellow-300 dark:to-orange-400 bg-clip-text text-transparent">
              الموضة والأناقة
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 dark:text-gray-300 max-w-3xl mx-auto">
            مجموعة حصرية من الملابس العصرية للرجال والنساء مع أفضل الأحذية
            والحقائب
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 dark:from-yellow-400 dark:to-orange-500 dark:hover:from-yellow-500 dark:hover:to-orange-600 text-white px-8 py-3 text-lg rounded-full"
          >
            تسوق الآن
            <ShoppingBag className="w-5 h-5 mr-2" />
          </Button>
        </div>
      </section>
  )
}
