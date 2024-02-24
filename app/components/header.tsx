import ShawnLawn from "@/app/components/shawn-lawn";

export default function Header() {
    return (
        <>
            <header className="container w-max-9/12 w-min-9/12 w-9/12 flex flex-row justify-start items-center mx-auto border-solid border-0 border-b-2 border-neutral-500 border-collapse bg-emerald-100 dark:bg-emerald-950 dark:text-limeade-100 sticky top-0">
                <ShawnLawn />
            </header>
        </>
    );
}