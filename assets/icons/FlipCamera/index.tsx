import Svg, { SvgProps, Path } from "react-native-svg";

import colors from "../../../src/constants/colors";

const FlipCamera = (props: SvgProps) => (
  <Svg width={22} height={22} fill="none" {...props}>
    <Path
      fill={colors.white}
      d="m20.124 16.15.442-.093a.702.702 0 1 1 .292 1.373l-1.602.34a1.17 1.17 0 0 1-1.388-.902l-.34-1.601a.701.701 0 0 1 1.372-.291l.075.348A9.07 9.07 0 0 0 6.085 3.377c-.015.01-.029.022-.044.031a.703.703 0 0 1-.77-1.175l.007-.004-.002-.004A10.427 10.427 0 0 1 11 .523C16.786.523 21.477 5.214 21.477 11a10.426 10.426 0 0 1-1.353 5.15ZM12.5 6.196v.001a.699.699 0 0 1 .536.25l1.414 1.695h1.097a1.172 1.172 0 0 1 1.172 1.172v5.343a1.172 1.172 0 0 1-1.172 1.172h-9.14a1.172 1.172 0 0 1-1.173-1.172V9.313A1.172 1.172 0 0 1 6.406 8.14H7.58l1.416-1.688.005.004a.702.702 0 0 1 .523-.261H12.5ZM8.45 9.291l-.014.015a.716.716 0 0 1-.03.032l-.007.007a.7.7 0 0 1-.493.202H7.11a.469.469 0 0 0-.468.469v3.937a.469.469 0 0 0 .468.469h7.735a.469.469 0 0 0 .469-.469v-3.937a.469.469 0 0 0-.47-.47h-.773l-.03-.002h-.01a.704.704 0 0 1-.567-.39l-1.296-1.552h-2.3L8.45 9.292Zm4.894 2.225a2.344 2.344 0 1 1-4.689 0 2.344 2.344 0 0 1 4.689 0Zm-3.281 0a.938.938 0 1 0 1.875 0 .938.938 0 0 0-1.876 0ZM11 20.07a9.027 9.027 0 0 0 4.956-1.473l.006.01.02-.015a.703.703 0 1 1 .672 1.228A10.426 10.426 0 0 1 11 21.477C5.214 21.477.523 16.787.523 11a10.427 10.427 0 0 1 1.355-5.154l-.439.093a.7.7 0 0 1-.291-1.37l1.597-.34a1.167 1.167 0 0 1 1.384.9l.34 1.6a.7.7 0 1 1-1.37.29l-.072-.345A9.07 9.07 0 0 0 11 20.07Z"
    />
  </Svg>
);
export default FlipCamera;
