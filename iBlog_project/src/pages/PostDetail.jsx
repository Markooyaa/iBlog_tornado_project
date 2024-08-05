import PostDetailComponent from "../components/PostDetailComponent";
import  data  from "../data/data.json";
import { menus } from "../data/data";
import { useParams } from "react-router-dom";

export default function PostDetail(){
    const params = useParams()
    
    return(
        <div className="flex m-auto sm:max-w-[1440px] w-[375px] relative">
            
            <div className="w-full flex flex-col sm:border-l-[1px] sm:border-solid">
                
                
                <PostDetailComponent category={params.category} title={params.category} postname={data.title} />
                
            </div>
        </div>
    )
}