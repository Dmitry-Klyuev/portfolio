'use client'
import Link from 'next/link'
import {motion} from 'framer-motion'
import {BsArrowDownRight} from "react-icons/bs";


const services = [
    {
        num: 1,
        title: 'Frontend Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consectetur cumque deleniti dolor, doloribus, esse exercitationem explicab',
        href: ''
    },
    {
        num: 2,
        title: 'Backend Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consectetur cumque deleniti dolor, doloribus, esse exercitationem explicab',
        href: ''
    },
    {
        num: 3,
        title: 'SEO',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consectetur cumque deleniti dolor, doloribus, esse exercitationem explicab',
        href: ''

    },
    {
        num: 4,
        title: 'UI/UX Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consectetur cumque deleniti dolor, doloribus, esse exercitationem explicab',
        href: ''

    }

]

const Services = () => {
    return (
        <section className={'min-h-[80vh] flex flex-col justify-center py-12 xl:py-8'}>
            <div className={'container mx-auto'}>
                <motion.div initial={{opacity: 0}}
                            animate={{
                                opacity: 1,
                                transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}
                            }}
                            className={'grid grid-cols-1 md:grid-cols-2 gap-[60px]'}
                >
                    {services.map(el => {
                        return <div key={el.num}
                                    className={'flex flex-1 flex-col justify-center gap-6 group'}
                            >
                            <div className={'flex justify-between items-center'}>
                                <div>{el.num}</div>
                                <Link href={el.href}>
                                    <BsArrowDownRight/>
                                </Link>
                            </div>
                            <h2>{el.title}</h2>
                            <p>{el.description}</p>
                            <div className={'border-b border-white/20 w-full'}></div>
                        </div>
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;