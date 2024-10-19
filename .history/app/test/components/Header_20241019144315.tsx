// // 'use client';

// // import { useState, useEffect } from 'react';
// // import { Button } from '@/components/ui/button';
// // import {
// //   NavigationMenu,
// //   NavigationMenuItem,
// //   NavigationMenuLink,
// //   NavigationMenuList,
// // } from '@/components/ui/navigation-menu';
// // import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
// // import Link from 'next/link';
// // import { usePathname } from 'next/navigation'; // Ensure you're using next/navigation for the App Router
// // import MobileNav from './MobileNav';
// // import { cn } from '@/lib/utils';

// // const Header: React.FC = () => {
// //   const [mounted, setMounted] = useState(false);
// //   const pathname = usePathname();

// //   // Ensure the component is mounted on the client side
// //   useEffect(() => {
// //     setMounted(true);
// //   }, []);

// //   return (
// //     <nav className="w-screen h-16 lg:m-auto flex justify-center items-center font-roboto">
// //       <div className="sm:hidden">
// //         <MobileNav />
// //       </div>

// //       <div className="hidden md:flex justify-center items-center">
// //         <NavigationMenu>
// //           <NavigationMenuList>
// //             <NavigationMenuItem>
// //               <Link href="/" legacyBehavior passHref>
// //                 <NavigationMenuLink className={navigationMenuTriggerStyle()}>
// //                   Home
// //                 </NavigationMenuLink>
// //               </Link>
// //             </NavigationMenuItem>
// //             <NavigationMenuItem>
// //               <Link href="/about" legacyBehavior passHref>
// //                 <NavigationMenuLink
// //                   className={cn(
// //                     navigationMenuTriggerStyle(),
// //                     mounted &&
// //                       pathname === '/about' &&
// //                       '!bg-blue-500 !text-white'
// //                   )}
// //                 >
// //                   About
// //                 </NavigationMenuLink>
// //               </Link>
// //             </NavigationMenuItem>
// //             <NavigationMenuItem>
// //               <Link href="/services" legacyBehavior passHref>
// //                 <NavigationMenuLink
// //                   className={cn(
// //                     navigationMenuTriggerStyle(),
// //                     mounted &&
// //                       pathname === '/services' &&
// //                       '!bg-red-500 !text-white'
// //                   )}
// //                 >
// //                   Services
// //                 </NavigationMenuLink>
// //               </Link>
// //             </NavigationMenuItem>
// //             <NavigationMenuItem>
// //               <Link href="/contact" legacyBehavior passHref>
// //                 <NavigationMenuLink
// //                   className={cn(
// //                     navigationMenuTriggerStyle(),
// //                     mounted &&
// //                       pathname === '/contact' &&
// //                       '!bg-blue-500 !text-white'
// //                   )}
// //                 >
// //                   Contact
// //                 </NavigationMenuLink>
// //               </Link>
// //             </NavigationMenuItem>
// //           </NavigationMenuList>
// //           <Button className="px-2 py-1 text-xs" variant={'outline'}>
// //             Signin
// //           </Button>
// //           <Button className="ml-4 px-2 py-1 text-xs hover:bg-slate-300 hover:text-black">
// //             Sign Up
// //           </Button>
// //         </NavigationMenu>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Header;

// import Link from 'next/link';
// import { Button } from '@/components/ui/button';

// interface HeaderProps {}

// const Header: React.FC<HeaderProps> = () => {
//   return (
//     <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
//       <div className="w-full max-w-7xl mx-auto px-4">
//         <div className="flex justify-between h-14 items-center">
//           <Link href="#" className="flex items-center" prefetch={false}>
//             <MountainIcon className="h-6 w-6" />
//             <span className="sr-only">Acme Inc</span>
//           </Link>
//           <nav className="hidden md:flex gap-4">
//             <Link
//               href="#"
//               className="font-medium flex items-center text-sm transition-colors hover:underline"
//               prefetch={false}
//             >
//               Home
//             </Link>
//             <Link
//               href="#"
//               className="font-medium flex items-center text-sm transition-colors hover:underline"
//               prefetch={false}
//             >
//               About
//             </Link>
//             <Link
//               href="#"
//               className="font-medium flex items-center text-sm transition-colors hover:underline"
//               prefetch={false}
//             >
//               Services
//             </Link>
//             <Link
//               href="#"
//               className="font-medium flex items-center text-sm transition-colors hover:underline"
//               prefetch={false}
//             >
//               Contact
//             </Link>
//           </nav>
//           <div className="flex items-center gap-4">
//             <Button className="px-8 py-4 text-lg">Custom Size Button</Button>
//             <Button size="sm">Sign up</Button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// function MountainIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   );
// }

// export default Header;
'use client';
import { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsShrunk(window.scrollY > 50);
    }, 200); // Limit scroll updates to every 200ms

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`max-w-7xl w-full mx-auto   z-20 top-0 left-0 transition-all duration-500 bg-gray-900 ${
        isShrunk ? 'h-16' : 'h-24'
      } flex items-center justify-between px-8`}
    >
      <div className="text-white text-xl">Logo</div>
      <div>
        <Button className="text-white">Login</Button>
      </div>
    </nav>
  );
}
