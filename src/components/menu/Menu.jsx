import React from 'react';
import "./Menu.scss"
import close from "../../assets/img/close.png"
import menu1 from "../../assets/img/menu1.png"
import menu2 from "../../assets/img/menu2.png"
import menu3 from "../../assets/img/menu3.png"
import menu4 from "../../assets/img/menu4.png"
import menu5 from "../../assets/img/menu5.png"
import menu6 from "../../assets/img/menu6.png"
import menu7 from "../../assets/img/menu7.png"
import right from "../../assets/img/angleright.png"
import insta from "../../assets/img/instagram.png"
import telegram from "../../assets/img/telegram.png"
import facebook from "../../assets/img/facebook.png"





export const Menu = () => {
    return (
        <div>

            <h1>123456</h1>
            <div className="menu">
            <div className="menu_content">
                <div className="cancel">
                    <img src={close} alt="" />
                </div>

                <div className="menu_block">
                    <ul>
                        <li>
                            <div className="left_box">
                                <img src={menu1} alt="" />
                            </div>

                            <p>Корзина</p>

                            <div className="right_box">
                                <img src={right} alt="" />
                            </div>
                        </li>

                        <li>
                            <div className="left_box">
                                <img src={menu2} alt="" />
                            </div>

                            <p>Мой профиль</p>

                            <div className="right_box">
                                <img src={right} alt="" />
                            </div>
                        </li>

                        <li>
                            <div className="left_box">
                                <img src={menu3} alt="" />
                            </div>

                            <p>Настройки</p>

                            <div className="right_box">
                                <img src={right} alt="" />
                            </div>
                        </li>

                        <li>
                            <div className="left_box">
                                <img src={menu4} alt="" />
                            </div>

                            <p>Информация о компании</p>

                            <div className="right_box">
                                <img src={right} alt="" />
                            </div>
                        </li>

                        <li>
                            <div className="left_box">
                                <img src={menu5} alt="" />
                            </div>

                            <p>История заказов </p>

                            <div className="right_box">
                                <img src={right} alt="" />
                            </div>
                        </li>

                        <li>
                            <div className="left_box">
                                <img src={menu6} alt="" />
                            </div>

                            <p>Уведомление</p>

                            <div className="right_box">
                                <img src={right} alt="" />
                            </div>
                        </li>

                        <li>
                            <div className="left_box">
                                <img src={menu7} alt="" />
                            </div>

                            <p>Служба поддержки</p>

                            <div className="right_box">
                                <img src={right} alt="" />
                            </div>
                        </li>

                        

                    </ul>
                </div>

                <div className="text_bottom">
                    <h3>Бозорбек  в соц сетях</h3>
                </div>

                <div className="icon_bottom">
                    <img src={insta} alt="" />
                    
                    <img src={telegram} alt="" />
                    
                    <img src={facebook} alt="" />
                </div>
            </div>
            </div>
            
        </div>
    );
};

