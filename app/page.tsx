


import {
  ShoppingBag,
  Heart,
  Star,
  Filter,
  Search,
  Menu,
  X,
  Plus,
  Minus,
  Share2,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


import dynamic from "next/dynamic";
import { Metadata } from "next";

// بيانات المنتجات الوهمية
const products = [
  {
    id: 1,
    name: "قميص رجالي كلاسيكي",
    category: "men",
    price: 299,
    originalPrice: 399,
    image:
      "https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=500",
    ],
    rating: 4.5,
    reviews: 124,
    isNew: true,
    description:
      "قميص رجالي كلاسيكي مصنوع من القطن الخالص، مريح وأنيق للاستخدام اليومي والمناسبات الرسمية.",
    features: [
      "قطن 100%",
      "مقاوم للتجاعيد",
      "قابل للغسل في الغسالة",
      "متوفر بألوان متعددة",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["أبيض", "أزرق", "أسود", "رمادي"],
    inStock: true,
    stockCount: 15,
  },
  {
    id: 2,
    name: "فستان نسائي أنيق",
    category: "women",
    price: 450,
    originalPrice: 550,
    image:
      "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=500",
    ],
    rating: 4.8,
    reviews: 89,
    isNew: false,
    description:
      "فستان نسائي أنيق مناسب للمناسبات الخاصة والحفلات، مصمم بعناية فائقة ليبرز جمالك الطبيعي.",
    features: ["تصميم عصري", "خامة فاخرة", "مناسب للمناسبات", "قصة مريحة"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["أسود", "أحمر", "أزرق داكن", "وردي"],
    inStock: true,
    stockCount: 8,
  },
  {
    id: 3,
    name: "حذاء رياضي عصري",
    category: "shoes",
    price: 380,
    originalPrice: 480,
    image:
      "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=500",
    ],
    rating: 4.6,
    reviews: 156,
    isNew: true,
    description:
      "حذاء رياضي عصري مصمم للراحة والأداء العالي، مثالي للرياضة والاستخدام اليومي.",
    features: ["نعل مريح", "تهوية ممتازة", "مقاوم للماء", "تصميم عصري"],
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    colors: ["أبيض", "أسود", "رمادي", "أزرق"],
    inStock: true,
    stockCount: 12,
  },
  {
    id: 4,
    name: "حقيبة يد نسائية",
    category: "bags",
    price: 220,
    originalPrice: 290,
    image:
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=500",
    ],
    rating: 4.4,
    reviews: 67,
    isNew: false,
    description:
      "حقيبة يد نسائية أنيقة مصنوعة من الجلد الطبيعي، عملية وجميلة لجميع المناسبات.",
    features: ["جلد طبيعي", "تصميم عملي", "متعددة الجيوب", "حزام قابل للتعديل"],
    sizes: ["صغير", "متوسط", "كبير"],
    colors: ["بني", "أسود", "بيج", "أحمر"],
    inStock: true,
    stockCount: 6,
  },
  {
    id: 5,
    name: "بنطلون جينز رجالي",
    category: "men",
    price: 320,
    originalPrice: 420,
    image:
      "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=500",
    ],
    rating: 4.3,
    reviews: 98,
    isNew: false,
    description:
      "بنطلون جينز رجالي كلاسيكي بقصة مريحة، مصنوع من الدنيم عالي الجودة.",
    features: [
      "دنيم عالي الجودة",
      "قصة مريحة",
      "متين وطويل الأمد",
      "سهل العناية",
    ],
    sizes: ["30", "32", "34", "36", "38", "40"],
    colors: ["أزرق فاتح", "أزرق داكن", "أسود", "رمادي"],
    inStock: true,
    stockCount: 20,
  },
  {
    id: 6,
    name: "بلوزة نسائية مطرزة",
    category: "women",
    price: 280,
    originalPrice: 350,
    image:
      "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=500",
    ],
    rating: 4.7,
    reviews: 112,
    isNew: true,
    description:
      "بلوزة نسائية مطرزة بتفاصيل جميلة، مثالية للإطلالات الكاجوال والرسمية.",
    features: ["تطريز يدوي", "خامة ناعمة", "تصميم فريد", "مريحة للارتداء"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["أبيض", "كريمي", "وردي فاتح", "أزرق فاتح"],
    inStock: true,
    stockCount: 10,
  },
  {
    id: 7,
    name: "حذاء رسمي جلدي",
    category: "shoes",
    price: 520,
    originalPrice: 650,
    image:
      "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=500",
    ],
    rating: 4.9,
    reviews: 203,
    isNew: false,
    description:
      "حذاء رسمي جلدي فاخر مصنوع من أجود أنواع الجلد، مثالي للمناسبات الرسمية والعمل.",
    features: ["جلد طبيعي فاخر", "تصميم كلاسيكي", "مريح للقدم", "صناعة يدوية"],
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    colors: ["أسود", "بني", "بني داكن"],
    inStock: true,
    stockCount: 5,
  },
  {
    id: 8,
    name: "حقيبة ظهر رياضية",
    category: "bags",
    price: 180,
    originalPrice: 230,
    image:
      "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=500",
    ],
    rating: 4.2,
    reviews: 45,
    isNew: true,
    description:
      "حقيبة ظهر رياضية عملية ومتينة، مثالية للرياضة والسفر والاستخدام اليومي.",
    features: ["مقاومة للماء", "متعددة الجيوب", "حمالات مريحة", "خامة متينة"],
    sizes: ["صغير", "متوسط", "كبير"],
    colors: ["أسود", "أزرق", "رمادي", "أخضر"],
    inStock: true,
    stockCount: 18,
  },
];

const categories = [
  { id: "all", name: "جميع المنتجات", count: products.length },
  {
    id: "men",
    name: "ملابس رجالية",
    count: products.filter((p) => p.category === "men").length,
  },
  {
    id: "women",
    name: "ملابس نسائية",
    count: products.filter((p) => p.category === "women").length,
  },
  {
    id: "shoes",
    name: "أحذية",
    count: products.filter((p) => p.category === "shoes").length,
  },
  {
    id: "bags",
    name: "شنط وحقائب",
    count: products.filter((p) => p.category === "bags").length,
  },
];
const ProductCard = dynamic(() => import('@/components/ProductCard'), { 
  ssr: false,
  loading: () => <div>جار تحميل المنتج...</div>,
});

const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
const Hero = dynamic(() => import('@/components/Hero'));
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
export default function Home() {

  // const [selectedProduct, setSelectedProduct] = useState(null);
  // const [selectedSize, setSelectedSize] = useState("");
  // const [selectedColor, setSelectedColor] = useState("");
  // const [quantity, setQuantity] = useState(1);


  // const filteredProducts = products.filter((product) => {
  //   const matchesCategory =
  //     selectedCategory === "all" || product.category === selectedCategory;
  //   const matchesSearch = product.name
  //     .toLowerCase()
  //     .includes(searchTerm.toLowerCase());
  //   return matchesCategory && matchesSearch;
  // });

  // const openProductModal = (product) => {
  //   setSelectedProduct(product);
  //   setSelectedSize(product.sizes[0]);
  //   setSelectedColor(product.colors[0]);
  //   setQuantity(1);
  //   setSelectedImageIndex(0);
  // };

  // const closeProductModal = () => {
  //   setSelectedProduct(null);
  // };

  // const ProductCard = ({ product }) => (
  //   <div
  //     className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/20 overflow-hidden hover:shadow-2xl dark:hover:shadow-gray-900/40 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100 dark:border-gray-700"
      
  //   >
  //     {product.isNew && (
  //       <Badge className="absolute top-4 left-4 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white">
  //         جديد
  //       </Badge>
  //     )}
  //     <div className="absolute top-4 right-4 z-10">
  //       <Button
  //         size="sm"
  //         variant="ghost"
  //         className="rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 hover:text-red-500 transition-colors"
  //       >
  //         <Heart className="w-4 h-4" />
  //       </Button>
  //     </div>

  //     <div className="relative overflow-hidden">
  //       <img
  //         src={product.image}
  //         alt={product.name}
  //         className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
  //       />
  //       <div className="absolute inset-0 bg-gradient-to-t from-black/20 dark:from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  //     </div>

  //     <div className="p-6">
  //       <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
  //         {product.name}
  //       </h3>

  //       <div className="flex items-center mb-3">
  //         <div className="flex items-center">
  //           <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
  //           <span className="text-sm text-gray-600 dark:text-gray-300 ml-1">
  //             {product.rating}
  //           </span>
  //         </div>
  //         <span className="text-xs text-gray-500 dark:text-gray-400 mr-2">
  //           ({product.reviews} تقييم)
  //         </span>
  //       </div>

  //       <div className="flex items-center justify-between">
  //         <div className="flex items-center space-x-2 space-x-reverse">
  //           <span className="text-2xl font-bold text-blue-600">
  //             {product.price} ر.س
  //           </span>
  //           {product.originalPrice && (
  //             <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
  //               {product.originalPrice} ر.س
  //             </span>
  //           )}
  //         </div>
  //         <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white rounded-full px-6">
  //           <ShoppingBag className="w-4 h-4 ml-2" />
  //           إضافة
  //         </Button>
  //       </div>
  //     </div>
  //   </div>
  // );

  // const ProductModal = () => {
  //   if (!selectedProduct) return null;

  //   return (
  //     <Dialog open={!!selectedProduct} onOpenChange={closeProductModal}>
  //       <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
  //         <DialogHeader>
  //           <DialogTitle className="text-2xl font-bold text-right">
  //             {selectedProduct.name}
  //           </DialogTitle>
  //         </DialogHeader>

  //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  //           {/* Product Images */}
  //           <div className="space-y-4">
  //             <div className="relative">
  //               <img
  //                 src={selectedProduct.images[selectedImageIndex]}
  //                 alt={selectedProduct.name}
  //                 className="w-full h-96 object-cover rounded-lg"
  //               />
  //               {selectedProduct.isNew && (
  //                 <Badge className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">
  //                   جديد
  //                 </Badge>
  //               )}
  //             </div>

  //             <div className="flex space-x-2 space-x-reverse">
  //               {selectedProduct.images.map((image, index) => (
  //                 <button
  //                   key={index}
  //                   onClick={() => setSelectedImageIndex(index)}
  //                   className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
  //                     selectedImageIndex === index
  //                       ? "border-blue-500"
  //                       : "border-gray-200"
  //                   }`}
  //                 >
  //                   <img
  //                     src={image}
  //                     alt={`${selectedProduct.name} ${index + 1}`}
  //                     className="w-full h-full object-cover"
  //                   />
  //                 </button>
  //               ))}
  //             </div>
  //           </div>

  //           {/* Product Details */}
  //           <div className="space-y-6">
  //             <div>
  //               <div className="flex items-center mb-2">
  //                 <div className="flex items-center">
  //                   <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
  //                   <span className="text-lg font-semibold ml-1">
  //                     {selectedProduct.rating}
  //                   </span>
  //                 </div>
  //                 <span className="text-gray-500 mr-2">
  //                   ({selectedProduct.reviews} تقييم)
  //                 </span>
  //               </div>

  //               <div className="flex items-center space-x-4 space-x-reverse mb-4">
  //                 <span className="text-3xl font-bold text-blue-600">
  //                   {selectedProduct.price} ر.س
  //                 </span>
  //                 {selectedProduct.originalPrice && (
  //                   <span className="text-xl text-gray-500 line-through">
  //                     {selectedProduct.originalPrice} ر.س
  //                   </span>
  //                 )}
  //                 {selectedProduct.originalPrice && (
  //                   <Badge
  //                     variant="destructive"
  //                     className="bg-red-100 text-red-600"
  //                   >
  //                     خصم{" "}
  //                     {Math.round(
  //                       ((selectedProduct.originalPrice -
  //                         selectedProduct.price) /
  //                         selectedProduct.originalPrice) *
  //                         100
  //                     )}
  //                     %
  //                   </Badge>
  //                 )}
  //               </div>
  //             </div>

  //             <div>
  //               <h3 className="text-lg font-semibold mb-2">الوصف</h3>
  //               <p className="text-gray-600 leading-relaxed">
  //                 {selectedProduct.description}
  //               </p>
  //             </div>

  //             {/* Size Selection */}
  //             <div>
  //               <h3 className="text-lg font-semibold mb-3">الحجم</h3>
  //               <div className="flex flex-wrap gap-2">
  //                 {selectedProduct.sizes.map((size) => (
  //                   <button
  //                     key={size}
  //                     onClick={() => setSelectedSize(size)}
  //                     className={`px-4 py-2 border rounded-lg transition-colors ${
  //                       selectedSize === size
  //                         ? "border-blue-500 bg-blue-50 text-blue-600"
  //                         : "border-gray-300 hover:border-gray-400"
  //                     }`}
  //                   >
  //                     {size}
  //                   </button>
  //                 ))}
  //               </div>
  //             </div>

  //             {/* Color Selection */}
  //             <div>
  //               <h3 className="text-lg font-semibold mb-3">اللون</h3>
  //               <div className="flex flex-wrap gap-2">
  //                 {selectedProduct.colors.map((color) => (
  //                   <button
  //                     key={color}
  //                     onClick={() => setSelectedColor(color)}
  //                     className={`px-4 py-2 border rounded-lg transition-colors ${
  //                       selectedColor === color
  //                         ? "border-blue-500 bg-blue-50 text-blue-600"
  //                         : "border-gray-300 hover:border-gray-400"
  //                     }`}
  //                   >
  //                     {color}
  //                   </button>
  //                 ))}
  //               </div>
  //             </div>

  //             {/* Quantity */}
  //             <div>
  //               <h3 className="text-lg font-semibold mb-3">الكمية</h3>
  //               <div className="flex items-center space-x-4 space-x-reverse">
  //                 <div className="flex items-center border rounded-lg">
  //                   <button
  //                     onClick={() => setQuantity(Math.max(1, quantity - 1))}
  //                     className="p-2 hover:bg-gray-100 transition-colors"
  //                   >
  //                     <Minus className="w-4 h-4" />
  //                   </button>
  //                   <span className="px-4 py-2 font-semibold">{quantity}</span>
  //                   <button
  //                     onClick={() =>
  //                       setQuantity(
  //                         Math.min(selectedProduct.stockCount, quantity + 1)
  //                       )
  //                     }
  //                     className="p-2 hover:bg-gray-100 transition-colors"
  //                   >
  //                     <Plus className="w-4 h-4" />
  //                   </button>
  //                 </div>
  //                 <span className="text-sm text-gray-500">
  //                   متوفر {selectedProduct.stockCount} قطعة
  //                 </span>
  //               </div>
  //             </div>

  //             {/* Action Buttons */}
  //             <div className="space-y-3">
  //               <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg">
  //                 <ShoppingBag className="w-5 h-5 ml-2" />
  //                 إضافة إلى السلة - {selectedProduct.price * quantity} ر.س
  //               </Button>

  //               <div className="flex space-x-3 space-x-reverse">
  //                 <Button variant="outline" className="flex-1">
  //                   <Heart className="w-4 h-4 ml-2" />
  //                   إضافة للمفضلة
  //                 </Button>
  //                 <Button variant="outline" className="flex-1">
  //                   <Share2 className="w-4 h-4 ml-2" />
  //                   مشاركة
  //                 </Button>
  //               </div>
  //             </div>

  //             {/* Features and Services */}
  //             <Tabs defaultValue="features" className="w-full">
  //               <TabsList className="grid w-full grid-cols-3">
  //                 <TabsTrigger value="features">المميزات</TabsTrigger>
  //                 <TabsTrigger value="shipping">الشحن</TabsTrigger>
  //                 <TabsTrigger value="returns">الإرجاع</TabsTrigger>
  //               </TabsList>

  //               <TabsContent value="features" className="space-y-2">
  //                 {selectedProduct.features.map((feature, index) => (
  //                   <div key={index} className="flex items-center">
  //                     <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>
  //                     <span className="text-gray-600">{feature}</span>
  //                   </div>
  //                 ))}
  //               </TabsContent>

  //               <TabsContent value="shipping" className="space-y-3">
  //                 <div className="flex items-center">
  //                   <Truck className="w-5 h-5 text-green-600 ml-2" />
  //                   <span className="text-gray-600">
  //                     شحن مجاني للطلبات أكثر من 200 ر.س
  //                   </span>
  //                 </div>
  //                 <div className="flex items-center">
  //                   <Shield className="w-5 h-5 text-blue-600 ml-2" />
  //                   <span className="text-gray-600">توصيل آمن ومضمون</span>
  //                 </div>
  //                 <div className="flex items-center">
  //                   <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center ml-2">
  //                     <span className="text-white text-xs font-bold">24</span>
  //                   </div>
  //                   <span className="text-gray-600">توصيل خلال 24-48 ساعة</span>
  //                 </div>
  //               </TabsContent>

  //               <TabsContent value="returns" className="space-y-3">
  //                 <div className="flex items-center">
  //                   <RotateCcw className="w-5 h-5 text-green-600 ml-2" />
  //                   <span className="text-gray-600">
  //                     إرجاع مجاني خلال 30 يوم
  //                   </span>
  //                 </div>
  //                 <div className="flex items-center">
  //                   <Shield className="w-5 h-5 text-blue-600 ml-2" />
  //                   <span className="text-gray-600">ضمان جودة المنتج</span>
  //                 </div>
  //                 <div className="flex items-center">
  //                   <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center ml-2">
  //                     <span className="text-white text-xs">✓</span>
  //                   </div>
  //                   <span className="text-gray-600">استرداد كامل للمبلغ</span>
  //                 </div>
  //               </TabsContent>
  //             </Tabs>
  //           </div>
  //         </div>
  //       </DialogContent>
  //     </Dialog>
  //   );
  // };
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      {/* <Header
        searchTerm={searchTerm}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        setSearchTerm={setSearchTerm}
      /> */}

      <Hero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories Filter */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/20 p-6 mb-12 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center mb-6">
            <Filter className="w-6 h-6 text-blue-600 dark:text-blue-400 ml-2" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              فئات المنتجات
            </h2>
          </div>

          {/* <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full px-6 py-3 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white shadow-lg"
                    : "hover:bg-blue-50 dark:hover:bg-gray-700 hover:border-blue-300 dark:hover:border-blue-500 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600"
                }`}
              >
                {category.name}
                <Badge
                  variant="secondary"
                  className="mr-2 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300"
                >
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div> */}
        </div>

        {/* Products Grid */}
        {/* <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {categories.find((cat) => cat.id === selectedCategory)?.name ||
              "جميع المنتجات"}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {filteredProducts.length} منتج متاح
          </p>
        </div> */}

        {/* {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400 dark:text-gray-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              لا توجد منتجات
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              جرب البحث بكلمات أخرى أو تصفح فئة مختلفة
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )} */}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
