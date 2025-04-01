import React from 'react';
import { Bell, Search, User } from 'lucide-react';

const TopBar = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between h-16 px-6">
        <div className="flex items-center flex-1">
          <div className="max-w-lg w-full">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Search className="h-5 w-5 text-gray-400" />
              </span>
              <input
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                type="search"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-600 hover:text-gray-900">
            <Bell className="h-6 w-6" />
            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              3
            </span>
          </button>
          <div className="border-l pl-4 border-gray-300">
            <button className="flex items-center space-x-3">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-200">
                <User className="h-5 w-5 text-gray-500" />
              </div>
              <span className="font-medium text-gray-900">Admin User</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;