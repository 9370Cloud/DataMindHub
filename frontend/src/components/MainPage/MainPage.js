import Body1 from "./Body1/Body1";
import Divider1 from "./Divider/Divider1";
import Body2 from "./Body2/Body2";
import Divider2 from "./Divider/Divider2";
import Body3 from "./Body3/Body3";
import Divider3 from "./Divider/Divider3";
import Body4 from "./Body4/Body4";

function MainPage(){
    return(<div style={{overflowY: 'auto', maxHeight:'800px'}}>
        <Body1/>
        <Divider1/>
        <Body2/>
        <Divider2/>
        <Body3/>
        <Divider3/>
        <Body4/>
    </div>)
}

export default MainPage