import { Box } from "rebass";

/**
 * React component that represents the intro text in the web page. It consists
 * of a title and bullet points that expand on that title.
 * @param props
 * @returns {React.Component}
 * @constructor
 */
const IntroText = props => (
  <Box>
   <Box px={2} mx={2}>
      <h1 className="introText">{props.intro}</h1>
      {props.bullets.map(({ key, href, button, note, icon }) => (
        <div key={key} className="introItem">
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
      .introText {
        color: #ffffff;
        font-family: "Overpass Mono";
        font-size: 1.5em;
        font-weight: 700;
        text-transform: uppercase;
      }

      .introItem {
        margin-bottom: 10px;
        color: #cccbd2;
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

export default IntroText;
