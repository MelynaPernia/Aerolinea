/*Declarar un array que represeta a los asientos de nuestro avion con false indicando que estos estan vacios */
var airlineSeats = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];
//contador que nos ayuda a rastear el numero de asientos ocupados
var busySeats = 0;
var paintSeats = function(array) {
  var containerSeats = document.getElementById('seats');
  for(var i=0; i<array.length; i++) {
    var seat = document.createElement('div');
    seat.className = 'seats';
    //del primer elemento al cuarto, en nuestro arreglo va ser de 1era clase
    if (i < 4) {
      seat.style.background = 'purple';
    } else {
      seat.style.background = 'yellow';
    }
    containerSeats.appendChild(seat);
  }
};


var reserve = function(){
  var btn = document.getElementById('btn');
  btn.addEventListener('click',chooseZone);
};

var chooseZone = function() {
  var choice = prompt('En que zona prefieres reservar \n 1. Primera Clase \n 2. Económica \n \n Por favor ingresa el número de tu preferencia');
  if (choice == 1) {
    checkFirstClassZone();
  }else if(choice == 2) {
    checkEcomonicClassZone();
  }else {
    alert('Por favor ingresa un número válido')
  }
};

var checkFirstClassZone = function(){
  var zone = 'Primera Clase';
  for(var index = 0; index < 4; index++ ){
    if(airlineSeats[index]== false) {
      airlineSeats[index] = true;
      reserveSeat(index);
      paintTicket(index, zone);
      busySeats++;
      //al reservar un asiento no necesitamos seguir recorriendo nuestro arreglo rompemos el for con el break
      break;
    } else if (index==3 &&airlineSeats[index]==true){
      reasignEconomicZone();
    }
  }

};
var checkEcomonicClassZone = function(){
  var zone = 'Economica';
  for (var index = 4; index < 10; index++) {
    if(airlineSeats[index] == false) {
      airlineSeats[index] = true;
      reserveSeat(index);
      paintTicket(index, zone);
      busySeats++;
      break;
    } else if (index==9 &&airlineSeats[index]==true){
      reasignFirstClassZone(zone);
    }
  }
};

var reserveSeat = function(indexToPaint) {
  var seat = document.getElementsByClassName('seats');
  seat[indexToPaint].textContent = 'Ocupado';
}
var reasignEconomicZone =function(zone) {
  if (busySeats == 10) {
    noSeats();
    nextFlight();
  } else {
    var reasign= confirm(
      'Ya no quedan asientos disponibles en ' + zone + ' \n Quieres reservar en zona económica?'
    );

    if (reasign==true) {
      checkEconomicZone();
    } else {
      nextFlight();
    }
  }

}
var reasignFirstClassZone =function(zone) {
  if (busySeats == 10) {
    noSeats();
    nextFlight();
  }else{
    var reasign= confirm(
      'Ya no quedan asientos disponibles en ' + zone + ' \n Quieres reservar en Primera Clase?'
    );
    if(reasign == true) {
      checkFirstClassZone();
    } else {
      nextFlight();
    }
  }
};
var paintTicket = function (index, zone){
  var containerTickets = document.getElementById('ticktes');
  var ticket = document.createElement('div');
  ticket.className = 'seats';
  var title = document.createElement('p');
  var reservedSeating = document.createElement('p');
  var zoneClass = document.createElement('p');
  title.textContent = 'PASE DE ABORDAR';
  reservedSeating.textContent='No. de asiento:' + (index+1);
  zoneClass.textContent = zone;
  ticket.appendChild(title);
  ticket.appendChild(reservedSeating);
  ticket.appendChild(zoneClass);
  containerTickets.appendChild(ticket);
}
var nextFlight = function(){
  alert('Proximo vuelo');
}
var noSeats = function() {
  alert('Ya no quedan asientos disponibles en este avión');
}
paintSeats(airlineSeats);
reserve();
