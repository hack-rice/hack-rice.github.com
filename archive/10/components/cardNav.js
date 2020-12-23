import { Flex, Box } from "rebass";
import * as Scroll from "react-scroll";
let ScrollingLink = Scroll.Link;
import colors from "../styles/colors.json";

/**
 * A component that displays links in cards.
 *
 * @param props
 * @returns {React.Component}
 * @constructor
 */
const CardNav = props => (
  <Flex flexWrap="wrap" mx={-2} pt={2}>
    {props.cards.map(({ key, href, to, title, text, icon }) =>
      href != undefined ? (
        <Box key={key} width={[1, 1 / 2, 1 / 3]}>
          <a href={href}>
            <div className="card">
              <h3>
                <img src={icon} />
                <span className="spacer" />
                <span className="cardTitle">{title}</span>
              </h3>
              <p>{text}</p>
            </div>
          </a>
        </Box>
      ) : (
        <Box key={key} width={[1, 1 / 2, 1 / 3]}>
          <ScrollingLink to={to} smooth={true} duration={500}>
            <div className="card">
              <h3>
                <img src={icon} />
                <span className="spacer" />
                <span className="cardTitle">{title}</span>
              </h3>
              <p>{text}</p>
            </div>
          </ScrollingLink>
        </Box>
      )
    )}
    <style jsx>{`

      a {
        text-decoration: none;
      }

      .card {
        border: 1px solid ${colors["gray"][1]};
        color: ${colors["gray"][1]};
        font-family: "Overpass Mono", monospace;
        margin: 10px;
        min-height: 110px !important;
        padding: 18px 18px 18px;
        text-align: left;
        text-decoration: none;
        transition: border-color 0.3s ease-in-out, background 0.3s ease-in-out, transform 0.3s ease-in-out;
      }

      .cardTitle {
        text-transform: uppercase;
      }

      .card:hover {
        background: rgba(255, 255, 255, 0.1);
        cursor: pointer;
        transform: scale(1.03);
      }

      .card h3 {
        margin: 0;
        font-size: 18px;
      }

      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        font-weight: 300;
      }
      
      .spacer {
        margin-right: 5px;
      }
    `}</style>
  </Flex>
);

export default CardNav;
