const untimed = [
  {
    title: 'Chemistry note submission',
    remarks: `compounds of alkali metals`,
    color: gc.graphite,
    time: "10:00 PM"
  },
];
const tomorrow = [
  {
    ign: 1,
    title: 'Mathematics note',
    remarks: ``,
    time: "7:00 am",
    color: gc.tomato
  },
  {
    ign: 0,
    title: 'Chemistry class',
    remarks: ``,
    time: "7:00 am - 8:00 am",
    color: gc.tomato
  },
  {
    ign: 0,
    title: "Chemistry class",
    remarks: '',
    time: '8:15 am - 9:15 am',
    color: fi.green2
  },
  {
    ign: 0,
    title: "Chemistry test",
    remarks: ``,
    time: "7:00 pm - 8:00 pm",
    color: fi.orange
   },
   {
    ign: 1,
    title: "Chemistry class",
    remarks: `Group leaders avaravarude group members in class edukkanam`,
    time: "",
    color: fr.light
   },
];

let overmorrow = [
  {
    
  }
]
// addEvents(untimed, "untimed")
addEvents(tomorrow, 30, 7)
theme("light")
