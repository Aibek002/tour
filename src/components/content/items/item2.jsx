import React from "react";
import s from './item2.module.css'
import History from "../historycalTour/historicalTour";

const Item2 = () => {
    return (
        <div className={s.item2}>
            <p className={s.titleHistory}>Historical places with SKazakh Tours :</p>

            <History />
            <p className={s.titleHistory}>Beautiful places with SKazakh Tours :</p>


        </div>
    

    );
}
export default Item2;