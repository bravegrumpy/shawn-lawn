import MainFlexContainer from "@/components/main-flex-container";
import Header from '@/components/header';
import ButtonLink from '@/components/button-link';
import ImageLeftTextRight from '@/components/layouts/rows/image-left-text-right';
import Button from "@/components/button";

const businessCard = '@/public/images/businessCard/business-card.webp';
import lightEnvelope from '@/public/icons/envelope-open.png';
import darkEnvelope from '@/public/icons/dark-envelope-open.png';

export default function Main() {
    return (
        <>
            {/* 
                    TODO: #33 Extract this element into a component.
                */}

            <MainFlexContainer
                className="gap-2"
            >
            <Header
                className="-z-5 border-0 border-b-2 border-x-2 border-solid border-neutral-500 rounded-none rounded-b-lg overflow-hidden -mb-1 mt-1" 
            />
                <div className="container self-center flex flex-col justify-start items-start gap-[50px] pt-[25px] m-auto bg-limeade-50 dark:bg-limeade-950 rounded-lg border-2 border-solid border-neutral-500">
                    <ImageLeftTextRight
                        href="https://shawnlawn.com"
                        src={businessCard}
                        width={719}
                        height={425}
                        alt="business card for Shawn Lawn"
                    >
                        Welcome to the new <a href="https://shawnlawn.com" className="underline font-semibold">shawnlawn.com</a>. Please be patient while this page is under construction.
                    </ImageLeftTextRight>
                    <div className="flex self-center pb-[25px] pt-[-75px]">
                        <ButtonLink
                            text="Schedule a FREE consultation"
                            href="mailto:shawn@shawnlawn.com"

                        />
                    </div>
                </div>
                <div className="container flex flex-col justify-start items-center dark:text-limeade-100 py-2 m-auto bg-emerald-50 dark:bg-emerald-950 gap-4 rounded-lg border-2 border-solid border-neutral-500">
                    <p className="flex self-center text-brown-derby-700 dark:text-brown-derby-500">Email me at <br /> {/* 
                            TODO: #37 Extract this into a form
                            TODO: #36 Make form-subit button save info to cache, then has a popup with a sign-up form. Once signup is complete, message is sent, and confirmation is sent to user. 
                        */}
                        <a href="https://shawnlawn.com" target="_blank" className="font-semibold">  code@bravegrumpy.com</a>
                    </p>
                    <div className="flex self-center">
                        <ol className={'list-image-[lightEnvelope] dark:list-image-[darkEnvelope]'}>
                            <li>to provoide content</li>
                            <li>to request a change</li>
                            <li>or to suggest a feature</li>
                        </ol>
                    </div>
                </div>
                <div className="container flex flex-col justify-start items-center dark:text-white-1 py-5 m-auto bg-white-1 dark:bg-black-1 gap-4 h-[500px] border-solid border-2 border-neutral-500 rounded-lg">
                    <Button />
                </div>
                <div className="h-[478px]"></div>
            </MainFlexContainer>
        </>
    );
}