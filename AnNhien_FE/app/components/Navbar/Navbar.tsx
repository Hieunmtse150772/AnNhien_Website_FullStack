'use client'
import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import { ModeToggle } from '../ModeToggle';
import { usePathname } from "next/navigation";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const router = usePathname();

    const navigation: NavigationItem[] = [
        { name: 'Trang chủ', href: '/', current: router === '/' },
        { name: 'Giới thiệu', href: '/pages/introduction', current: router === '/pages/introduction' },
        { name: 'Rộng mở tâm hồn', href: 'https://www.rongmotamhon.net/', current: false },
        { name: 'Món chay An Nhiên', href: '/pages/vegetariandish', current: router === '/pages/vegetariandish' },
        { name: 'Nhà hàng chay', href: '/pages/restaurant', current: router === '/pages/restaurant' },
        { name: 'Chia sẻ', href: '#join-section', current: false },

    ]

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="navbar bg-transparent">
            <>
                <div className="mx-auto max-w-7xl">
                    <div className="relative flex h-20 items-center justify-between content-center">
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                            {/* LOGO */}

                            <div className="flex flex-shrink-0 items-center">
                                <h1 className='logo font-medium text-black'>Vườn chay an nhiên</h1>
                            </div>
                            {/* LINKS */}
                            <div className="hidden sm:ml-14 md:block">
                                <div className="text-menu flex space-x-4 text-white font-bold px-10 ">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? ' text-orange' : 'hover:text-orange',
                                                'px-2 py-2 text-20px font-bold space-links'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className='hidden self-center text-lg space-x-16 md:block'>
                                <ModeToggle></ModeToggle>
                                
                            </div>


                        </div>
                        <IconButton className='mr-5'><SearchIcon className='search-button text-2xl text-white'></SearchIcon></IconButton>
                                    
                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block md:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
