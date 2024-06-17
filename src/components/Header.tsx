import React from 'react';
import {Icon} from "@iconify/react";
import Image from "next/image";

const Header: React.FC = () => {
    return (
        <>
            <header
                className="text-black p-5 flex justify-between w-full">
                <nav className="flex items-center justify-center gap-20">
                    <div className="flex">
                        <Image src="/frame.png" alt="Logo" width={28} height={24} className="mr-1"/>
                        <span className="text-2xl font-bold cursor-pointer flex">uifry</span>
                        <Icon icon="tabler:trademark" width={12}/>
                    </div>
                    <ul className="flex gap-4 space-x-4 cursor-pointer">
                        <li className="text-[#FF5555] font-extrabold">Home</li>
                        <li>About Us</li>
                        <li>Pricing</li>
                        <li>Features</li>
                    </ul>
                </nav>
                <button className="bg-black text-white px-8 py-3 tracking-wider lightTheme rounded">Download</button>
            </header>
        </>
    );
};

export default Header;
