import React, { Component } from 'react'

export default class Footer extends Component {
     render() {
          return (
               <footer>
                    <div className="container">
                    <div className="footer-display">
                         <div className="footer-brand">
                              <img src="./img/image 84.png" alt="dvd" />
                         </div>
                         {/*  */}
                         <div className="col-25">
                              <h6 className="font-roboto-bold">Виды строительства</h6>
                              <ul className="nav-footer">
                                   <li>
                                        <a className="font-roboto-regular" href="#">- Каркасные дома </a>
                                   </li>
                                   {/*  */}
                                   <li>
                                        <a className="font-roboto-regular" href="#">- Дома из клеёного бруса</a>
                                   </li>
                                   {/*  */}
                                   <li>
                                        <a className="font-roboto-regular" href="#">- Фахверковые дома</a>
                                   </li>
                                   {/*  */}
                                   <li>
                                        <a className="font-roboto-regular" href="#">- Дома из брёвен</a>
                                   </li>
                                   {/*  */}
                                   <li>
                                        <a className="font-roboto-regular" href="#">- Беседки</a>
                                   </li>
                                   {/*  */}
                                   <li>
                                        <a className="font-roboto-regular" href="#">- Ремонт и отделка</a>
                                   </li> 
                              </ul>
                         </div>
                         {/*  */}
                         <div className="col-20">
                              <h6 className="font-roboto-bold">Наши работы</h6>
                              <a className="font-roboto-bold" href="#">Отзывы клиентов</a>
                              <a className="font-roboto-bold" href="#"> Партнеры</a>
                         </div>
                         {/*  */}
                         <div className="col-30">
                              <h6 className="font-roboto-bold">Контакты</h6>
                              <ul className="nav-contact">
                                   <li>
                                        <a className="font-roboto-regular" href="#">
                                             <img src="./img/group-icon.png" alt="frfrf" />
                                             Украина, г. Одесса ул. Комитетская, 24Б
                                        </a>                                                                                                                               
                                   </li>
                                  
                                   <li>
                                   <a className="font-roboto-regular" href="#">
                                             <img src="./img/group-icon.png" alt="frfrf" />
                                             Эл.почта: odessadomd@gmail.com
                                        </a>
                                   </li>
                                   {/*  */}
                                   <li>
                                   <a className="font-roboto-regular" href="#">
                                             <img src="./img/Слой 1.png" alt="frfrf" />
                                             +38 (098) 271-50-35
                                        </a>
                                   </li>
                              </ul>
                              {/*  */}
                              <ul className="social-media">
                                   <li>
                                        <a href="#">
                                             <img src="./img/facebook.png" alt="ffef" />
                                        </a>
                                   </li>
                                   {/*  */}
                                   <li>
                                        <a href="#">
                                             <img src="./img/instagramm.png" alt="ffef" />
                                        </a>
                                   </li>
                                   {/*  */}
                                   <li>
                                        <a href="#">
                                             <img src="./img/small.png" alt="ffef" />
                                        </a>
                                   </li>
                                   <li>
                                        <a className="font-roboto-bold" href="#">Свежие видео <br></br> у нас на канале</a>
                                   </li>
                              </ul>
                              {/*  */}
                         </div>
                         {/*  */}
                         <div className="footer-absolute">
                              <img src="./img/Group (1).png" />
                         </div>
                         {/*  */}
                    </div>
                    </div>
               </footer>
          )
     }
}
