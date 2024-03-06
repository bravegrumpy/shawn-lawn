import React from 'react';
export default function MainFlexContainer({
    children,
}: {
    children: React.ReactNode
}){
    return (
    <main className="containe m-t-3 flex flex-col min-w-[75%] max-w-[75%] w-9/12 justify-start items-center gap-0 dark:text-limeade-50 mx-auto">{children}</main>
    );
}