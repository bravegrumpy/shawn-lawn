import Header from "@/app/components/header";
import { redirect } from "next/dist/server/api-utils";

export default function Home(){
    return(
        <>
            <Header />
            <main className="container m-t-3 flex flex-col min-w-[75%] max-w-[75%] w-9/12 justify-start items-center gap-3 dark:text-limeade-50 mx-auto">
                <div className="container self-center flex flex-col justify-start items-start gap-[50px] pt-[25px] border-0 border-b-2 border-neutral-500 m-auto bg-limeade-100 dark:bg-limeade-950">
                    <div className="flex flex-row gap-4">
                        <a href="https://shawnlawn.com"><img className=" hover:ring-rose-500 focus:ring-rose-500 hover:ring-4 focus:ring-4 grow-2 shrink-0 border-0 border-r-2 border-neutral-500 border-solid px-10" src="https://img1.wsimg.com/isteam/ip/369b5ff8-e315-4151-9d33-e4bd5646e324/Screenshot_20220625-164121_Chrome~2.jpg/:/rs=w:300,h:425"/></a>
                        <p className="grow-1 shrink-2 w-1/2 px-5 text-wrap self-center text-left whitespace-normal break-normal hyphens-auto">Welcome to the new <a href="https://shawnlawn.com" className="underline font-semibold">shawnlawn.com</a>. Please be patient while this page is under construction.</p>
                    </div>
                    <div className="flex self-center pb-[25px] pt-[-75px]">
                    <a href="mailto:shawn@shawnlawn.com"><button className="p-2 bg-limeade-200 dark:bg-limeade-600 hover:focus:bg-limeade-300 focus:bg-limeade-300 rounded-full self-center text-center text-brown-derby-950 font-black hover:ring-rose-500 focus:ring-rose-500 hover:ring-4 focus:ring-4">Schedule a FREE consultation</button></a>
                    </div>
                </div>
                <div className="container flex flex-col justify-start items-center dark:text-limeade-100 py-2 border-0 border-b-2 border-neutral-500 m-auto bg-emerald-50 dark:bg-emerald-950">
                    <p>If you have content to add, see a change you would like made, or have any other suggestions, please email me at <a href="mailto:code@bravegrumpy.com" className="font-semibold">code@bravegrumpy.com</a></p>
                </div>
                <div className="h-[700px]"></div>
            </main>
        </>
    );
}
