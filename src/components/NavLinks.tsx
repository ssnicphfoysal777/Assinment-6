export const instance =false
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({
    href,
     children
    }:{
        href:string,
        children:React.ReactNode
    }) => {
        const pathName= usePathname()
        const isActive=href==='/'?pathName==='/':pathName.startsWith(href);
    return( <Link href={href} className={`${isActive ? "text-primary" : ""} font-medium`}>
        {children}
        </Link>
        );
};

export default NavLinks;