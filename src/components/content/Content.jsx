import React from "react";
import s from'./content.module.css'
import Item1 from "./item1";
import Item2 from "./item2";
const Content = () => {
    return (
        <div className={s.content}>
            <div className={s.Reclam}> <p className={s.first}>Find your special tour today</p> <p className={s.second}>With S-Kazakh tour</p> </div>
        <Item1/> 
         <Item2/>
        </div>
      
    );
}
export default Content;