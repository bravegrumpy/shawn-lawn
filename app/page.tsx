import { ModeToggle } from "@/app/mode-toggle";
function Header(){
    return(
    <>
    <div>
        <h1 className='text-xxl text-green-500'>ShawnLawn</h1>
    </div>
    </>
    );
}

export default function Home(){
    return(
        <>
        <Header />
        <ModeToggle />
        <p>This page is under development</p>
        <p>Email me at <a className="text-green-50" href="mailto:code@bravegrumpy.com">code@bravegrumpy.com</a> for suggestions</p>
        </>
    );
}