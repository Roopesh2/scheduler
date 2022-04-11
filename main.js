const untimed = [
  {
    title: 'Mathematics HW',
    remarks: `Exercise 16.1 cheyyanam`,
    color: cols.graphite
  },
];
const tomorrow = [
  {
    title: 'Mathematics assignment',
    remarks: `Kazhinja classil thannittulla assignments submit cheyyanam`,
    time: "7:00 AM",
    color: nl.green
  },
  {
    title: 'Chemistry note submission',
    remarks: `Inn (11/4 in) edutha puthiya chapter (s-block elements) inte notes Gsuit classroom il ittittund. Ath ezhuthi submit cheyyanam`,
    time: "8:00 AM",
    color: cn.blue
  },
  {
    ign: 0,
    title: "Physics class",
    remarks: ``,
    time: "8:15 AM - 9:15 AM",
    color: fi.green
  },
  {
    ign: 0,
    title: "Mathematics Class",
    remarks: ``,
    time: "10:00 AM - 11:00 AM",
    color: gb.yellow
  },
  {
    ign: 0,
    title: "Chemistry class",
    remarks: ``,
    time: "12:00 PM - 1:00 PM",
    color: cn.red
  },
  {
    title: 'Mathematics test',
    remarks: `
    <ul>
      <li>Conic sections</li>
      <li>introduction to 3D geometry</li>
    </ul>
    `,
    time: "3:00 PM - 4:15 PM",
    color: fi.blue
  }
];

let overmorrow = [
  {
    
  }
]
// addEvents(untimed, "untimed")
addEvents(tomorrow, 12, 3)
theme("dark")
