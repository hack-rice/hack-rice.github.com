import { Box, Image } from "rebass";

/**
 * A react component that displays an image in the middle of the page.
 *
 * @param props
 * @returns {React.Component}
 * @constructor
 */
const CenterImage = props => (
  <Box>
    <Image
      src= "../static/blueH.png"
      css={{
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "10%",
        marginBottom: "10%",
        width: "25%"
      }}
    />

    <style jsx global>{`
      @media (max-width: 575px) {
        .note {
          display: block;
          margin-top: 1em;
        }
      }
    `}</style>
  </Box>
);

export default CenterImage;
