'use client';
export default function Home(){
    return(
        <>
            <header>
                <h1>ShawnLawn</h1>
                <p>A Charleston landscaping business</p>
            </header>
            <style jsx>{`
                header {
                    backgound-color: green;
                }
                p {
                    color: blue;
                    font-family: serif;
                    backgound-color: pink;
                }
                `}</style>
        </>
    );
}
