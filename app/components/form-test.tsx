import GetQuery from '@/app/actions';

export default function Form() {
    const query = GetQuery;
    return (
        <>
            <div>
                <form action={query}>
                    <button type="submit">Do Function Defined in actions.ts</button>
                </form>
            </div>
        </>
    );
}