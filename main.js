
document.querySelector('#div1').innerHTML = `
  <div class="top_div">
	<div class="top_div_firstChild">
	<img src="./img/logo.svg" class="logo" alt="logo" />
        <div class="top_div_content">
          <div class="top_div_content_text">
            <div class="item_center">Превратите уездный город</div>
            <div>в столицу земного шара</div>
            <p>
              Оплатите взнос на телеграммы для организации Международного
              васюкинского турнира по шахматам
            </p>
            <div class="top_div_content_buttons_div">
              <button  class="btn btndark"><a href="#div2">Поддержать<br/> шахматную мысль</a></button>
              <button class="btn btnlight"><a href="#div3">Подробнее<br/> о турнире</a></button>
            </div>
          </div>
          <div class="top_div_content_pic">
            <img src="./img/Ellipse.svg" class="pic2"/>
            <img src="./img/Group.svg" class="pic"/>
          </div>
        </div>
      </div>
			<div>
	</div>
			</div>
      <section class="string">
        <div class="div1">
          Лёд тронулся, господа присяжные заседатели! • Шахматы двигают вперёд
          не только культуру, но и экономику! • Дело помощи утопающим — дело
          рук самих утопающих! •
        </div>
        <div class="div2">
          Лёд тронулся, господа присяжные заседатели! • Шахматы двигают вперёд
          не только культуру, но и экономику! • Дело помощи утопающим — дело
          рук самих утопающих! •
        </div>
      </section>
`

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
 
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('#div2').innerHTML = `

  <div class="div2_top_div">
	<div class="div2_top_div_main">
	<div class="div2_top_div_text">
	<p>Чтобы поддержать <br/>Международный васюкинский турнир</p>
  <p>посетите лекцию на тему: <b>«Плодотворная дебютная идея»</b>
	</p>
	</div>
  
	<div class="div2_second_div">
	<img src="./img/Frame 48095654.png"/>
	<div class="div2_second_div_right_side">
	<div class="div2_second_div_right_side_1">
	и Сеанс <b>одновременной игры в шахматы на 160 досках</b> гроссмейстера О. Бендера
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
<p>По всем вопросам обращаться в администрацию к К. Михельсону</p>
	</div>
	</div>
	</div>
	</div>
  </div>
`



document.querySelector('#div3').innerHTML = `
<div class="div3_content">
 <div class="div3_top_div">
      <div class="div3_top_div_text">
        Этапы преображения<br />
        Васюков<b
          >Будущие источники
          обогащения васюкинцев</b
        >
      </div>
          <div class="greedSliderBox">
      <div class="grid" id="sliderGrid">
        <div class="boxdiv boxdiv1">
          <div class="box box11">
            <p>1</p>
            <div>Строительство железнодорожной магистрали Москва-Васюки</div>
          </div>
          <div class="box box11">
            <p>2</p>
            <div>
              Открытие фешенебельной гостиницы «Проходная пешка» и других
              небоскрёбов
            </div>
          </div>
        </div>
        <div class="box boxdiv boxdiv2">
          <p>3</p>
          <div>
            Поднятие сельского хозяйства в радиусе на тысячу километров:
            производство овощей, фруктов, икры, шоколадных конфет
          </div>
        </div>
        <div class="boxdiv boxdiv3">
          <div class="box box11 box4">
            <p>4</p>
            <div>Строительство дворца для турнира</div>
          </div>
          <div class="box box11">
            <p>5</p>
            <div>Размещение гаражей для гостевого автотранспорта</div>
          </div>
        </div>

        <div class="box box11boxdiv boxdiv4">
          <p>6</p>
          <div>
            Постройка сверхмощной радиостанции для передачи всему миру
            сенсационных результатов
          </div>
        </div>
        <div class="box box7 boxdiv boxdiv5">
          <p>7</p>
          <div>
            Создание аэропорта «Большие Васюки» с регулярным отправлением
            почтовых самолётов и дирижаблей во все концы света, включая
            Лос-Анжелос и Мельбурн
          </div>
        </div>
      </div>
    </div>
       <div class="mobiliVersionBtns">
              <img id="left" class="mobile_sliderBtn dot" src="./img/carousel button left.svg" />
              <div id="dots">
              <p class="dot black"></p>
              <p class="dot"></p>
              <p class="dot"></p>
              <p class="dot"></p>
              <p class="dot"></p>
              </div>
              <img id="right" class="mobile_sliderBtn dot black" src="./img/carousel button left.svg" />
        </div>
    </div>
</div>`;



let carousel = document.querySelector('#sliderGrid');

let prevIndex = 0;
let currentIndex = 0;

const width = 335;

function goToSlide() {
  carousel.style.marginLeft = `${currentIndex * width}px`;
  console.log(`${currentIndex * width}px`, currentIndex)

}
 
function goToPrevSlide() {
  if (currentIndex > -4) {
    prevIndex = currentIndex
    currentIndex -= 1;
    goToSlide();
    
    document.querySelectorAll("#dots > p")[-prevIndex].classList.toggle('black')
    document.querySelectorAll("#dots > p")[-currentIndex].classList.toggle('black')
    if (currentIndex <0) {
       document.querySelector('#left').classList.add('black')
    };
    if (currentIndex == -4) {
      document.querySelector('#right').classList.remove('black')
    }
  }
  }
  
  

function goToNextSlide() {
  if (currentIndex < 0) {
    prevIndex = currentIndex
    currentIndex += 1;
    goToSlide();
    document.querySelectorAll("#dots > p")[-prevIndex].classList.toggle('black')
    document.querySelectorAll("#dots > p")[-currentIndex].classList.toggle('black');

    if (currentIndex > -4) {
      document.querySelector('#right').classList.add('black')
    };
    if (currentIndex > -1) {
      document.querySelector('#left').classList.remove('black')
    }
  }
}

document.querySelector('#right').addEventListener('click', () => {
  goToPrevSlide()
});

document.querySelector('#left').addEventListener('click', () => {
  goToNextSlide()
});

document.querySelectorAll("#dots > p").forEach((item, index) => {
  item.addEventListener('click', () => {
   prevIndex = currentIndex
   currentIndex = -index;
   goToSlide();
   document.querySelectorAll("#dots > p")[-prevIndex].classList.toggle('black')
    document.querySelectorAll("#dots > p")[-currentIndex].classList.toggle('black')
    if (currentIndex > -4) {
      document.querySelector('#right').classList.add('black')
    };
    if (currentIndex > -1) {
      document.querySelector('#left').classList.remove('black')
    }
    if (currentIndex <0) {
      document.querySelector('#left').classList.add('black')
   };
   if (currentIndex == -4) {
     document.querySelector('#right').classList.remove('black')
   }
})
})



document.querySelector('#div4').innerHTML = `
     <div class="div4_content">
      <div class="div4_content_main">
        <div class="div4_top_div">
          <div class="topCarousel">
            <div class="div3_top_div_text">Участники турнира</div>
            <div class="carousel_btns">
              <img id="prev" class="mobile_sliderBtn black" src="./img/carousel button left.svg" />
              <p id="slideNumber">1</p>
              <p>/ 6</p>
              <img id="next" class="mobile_sliderBtn black" src="./img/carousel button left.svg" />
        </div>
          </div>
 <section class="container">
      <div class="slide">
            <div class="card">
              <img src="./img/Picture.png" />
              <h1>Хозе-Рауль Капабланка</h1>
              <h2>Чемпион мира по шахматам</h2>
              <button class="details">Подробнее</button>
            </div>
            <div class="card">
              <img src="./img/Picture.png" />
              <h1>Эммануил Ласкер</h1>
              <h2>Чемпион мира по шахматам</h2>
              <button class="details">Подробнее</button>
            </div>
            <div class="card">
              <img src="./img/Picture.png" />
              <h1>Александр Алехин</h1>
              <h2>Чемпион мира по шахматам</h2>
              <button class="details">Подробнее</button>
            </div>
            <div class="card">
              <img src="./img/Picture.png" />
              <h1>Арон Нимцович</h1>
              <h2>Чемпион мира по шахматам</h2>
              <button class="details">Подробнее</button>
            </div>
            <div class="card">
              <img src="./img/Picture.png" />
              <h1>Рихард Рети</h1>
              <h2>Чемпион мира по шахматам</h2>
              <button class="details">Подробнее</button>
            </div>
            <div class="card">
              <img src="./img/Picture.png" />
              <h1>Остап Бендер</h1>
              <h2>Гроссмейстер</h2>
              <button class="details">Подробнее</button>
            </div>
      </div>
    </section>
        </div>
       
      </div>
      
      <section class="string">
        <div class="div1">
          Лёд тронулся, господа присяжные заседатели! • Шахматы двигают вперёд
          не только культуру, но и экономику! • Дело помощи утопающим — дело
          рук самих утопающих! •
        </div>
        <div class="div2">
          Лёд тронулся, господа присяжные заседатели! • Шахматы двигают вперёд
          не только культуру, но и экономику! • Дело помощи утопающим — дело
          рук самих утопающих! •
        </div>
      </section>
      <div class="bottom">
        <p>
          Все персонажи, события и цитаты являются вымышленными и не принадлежат
          создателям сайта. С подробностями можно познакомиться в главе XXXIV
          романа Ильи Ильфа и Евгения Петрова «Двенадцать стульев».
        </p>
      </div>
    </div>
`


let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let count = 1;

next.addEventListener('click', function () {
  count++
  if (count == 7) {
    count = 1
  }
  let items = document.querySelectorAll('.card');
  document.querySelector('.slide').appendChild(items[0])
   document.querySelector("#slideNumber").innerHTML =`${count}`
})

prev.addEventListener('click', function () {
  count--
  if (count == 0) {
    count = 6
  }
  let items = document.querySelectorAll('.card');
  document.querySelector('.slide').prepend(items[items.length - 1])
  document.querySelector("#slideNumber").innerHTML =`${count}`
})

setInterval(() => {
  count++
  if (count == 7) {
    count = 1
  }
  let items = document.querySelectorAll('.card');
  document.querySelector('.slide').appendChild(items[0]);
   document.querySelector("#slideNumber").innerHTML =`${count}`
}, 4000)