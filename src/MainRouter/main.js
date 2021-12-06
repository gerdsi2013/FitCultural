
import {Routes, Route} from "react-router-dom"
import {Home} from "../views/Home/home"
import { NotFound } from "../views/NotFound/notfound"



export function MainRouter(){
    return(

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    )
        
        
    
}