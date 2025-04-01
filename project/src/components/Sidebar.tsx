import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart,
  Settings,
  LogOut 
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { path: '/', icon: LayoutDashboard, name: 'Dashboard' },
    { path: '/products', icon: Package, name: 'Products' },
    { path: '/orders', icon: ShoppingCart, name: 'Orders' },
    { path: '/customers', icon: Users, name: 'Customers' },
    { path: '/analytics', icon: BarChart, name: 'Analytics' },
  ];

  return (
    <div className="flex flex-col w-64 bg-gray-900">
      <div className="flex items-center justify-center h-20 shadow-md">
        <h1 className="text-3xl font-bold text-white">Admin</h1>
      </div>
      <div className="flex flex-col flex-1">
        <nav className="flex-1 px-2 py-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-gray-400 hover:bg-gray-800 hover:text-white rounded-lg transition-colors ${
                  isActive ? 'bg-gray-800 text-white' : ''
                }`
              }
            >
              <item.icon className="h-6 w-6" />
              <span className="mx-4 font-medium">{item.name}</span>
            </NavLink>
          ))}
        </nav>
        <div className="flex flex-col border-t border-gray-800 p-4">
          <button className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-800 hover:text-white rounded-lg transition-colors">
            <Settings className="h-6 w-6" />
            <span className="mx-4 font-medium">Settings</span>
          </button>
          <button className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-800 hover:text-white rounded-lg transition-colors">
            <LogOut className="h-6 w-6" />
            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;