import { Box, Flex } from "rebass";
import React from "react";

/**
 * A react component that displays two components side by side.
 *
 * @param props
 * @returns {React.Component}
 * @constructor
 */
const HorizontalSplit = props => (
<Flex flexWrap="wrap" justifyContent="center">
    <Box width={[1,.75,,1/2,]} px={["2%",0,0,0,0]}>
        {props.leftSide}
    </Box>
    <Box width={[1,,,1/2,]} px={["2%","5%","7%",0,0]} alignSelf="center" pl="2%">     
        {props.rightSide}
    </Box>
</Flex>

);

export default HorizontalSplit;
