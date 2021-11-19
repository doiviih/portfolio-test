/*스크롤 이벤트 */
const contWrap = document.querySelector(".contwrap");
const contList = document.querySelectorAll(".contwrap > div");
const gnbMenu = document.querySelectorAll(".gnb li");

const body = document.querySelector("body");

let btnNumber = 0;

let wheelCheck = true;


/*클릭이벤트 구간 */
for(let a = 0; a < gnbMenu.length; a++)
{
    gnbMenu[a].addEventListener("click",(e)=>{

        e.preventDefault();

        for(let i=0; i < gnbMenu.length; i++)
        {
            gnbMenu[i].classList.remove("on");
        }
        gnbMenu[a].classList.add("on");
    
        let contMove = contList[a].offsetTop;

        window.scrollTo({
            top:contMove,
            left:0,
            behavior:"smooth"
        });
    });
}

/*스크롤시 헤더 디자인 변경 */
const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    let scTop = window.scrollY;

    if(scTop >= 120)
    {
        header.classList.add("on");
    }
    else
    {
        header.classList.remove("on");
    }
});

/*스와이퍼 구간 */
var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });

  AOS.init();

