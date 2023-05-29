import { FC } from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

import colors from "../../../src/constants/colors";

interface FlashProps extends SvgProps {
  off?: boolean;
}

const Flash: FC<FlashProps> = ({ off = false, ...props }) => (
  <Svg width={17} height={24} viewBox="-1 -1 19 24">
    <Path {...props} d="M17 9H9V0L0 15h7v9L17 9Z" />
    {off && <Path stroke={colors.white} strokeWidth={2} d="m.5 1 16 23" />}
  </Svg>
);
export default Flash;
