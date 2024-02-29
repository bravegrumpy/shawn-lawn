import { authenticate } from '@/app/lib/actions';

export default function Page(){

    return(
        <form action={authenticate}>
            <input type="email" name="email" placeholder="Email" required />
        </form>
    );
}