import React from 'react';
import Logo from "@/components/util-component/Logo";
import {FooterData} from "@/utils/data";

const Footer: React.FC = () => {
    return (
        <footer className="pt-20 text-black">
            <div
                className="flex flex-row items-start justify-center gap-10">
                <div className="flex flex-col gap-4">
                    <Logo icon="/frame.png" logoText="uifry" tm="tabler:trademark"/>
                    <Logo icon={"/email.png"} text={"help@frybix.com"}/>
                    <Logo icon={"/call.png"} text={"+1 234 456 678 89"}/>
                </div>

                <div className="flex flex-row gap-10">
                    {FooterData.map((data, index) => (
                        <div key={index} className="flex flex-col gap-4">
                            <h2 className="text-2xl font-medium">{data.title}</h2>
                            {data.links.map((link, index) => (
                                <span key={index} className="text-base font-medium">{link}</span>
                            ))}
                        </div>))}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-medium">Newsletter</h2>
                        <div className="flex flex-col gap-4">
                            <span className="text-base font-medium">Stay Up TO Date</span>
                            <div>
                                <input type="text" placeholder="Your Email" className="p-2"/>
                                <button className="bg-black text-white px-4 py-2 rounded">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="custom-border-top">Copyright 2022 uifry.com all rights reserved</div>
        </footer>
    );
};

export default Footer;
