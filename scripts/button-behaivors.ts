export function linkHandler(
    {
        href,
        target,
    }:{
        href:string,
        target?:string
    }
){
    window.open(`${href}`, `${target}`);
}