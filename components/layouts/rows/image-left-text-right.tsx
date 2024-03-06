import React from 'react';
import Image from 'next/image';

export default function ImageLeftTextRight(
    { 
        src,
        href,
        alt,
        width,
        height,
        target,
        imgStyle,
        children,
        textStyle,
    }:{
        src?: string,
        alt?: string,
        width?: number,
        height?: number,
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

                    {/*<Image
                        className={`${imgStyle} hover:ring-rose-500 focus:ring-rose-500 hover:ring-4 focus:ring-4 grow-2 shrink-0 px-10`} 
                        src='@/public/images/businessCard/business-card.png'
                        alt={alt}
    />*/}
                Link
                </a>
                <ul>
                    Params passed:
                    <li>{href}</li>
                    <li>{target}</li>
                    <li>{imgStyle}</li>
                    <li>{textStyle}</li>
                    <li>{alt}</li>
                    <li>{width}</li>
                    <li>{height}</li>
                    <li>{src}</li>
                    <li>{src}</li>
                </ul>
                <p className={`${textStyle} grow-2 md:grow-1 shrink-0 md:shrink-2 md:w-1/2 py-5 px-3 md:px-5 md:text-wrap w-[75%] self-center text-left rounded whitespace-normal dark:text-limeade-50 md:break-normal hyphens-auto bg-limeade-400 bg-opacity-50 dark:bg-opacity-50 dark:bg-limeade-600`}>
                    {children} 
                </p>
            </div>
        </>
    );
}