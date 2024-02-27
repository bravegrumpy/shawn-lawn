import ShawnLawn from "@/app/components/shawn-lawn";

export default function Header() {
    return (
        <>
            <header className="container w-full w-full w-full flex flex-row justify-start items-center mx-auto bg-neutral-50 dark:bg-neutral-950 dark:text-limeade-100 sticky top-0">
                <ShawnLawn />
                {/*
                    TODO: #35 Add nav links
                    TODO: #34 Extract nav-links into separate component 
                 */}
            </header>
        </>
    );
}