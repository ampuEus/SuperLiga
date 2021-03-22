function generateCalendar(carouselItem, indicatorItem, data) {
  for (let i = 0; i < data.length; i++) {
    indicatorItem[i].setAttribute("data-bs-slide-to", i)

    var jornada = carouselItem[i].getElementsByClassName("jordana-name-dinamic")[0];
    jornada.textContent = data[i].Jornada;

    var col1 = carouselItem[i].getElementsByClassName("col1")[0];
    var childs = col1.childNodes;
    childs[1].textContent = data[i].Encuentro1;
    childs[3].textContent = data[i].Encuentro2;
    childs[5].textContent = data[i].Encuentro3;

    var col2 = carouselItem[i].getElementsByClassName("col2")[0];
    var childs = col2.childNodes;
    childs[1].textContent = data[i].Encuentro4;
    childs[3].textContent = data[i].Encuentro5;
    childs[5].textContent = data[i].Encuentro6;

    var col3 = carouselItem[i].getElementsByClassName("col3")[0];
    var childs = col3.childNodes;
    childs[3].textContent = data[i].Descanso;
  }
}

// class="active" aria-current="true"
// .prop("color", "FF0000");

var calendarIndicators = document.getElementsByClassName("calendar-indicators-dinamic")[0];
var indicatorItem = calendarIndicators.children[0];
var indItem_arr = [];
indItem_arr.push(indicatorItem);


var calendarContainer = document.getElementsByClassName("calendar-container-dinamic")[0];
var carouselItem = document.getElementsByClassName("carousel-item")[0];
var carItem_arr = [];
carItem_arr.push(carouselItem);

var data;
$.ajax({
  type: "GET",
  url: "data/Encuentros.csv",
  dataType: "text",
  success: function(response) {
    data = $.csv.toObjects(response);
    for (let i = 1; i < data.length; i++) {
      clone = indicatorItem.cloneNode(true);
      calendarIndicators.append(clone);
      indItem_arr.push(clone);

      clone = carouselItem.cloneNode(true);
      calendarContainer.append(clone);
      carItem_arr.push(clone);
    }
    indicatorItem.classList.add("active");
    indicatorItem.setAttribute("aria-current", "true");
    carouselItem.classList.add("active");
    generateCalendar(carItem_arr, indItem_arr, data);
  }
});
