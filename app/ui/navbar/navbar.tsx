'use client'; 

import React, { useState } from 'react';
import clsx from 'clsx';

import styles from "@/app/ui/styles/navbar.module.css"
import Image from 'next/image';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { name: 'Home', 
      href: '/',
    },
    {
      name: 'About Us',
      href: '/about',
    },
    { 
      name: 'Services', 
      href: '/services',
    },
    {
      name: 'Join our Team',
      href: '/join-team',
    },
    {
      name: 'Employee Portal',
      href: '/employee-portal',
    },
    {
        name: 'Blog',
        href: '/blog',
      },
      {
        name: 'Contact Us',
        href: '/contact',
      },
  ];


  return (
    <nav className="absolute top-2 md:top-4 left-2 md:left-4 right-2 md:right-4 z-50 rounded-xl bg-navbar">
      <div className="py-10 pl-2 pr-6 lg:px-4 flex items-center justify-between h-16">
        <div className="flex items-center">
          <img
          alt="Kind Hearts Services Logo"
          src={"/navbar-logo.png"}
          className='w-44 md:w-72'
          // width={250}
          // height={0}
          />
        </div>
        <div className="hidden xl:flex space-x-4 mr-6">
        {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={clsx(
                  'mx-5 my-5 text-primary hover:text-secondary', 
                {
                  'text-secondary font-semibold': pathname === link.href,
                })
                }
              >
                  <p className={clsx('text-sm font-light', {'text-secondary font-semibold': pathname === link.href})}>{link.name}</p>
              </Link>
            ))}
          <button>
          <Link
            href="https://www.paypal.com/donate/?hosted_button_id=3YLGQSE8S34SQ"
            className="text-white text-sm font-thin bg-secondary ml-8 px-12 py-2 rounded-md"
          >
            Donate
          </Link>
          </button>
        </div>

        {/* Burger Menu Button */}
        <div className="xl:hidden flex items-center">
    
          <button
            onClick={toggleMenu}
            className="text-black hover:text-primary focus:outline-none"
          >
            {
            isMenuOpen ? 
                <>
                  <Image src="/navbar/close-navbar.png" priority={true} alt='close nav' width={40} height={40} />  
                </> 
              : 
                <>
                  <Image src="/navbar/open-navbar.png" priority={true} alt='open nav' width={40} height={40} />  
                </>
          }
          </button>
        </div>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 right-0 mt-2 md:mt-4 bg-white rounded-lg xl:hidden">
            {links.map((link) => {
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={clsx(
                  'mx-5 mt-2 font-light text-primary hover:text-secondary block px-4 py-4', 
                {
                  'text-secondary font-semibold': pathname === link.href,
                })
                }
                onClick={toggleMenu}
              >
                  <p className='text-sm'>{link.name}</p>
              </Link>
            );
          })}
          <button className='mx-9 mb-9 mt-4'>
          <Link
            href="/"
            className="text-white bg-secondary px-12 py-2 rounded-md"
          >
            Donate
          </Link>
          </button>
            {/* <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">Home</a>
            <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">About</a>
            <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">Contact</a> */}
          </div>
        )}
      </div>
    </nav>
  );
}



{/* <Image
          alt="Kind Hearts Services Logo"
          src={"/navbar-logo.png"}
          width={210}
          height={0}
          /> */}


        //   {links.map((link) => {
        //     return (
        //       <Link 
        //         key={link.name} 
        //         href={link.href} 
        //         className={clsx(
        //           'mx-5 my-5', 
        //         {
        //           'text-secondary': pathname === link.href,
        //         })
        //         }
        //       >
        //           <p className='text-sm'>{link.name}</p>
        //       </Link>
        //     );
        //   })}