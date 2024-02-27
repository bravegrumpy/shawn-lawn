import MainFlexContainer from "@/app/components/main-flex-container";
import Header from '@/app/components/header';
import ButtonLink from '@/app/components/button';
import ImageLeftTextRight from '@/app/components/layouts/rows/image-left-text-right';
import { linkHandler } from "@/app/utils/button-behaivors";

export default function Main(){
    return (
        <>
                {/* 
                    TODO: #33 Extract this element into a component.
                */}
                <MainFlexContainer>
                    <Header />
                    <div className="container self-center flex flex-col justify-start items-start gap-[50px] pt-[25px] m-auto bg-limeade-50 dark:bg-limeade-950">
                        <ImageLeftTextRight
                            src='https://img1.wsimg.com/isteam/ip/369b5ff8-e315-4151-9d33-e4bd5646e324/Screenshot_20220625-164121_Chrome~2.jpg/:/rs=w:800,h:800'
                            href="https://shawnlawn.com"
                            >
                                Welcome to the new <a href="https://shawnlawn.com" className="underline font-semibold">shawnlawn.com</a>. Please be patient while this page is under construction.
                            </ImageLeftTextRight>
                        <div className="flex self-center pb-[25px] pt-[-75px]">
                            <ButtonLink
                                text= "Schedule a FREE consultation"
                                href="mailto:shawn@shawnlawn.com"

                            />
                        </div>
                    </div>
                    <div className="container flex flex-col justify-start items-center dark:text-limeade-100 py-2 m-auto bg-emerald-50 dark:bg-emerald-950 gap-4">
                        <p className="flex self-center text-brown-derby-700 dark:text-brown-derby-500">Email me at <br/> {/* 
                            TODO: #37 Extract this into a form
                            TODO: #36 Make form-subit button save info to cache, then has a popup with a sign-up form. Once signup is complete, message is sent, and confirmation is sent to user. 
                        */}
                            <a href="https://shawnlawn.com" target="_blank" className="font-semibold">  code@bravegrumpy.com</a>
                        </p>
                        <div className="flex self-center">
                            <ol className='list-image-[url(../components/images/icons/envelope-open.png)] dark:list-image-[url(../components/images/icons/dark-envelope-open.png)]'>
                                <li>to provoide content</li>
                                <li>to request a change</li>
                                <li>or to suggest a feature</li>
                            </ol>
                        </div>
                    </div>
                <div className="h-[1000px]"></div>
            </MainFlexContainer>
        </>
    );
}