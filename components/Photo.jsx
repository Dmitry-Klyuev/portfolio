'use client'
import Image from 'next/image';
import {motion} from 'framer-motion'

export const Photo = () => {
    return (
        <div className={'w-full h-full relative'}>
            <motion.div
                initial={{opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: {delay: 2, duration: 0.4, ease: "easeIn"}
                }}
            >
                <motion.div
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition: {delay: 2.4, duration: 0.4, ease: "easeInOut"}
                    }}
                    className={'w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten' }>
                    <Image alt={'photo'} src='/assets/photo.jpg' priority quality={100} fill className={'rounded-full '}/>
                </motion.div>

            </motion.div>
        </div>
    );
};
