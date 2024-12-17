import React from "react";
import CommPage from "../../components/Communities/Comm";
import TopRatedArticles from "../TopRatedArticles/TopRated";
import Footer from "../../components/Footer/Footer";
import "./Community.css"
export default function Community(){
    return(

       <div>
         <div className="communitys">
<CommPage/>
<TopRatedArticles/>

        </div>
        <Footer/>
       </div>
    )
}