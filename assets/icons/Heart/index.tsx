import Svg, { SvgProps, Path } from "react-native-svg";

const Heart = (props: SvgProps) => (
  <Svg width={20} height={19} viewBox="-1 -1 22 21">
    <Path
      {...props}
      d="M10.001 1.529a5.998 5.998 0 0 1 8.242.228 6 6 0 0 1 .236 8.236l-8.48 8.492-8.478-8.492a6 6 0 0 1 8.48-8.464Z"
    />
  </Svg>
);
export default Heart;
