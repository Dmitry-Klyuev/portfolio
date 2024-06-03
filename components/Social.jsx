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
        <div>
            {socials.map((item, index) => {
                return <Link href={item.path} key={index}>{item.icon}</Link>
            })}
        </div>
    );
};
