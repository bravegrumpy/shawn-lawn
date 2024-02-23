import GetQuery from '@/app/actions';

export default function Form({ style }) {
    const query = GetQuery;
    return (
        <>
            <div className={ style }>
                <form action={query}>
                    <button type="submit">Do Function Defined in actions.ts</button>
                </form>
            </div>
        </>
    );
}