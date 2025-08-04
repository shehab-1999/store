'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Star, Edit, Trash2, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

interface Product {
  
  name: string;

  price: number;
  originalPrice:number;
  reviews:number;

  image: string;
  rating: number;


}
interface ProductCardProps {
  product: Product;
  isAdmin?: boolean;
  onEdit?: (product: Product) => void;
  onDelete?: (id: string) => void;
}

export default function ProductCard({ product }: ProductCardProps) {






  return (
        <div
      className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/20 overflow-hidden hover:shadow-2xl dark:hover:shadow-gray-900/40 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100 dark:border-gray-700"
      
    >
      
        <Badge className="absolute top-4 left-4 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          جديد
        </Badge>
      
      <div className="absolute top-4 right-4 z-10">
        <Button
          size="sm"
          variant="ghost"
          className="rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 hover:text-red-500 transition-colors"
        >
          <Heart className="w-4 h-4" />
        </Button>
      </div>

      <div className="relative overflow-hidden">
        <Image
        height="500"
        width={'700'}
        loading='lazy'
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 dark:from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600 dark:text-gray-300 ml-1">
              {product.rating}
            </span>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 mr-2">
            ({product.reviews} تقييم)
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 space-x-reverse">
            <span className="text-2xl font-bold text-blue-600">
              {product.price} ر.س
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                {product.originalPrice} ر.س
              </span>
            )}
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white rounded-full px-6">
            <ShoppingBag className="w-4 h-4 ml-2" />
            إضافة
          </Button>
        </div>
      </div>
    </div>
  );
}