'use client';
export default function PageHeader(){
    return(
        <>
            <header>
                <div className="container">
                    <h1>ShawnLawn</h1>
                    <p>A Charlestion landscaping business</p>
                </div>
            </header>
            <style jsx>{`
                header{
                    height: 100px;
                    width: 80%;
                    border: 2px solid black;
                    margin: auto;
                }
                .container{
                    border: 4px solid blueviolet;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-content: center;
                    align-items: center;
                }
                h1{
                    flex-grow: 5;
                }
                p{}
            `}</style>
        </>
    );
}