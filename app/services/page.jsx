'use client'
import Link from 'next/link'
import {motion} from 'framer-motion'
import {BsArrowDownRight} from "react-icons/bs";


const services = [
    {
        num: '01',
        title: 'Frontend Developer',
        description: 'I create intuitive, responsive, and high-performance web interfaces that deliver a flawless user experience. My expertise covers the entire development cycle — from concept and prototyping to implementation and optimization.',
        href: ''
    },
    {
        num: '02',
        title: 'Backend Developer',
        description: 'I develop scalable and secure server applications that ensure stable frontend operation and uninterrupted data processing. I specialize in creating efficient server architecture and optimizing request handling processes.',
        href: ''
    },
    {
        num: '03',
        title: 'Full-Cycle Development',
        description: 'I offer comprehensive solutions for building fully functional web applications — from architecture design and interface development to server-side implementation and production deployment.',
        href: ''

    },

]

const Services = () => {
    return (
        <section className={'min-h-[80vh] flex flex-col justify-center py-12 xl:py-8'}>
            <div className={'container mx-auto'}>
                <motion.div initial={{opacity: 0}}
                            animate={{
                                opacity: 1,
                                transition: {delay: 1.4, duration: 0.4, ease: 'easeIn'}
                            }}
                            className={'grid grid-cols-1 md:grid-cols-2 gap-[60px]'}
                >
                    {services.map(el => {
                        return <div key={el.num}
                                    className={'flex flex-1 flex-col justify-center gap-6 group'}
                            >
                            <div className={'flex justify-between items-center'}>
                                <div className={'text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'}>{el.num}</div>
                                <Link href={el.href} className={'w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'}>
                                    <BsArrowDownRight className={'text-primary text-3xl'}/>
                                </Link>
                            </div>
                            <h2 className={'text-[42px] font-bold float-none text-white group-hover:text-accent transition-all duration-500'}>{el.title}</h2>
                            <p className={'text-white/60'}>{el.description}</p>
                            <div className={'border-b border-white/20 w-full'}></div>
                        </div>
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;