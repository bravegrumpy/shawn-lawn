import Header from "@/app/components/header";
import { redirect } from "next/dist/server/api-utils";

export default function Home(){
    return(
        <>
            <Header />
            <main className="container min-w-[75%] max-w-[75%] w-9/12 flex flex-col justify-start items-start dark:text-limeade-100 py-20 border-0 border-t-2 border-neutral-500 m-auto bg-limeade-200 dark:bg-limeade-950">
                <div className="basis-0 flex flex-row gap-4">
                    <img className="grow-2 shrink-0 border-0 border-r-2 border-neutral-500 border-solid px-10" src="https://img1.wsimg.com/isteam/ip/369b5ff8-e315-4151-9d33-e4bd5646e324/Screenshot_20220625-164121_Chrome~2.jpg/:/rs=w:300,h:425"/>
                    <p className="grow-1 shrink-2 w-1/2 px-5 text-wrap self-center text-left whitespace-normal break-normal hyphens-auto">Welcome to the new <a className="underline font-semibold">shawnlawn.com</a>. Please be patient while this page is under construction.</p>
                </div>
            </main>
        </>
    );
}
