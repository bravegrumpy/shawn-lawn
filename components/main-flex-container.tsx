import React from 'react';
export default function MainFlexContainer({
    children,
    className,
}: {
    children: React.ReactNode,
    className?: string,
}){
    return (
    <main className={`container m-t-3 flex flex-col min-w-[100%] md:min-w-[75%] max-w-[100%] md:max-w-[75%] w-[100%] md:w-9/12 justify-start items-center gap-0 dark:text-limeade-50 mx-auto ${className}`}>{children}</main>
    );
}