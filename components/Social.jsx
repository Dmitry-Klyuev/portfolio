import Link from 'next/link'
import {FaGithub, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa";

const socials = [
  {icon: <FaGithub/>, path: 'https://github.com/Dmitry-Klyuev'},
  {icon: <FaLinkedinIn/>, path: 'https://www.linkedin.com/in/dmitry-kl/'},
  {icon: <FaInstagram/>, path: 'https://www.instagram.com/dmitry_kl/'},

]

export const Social = () => {
  return (
    <div className={'flex gap-8'}>
      {socials.map((item, index) => {
        return <Link href={item.path}
                     key={index}
                     target="_blank"
                     className={'w-9 h-9 border rounded-full hover:scale-125 border-accent flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'}
        >
          {item.icon}
        </Link>
      })}
    </div>
  );
};
