"use client";

import { useState } from "react";
import { LayoutDashboard, Folder, ShoppingCart, User, ShoppingBag,ChartPie,ChevronRight,SquareUser,Users,IdCard,BookText,MessageCircle, } from "lucide-react";
import Image from "next/image";

const menu = [
  {
    title: "Dashboards",
    items: [
      { name: "Overview", icon: ChartPie , active: true, hasArrow:true },
      { name: "eCommerce", icon: ShoppingBag, hasArrow:true },
      { name: "Projects", icon: Folder,hasArrow:true },
    ],
  },
  {
    title: "Pages",
    items: [
      { name: "User Profile", icon: SquareUser,hasArrow:true  },
      { name: "Account", icon: IdCard,hasArrow:true  },
      { name: "Corporate", icon: Users ,hasArrow:true  },
      { name: "Blog", icon: BookText ,hasArrow:true  },
      { name: "Social", icon: MessageCircle ,hasArrow:true  },
    ],
  },
];
const userProfileDropdown = [
  "Overview",
  "Projects",
  "Campaigns",
  "Documents",
  "Followers",
];

export default function Sidebar() {
  const [isHovering, setIsHovering] = useState(false);
  const [active, setActive] = useState(null);
  const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);

  return (
    <aside className="w-64 bg-white border-r px-4 py-6">

      <div className="flex items-center gap-2 mb-4">
        <Image
          src="/profile.png"
          alt="Profile"
          width={28}
          height={28}
          className="rounded-full"
        />
        <span className="text-[14px] font-normal leading-[20px] text-black">
          ByeWind
        </span>
      </div>

      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          setActive(null);
        }}
        className={`mb-6 flex gap-2 transition-all duration-300 ease-in-out
          ${isHovering ? "flex-col items-start" : "flex-row items-center"}
        `}
      >
        <span
          onMouseEnter={() => setActive("favourites")}
          className={`text-[14px] text-black/40 px-3 py-1.5 cursor-pointer
            rounded-xl transition-all duration-200
            ${active === "favourites" ? "bg-gray-200 text-black/70" : ""}
          `}
        >
          Favourites
        </span>

        <span
          onMouseEnter={() => setActive("recently")}
          className={`text-[14px] text-black/40 px-3 py-1.5 cursor-pointer
            rounded-xl transition-all duration-200
            ${active === "recently" ? "bg-gray-200 text-black/70" : ""}
          `}
        >
          Recently
        </span>
      </div>
      <div>
  <ul className="space-y-2">
    <li className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
      <span className="text-[14px] font-normal leading-[20px] text-black">
        Overview
      </span>
    </li>

    <li className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
      <span className="text-[14px] font-normal leading-[20px] text-black">
        Projects
      </span>
    </li>
  </ul>
</div>

     
      {menu.map((section) => (
        <div key={section.title} className="mb-6 mt-6">
          <p className="text-xs text-black uppercase mb-2">
            {section.title}
          </p>

{section.items.map((item) => {
  const isUserProfile = item.name === "User Profile";

  return (
    <div key={item.name}>
    
      <div
        onClick={() =>
          isUserProfile && setIsUserProfileOpen((prev) => !prev)
        }
        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm cursor-pointer transition-colors
          ${
            item.active
              ? "bg-gray-100 text-black"
              : "text-black hover:bg-gray-50"
          }
        `}
      >
        
        {item.hasArrow && (
          <ChevronRight
            className={`h-4 w-4 text-gray-400 transition-transform duration-200
              ${
                isUserProfile && isUserProfileOpen
                  ? "rotate-90"
                  : ""
              }
            `}
          />
        )}
        
        <item.icon className="h-4 w-4" />

       
        <span>{item.name}</span>
      </div>

      {isUserProfile && isUserProfileOpen && (
        <div className="ml-9 mt-1 space-y-1">
          {userProfileDropdown.map((label) => (
            <div
              key={label}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md text-[14px] text-black cursor-pointer
                         hover:bg-gray-50 transition-colors"
            >
              <span />
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
})}


        </div>
      ))}
    </aside>
  );
}
