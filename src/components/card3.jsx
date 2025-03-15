import "./card3.css";
import bino from "../assets/Rectangle (4).png";
import React, { useEffect } from "react";
const card3 = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false,
        });
      }, []);
  return (
    <div className="card3">
        <img src={bino} alt="" />
        <div className="card3Wrapper">
            <div data-aos="zoom-in" className="card3Left">
                <h1>Хотите посмотреть?</h1>
                <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. </p>
            </div>
            <div data-aos="zoom-in-up" className="card3Right">
                <div className="btn">
                <button>Ваше имя</button>
                <button>Ваш телефон</button>
                </div>
                <div className="btnp">
                <p>*Мы никому не передаем ваши данные. 
                И не сохраняем ваш номер в базу.</p>
                <button>Посмотреть район</button>
                </div>
            </div>
        </div>
    </div>
);
};

export default card3;