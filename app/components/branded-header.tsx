import ShawnLawn from "@/app/components/shawn-lawn";

export default function BrandedHeader({ title, slogan }) {
    return (
        <>
            <header className="container min-w-full flex justify-center border-solid border-black border-4 p-4 mx-auto" >
                <div className="flex gap-4 flex-col justify-center items-center p-4 border-solid border-lime-600 border-4 px-3 py-3">
                    <h1 className="flex-auto text-center p-4 border-solid border-2 border-cyan-400 basis-0 text-5xl/10 first-letter:text-8xl/10">
                        Shawn Lawn
                    </h1>
                    <p className="basis-0 flex-auto border-solid border-2 border-slate-300">
                        {slogan}
                        
                    </p>
                    <h1 className="flex-auto text-center border-solid border-2 border-cyan-400 basis-0 capitalize">
                        {title}
                    </h1>
                    <ShawnLawn />
                </div>
            </header>
        </>
    );
}