import ShawnLawn from "@/app/components/shawn-lawn";

export default function Header() {
    return (
        <>
            <header className="container w-full w-full w-full md:flex md:flex-row justify-center md:justify-start items-center mx-auto drop-shadow-sm bg-neutral-50 dark:bg-neutral-900 dark:text-limeade-100 sticky top-0">

                <ShawnLawn />
                {/*
                    TODO: #35 Add nav links
                    TODO: #34 Extract nav-links into separate component 
                 */}
            </header>
        </>
    );
}