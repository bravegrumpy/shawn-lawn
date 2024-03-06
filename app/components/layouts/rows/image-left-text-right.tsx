import React from 'react';
export default function ImageLeftTextRight(
    { 
        src,
        href,
        imgStyle,
        children,
        textStyle,
    }:{
        src: string,
        href?:string
        imgStyle?:string,
        textStyle?:string,
        children: React.ReactNode,
    }
){
    return(
        <>
            <div className="flex flex-row gap-4 px-10">
                <a href={href}>
                    <img className={`${imgStyle} hover:ring-rose-500 focus:ring-rose-500 hover:ring-4 focus:ring-4 grow-2 shrink-0 px-10`} src={src}/>
                </a>
                <p className={`${textStyle} grow-1 shrink-2 w-1/2 px-5 text-wrap self-center text-left rounded whitespace-normal text-brown-derby-700 dark:text-limeade-50 break-normal hyphens-auto bg-limeade-400 dark:bg-limeade-600`}>
                    {children} 
                </p>
            </div>
        </>
    );
}