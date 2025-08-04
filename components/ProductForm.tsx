'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  nameAr: string;
  icon: string;
  color: string;
}

interface Product {
  id?: string;
  name: string;
  nameAr: string;
  description?: string;
  price: number;
  discount: number;
  image: string;
  categoryId: string;
  rating: number;
  inStock: boolean;
}

interface ProductFormProps {
  product?: Product;
  categories: Category[];
  onSubmit: (product: Omit<Product, 'id'>) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

export default function ProductForm({ 
  product, 
  categories, 
  onSubmit, 
  onCancel, 
  isLoading = false 
}: ProductFormProps) {
  const [formData, setFormData] = useState<Omit<Product, 'id'>>({
    name: product?.name || '',
    nameAr: product?.nameAr || '',
    description: product?.description || '',
    price: product?.price || 0,
    discount: product?.discount || 0,
    image: product?.image || '',
    categoryId: product?.categoryId || '',
    rating: product?.rating || 0,
    inStock: product?.inStock ?? true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl font-bold">
            {product ? 'تعديل المنتج' : 'إضافة منتج جديد'}
          </CardTitle>
          <Button variant="ghost" size="icon" onClick={onCancel}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="nameAr">الاسم بالعربية</Label>
                <Input
                  id="nameAr"
                  name="nameAr"
                  value={formData.nameAr}
                  onChange={handleChange}
                  required
                  dir="rtl"
                />
              </div>
              <div>
                <Label htmlFor="name">الاسم بالإنجليزية</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="description">الوصف</Label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                rows={3}
                dir="rtl"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="price">السعر (ريال)</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  step="0.01"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="discount">الخصم (%)</Label>
                <Input
                  id="discount"
                  name="discount"
                  type="number"
                  min="0"
                  max="100"
                  value={formData.discount}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="rating">التقييم</Label>
                <Input
                  id="rating"
                  name="rating"
                  type="number"
                  min="0"
                  max="5"
                  step="0.1"
                  value={formData.rating}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="image">رابط الصورة</Label>
              <Input
                id="image"
                name="image"
                type="url"
                value={formData.image}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="categoryId">الفئة</Label>
              <select
                id="categoryId"
                name="categoryId"
                value={formData.categoryId}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">اختر الفئة</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.nameAr}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-2 space-x-reverse">
              <input
                id="inStock"
                name="inStock"
                type="checkbox"
                checked={formData.inStock}
                onChange={handleChange}
                className="rounded"
              />
              <Label htmlFor="inStock">متوفر في المخزون</Label>
            </div>

            {formData.image && (
              <div>
                <Label>معاينة الصورة</Label>
                <img
                  src={formData.image}
                  alt="معاينة"
                  className="w-32 h-32 object-cover rounded-md border"
                />
              </div>
            )}

            <div className="flex gap-2 pt-4">
              <Button type="submit" disabled={isLoading} className="flex-1">
                {isLoading ? 'جاري الحفظ...' : (product ? 'تحديث' : 'إضافة')}
              </Button>
              <Button type="button" variant="outline" onClick={onCancel}>
                إلغاء
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}