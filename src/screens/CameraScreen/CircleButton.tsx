import { FC } from "react";
import Svg, { SvgProps, Circle } from "react-native-svg";
import Animated, { useAnimatedProps } from "react-native-reanimated";

import colors from "../../constants/colors";

interface CircleButtonProps extends SvgProps {
  isRecording: boolean;
  progress: Animated.SharedValue<number>;
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const RADIUS = 34.5;
const CIRCLE_LENGTH = RADIUS * (2 * Math.PI);

const CircleButton: FC<CircleButtonProps> = ({
  progress,
  isRecording,
  ...props
}) => {
  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
    };
  });
  return (
    <Svg width={72} height={72} fill="none" {...props}>
      <Circle cx={36} cy={36} r={30} fill={colors.white} />
      <AnimatedCircle
        cx={36}
        cy={36}
        r={34.5}
        stroke={isRecording ? colors.purple : colors.white}
        strokeWidth={3}
        strokeDasharray={CIRCLE_LENGTH}
        animatedProps={animatedProps}
        strokeLinecap={"round"}
      />
    </Svg>
  );
};
export default CircleButton;
