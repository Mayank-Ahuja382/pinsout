
import { useEffect } from "react";
import { useRouter } from "next/router";
const ERROR =() => {
    const router = useRouter();

    useEffect(() =>{
        setTimeout(()=> {
            router.push("/");
        },3000);
    },[]);
    return ( 
        <>
        <div id="not found">
            <div id="not found">
                <div id="not found 404">
                    <h1>404</h1>

                </div>
                <h2>we are sorry ,you are at the wrong page</h2>
                <a>AT THE BACK HOME PAGE</a>
            </div></div>
            </>
    );
};
export default ERROR;