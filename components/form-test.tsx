import GetQuery from "@/scripts/actions"

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