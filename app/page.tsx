export default function Home(){
    return(
        <>
            <header>
                <div className="centered">
                    <h1>ShawnLawn</h1>
                    <p>A Charleston landscaping business</p>
                </div>
            </header>
            <style jsx>{`
                header {
                    margin: auto;
                    height: 500px;
                    width: 1000px;
                }
                .centered {
                    color: brown;
                    border: 3px solid blueviolet;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                }
                h1 {

                }
                p {
                    color: blue;
                    font-family: serif;
                    backgound-color: pink;
                    text-align: center;
                }
                `}</style>
        </>
    );
}
