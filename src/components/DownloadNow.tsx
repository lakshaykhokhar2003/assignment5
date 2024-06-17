import React from 'react';
import Image from 'next/image';
import Star from "@/components/util-component/Star";
import GradientLayer from "@/components/util-component/GradientLayer";

const DownloadNow: React.FC = () => {
    return (
        <div className="pt-20 w-full relative flex items-center justify-center">
            <div className="max-w-[820px] w-full z-[1000]">
                <Image src={'/download.png'} alt="download" width={800} height={1000} quality={100}
                       className="w-full h-auto"/>
            </div>
            <Star className="top-[0%] right-[15%] text-red z-[10000]"/>
            <Star className="top-[40%] left-[15%] text-red z-[10000]"/>
            <GradientLayer RedClassName="left-[14%] top-[5%]" YellowClassName="left-[14%] top-[20%]"/>
        </div>
    );
}

export default DownloadNow;