import './style.css'
import logo from './img/logo.svg'
import round from './img/Ellipse.svg'
import group from './img/Group.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'
// <a href="https://vite.dev" target="_blank">
    //   <img src="${viteLogo}" class="logo" alt="Vite logo" />
    // </a>
    // <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
    //   <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    // </a>
    // <h1>Hello Vite!</h1>
    // <div class="card">
    //   <button id="counter" type="button"></button>
    // </div>
    // <p class="read-the-docs">
    //   Click on the Vite logo to learn more
    // </p>

document.querySelector('#app').innerHTML = `
  <div class="top_div">
        <img src="${logo}" class="logo" alt="logo" />
        <div class="top_div_content">
          <div class="top_div_content_text">
            <div class="item_center">Превратите уездный город</div>
            <div>в столицу земного шара</div>
            <p>
              Оплатите взнос на телеграммы для организации Международного
              васюкинского турнира по шахматам
            </p>
            <div class="top_div_content_buttons_div">
              <button class="btn btndark">Поддержать<br/> шахматную мысль</button>
              <button class="btn btnlight">Подробнее<br/> о турнире</button>
            </div>
          </div>
          <div class="top_div_content_pic">
            <img src="${round}" class="pic2"/>
            <img src="${group}" class="pic"/>
          </div>
        </div>
      </div>
			<div class="string">Лёд тронулся, господа присяжные заседатели! Шахматы двигают вперёд не только культуру, но и экономику! Дело помощи утопающим — дело рук самих утопающих!</div>
`

setupCounter(document.querySelector('#counter'))
