import Image from "next/image";
import {Button} from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import {Social} from "@/components/Social";
import {Photo} from "@/components/Photo";
import {Stats} from "@/components/Stats";

export default function Home() {
    return (
        <section className={'h-full'}>
            <div className={'h-full container mx-auto'}>
                <div className={'flex flex-col xl:flex-row items-center justify-between'}>
                    <div className={'text-center xl:text-left order-2 xl:order-none'}>
                        <span className={'text-xl'}>Frontend</span>
                        <h1 className={'h1'}>Hello, I'm <br/>
                            <span className={'text-accent'}>Dmitry Klyuev</span>
                        </h1>
                        <p className={'max-w-[500px] mb-9 text-white/80'}>
                            My name is Dmitry, and I am a passionate frontend developer with 3 years of experience in
                            creating interactive and user-friendly web applications.
                        </p>
                        <div className={'flex flex-col xl:flex-row items-center gap-8'}>
                            <Button className={'flex gap-2 items-center uppercase'}
                                    variant={'outline'}
                            >
                                <span>Download CV</span>
                                <FiDownload className={'text-xl'}/>
                            </Button>
                            <div className={'mb-8 xl:mb-0'}>
                                <Social/>
                            </div>
                        </div>
                    </div>
                    <div className={'order-1 xl:order-none mb-8 xl:mb-16'}>
                        <Photo/>
                    </div>
                </div>
            </div>
            <Stats/>
        </section>
    );
}
