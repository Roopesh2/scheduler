const untimed = [
  {
    title: 'Chemistry note submission',
    remarks: `compounds of alkali metals`,
    color: cols.graphite,
    time: "10:00 PM"
  },
];
const tomorrow = [
  {
    title: 'Mathematics assignment',
    remarks: ``,
    time: '7:00 am',
    color: fi.orange,
  },
  {
    title: 'Mathematics test',
    remarks: `Arithmetic Progression`,
    time: '10:00 am - 11:00 am',
    color: fi.sage,
  },
  {
    ign: 1,
    title: 'Chemistry test',
    remarks: `s-block elements`,
    time: "",
    color: cn.blue
  },
  {
    ign: 0,
    title: "Physics Class (Rajani teacher)",
    remarks: `
    discussing numerical problems.
    Chapters:<ul><li>Laws Of Motion</li><li>Work Energy Power</li>
    </ul>`,
    time: "7:30 pm",
    color: cn.blue
  },
   {
     ign: 1,
     title: "chemistry class",
     remarks: ``,
     time: "1:45 PM - 2:45 PM",
     color: gb.rock
   },
  {
    ign: 1,
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
addEvents(tomorrow, 16, 7)
theme("dark")
