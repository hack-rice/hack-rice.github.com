import { Element } from "react-scroll";
import { Box, Flex } from "rebass";
import colors from "../styles/colors.json";
import React from "react";

/**
 * A react component that describes what our event is about. Contains a title and
 * an array of lines.
 *
 * @param props
 * @returns {React.Component}
 * @constructor
 */
const Covid = props => (
  <Element name="covid" style={{ overflowX: "hidden" }}>
    <Flex mx={2} mt={4} flexWrap="wrap" px={["2%","5%","7%","9%","11%"]}>
      <Box width={1} mx={2}>
        <h2 className="title">{props.title}</h2>
      </Box>
      <Box width={[1]} mx={2} mb={1}>
        {props.lines.map(ln => <p>{ln}</p>)}
      </Box>
      <Flex justifyContent="center" width={[1]}>
      </Flex>
      <style jsx>{`
        @import url("https://rsms.me/inter/inter-ui.css");

        p {
          font-weight: 300;
          font-size: 1em;
          line-height: 1.6em;
          color: #cccbd2;
        }

        p strong {
          font-weight: 400 !important;
        }

        .title {
          display: inline-block;
          text-transform: uppercase;
          color: ${colors["gray"][0]};
          margin: unset;
          font-family: "Overpass Mono", monospace;
        }
      `}</style>
    </Flex>
  </Element>
);

export default Covid;