import Header from "@/app/components/header";
import { redirect } from "next/dist/server/api-utils";

export default function Home(){
    return(
        <>
            <Header />
            <main className="container m-t-3 flex flex-col min-w-[75%] max-w-[75%] w-9/12 justify-start items-center gap-3 dark:text-limeade-50 mx-auto">
                <div className="container self-center flex flex-col justify-start items-start gap-[50px] pt-[25px] border-0 border-b-2 border-neutral-500 m-auto bg-limeade-100 dark:bg-limeade-950">
                    <div className="flex flex-row gap-4">
                        <a href="https://shawnlawn.com"><img className="grow-2 shrink-0 border-0 border-r-2 border-neutral-500 border-solid px-10" src="https://img1.wsimg.com/isteam/ip/369b5ff8-e315-4151-9d33-e4bd5646e324/Screenshot_20220625-164121_Chrome~2.jpg/:/rs=w:300,h:425"/></a>
                        <p className="grow-1 shrink-2 w-1/2 px-5 text-wrap self-center text-left whitespace-normal break-normal hyphens-auto">Welcome to the new <a className="underline font-semibold">shawnlawn.com</a>. Please be patient while this page is under construction.</p>
                    </div>
                </div>
                <div className="container flex flex-col justify-start items-center dark:text-limeade-100 py-2 border-0 border-b-2 border-neutral-500 m-auto bg-emerald-50 dark:bg-emerald-950">
                    <div>
                        <p className="p-2 bg-limeade-600 hover:bg-limeade-500 rounded-full self-center text-center text-brown-derby-950 font-black"><a href="mailto:shawn@shawnlawn.com">Schedule a FREE consultation</a></p>
                    </div>
                </div>
                <div className="h-[1000px]"></div>
            </main>
        </>
    );
}
