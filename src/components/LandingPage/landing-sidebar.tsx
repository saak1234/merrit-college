import { useState } from "react";
import { X, Menu } from "lucide-react"; 
import Image from "next/image";
import Link from "next/link"
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const menuItems = [
    { name: "International Students", href: "/others/international-students" },
    { name: "Tech-School", href: "/menu/tech-school" },
    { name: "Student Life", href: "/menu/student-life" },
    { name: "SAT Prep", href: "/others/sat-prep" },
    { name: "Vocational Courses", href: "/others/vocational-courses" },
    { name: "Admission", href: "/others/admission" },
  ];

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="p-4 z-50">
        <Menu className="w-6 h-6" />
      </button>

      <div
        className={`fixed top-0 right-0 w-100 h-full bg-white text-black p-6 z-50 transition-all duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Image
            src="/logo-2.webp"
            alt="Merit College Logo"
            width={300}
            height={300}
            priority
          />
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <ul className="space-y-4 mt-6">
          {menuItems.map((item) => (
            <li key={item.name} className="">
              <a
                href={item.href}
                className="text-black hover:bg-gray-200 rounded-md px-4 py-2 block"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="absolute bottom-8 left-0 right-0 px-6">
          <Link
            href="/admin-panel"
            className="block w-full text-center py-3 px-6 bg-white border-2 border-black rounded-lg 
            hover:bg-gray-100 transition-all duration-300 ease-in-out 
            shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none 
            hover:translate-x-[3px] hover:translate-y-[3px]"
          >
            Go to Admin Panel
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default Sidebar;
