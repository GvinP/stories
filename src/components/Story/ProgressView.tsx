import { FC } from "react";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

import styles from "./styles";

interface ProgressViewProps {
  progress: Animated.SharedValue<number>;
}

const ProgressView: FC<ProgressViewProps> = ({ progress }) => {
  const animatedStyle = useAnimatedStyle(() => ({
    width: `${progress.value * 100}%`,
  }));

  return <Animated.View style={[styles.progressView, animatedStyle]} />;
};

export default ProgressView;
