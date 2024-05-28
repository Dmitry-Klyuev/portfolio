import Link from 'next/link'

const Header = () => {
    return (
        <header className='py-8 xl:py-12 text-white '>
            <div className='container mx-auto flex justify-between items-center' >
                <Link href='/'>
                    <h1 className='text-4xl font-semibold'>Dmitry
                        <span className='text-accent'>.</span>
                    </h1>
                </Link>
                {/*Desktop menu*/}
                <div className='hidden xl:flex items-center gap-8'>
                    <Nav/>
                    <Link href='/contact'>
                        <Button>Hire me</Button>
                    </Link>
                </div>
                {/* Mobile Menu*/}
                <div className='xl:hidden'>
                    Mobile Menu
                </div>
            </div>
        </header>
    );
};

import React from 'react';
import {Nav} from "@/components/Nav";
import {Button} from "@/components/ui/button";

export default Header;