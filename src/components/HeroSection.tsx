import React from 'react';
import GradientLayer from "@/components/util-component/GradientLayer";
import Image from "next/image";
import Star from "@/components/util-component/Star";

const HeroSection: React.FC = () => {
    return (
        <section className="relative space-y-20 text-black flex justify-evenly">
            <GradientLayer RedClassName="left-[20%] top-[6%]" YellowClassName="left-[23%] top-[9%]"/>
            <div className="relative z-10">
                <h1 className="text-5xl font-bold">Make The Best Financial Decisions</h1>
                <p className="mt-4 text-gray-700">Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
                    Faucibus
                    Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
                <div className="mt-8 flex">
                    <button
                        className="bg-black text-white px-4 py-2 rounded mr-4 font-light flex justify-center items-center">Get
                        Started <Image src='/arrow.png' alt="arrow" width={22} height={46} quality={100}
                                       className="ml-2 w-full max-w-[22px]"/></button>
                    <button className="bg-transparent px-4 py-2 rounded flex items-center">
                        <Image src='/play.png' alt="play" width={29} height={29} quality={100}
                               className="inline-block mr-2"/>
                        Watch Video
                    </button>
                </div>
                <div className="relative">
                    <Star className="top-[20%] left-[15%] rotate-45"/>
                    <Image src="/strip.png" alt="hero" width={500} height={500} className=""/>
                </div>
            </div>
            <div className="heroSectionIphoneDiv">
                <div className="lines"/>
                <div className="lines"/>
                <div className="lines"/>
                <Image src="/iphone-1.png" alt="hero" width={500} height={700} quality={100}
                       className="heroSectionIphone"/>
                <Image src="/iphone-2.png" alt="hero" width={500} height={700} quality={100}
                       className="heroSectionIphone"/>
                <Image src="/iphone-1.png" alt="hero" width={500} height={700} quality={100}
                       className="heroSectionIphone"/>
                <Star className="bottom-[0%] left-[30%] rotate-90"/>
                <GradientLayer RedClassName="left-[38%] bottom-[6%]" YellowClassName="hidden"/>
            </div>
            <div className="m-2"><Star className="right-0"/></div>
        </section>
    );
};

export default HeroSection;
