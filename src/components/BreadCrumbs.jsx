import { useContext } from "react";
import { Breadcrumb } from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";
import { applicantDetailsContext } from "../App";


export const BreadCrumbs = () => {
    const data = useContext(applicantDetailsContext);
   return(
       <>
       <Breadcrumb>
        <Breadcrumb.Item href="#"> <AiFillHome/> </Breadcrumb.Item>
        <Breadcrumb.Item href="#">
            Scholorship No. {data.id}
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
            {data.name}
            </Breadcrumb.Item>
        </Breadcrumb>
       </>
   ) 
}