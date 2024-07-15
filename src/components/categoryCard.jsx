import React from 'react';

export default function CategoryCard({ image, name, top, left, right, bottom }) {
    const isAbsolute = top !== undefined || left !== undefined || right !== undefined || bottom !== undefined;

    return (
        <div 
            className={`bg-secondaryBackground_Dark w-[174px] h-[198px] rounded-[4px] p-[12px] ${isAbsolute ? 'absolute' : 'relative'}`} 
            style={{ top, left, right, bottom }}
        >
            <div className="flex flex-col gap-[8px]">
                <img className="w-[150px] h-[150px]" src={image} alt="" />
                <p className="text-primaryText_Dark font-medium text-md">{name}</p>
            </div>
        </div>
    );
}
