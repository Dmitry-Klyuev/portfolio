import Link from 'next/link'
import {FaGithub, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>, path: ''},
    {icon: <FaLinkedinIn/>, path: ''},
    {icon: <FaInstagram/>, path: ''},
    {icon: <FaTwitter/>, path: ''},

]

export const Social = () => {
    return (
        <div className={'flex gap-8'}>
            {socials.map((item, index) => {
                return <Link href={item.path}
                          key={index}
                          className={'w-9 h-9 border rounded-full hover:scale-125 border-accent flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'}
                    >
                        {item.icon}
                    </Link>
            })}
        </div>
    );
};
