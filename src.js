let week = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat"
],
themes = {
  light: {
    "--text-col": "#fff",
    "--date-col": "#000",
    "--bg": "#f8f8f8",
  },
  dark: {
    "--text-col": "#000",
    "--date-col": "#fff",
    "--bg": "#272727",
  }
}


function addEvent(evt) {
  let sub = evt.title.replace(/\n/g, "</br>");
  let adds = (evt.remarks || "").trim().replace(/\n/g, "</br>");
  let color = evt.color || cols.flamingo;
  let time = (evt.time || "").toUpperCase().split('-');
  let specifidHeight = !isNaN(evt.height);
  let additionalStyles =
      specifidHeight ?`
      height: ${evt.height}px;`: '';
  return `
  <div class="event" style="background-color: ${color};${additionalStyles}">
    <div class="sub ${!time.length?"untimed":""}" style="${specifidHeight?'margin: 0;': ''}">
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
        <div class='start no-arr'>${time[0].split(" ").join("</br>")}</div>
        `
      }
    </div>`:""
    }
  </div>`;
}

function addEvents(list, date, day) {
  let c = "";
  if (date != "untimed") {
  c = `<div class="container">
    <div class="date">
      <div class="week">${week[day-1]}</div>
      <div class="day">${date}</div>
    </div>
    <div class="events">`;
  } else {
    c += `<div class="container" style="display: block;">
    <div class="events pad-left">`
  }
  for (var evt of list) {
    if (evt.ign) continue;
    c += addEvent(evt);
  }
  document.body.innerHTML += c + `
  </div>
  </div>
  <hr>
  `
}

/**
 @param{string} arg
*/
function theme(arg) {
  let root = document.querySelector(':root');
  let mode = arg.toLowerCase() == 'light' ? 'light' : 'dark';
  for (let prop of Object.keys(themes.light)) {
    root.style.setProperty(prop, themes[mode][prop]);
  }
}
