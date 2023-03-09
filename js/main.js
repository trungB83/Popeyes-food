$(document).ready(function () {
    const listCarousel = document.getElementsByClassName("carousel-item");
    $(".prev").click(function(){
        for(let i = 0; i < listCarousel.length; i++){
            if(listCarousel[i].classList.contains("active")){
                if(i == 0){
                    listCarousel[i].classList.remove("active");
                    listCarousel[listCarousel.length - 1].classList.add("active");
                    break;
                }
                else{
                    listCarousel[i].classList.remove("active");
                    listCarousel[i-1].classList.add("active");
                    break; 
                }   
            }
            
        }
    });
    $(".next").click(function(){
        for(let i = 0; i < listCarousel.length; i++){
            if(listCarousel[i].classList.contains("active")){
                if(i == listCarousel.length - 1){
                    listCarousel[i].classList.remove("active");
                    listCarousel[0].classList.add("active");
                    break;
                }
                else{
                    listCarousel[i].classList.remove("active");
                    listCarousel[i+1].classList.add("active");
                    break;
                }
            }
        }
    });
    $.each($(".bar ul li"), function (indexInArray, valueOfElement) { 
        valueOfElement.onclick = function(){
           $(".bar ul li").removeClass("active");
           $(this).addClass("active");
           $(".carousel-item").removeClass("active");
           document.querySelectorAll(".carousel-item")[indexInArray].classList.add("active");
        };
   });
    function autoSlide(){
		let arrDot = document.querySelectorAll(".bar ul li");
		for(let i = 0; i < arrDot.length; i++){
			if(arrDot[i].classList.contains("active")){
				if(i == arrDot.length -1){
					arrDot[0].onclick();
					break;
				}
				else{
					arrDot[i+1].onclick();
					break;
				}
			}
        }
		setTimeout(autoSlide, 2500);
	}
	autoSlide();
});