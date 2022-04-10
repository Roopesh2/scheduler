const tomorrow = [
  {
    title: 'Mathematics assignment',
    remarks: `Kazhinja classil (09/4 in post cheyythath) thannittulla assignments submit cheyyanam`,
    time: "7:00 AM",
    color: cols.sage
  },
  {
    ign: 0,
    title: "Physics class",
    remarks: `Revision: Motion in a straight line`,
    time: "7:00 AM - 8:00 AM",
    color: flatui.orange
  },
  {
    ign: 0,
    title: "Mathematics Class",
    remarks: ``,
    time: "8:15 AM - 9:15 AM",
    color: cols.lavender
  },
  {
    ign: 0,
    title: "Chemistry class",
    remarks: ``,
    time: "",
    color: flatui.blue2
  },
  {
    title: 'Physics test',
    remarks: `
    <ul>
      <li>Motion in a straight line</li>
      <li>Motion in a plane</li>
    </ul>
    `,
    time: "2:00 PM - 3:15 PM",
    color: flatui.purple
  }
];

let overmorrow = [
  {
    title: 'Mathematics test',
    remarks: `
    <ul>
      <li>Conic sections</li>
      <li>introduction to 3D geometry</li>
    </ul>
    `,
    time: "3:00 PM - 4:15 PM",
    col: cols.blueberry
  }
]
addEvents(tomorrow, 11, 2)
addEvents(overmorrow, 12, 3)
theme("light")
