import React from "react";
import Image from "next/image";
import Lines from "@/components/util-component/Lines";
import {ImageComponentProps} from "@/utils/allTypes";

const ImageComponent = ({img, testimonials = false, card = false}: ImageComponentProps) => {
    return (
        <div className={`relative flex flex-col w-full`}>
            <Lines/>
            <div className="absolute flex justify-center w-full "><Image
                src={img}
                alt="hero"
                width={450}
                height={700}
                quality={100}
                className={`${testimonials ? 'w-[500px]' : 'w-[300px]'} z-20`}
            />
                {card && <Image src="/card.png" alt="background" width={260} height={160}
                                className="absolute top-[21%] max-w-[200px] max-h-[160px] z-[100]"/>}
            </div>
        </div>
    );
}

export default ImageComponent;