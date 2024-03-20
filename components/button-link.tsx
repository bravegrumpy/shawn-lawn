'use client';
export default function ButtonLink ({
    text,
    href,
    target,
}:{
    text:string,
    href:string,
    target?:string,
}){

    function handler(){
        window.open(`${href}`, `${target}`)
    }


    return(
        <>
                <button
                    className="p-2 bg-limeade-400 dark:bg-limeade-600 hover:bg-limeade-200 focus:bg-limeade-200 dark:hover:bg-limeade-300 dark:focus:bg-limeade-300 rounded-full self-center text-center text-brown-derby-700 dark:text-brown-derby-950 font-black hover:ring-rose-500 focus:ring-rose-500 hover:ring-4 focus:ring-4"
                    onClick={handler}
                >
                    {text}
                </button>
        </>
    );
}