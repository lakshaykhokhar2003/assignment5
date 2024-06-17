import React from 'react';
import {FAQData} from "@/utils/data";
import Star from "@/components/util-component/Star";

const FAQ: React.FC = () => {
    const repeated = Array(6).fill(FAQData[0])
    return (
        <div className="relative">
            <section className="text-black p-10">
                <h1 className="text-base text-[#ff5555] font-base tracking-widest self-start">FAQ</h1>
                <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
                <div className="grid grid-cols-2 gap-8">
                    {repeated.map((faq, index) => (
                        <div key={index}
                             className={[0, 3, 4].includes(index) ? 'bg-[#FF5555] shadow-lg p-5 text-white' : 'bg-white shadow-lg p-5'}>
                            <h3 className="text-xl mb-2 font-semibold">{faq.title}</h3>
                            <p>{faq.description}</p>
                        </div>
                    ))}
                </div>

            </section>
            <Star className="top-[10%] right-[40%]"/>
        </div>
    );
};

export default FAQ;
