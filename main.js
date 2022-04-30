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
    title: 'Physics test',
    remarks: `System of particles and rotational motion`,
    time: "6:50 am - 8:15 am",
    color: fi.orange
  },
  {
    ign: 0,
    title: "Physics class",
    remarks: '',
    time: '',
    color: fi.blue
  },
  {
    ign: 1,
    title: "Chemistry test",
    remarks: `Hydrocarbons`,
    time: "7:00 pm - 8:30 pm",
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
addEvents(tomorrow, 1, 1)
theme("dark")
