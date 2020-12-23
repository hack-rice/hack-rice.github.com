import Link from "next/link";
import { Box, Flex, Image, Tooltip, Text } from "rebass";
import colors from "../styles/colors.json";
import { title, files } from "../content/sponsors";
import styled from "styled-components";

const CustomTooltip = styled(Tooltip)`
  &::before {
    white-space: normal;
    width: 350px;
    padding: 1.5em;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    background-color: rgba(255, 255, 255, 1);
    color: ${colors["base"]};
  }

  &::after {
    border-top-color: rgba(255, 255, 255, 1) !important;
  }
`;

const Sponsors = () => (
  <Flex
    flexWrap="wrap"
    width={1}
    mb={4}
    css={{ background: colors['base'] }}
  >
    <Flex
      flexWrap="wrap"
      flexDirection="row"
      justifyContent="space-around"
      alignItems="center"
      width={1}
      mx={3}
    >
      <h2 className="title">{title}</h2>
      {files.map(
        ({ name, height, link, blurb }) =>
          blurb === undefined ? (
            <a href={link}>
              <Image
                style={{ margin: "2em 1em", height: `${height}` }}
                src={`../static/sponsors/${name}`}
              />
            </a>
          ) : (
            <CustomTooltip text={blurb}>
              <a href={link}>
                <Image
                  style={{ margin: "2em 1em", height: `${height}` }}
                  src={`../static/sponsors/${name}`}
                />
              </a>
            </CustomTooltip>
          )
      )}
    </Flex>
    <style jsx>
      {`
        .title {
          display: inline-block;
          text-transform: uppercase;
          color: ${colors["base"]};
          background: ${colors["white"]};
          padding: 2px 10px;
          margin: unset;
          height: 40px;
          font-family: "Overpass Mono", monospace;
        }
      `}
    </style>
  </Flex>
);

export default Sponsors;
