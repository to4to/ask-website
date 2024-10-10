import { log } from "console";

interface PageProps{
    params:{
        url: string | string[] |undefined
    }
}



const Page=({params}:PageProps)=>{
    console.log(params);
    

}




export default Page;