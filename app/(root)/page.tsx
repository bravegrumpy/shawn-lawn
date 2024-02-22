import BrandedHeader from "@/app/components/branded-header";
import Form from "@/app/components/form-test";

export default function Home(){
    return(
        <>
            <BrandedHeader title="page title" slogan="Custom Landscaping, Here in Charleston!"/>
            <Form className="hidden"/>
        </>
    );
}
