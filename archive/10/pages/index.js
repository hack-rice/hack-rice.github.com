import { Provider } from "rebass";
import { injectGlobal } from "styled-components";
import colors from "../styles/colors.json";

// import necessary components
import Head from "../components/head";
import CenterImage from "../components/centerImage";
import IntroText from "../components/introText";
import CardNav from "../components/cardNav";
import About from "../components/about";
import BLM from "../components/blm";
import Covid from "../components/covid";
import Sponsorship from "../components/sponsorship";
import Questions from "../components/faq";
import Links from "../components/links";
import Mlh from "../components/mlh";
import Calendar from "../components/calendar";
import Sponsors from "../components/sponsors";
import Tracks from "../components/tracks";
import Prizes from "../components/prizes"
import HorizontalSplit from "../components/horizontalsplit";

// import necessary contents
import { title as aboutTitle, lines as aboutLines} from "../content/about";
import { title as blmTitle, lines as blmLines} from "../content/blm";
import { title as covidTitle, lines as covidLines} from "../content/covid";
import { title as sponsorshipTitle, bullets as sponsorlinks } from "../content/sponsorship";
import { cards } from "../content/cardNav";
import { title as questionsTitle, questions } from "../content/faq";
import { intro, bullets } from "../content/introText";
import { links } from "../content/links";
import {billLines, billTitle} from "../content/aboutBill";

// Set global body styling.
injectGlobal`
  * { box-sizing: border-box; }
  body { max-width: 85vw; margin: auto; color: #fff; margin-bottom: 2%;}
`;

// Variables for <head>
let title = "HackRice X";
let url = "https://hack.rice.edu";
let ogImage = "../static/hr.png";
let description = "The premier hackathon of the south.";

/**
 * This is the react component that makes up most of the web page. It also bridges
 * the gap between /content and /components, allowing us to reuse components with
 * different content.
 *
 * @returns {React.Component}
 * @constructor
 */

const Home = () => (
  <Provider
    theme={{
      fonts: {
        sans: "'Open Sans', sans-serif",
        mono: "'Overpass Mono', monospace"
      }
    }}
  >
    <Head title={title} description={description} url={url} ogImage={ogImage} />
    <Mlh />
    <HorizontalSplit
      leftSide={<CenterImage pathToImage="../static/hr.png"/>}
      rightSide={<IntroText intro={intro} bullets={bullets}/>}
    />
    {/* <CardNav cards={cards} /> */}
    <About lines={aboutLines} title={aboutTitle} />
    <Covid lines={covidLines} title={covidTitle} />
    {/* <BLM lines={blmLines} title={blmTitle} /> */}
    <Sponsorship bullets={sponsorlinks} title={sponsorshipTitle} />
    {/* <Calendar/> */}
    {/* <Tracks/> */}
    {/* <Prizes/> */}
    {/* <About lines={billLines} title={billTitle} /> */}
    <Questions title={questionsTitle} questions={questions} />
    <Sponsors/>
    <Links links={links} />
    <style jsx global>{`
      html {
        background: ${colors["base"]} !important;
      }
    `}</style>
  </Provider>
);

export default Home;
