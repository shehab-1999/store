import React, { useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
interface HeaderType {
  setSearchTerm: (searchTerm: string) => void;
  searchTerm: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (mobileMenuOpen: boolean) => void;
}
function Header({
  setMobileMenuOpen,
  setSearchTerm,
  searchTerm,
  mobileMenuOpen,
}: HeaderType) {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900/20 sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <ShoppingBag className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="hidden md:block mr-4">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                متجر الأناقة
              </h1>
            </div>
          </div>

          <div className="hidden md:block flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
              <Input
                type="text"
                placeholder="ابحث عن المنتجات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10 rounded-full border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
            >
              تسجيل الدخول
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600">
              <ShoppingBag className="w-4 h-4 ml-1" />
              السلة (0)
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="px-4 py-4 space-y-4">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
              <Input
                type="text"
                placeholder="ابحث عن المنتجات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10 rounded-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
              />
            </div>
            <div className="flex space-x-4 space-x-reverse items-center">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                className="flex-1 text-gray-700 dark:text-gray-300"
              >
                تسجيل الدخول
              </Button>
              <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500">
                السلة (0)
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
