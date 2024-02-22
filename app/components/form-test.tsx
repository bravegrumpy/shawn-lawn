import GetQuery from '@/app/actions';

export default function Form({ className }) {
    const query = GetQuery;
    return (
        <>
            <div className={ className }>
                <form action={query}>
                    <button type="submit">Do Function Defined in actions.ts</button>
                </form>
            </div>
        </>
    );
}