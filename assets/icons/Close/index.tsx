import Svg, { SvgProps, Path } from "react-native-svg";

import colors from "../../../src/constants/colors";

const Close = (props: SvgProps) => (
  <Svg width={14} height={14} fill="none" {...props}>
    <Path
      fill={colors.white}
      d="m7 5.587 4.95-4.95 1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.415l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.637 7 5.587Z"
    />
  </Svg>
);
export default Close;
