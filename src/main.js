import './style.css'
import logo from './img/logo.svg'
import round from './img/Ellipse.svg'
import group from './img/Group.svg'
import pic from './img/Frame 48095654.png'
document.querySelector('#div1').innerHTML = `
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

			<div>
			<section class="string" >
			<div class="div1" >
			 Лёд тронулся, господа присяжные заседатели! • Шахматы двигают вперёд не только культуру, но и экономику! • Дело помощи утопающим — дело рук самих утопающих! • 
			</div>
			<div  class="div2">
			 Лёд тронулся, господа присяжные заседатели! • Шахматы двигают вперёд не только культуру, но и экономику! • Дело помощи утопающим — дело рук самих утопающих! • 
			</div>
			</section>
			</div>
`

document.querySelector('#div2').innerHTML = `
  <div class="div2_top_div">
	<div class="div2_top_div_text">
	Чтобы поддержать <br/>Международный васюкинский турнир посетите лекцию на тему: <b>«Плодотворная дебютная идея»</b>
	</div>
	<div class="div2_second_div">
	<img src="${pic}"/>
	<div class="div2_second_div_right_side">
	<div class="div2_second_div_right_side_1">
	и Сеанс <b>одновременной игры<br/> в шахматы на 160 досках</b> гроссмейстера О. Бендера
	</div>
	<div>
	<table id="table" class="table">
	<tr>
	 <td>Место проведения:</td>
	 <td>Клуб «Картонажник»</td>
	</tr>
	<tr>
		<td>Дата и время мероприятия:</td>
		<td>22 июня 1927 г. в 18:00</td>
	</tr>
	<tr>
		<td>Стоимость входных билетов:</td>
		<td>20 коп.</td>
	</tr>
		<tr>
		<td>Плата за игру:</td>
		<td>50 коп.</td>
	</tr>
		<tr>
		<td>Взнос на телеграммы:</td>
		<td><b>100 руб.</b> 21 руб. 16 коп.</td>
	</tr>
</table>
	</div>
	</div>
	</div>
        
			</div>
`