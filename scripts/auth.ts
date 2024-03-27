import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const { handlers, auth } = NextAuth(() => {
    switch (req) {
        case true:
            console.log(req);
            break;
        case false:
            console.log(req);
            break;
    }
    return { providers: [ GitHub ]}
});