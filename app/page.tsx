import { Holtwood_One_SC } from "next/font/google";

const holtwood = Holtwood_One_SC

function Header(){
    return(
    <>
        <h1 className='${holtwood} text-green-50'>ShawnLawn</h1>
    </>
    );
}

export default function Home(){
    return(
        <>
        <h1 className='text-xxl'>Shawn Lawn</h1>
        <p>This page is under development</p>
        <p>Email me at <a className="text-green-50" href="mailto:code@bravegrumpy.com">code@bravegrumpy.com</a> for suggestions</p>
        </>
    );
}