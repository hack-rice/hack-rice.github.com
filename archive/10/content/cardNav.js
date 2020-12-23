/**
 * The list that contains all of the card data.
 * @type {{icon : string, title : string, href : string, text : string}[]}
 */
export const cards = [
  {
    icon: "https://icon.now.sh/send/ffffff",
    title: "Submissions",
    href: "https://hackrice-9.devpost.com/",
    text: "Submit your project through the HackRice Devpost →"
  },
  {
    icon: "https://icon.now.sh/compose/ffffff",
    title: "Rice Registration",
    href: "https://forms.gle/wLN8cmDXp9nnJ18q6",
    text: "Are you a Rice student? Register for HackRice X →"
  },
  {
    icon: "https://icon.now.sh/external/ffffff",
    title: "(Non-Rice) Portal",
    href: "https://hrx-registration.herokuapp.com",
    text: "Registration has closed for students outside Rice! Visit our registration portal →"
  },
  // {
  //   icon: "https://icon.now.sh/people/ffffff",
  //   title: "Help-Q",
  //   href: "https://hackrice-helpq.herokuapp.com/",
  //   text: "Get help from a mentor →"
  // },
  // {
  //   icon: "https://icon.now.sh/attach_money/ffffff",
  //   title: "Sponsor",
  //   href: "../static/sponsorships.pdf",
  //   text: "Thanks for your interest! Check out our sponsorship packet →"
  // },
  {
    icon: "https://icon.now.sh/calendar/ffffff",
    title: "Schedule",
    to: "calendar",
    text: "Find out when hacking begins and ends, and more →"
  },
  {
    icon: "https://icon.now.sh/question_answer/ffffff",
    title: "FAQs",
    to: "faq",
    text: "First timer? Most of your inquiries are answered →"
  },
  {
    icon: "https://icon.now.sh/done_all/ffffff",
    title: "Tracks & Challenges",
    to: "tracks",
    text: "Complete a track or compete to win a sponsor challenge →"
  },
  {
    icon: "https://icon.now.sh/casino/ffffff",
    title: "Prizes",
    to: "prizes",
    text: "What can you win at HackRice? Worth a look →"
  },
  {
    icon: "https://icon.now.sh/phone/ffffff",
    title: "Contact",
    href: "mailto:hack@rice.edu",
    text: "Have a question? Reach out via email →"
  },
  {
    icon: "https://icon.now.sh/slack/ffffff",
    title: "Slack",
    href: "https://join.slack.com/t/hackrice9/shared_invite/enQtNzUwMjg3MzAyMjQ2LWExOGI4YjQ0NTk3ZWMzZThiNzczMTgxMTAxYjhiMTkzYTVlZWQ5ODU2NDllM2YyNmM5NGYzZmZlODYyZmJkOGY",
    text: "Want to stay connected with the event? Join our Slack channel →"
  },
  // {
  //   icon: "https://icon.now.sh/lightbulb_outline/ffffff",
  //   title: "Forum",
  //   href: "https://rice-forum.herokuapp.com",
  //   text: "Have an awesome hackathon idea? Share it on Forum →"
  // },
  // {
  //   icon: "https://icon.now.sh/accessibility/ffffff",
  //   title: "Find a Team",
  //   href: "https://crowdforge.io/hackathons/hackrice9",
  //   text: "Looking for a team to hack with? Click here →"
  // },
  {
    icon: "https://icon.now.sh/help_outline/ffffff",
    title: "Need help?",
    href: "https://m.me/hackrice",
    text: "If you're having an urgent problem, message us! →"
  }
].map(card => {
  card.key = `card-${card.title}`;
  return card;
});