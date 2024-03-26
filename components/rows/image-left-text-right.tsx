import React from 'react';
export default function ImageLeftTextRight(
    { 
        src,
        href,
        target,
        imgStyle,
        children,
        textStyle,
    }:{
        src: string,
        href?:string,
        target?:string,
        imgStyle?:string,
        textStyle?:string,
        children: React.ReactNode,
    }
){
    return(
        <>
            <div className="flex flex-col md:flex-row gap-4 px-10">
                <a 
                    href={href}
                    target={target}
                >
                    <img className={`${imgStyle} hover:ring-rose-500 focus:ring-rose-500 hover:ring-4 focus:ring-4 grow-2 shrink-0 px-10`} src={src}/>
                </a>
                <p className={`${textStyle} grow-2 md:grow-1 shrink-0 md:shrink-2 md:w-1/2 py-5 px-3 md:px-5 md:text-wrap w-[75%] self-center text-left rounded whitespace-normal text-brown-derby-700 dark:text-limeade-50 md:break-normal hyphens-auto bg-limeade-400 dark:bg-limeade-600`}>
                    {children} 
                </p>
            </div>
        </>
    );
}