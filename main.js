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
    color: gc
  },
  {
    ign: 0,
    title: 'Physics class',
    remarks: ``,
    time: "7:00 am - 8:00 am",
    color: fi.sage
  },
  {
    ign: 0,
    title: "Mathematics class",
    remarks: '',
    time: '8:15 am - 9:15 am',
    color: fi.yellow2
  },
  {
    ign: 1,
    title: "Chemistry test",
    remarks: `Hydrocarbons`,
    time: "7:00 pm - 8:30 pm",
    color: fi.orange
   },
   {
    ign: 0,
    title: "Chemistry class",
    remarks: ``,
    time: "10:00 am - 11:00 am",
    color: cn.red
   },
];

let overmorrow = [
  {
    
  }
]
// addEvents(untimed, "untimed")
addEvents(tomorrow, 2, 2)
theme("dark")
