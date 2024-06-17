import React from 'react';
import ImageAndText from "@/components/util-component/ImageAndText";
import {featuresData} from "@/utils/data";
import Star from "@/components/util-component/Star";
import GradientLayer from "@/components/util-component/GradientLayer";

const Features = () => {
    return (
        <div className="relative">
            <ImageAndText title="Features" heading="Uifry Premium" features={featuresData} img="/iphonecard.png"
                          rowReverse={false}/>
            <Star className="top-[5%] rotate-45"/>
            <GradientLayer RedClassName="left-[18%] top-[30%]" YellowClassName="left-[18%] top-[20%]"/>
        </div>
    );
};

export default Features;