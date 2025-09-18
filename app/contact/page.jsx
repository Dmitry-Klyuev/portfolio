"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+375) 29 616 96 96',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'i6169696@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Minsk, Belarus',
  },
];

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.44,
          ease: "easeIn",
        }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-[30px]">
          {/** Form */}
          <div className="md:w-[54%] order-2 md:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptas, sint culpa aut et ea!
              </p>
              {/** Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" placeholder="First Name" className="text-black"/>
                <Input name="lastname" placeholder="Last Name" className="text-black"/>
                <Input name="email" placeholder="Email address" className="text-black"/>
                <Input name="phone" placeholder="Phone number" className="text-black"/>
              </div>
              {/** textarea */}
              <Textarea
                className="h-[200px] text-black"
                placeholder="Type your message here."

              />
              {/** Button */}
              <Button size="lg" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>

          {/** Info */}
          <div className="flex-1 flex items-center justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="flex items-center justify-center shrink-0 w-[52px] h-[52px] md:w-[72px] md:h-[72px] bg-[#27272c] text-accent rounded-md">
                      <div className="text-[28px]">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact