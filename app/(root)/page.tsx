import BrandedHeader from "@/app/components/branded-header";
import Form from "@/app/components/form-test";

export default function Home(){
    return(
        <>
            <BrandedHeader title="page title" slogan="Custom Landscaping, Here in Charleston!"/>
            <Form style="border-2 border-orange-500 border-solid basis-0 w-fit my-6 mx-auto"/>
        </>
    );
}
