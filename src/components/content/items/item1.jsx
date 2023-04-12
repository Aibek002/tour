import React from "react";
import s from'../content.module.css'
const Item1 = () => {
    return (
<nav className={s.item1}>
<div>  <p className={s.textContent}> WHY CHOOSE US?</p> </div>
            <div className={s.firstLine}>
                  <div className={s.a}>  
               <div className={s.as}><img className={s.imgLogo} src="https://cdn-icons-png.flaticon.com/512/10238/10238071.png" alt="" /></div>
                <div className={s.bs}>
                    <p className={s.titleText}>Diverse Destinations</p>
                    <p className={s.text}>Habitasse. Nunc mollis erat dapibus in commodo eu nisi. Odio purus magnis lorem.</p>
                </div></div>

                <div className={s.b}>     <div className={s.as}><img className={s.imgLogo} src="https://cdn-icons-png.flaticon.com/512/8690/8690414.png" alt="" /></div>
                    <div className={s.bs}>
                        <p className={s.titleText}>Diverse Destinations</p>
                        <p className={s.text}>Habitasse. Nunc mollis erat dapibus in commodo eu nisi. Odio purus magnis lorem.</p>
                    </div></div>

                <div className={s.c}> <div className={s.as}><img className={s.imgLogo} src="https://cdn-icons-png.flaticon.com/128/10088/10088309.png" alt="" /></div>
                    <div className={s.bs}>
                        <p className={s.titleText}>Diverse Destinations</p>
                        <p className={s.text}>Habitasse. Nunc mollis erat dapibus in commodo eu nisi. Odio purus magnis lorem.</p>
                    </div></div></div>


            <div className={s.secondLine}> <div className={s.a}>     <div className={s.as}><img className={s.imgLogo} src="https://cdn-icons-png.flaticon.com/512/10021/10021238.png" alt="" /></div>
                <div className={s.bs}>
                    <p className={s.titleText}>Diverse Destinations</p>
                    <p className={s.text}>Habitasse. Nunc mollis erat dapibus in commodo eu nisi. Odio purus magnis lorem.</p>
                </div></div>

                <div className={s.b}>     <div className={s.as}><img className={s.imgLogo} src="https://cdn-icons-png.flaticon.com/128/3083/3083713.png" alt="" /></div>
                    <div className={s.bs}>
                        <p className={s.titleText}>Diverse Destinations</p>
                        <p className={s.text}>Habitasse. Nunc mollis erat dapibus in commodo eu nisi. Odio purus magnis lorem.</p>
                    </div></div>

                <div className={s.c}>
                    <div className={s.as}><img className={s.imgLogo} src="https://cdn-icons-png.flaticon.com/512/7536/7536643.png" alt="" /></div>
                    <div className={s.bs}>
                        <p className={s.titleText}>Diverse Destinations</p>
                        <p className={s.text}>Habitasse. Nunc mollis erat dapibus in commodo eu nisi. Odio purus magnis lorem.</p>
                    </div></div></div>
    </nav>   );
}
export default Item1;