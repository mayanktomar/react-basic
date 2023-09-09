import { INTRO_IMAGE, INTRO_TEXT } from "../Utility/constants";

let Introduction = () => {
    return (
         <div className="introduction">
             <div className="introduction-text">
                {INTRO_TEXT}
             </div>
             <div >
                 <img className="introduction-image" src={INTRO_IMAGE}/>
             </div>
         </div>
    )
 }

 export default Introduction;