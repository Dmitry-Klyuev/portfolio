'use client'
import {AnimatePresence, motion} from "framer-motion";
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
                <motion.div className={'w-screen h-screen fixed bg-primary top-0 pointer-events-none '}
                            initial={{opacity: 1}}
                            animate={{
                                opacity: 0,
                                transition: {delay: 0, duration: 0.2, ease: 'easeInOut'}
                            }}
                />
            </div>
        </AnimatePresence>
    );
};