"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "work",
        path: "/work"
    },
    {
        name: "contact",
        path: "/contact"
    },
];


export default function Nav(){
      return (
    <nav>
        {links.map((link, index) => {
            return (
            <Link href={link.path} key={index}>
                {link.name}
            </Link>
            );
        })}
    </nav>
  );
};

// export default Nav;