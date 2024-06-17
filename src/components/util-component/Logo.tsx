import Image from "next/image";
import {Icon} from "@iconify/react";
import React from "react";
import {LogoProps} from "@/utils/allTypes";

const Logo = ({logoText, text, icon,tm}: LogoProps) => {
    return (
        <div className="flex gap-2">
            {logoText ? <Image src={icon} alt="Logo" width={25} height={25}/> : <Image src={icon} alt="Logo" width={20} height={15}/>}
            <div className="flex ite">
                <div className="flex items-center">
                    {logoText && <span className="text-2xl font-bold flex">{logoText}</span>}
                    {text && <span className="text-base font-medium flex">{text}</span>}
                </div>
                {tm && <Icon icon={tm} width={12}/>}
            </div>
        </div>
    )
}

export default Logo;