'use client'
import {AnimatePresence} from "framer-motion";
import {usePathname} from "next/navigation";
import {Stairs} from "@/components/Stairs";

export const StairTransition = () => {
    const pathName = usePathname()
    return (
        <AnimatePresence mode={'wait'}>
            <div key={pathName}>
                <div className={'w-screen h-screen fixed top-0 left-0 right-0 z-40 flex pointer-events-none'}>
                    <Stairs/>

                </div>
            </div>
        </AnimatePresence>
    );
};