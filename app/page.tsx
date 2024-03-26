import Main from "@/components/main";
import { UserButton } from "@clerk/nextjs";
export default function Home(){
    return(
        <>
            <UserButton />
            <Main />
        </>
    );
}
