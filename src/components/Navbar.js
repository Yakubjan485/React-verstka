
import React, {useState, useRef, useEffect} from 'react'

const Navbar = () => {

     const [showLinks, setShowLinks] = useState(false)

     return (
          <nav>
               <div className="container">
              <div>
              <div className="nav-header">
                    
                    <button type="button" onClick={()=>setShowLinks(!showLinks)}>
                         <img src="./img/Group 1.png" alt="sdv" />
                    </button>
               </div>
               
                    <div className={`${showLinks ? 'links-container show-container' : 'links-container'}`}>
                         <div className="brand">
                         <img src="./img/Mask Group (7).png" alt="fdvdvd" />
                         </div>
                         <h6 className="font-roboto-medium">Виды строительства</h6>
                    <ul className="links">
                         <li>
                              <a href="#">- Каркасные дома </a>
                         </li>
                         {/*  */}
                         <li>
                              <a href="#">- Дома из клеёного бруса</a>
                         </li>
                         {/*  */}
                         <li>
                              <a href="#">- Фахверковые дома </a>
                         </li>
                         {/*  */}
                         <li>
                              <a href="#">- Дома из брёвен </a>
                         </li>
                         {/*  */}
                         <li>
                              <a href="#">- Беседки </a>
                         </li>
                         {/*  */}
                         <li>
                              <a href="#">- Ремонт и отделка</a>
                         </li>
                    </ul>
                    {/*  */}
                    <h5>Наши работы</h5>

                    <h5>
                         <a href="#">Отзывы клиентов</a>
                    </h5>
                    {/*  */}
                    <h5>
                         <a href="#">Партнеры</a>
                    </h5>
                    {/*  */}
                    <h5>
                         <a href="#">Контакты</a>
                    </h5>
               </div>
              </div>
              {/*  */}
            
               </div>
               
               
          </nav>
     )
}

export default Navbar



