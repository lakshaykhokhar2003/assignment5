import React from 'react';
import GradientLayerProps from "@/utils/allTypes";

const GradientLayer = ({RedClassName, YellowClassName}: GradientLayerProps) => {
    return (
        <>
            <div className={`backgroundFilterRed  ${RedClassName}`}></div>
            <div className={`backgroundFilterYellow  ${YellowClassName}`}></div>

        </>
    );
};

export default GradientLayer;
