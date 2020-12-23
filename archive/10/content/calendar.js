export const title = "Schedule";
export const note = "Please refer to your Hacker Handbook (emailed to you) for passwords and more details."

export const dayOne = "Friday, 9/18";
export const dayTwo = "Saturday, 9/19";
export const dayThree = "Sunday, 9/20";

export const friday = [
  {
    time: "5-7 PM CT",
    title: "Check-in & Networking",
    // href: "https://hack.rice.edu", //example
    detail: "Check in and hang out with fellow hackers and our sponsors!"
  },
  {
    time: "7 PM CT",
    title: "Opening Ceremony",
    detail:
      "The event will formally begin with a bit about rules & guidelines, and a word from sponsors."
  },
  {
    time: "7:30 PM CT",
    title: "Dinner & Form Teams",
    detail:
      "Grab a bite together virtually, and meet other hackers to form teams (if you haven't already)."
  },
  {
    time: "8 PM CT",
    title: "Hacking Begins!",
    detail: "Start building your project!"
  },
  {
    time: "8:30 PM CT",
    title: "First-Timers Track Workshop",
    detail:
      "Our first workshop for the First-Timers track."
  },
  {
    time: "10 PM CT",
    title: "Workshop 2",
    detail:
        "Description"
  },
  {
    time: "11:30 PM CT",
    title: "Late Night Snack",
    detail:
        "Join us with a late night snack for a fun activity with fellow hackers and a raffle!"
  }
].map(item => {
  item.key = `item-${item.title}`;
  return item;
});

export const saturday = [
  {
    time: "9 AM CT",
    title: "Breakfast",
    detail: "Hop on for a virtual breakfast, mini-event, and a raffle!"
  },
  {
    time: "10 AM CT",
    title: "Workshop 3",
    detail: "Description"
  },
  {
    time: "12 PM CT",
    title: "Lunch and Panel",
    detail: "Grab lunch and tune in for our Diversity in Tech panel! Our panelists will share and discuss their experiences, advice, and more!"
  },
  {
    time: "2:30 PM CT",
    title: "Google Tech Talk",
    detail: "Come join us for a live tech talk by Google engineers, Ryan Matsumoto and Andrea Wu!"
  },
  {
    time: "7:30 PM CT",
    title: "Dinner",
    detail: "Eat dinner together virtually and participate in an activity and raffle!"
  },
  {
    time: "11:30 PM CT",
    title: "Late Night Snack",
    detail:
        "Another late night snacking session, plus a mini-event and a raffle!"
  }
].map(item => {
  item.key = `item-${item.detail}`;
  return item;
});

export const sunday = [
  {
    time: "9:00 AM",
    title: "Hacking Ends!",
    detail: "Submissions close on DevPost."
  },
  {
    time: "9:30 AM",
    title: "Judging Begins",
    detail: "Judging commences!"
  },
  {
    time: "10:00 AM",
    title: "Guest Speaker",
    detail: "While our judges are busying reviewing submissions, join us for our guest speaker, Dr. Greg Davis, principal technologist at NASA-JPL!"
  },
  {
    time: "11:45 AM",
    title: "Raffle and Top 5 Teams",
    detail: "Don't miss our final raffle, and we'll also be announcing the top 5 finalists!"
  },
  {
    time: "12:00 PM",
    title: "Finalists Judging",
    detail: "The top 5 projects will present and demo live!"
  },
  {
    time: "1:15 PM",
    title: "Closing Ceremony",
    detail: "Winners will be announced and prizes awarded"
  },
  {
    time: "2 PM",
    title: "End!",
    detail: "Hope you had a wonderful event, and we look forward to HackRice 11 :)"
  }
].map(item => {
  item.key = `item-${item.detail}`;
  return item;
});
