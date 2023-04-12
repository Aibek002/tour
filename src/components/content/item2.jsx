import React from "react";
import s from './item2.module.css'
import History from "./historycalTour/historicalTour";

const Item2 = () => {
    return (
        <div className={s.item2}>
            <p className={s.titleHistory}>Historical S-Tours :</p>

            <History />
        </div>

    );
}
export default Item2;