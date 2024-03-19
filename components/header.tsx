import ShawnLawn from "@/components/shawn-lawn";
import Link from 'next/link';

export default function Header({ className }: { className?: string }) {
    return (
        <>
            <header className={`${className} container w-full w-full w-full md:flex md:flex-row justify-center md:justify-start items-center mx-auto bg-white-3 dark:bg-black-3 dark:text-white-1 sticky top-0`}>
                <ShawnLawn />
                {/*
                    TODO: #35 Add nav links
                    TODO: #34 Extract nav-links into separate component 
                 */}
            </header>
        </>
    );
}