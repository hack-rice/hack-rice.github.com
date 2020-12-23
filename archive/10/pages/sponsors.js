/**
 * This page exists to redirect to the sponsorship package.
 */

import { Provider } from "rebass";
import { injectGlobal } from "styled-components";
import colors from "../styles/colors.json";
import React from "react";

// import necessary components
import Head from "../components/head";
import CenterImage from "../components/centerImage";
import IntroText from "../components/introText";

// import necessary contents
import { intro, bullets } from "../content/redirectText";


// Set global body styling.
injectGlobal`
  * { box-sizing: border-box; }
  body { max-width: 85vw; margin: auto; color: #fff; margin-bottom: 2%;}
`;

// Variables for <head>
let title = "HackRice X";
let url = "https://hack.rice.edu";
let ogImage = "../static/blueH.png";
let description = "The premier hackathon of the south.";
let addMeta = <meta httpEquiv="refresh" content="0; URL='../static/sponsorships.pdf'" />;

/**
 * This is most of the web page that will appear while the user is being
 * redirected to the sponsorship package.
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
    <Head title={title} description={description} url={url} ogImage={ogImage} addMeta={addMeta} />
    <CenterImage pathToImage = "../static/blueH.png" />
    <IntroText intro = { intro } bullets = { bullets } />
    <style jsx global>{`
      html {
        background: ${colors["base"]} !important;
      }
    `}</style>
  </Provider>
);

export default Home;
