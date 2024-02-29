import GetQuery from "@/app/lib/actions";

export default async function Form(){    
    return(
        <>
            <div>
                <form action={GetQuery}>
                    <button type="submit">Click Me!</button>
                </form>
            </div>
        </>
    );
}