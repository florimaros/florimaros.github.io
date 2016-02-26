"use strict"
var resume = document.getElementById("resume")
//kivalasztja a resume id-val rendelkezo dom elemet
resume.addEventListener("click", function (event) {
//resumera raktunk egy esemenyfigyelot
  if (event.target.classList.contains("barmi")) {
//ha a resume-n belul barmire rakattintasz az lesz a target
//ha ez a target tartalmazza a barmi osztalyt akkor lesz igaz a feltetel
    if (event.target.nextElementSibling.style.display==="none") {
//ha true akkor az eventtarget kovetkezo testver elemenek
//a stilusaban a display propertiban megnezi h none-e
      event.target.nextElementSibling.style.display="block"
//ha none akkor beallitja block-ra(ha latszik rejtse el, ha nem akkor jelenitse meg)
    }
    else {
      event.target.nextElementSibling.style.display="none"
//ha nem volt elrejtve rejtsuk el      
    }
  }

})
