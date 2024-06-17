import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Advantages from '../components/Advantages';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import DownloadNow from "@/components/DownloadNow";
import Star from "@/components/util-component/Star";
import React from "react";
import GradientLayer from "@/components/util-component/GradientLayer";

const Home: React.FC = () => {
    return (
        <div className="w-full flex justify-center relative overflow-hidden">
            <GradientLayer RedClassName="right-[-6%] top-[20%]" YellowClassName="right-[-4%] top-[24%]"/>
            <div className="bg-white flex flex-col w-3/4 justify-center max-lg:w-full ">
                <Header/>
                <Star className="top-[2%] left-[10%] rotate-45"/>
                <main>
                    <HeroSection/>
                    <div className="flex flex-col items-center relative w-full">
                        <Features/>
                        <Advantages/>
                        <Testimonials/>
                        <FAQ/>
                        <DownloadNow/>
                    </div>
                </main>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;
