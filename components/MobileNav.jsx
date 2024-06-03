'use client'

import {usePathname} from "next/navigation";
import {Sheet, SheetTrigger, SheetContent} from "@/components/ui/sheet";
import {links} from "@/components/Nav";
import Link from 'next/link'

import {CiMenuFries} from "react-icons/ci";

export const MobileNav = () => {
    const pathName = usePathname()
    return (
        <Sheet>
            <SheetTrigger className={'flex items-center justify-center'}>
                <CiMenuFries className={'text-accent text-[32px]'}/>
            </SheetTrigger>
            <SheetContent className={'flex flex-col'}>
                <div className={'mt-32 text-2xl mb-40 text-center'}>
                    <Link href={'/'}>
                        <h1 className={'text-4xl font-semibold'}>Dmitry
                        <span className={'text-accent'}>.</span>
                        </h1>
                    </Link>

                </div>
                {links.map((link) => {
                    return <div className={'text-end'}>
                        <Link key={link.name}
                              href={link.path}
                              className={`${pathName === link.path && 'text-accent border-b-2 border-accent '}`}
                        >
                            {link.name}
                        </Link>
                    </div>
                })}
            </SheetContent>

        </Sheet>
    );
};
