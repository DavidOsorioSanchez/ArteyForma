const btnOpenModal = document.getElementById("btnOpenModal");
const reservar = document.getElementById("btnReservar");
const time = document.getElementById("time-input");
const URL = ["http://localhost:3000/events"]
let date = "";
let cites = [];

document.addEventListener("DOMContentLoaded", function () {
    printCalendar()
}); 

const days = document.querySelector(".fc-day");

reservar.addEventListener("click", () => {
  console.log(time.value, date);

  const newCite = {
    title: "Evento",
    start: `${date}T${time.value}`,
    end: `${date}T${time.value}`,
    // time: time.value,
    allDay : false // will make the time show

  };

  cites.push(newCite);
  printCalendar()
  console.log(cites);
});

function printCalendar() {
    var calendarEl = document.getElementById("calendar");

  let calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    initialDate: new Date(),
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
    events: cites,
    selectable: true,
    timeFormat: 'h:mm A',
    //   plugins: [ interactionPlugin ],
    dateClick: function (info) {
      btnOpenModal.click();
      console.log(info);
      date = info.dateStr;
    },
  });

  calendar.render();
}

// async function (){

// }