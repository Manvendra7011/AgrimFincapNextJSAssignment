"use client";

import { Bell, Search, Sun,PanelRight, Star,History   } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-16 bg-white border-b">
      <div className="h-full px-6 flex items-center justify-between">
        

        <div className="flex items-center gap-2">

  <div className="p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-colors">
    <PanelRight className="h-4 w-4 text-black" />
  </div>

  
  <div className="p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-colors">
    <Star className="h-4 w-4 text-black" />
  </div>


  <div className="px-3 py-1.5 rounded-full cursor-pointer hover:bg-gray-100 transition-colors">
    <span className="text-sm text-gray-500">Dashboards</span>
  </div>


  <span className="text-sm text-gray-400">/</span>


  <div className="px-3 py-1.5 rounded-full cursor-pointer hover:bg-gray-100 transition-colors">
    <span className="text-sm text-black">Default</span>
  </div>
</div>

<div className="flex items-center gap-2">
  

  <div className="relative">
    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
    <input
      type="text"
      placeholder="Search"
       className="
      w-64
      pl-10 pr-4 py-2
      text-sm text-gray-900
      placeholder-gray-400
      bg-gray-100
      rounded-full
      outline-none
      transition
      focus:ring-2 focus:ring-blue-500
    "
    />
  </div>


  <div className="p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-colors">
    <Sun className="h-4 w-4 text-black" />
  </div>


  <div className="p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-colors">
    <History className="h-4 w-4 text-black" />
  </div>


  <div className="p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-colors">
    <Bell className="h-4 w-4 text-black" />
  </div>

 
  <div className="p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-colors">
    <PanelRight className="h-4 w-4 text-black" />
  </div>
</div>

      </div>
    </header>
  );
}
