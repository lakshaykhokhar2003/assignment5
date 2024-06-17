import Image from 'next/image';
import {StarProps} from "@/utils/allTypes";


const Star = ({className}: StarProps) => {
    return (
        <Image
            src={'/Star.png'}
            alt="star"
            width={50}
            height={50}
            quality={100}
            className={`absolute z-[10000] ${className}`}
        />
    );
};

export default Star;
