import React from 'react';

const Lines: React.FC = () => {
    return (
        <div className="mt-4 relative w-full flex justify-center">
            <div className="relative w-[650px] h-[400px] ">
                <div className="imageLines transform translate-x-[50px] translate-y-[10px] rotate-[45deg]"></div>
                <div className="imageLines transform translate-x-[100px] translate-y-[0px] rotate-[45deg]"></div>
                <div className="imageLines transform translate-x-[150px] translate-y-[-20px] rotate-[45deg]"></div>
            </div>
        </div>
    );
};

export default Lines;
