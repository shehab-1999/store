// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function main() {
//   // Create categories
//   const menClothing = await prisma.category.create({
//     data: {
//       name: 'men-clothing',
//       nameAr: 'ملابس رجالية',
//       icon: '👔',
//       color: 'bg-blue-500',
//     },
//   });

//   const womenClothing = await prisma.category.create({
//     data: {
//       name: 'women-clothing',
//       nameAr: 'ملابس نسائية',
//       icon: '👗',
//       color: 'bg-pink-500',
//     },
//   });

//   const shoes = await prisma.category.create({
//     data: {
//       name: 'shoes',
//       nameAr: 'أحذية',
//       icon: '👟',
//       color: 'bg-purple-500',
//     },
//   });

//   const bags = await prisma.category.create({
//     data: {
//       name: 'bags',
//       nameAr: 'حقائب',
//       icon: '👜',
//       color: 'bg-green-500',
//     },
//   });

//   // Create products
//   const products = [
//     // Men's Clothing
//     {
//       name: 'Classic White Shirt',
//       nameAr: 'قميص كلاسيكي أبيض',
//       description: 'قميص أبيض كلاسيكي مصنوع من القطن عالي الجودة',
//       price: 150,
//       discount: 10,
//       image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
//       rating: 4.5,
//       categoryId: menClothing.id,
//     },
//     {
//       name: 'Blue Jeans',
//       nameAr: 'بنطلون جينز أزرق',
//       description: 'بنطلون جينز أزرق عصري ومريح',
//       price: 200,
//       discount: 0,
//       image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400',
//       rating: 4.8,
//       categoryId: menClothing.id,
//     },
//     {
//       name: 'Winter Jacket',
//       nameAr: 'جاكيت شتوي أنيق',
//       description: 'جاكيت شتوي دافئ وأنيق للطقس البارد',
//       price: 350,
//       discount: 15,
//       image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
//       rating: 4.7,
//       categoryId: menClothing.id,
//     },
//     {
//       name: 'Black Cotton T-Shirt',
//       nameAr: 'تي شيرت قطني أسود',
//       description: 'تي شيرت قطني أسود مريح للاستخدام اليومي',
//       price: 80,
//       discount: 0,
//       image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400',
//       rating: 4.3,
//       categoryId: menClothing.id,
//     },

//     // Women's Clothing
//     {
//       name: 'Summer Dress',
//       nameAr: 'فستان صيفي أنيق',
//       description: 'فستان صيفي خفيف وأنيق للمناسبات',
//       price: 250,
//       discount: 20,
//       image: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=400',
//       rating: 4.9,
//       categoryId: womenClothing.id,
//     },
//     {
//       name: 'Silk Blouse',
//       nameAr: 'بلوزة حريرية',
//       description: 'بلوزة حريرية فاخرة ومريحة',
//       price: 180,
//       discount: 0,
//       image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
//       rating: 4.6,
//       categoryId: womenClothing.id,
//     },
//     {
//       name: 'Classic Skirt',
//       nameAr: 'تنورة كلاسيكية',
//       description: 'تنورة كلاسيكية أنيقة للعمل والمناسبات',
//       price: 120,
//       discount: 12,
//       image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=400',
//       rating: 4.4,
//       categoryId: womenClothing.id,
//     },
//     {
//       name: 'Winter Coat',
//       nameAr: 'معطف شتوي أنيق',
//       description: 'معطف شتوي دافئ وأنيق للسيدات',
//       price: 420,
//       discount: 25,
//       image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
//       rating: 4.8,
//       categoryId: womenClothing.id,
//     },

//     // Shoes
//     {
//       name: 'White Sneakers',
//       nameAr: 'حذاء رياضي أبيض',
//       description: 'حذاء رياضي أبيض مريح للاستخدام اليومي',
//       price: 300,
//       discount: 0,
//       image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
//       rating: 4.7,
//       categoryId: shoes.id,
//     },
//     {
//       name: 'Leather Shoes',
//       nameAr: 'حذاء كلاسيكي جلد',
//       description: 'حذاء جلدي كلاسيكي للمناسبات الرسمية',
//       price: 450,
//       discount: 18,
//       image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400',
//       rating: 4.9,
//       categoryId: shoes.id,
//     },
//     {
//       name: 'Summer Sandals',
//       nameAr: 'صندل صيفي نسائي',
//       description: 'صندل صيفي مريح وأنيق للسيدات',
//       price: 180,
//       discount: 0,
//       image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
//       rating: 4.5,
//       categoryId: shoes.id,
//     },
//     {
//       name: 'Formal Black Shoes',
//       nameAr: 'حذاء رسمي أسود',
//       description: 'حذاء رسمي أسود للمناسبات الرسمية',
//       price: 380,
//       discount: 15,
//       image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400',
//       rating: 4.6,
//       categoryId: shoes.id,
//     },

//     // Bags
//     {
//       name: 'Classic Handbag',
//       nameAr: 'حقيبة يد كلاسيكية',
//       description: 'حقيبة يد كلاسيكية أنيقة للاستخدام اليومي',
//       price: 280,
//       discount: 0,
//       image: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=400',
//       rating: 4.8,
//       categoryId: bags.id,
//     },
//     {
//       name: 'Practical Backpack',
//       nameAr: 'حقيبة ظهر عملية',
//       description: 'حقيبة ظهر عملية ومريحة للاستخدام اليومي',
//       price: 220,
//       discount: 22,
//       image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=400',
//       rating: 4.7,
//       categoryId: bags.id,
//     },
//     {
//       name: 'Large Travel Bag',
//       nameAr: 'حقيبة سفر كبيرة',
//       description: 'حقيبة سفر كبيرة وعملية للرحلات الطويلة',
//       price: 520,
//       discount: 30,
//       image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
//       rating: 4.9,
//       categoryId: bags.id,
//     },
//     {
//       name: 'Luxury Leather Wallet',
//       nameAr: 'محفظة جلدية فاخرة',
//       description: 'محفظة جلدية فاخرة وعملية',
//       price: 150,
//       discount: 0,
//       image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
//       rating: 4.4,
//       categoryId: bags.id,
//     },
//   ];

//   for (const product of products) {
//     await prisma.product.create({
//       data: product,
//     });
//   }

//   console.log('Database seeded successfully!');
// }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });