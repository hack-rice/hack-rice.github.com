/**
 * The title of the section.
 * @type {string}
 */
export const title = "QUESTIONS & ANSWERS";

/**
 * A list of questions and answers.
 * @type {{question : string, answer : string}[]}
 */
export const questions = [
  {
    question: "How long is HackRice?",
    answer:
      "The event is held from Friday, September 18th to Sunday, September 20th. Students hack for 36 hours!"
  },
  {
    question: "How many hackers attend HackRice? Where are they from?",
    answer:
      "We expect around 400 hackers from schools around the world!"
  },
  {
    question: "How many hackers per team are permitted?",
    answer:
      "Team are limited to 4 hackers. That being said, you don't have to have 4 hackers to compete."
  },
  {
    question: "Is there a HackRice Facebook page?",
    answer: (
      <>
        Yes there is! Click{" "}
        <a className="styledlink" href="https://www.facebook.com/hackrice/">
          <b>here</b>
        </a>{" "}
        to access it!
      </>
    )
  },
  {
    question: "Who is eligible to participate in HackRice?",
    answer: (
      <>
        As a virtual event this year, we are excited to open up HackRice X to a larger and more diverse pool of hackers! Any current student over the age of 15 is eligible to apply to HackRice.
        Since we are an MLH member event, participants must also accept the{" "}
        <a
          className="styledlink" link="#ffffff" vlink="#ffffff" alink="#ffffff"
          href="http://static.mlh.io/docs/mlh-code-of-conduct.pdf"
        >
          <b>MLH Code of Conduct</b>
        </a>.
      </>
    )
  },
  {
    question: "What are the acceptance criteria?",
    answer:
      "All Rice students are guaranteed acceptance. For Non-Rice students, we ask for some background information so that we can invite people who have demonstrated interest and skill. Above all else, we're looking for passion and excitement!"
  },
  {
    question: "What do I need to participate?",
    answer:
      "Please ensure that you have a reliable wifi connection and a webcam to record your pitch and presentation for judging. You will also need a computer and whatever software you feel might be necessary for development. We want everyone to have fun and get the most out HackRice, so please reach out if you have any difficulty obtaining the resources you need!"
  },
  {
    question: "What if I'm not very experienced?",
    answer:
      "We do our best to point people in the right direction and use tools and languages with a low barrier to entry. You will have access to our mentors and the HackRice team at all times! We will also be having workshops the week before the hackathon!"
  },
  {
    question: "Can Rice alumni attend?",
    answer:
      "Rice alumni are eligible to attend the event to hack or mentor other students, but alumni submissions will not be eligible for prizes."
  },
  {
    question: "What if I don't have a team before the event?",
    answer:
      "You don't have to form a team before the event, or at all. At the start of the event, we will provide plenty of time to break out and form a new one if you choose to."
  },
  {
    question: "How can I stay connected in a virtual hackathon?",
    answer:
      "We will have a dedicated Zoom for activities and socializing throughout the event, as well as Slack and Discord channels. The HackRice team is also working hard to prepare lots of fun events, workshops, raffles, and so on!"
  },
  {
    question: "When does the event start? When will it end?",
    answer: "Opening ceremonies will start at 7pm on September 18, and the event should be completely finished by 3pm on September 20."
  }
].map(item => {
  item.key = `faq-${item.question}`;
  return item;
});
