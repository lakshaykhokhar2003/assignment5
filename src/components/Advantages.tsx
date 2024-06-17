import React from 'react';
import ImageAndText from "@/components/util-component/ImageAndText";
import {advantagesData, advantagesData2} from "@/utils/data";
import Star from "@/components/util-component/Star";
import GradientLayer from "@/components/util-component/GradientLayer";

const Advantages: React.FC = () => {
    return (
        <div className="relative">
            <ImageAndText title="ADVANTAGES" heading="Why Choose Uifry?" features={advantagesData}
                          img={'/transaction.png'} rowReverse={true}/>
            <ImageAndText features={advantagesData2} img={'/iphonecard.png'} card={true}/>
            <Star className="top-[5%] right-[0%] "/>
            <Star className="bottom-[45%] left-[50%] rotate-45"/>
            <Star className="bottom-[5%] right-0"/>
            <GradientLayer RedClassName="right-[26%] top-[20%]" YellowClassName="right-[30%] top-[30%]"/>
            <GradientLayer RedClassName="left-[18%] bottom-[10%] rotate-45"
                           YellowClassName="left-[25%] bottom-[20%] rotate-45"/>
        </div>
    );
};

export default Advantages;
