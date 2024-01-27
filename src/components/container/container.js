import Page_1 from "../page_1/page_1";
import Page_2 from "../page_2/page_2";
import Page_3 from "../page_3/page_3";


export default function Container({option}){
    switch(option){
        case 0:
            return <Page_1 />
        case 1:
            return <Page_2 />
        case 2: 
            return <Page_3 />
    }
}