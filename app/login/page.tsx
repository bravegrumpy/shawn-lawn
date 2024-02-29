//import { authenticate } from '@/app/lib/actions';

export default function Page(){

    return(
        <form action={()=>{console.log('action happened')}}>
            <input type="email" name="email" placeholder="Email" required />
        </form>
    );
}