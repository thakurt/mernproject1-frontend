import "./post.css"
import Singlepost from "../singlePost/Singlepost"


export default function Post({posts}) {
    return (
        <div className="posts">
           <div className="news">
           {posts.map((p) =>(
                <Singlepost post ={p} />
            )
                
                
            )}
           </div>
            
            
        </div>
    )
}
