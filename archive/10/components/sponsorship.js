import { Element } from "react-scroll";
import { Box, Flex } from "rebass";
import colors from "../styles/colors.json";
import React from "react";

/**
 * React component that represents the sponsorship info in the web page. 
 * It consists of a title and bullet point links.
 * @param props
 * @returns {React.Component}
 * @constructor
 */
const SponsorInfo = props => (
  <Box px={["2%","5%","7%","9%","11%"]}>
   <Box width="auto" px={2} mx={2} mt={4}>
      <h1 className="SponsorSection">{props.title}</h1>
      {props.bullets.map(({ key, href, button, note, icon }) => (
        <div key={key} className="SponsorLinks">
          <img src={`../static/${icon}`} className="icon" alt="icon"/>
          <a href={href} className="styledlink">
            {button}
          </a>
          <span className="spacer" />
          <span className="note">{note}</span>
        </div>
      ))}
    </Box>

    <style jsx>{`
      .SponsorSection {
        font-family: "Overpass Mono";
        font-size: 1.5em;
        font-weight: 700;
        text-transform: uppercase;
      }
      
      .SponsorLinks {
        margin-bottom: 10px;
      }

      a.styledlink {
        color: #cccbd2;
        text-decoration: none;
        background: rgba(255, 255, 255, 0.1);
        transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
        padding: 4px 5px;
        margin: 4px;
        text-transform: uppercase;
        font-size: 0.85em;
        font-weight: 500;
      }

      a.styledlink:hover {
        color: #191919;
        background: rgba(255, 255, 255, 1);
      }

      .note {
        text-transform: uppercase;
        font-size: 0.8em;
        font-weight: 300;
        font-family: "Overpass Mono";
        color: #cccbd2
      }
      
      .icon {
        width: .85em;
      }

      .spacer {
        margin-right: 5px;
      }

      @media (max-width: 575px) {
        .note {
          display: block;
          margin-top: 1em;
        }
      }
    `}</style>
  </Box>
);


export default SponsorInfo;