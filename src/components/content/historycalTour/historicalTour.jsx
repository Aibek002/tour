import React from "react";
import s from './historicalTours.module.css'

const History = () => {
    return (


<div className={s.grids}>
<div className={s.itemGrid1}>
    <div className={s.itemFirst}>
        <img className={s.tourImg} src="https://cdn.nur.kz/images/720/a9de86749007a98b.webp" alt="" />
    </div>
    <div  className={s.itemSecond}>
        <p className={s.TitlePlace}>Подземная мечеть Хильвет </p>
        <p className={s.TextPlace}>В 150 м от главного мавзолея находится культовое суфийское подземное сооружение, в котором провел, по легенде, свои последние годы Ходжи Ахмет Ясави. Здесь в последующие века суфии совершали ритуальные обряды. </p>
    </div>
</div>
<div className={s.itemGrid2}>
<div className={s.itemFirst}>
        <img className={s.tourImg} src="https://upload.wikimedia.org/wikipedia/commons/c/c2/%D0%9C%D0%B0%D1%83%D0%B7%D0%BE%D0%BB%D0%B5%D1%98_%D0%A5%D0%BE%D0%B4%D0%B6%D0%B5_%D0%90%D1%85%D0%BC%D0%B5%D0%B4%D0%B0_%D0%88%D0%B0%D1%81%D0%B0%D0%B2%D0%B8%D1%98%D0%B0_%28%D0%B3%D1%80%D0%B0%D0%B4_%D0%A2%D1%83%D1%80%D0%BA%D0%B5%D1%81%D1%82%D0%B0%D0%BD%2C_%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD%29.jpg" alt="" />
    </div>
    <div  className={s.itemSecond}>
        <p className={s.TitlePlace}>Мавзолей Ходжи Ахмеда Ясави </p>
        <p className={s.TextPlace}>Над огромным зданием высится один из самых больших в Центральной Азии купол диаметром 22 м и высотой 44 м. Этот заповедный объект был первым из казахстанских памятников внесен в список ЮНЕСКО.</p>
    </div>
</div>
<div className={s.itemGrid3}>
    <div className={s.itemFirst}>
        <img className={s.tourImg} src="https://cdn.nur.kz/images/720/010cacc09f6618a4.webp" alt="" />
    </div>
    <div  className={s.itemSecond}>
        <p className={s.TitlePlace}>Мавзолей Есима </p>
        <p className={s.TextPlace}>Есим-хан вошел в историю как политический реформатор в Казахском ханстве XVI–XVII веков. Он перенес столицу ханства в Туркестан. Его мавзолей находится рядом с центральным объектом, имеет размеры 9х9 м. </p>
    </div>
</div>
<div className={s.itemGrid4}>
<div className={s.itemFirst}>
        <img className={s.tourImg} src="https://files.kazakhstan.travel/files/public/201812/13/c0fdc82cc83748eeabfcf4a1f32bbac9/%D0%9C%D0%B0%D0%B2%D0%B7%D0%BE%D0%BB%D0%B5%D0%B9-%D0%9A%D0%90%D0%98-1.jpg" alt="" />
    </div>
    <div  className={s.itemSecond}>
        <p className={s.TitlePlace}>Заповедник-музей «Азрет-Султан»</p>
        <p className={s.TextPlace}>Всего в заповеднике-музее находятся 97 историко-культурных памятников.Кроме них, интерес представляют древние фортификационные сооружения — крепостные стены и башни. Новинка в заповеднике — этноаул. </p>
    </div>
</div>
</div>);
}
export default History;