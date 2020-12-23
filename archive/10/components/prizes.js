import { places, trackWinners, title, note } from "../content/prizes";
import { Box, Flex } from "rebass";
import { Element } from "react-scroll";
import colors from "../styles/colors.json";

const Prizes = () => (
    <Element name="prizes">
        <Box bg={"#ffffff"} color={colors["base"]}>
            <Box mx={4} px={3} pt={4} mt={4}>
                <h2 className="title" style={{"marginBottom":"0.5em"}}>{title}</h2>
            </Box>
            <Box mx={4} px={3}>
                <p className="note">{note}</p>
            </Box>
            
            <Flex justifyContent="flexStart" flexWrap="wrap" pb={4}>
                {places.map(({ place, prize, key }) => (
                    <div className="prize">
                        <h3 className="itemTitle">{place}</h3>
                        <span className="item">{prize}</span>
                    </div>
                ))}
                {trackWinners.map(({ place, prize, key }) => (
                    <div className="prize">
                        <h3 className="itemTitle">{place}</h3>
                        <span className="item">{prize}</span>
                    </div>
                ))}
            </Flex>
        </Box>
        <style jsx>{`

    h3 {
        margin-bottom: 5px;
    }
    
    .title {
        display: inline-block;
        text-transform: uppercase;
        color: ${colors["white"]};
        background: ${colors["base"]};
        padding: 2px 10px;
      }
    
    .note {
        font-size: .8em;
      }

    .prize {
        border: 2px solid rgba(255, 255, 255, 0.1);
        color: ${colors["base"]};
        padding: 10px 25px;
        transition: border 0.3s ease-in-out, transform 0.3s ease-in-out,
          background 0.3s ease-in-out;
          margin: 0.8em 0.8em 0.8em 1.2em;
      }

    .prize:hover {
        transform: scale(1.03);
        border: 2px solid ${colors["base"]};
    }

    .itemTitle {
        margin-top: 5px;
        display: inline-block;
        font-size: 1.2em;
        font-weight: bold;
        color: ${colors["base"]};
    }

    .item {
          display: block;
          margin-bottom: 8px;
    
    }
    
    `}</style>
    </Element>
);

export default Prizes;
