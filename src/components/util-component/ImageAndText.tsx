import React from 'react';
import ImageComponent from "@/components/util-component/ImageComponent";
import Image from "next/image";
import {ImageAndTextProps} from "@/utils/allTypes";

const ImageAndText = ({img, title, heading, features, rowReverse, card}: ImageAndTextProps) => {
    return (
        <>
            <section className={`flex ${rowReverse && `flex-row-reverse`} justify-between text-black p-10`}>
                <ImageComponent img={img} card={card}/>

                <div
                    className={`flex flex-col flex-grow  min-w-[500px] max-xl:min-w-[400px] max-lg:min-w-0  ${rowReverse && 'w-full'}`}>
                    <div className="flex flex-col justify-center items-center h-full max-w-lg ">
                        {title &&
                            <h1 className="text-base text-[#ff5555] font-[500] tracking-widest self-start">{title}</h1>}
                        <h2 className="text-4xl font-bold mb-8 self-start">{heading}</h2>
                        <div className="flex flex-col gap-5 justify-around ">
                            {features.map((feature, index) => (
                                <div key={index} className="self-start w-full">
                                    <h3 className="text-xl mb-2 font-semibold flex items-center gap-2"><Image
                                        src={feature.icon} alt="icon" width={20} height={20}/>
                                        {feature.title}</h3>
                                    <p className="text-gray-700">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ImageAndText;

