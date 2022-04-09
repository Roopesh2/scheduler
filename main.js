function addEvent(evt) {
  let sub = evt.title;
  let adds = evt.remarks || "";
  let color = evt.color || cols.flamingo;
  let time = evt.time.split('-');
  return `
  <div class="event" style="background-color: ${color};">
    <div class="sub">
      <p class='header'>${sub}</p>
      <div class='adds'${time[0]?.length?'':"style='width:100%;'"}>
        ${adds}
      </div>
    </div>
    ${
     time.length?
    `<div class="time">
      ${
        time.length == 2 ?
        `<div class='start'>${time[0]}</div>
         <div class='end'>${time[1]}</div>`
        : `
        <div class='start no-arr'>${time[0]}</div>
        `
      }
    </div>`:""
    }
  </div>`;
}
let week = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat"
]

function addEvents(list, date, day) {
  let c = `
  <div class="container">
    <div class="date">
      <div class="week">${week[day-1]}</div>
      <div class="day">${date}</div>
    </div>
    <div class="events">
  `
  for (var evt of list) {
    if (evt.ign) continue;
    c += addEvent(evt);
  }
  document.body.innerHTML += c + `
  </div>
  </div>
  `
}

const tomorrow = [
  {
    ign: 1,
    title: "Physics class",
    remarks: `Motion in a Plane lession ile ella derivations um padikkanam`,
    time: "10:30 AM",
    color: cols.sage
  },
  {
    title: "Mathematics class",
    remarks: "",
    time: "8:30 AM - 9:30 AM",
    color: flatui.sage
  },
  {
    ign: 1,
    title: "Chemistry",
    remarks: `Kurach chodhya`,
    time: "",
    color: cols.orange
  },
  {
    
    title: "Chemistry test",
    remarks: `Organic chemistry`,
    time: "7:30 PM - 8:45 PM",
    color: flatui.yellow
  },
];

let today = [
  {
    title: "Chemistry HW",
    adds: ``,
    time: "9 PM",
    col: cols.blueberry
  }
]
//addEvents(today, 8, 6)
addEvents(tomorrow, 9, 7)
