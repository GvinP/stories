import { LayoutRectangle, View } from "react-native";
import {
  BlurMask,
  Canvas,
  LinearGradient,
  Rect,
  useTouchHandler,
  vec,
} from "@shopify/react-native-skia";
import { Text } from "react-native";
import { memo, useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import colors from "../../constants/colors";
import styles from "./styles";

const SHADOW_BLOCK_WIDTH = 60;
const SHADOW_BLOCK_HEIGHT = 60;

const TypesSlider = () => {
  const [layout, setLayout] = useState<LayoutRectangle | null>(null);
  const translateX = useSharedValue(0);
  const onTouch = useTouchHandler({
    onActive: (event) => {
      translateX.value = event.x;
    },
  });

  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View
      onLayout={({ nativeEvent }) => setLayout(nativeEvent.layout)}
      style={styles.sliderContainer}
    >
      <Animated.View style={[styles.textContainer, style]}>
        <Text style={styles.text}>Прямой эфир</Text>
        <Text style={styles.text}>История</Text>
        <Text style={styles.text}>Пост</Text>
      </Animated.View>
      {!!layout && (
        <Canvas style={styles.canvas} onTouch={onTouch}>
          <Rect
            x={layout.width - SHADOW_BLOCK_WIDTH}
            y={0}
            width={SHADOW_BLOCK_WIDTH}
            height={SHADOW_BLOCK_HEIGHT}
          >
            <LinearGradient
              colors={colors.gradient}
              start={vec(layout.width - 0, layout.width - SHADOW_BLOCK_WIDTH)}
              end={vec(
                layout?.width - SHADOW_BLOCK_WIDTH,
                layout?.width - SHADOW_BLOCK_WIDTH
              )}
            />
            <BlurMask blur={1} style="normal" />
          </Rect>
          <Rect
            x={layout.width - SHADOW_BLOCK_WIDTH / 2}
            y={0}
            width={SHADOW_BLOCK_WIDTH / 2}
            height={SHADOW_BLOCK_HEIGHT}
          />
          <Rect
            x={0}
            y={0}
            width={SHADOW_BLOCK_WIDTH}
            height={SHADOW_BLOCK_HEIGHT}
          >
            <LinearGradient
              colors={colors.gradient.reverse()}
              start={vec(0, SHADOW_BLOCK_HEIGHT)}
              end={vec(SHADOW_BLOCK_WIDTH, SHADOW_BLOCK_WIDTH)}
            />
            <BlurMask blur={1} style="normal" />
          </Rect>
          <Rect
            x={0}
            y={0}
            width={SHADOW_BLOCK_WIDTH / 2}
            height={SHADOW_BLOCK_HEIGHT}
          />
        </Canvas>
      )}
    </View>
  );
};

export default memo(TypesSlider);
