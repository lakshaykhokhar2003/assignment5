import React from 'react';
import ImageComponent from "@/components/util-component/ImageComponent";
import Image from "next/image";
import Star from "@/components/util-component/Star";
import GradientLayer from "@/components/util-component/GradientLayer";

const Testimonials: React.FC = () => {
    return (
        <div className="relative">
            <section className="text-black p-10">
                <h1 className="font-medium text-center tracking-widest">TESTIMONIAL</h1>
                <h2 className="text-4xl font-bold text-center mb-8">What Our Users Say About Us?</h2>
                <div className="flex justify-between items-center">
                    <ImageComponent img="/testimonials.png" testimonials={true}/>
                    <GradientLayer RedClassName="left-[24%] top-[40%]" YellowClassName="left-[24%] top-[55%]"/>
                    <div>
                        <div className="flex justify-around">
                            <div className="max-w-lg">
                                <h3 className="text-2xl mb-2 font-semibold">The Best Finiancial Accounting App Ever</h3>
                                <p className="mt-2 text-lg text-gray-500">“Arcu at dictum sapien, mollis. Vulputate sit
                                    id accumsan,
                                    ultricies. In
                                    ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra
                                    nisl
                                    velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                                    ac
                                    dolor neque lorem sapien, suspendisse aliquam.”</p>
                                <Image src={"/badges.png"} alt="icon" width={120} height={120} className="mt-4 mb-4"/>
                                <small className="mt-2 font-semibold text-base">Nick Jonas</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Star className="bottom-[5%] left-0 rotate-45"/>
        </div>
    );
};

export default Testimonials;
