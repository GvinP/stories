import { FlashMode } from "expo-camera";
import { Dimensions } from "react-native";
import { SvgProps } from "react-native-svg";

import colors from "./colors";

const { width, height } = Dimensions.get("window");

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

export const STORY_DURATION = 10000;

export const flashModes = [
  FlashMode.off,
  FlashMode.on,
  FlashMode.auto,
  FlashMode.torch,
];

export const flashModeToIcon = {
  [FlashMode.off]: {
    fill: colors.white,
    stroke: colors.white,
    strokeWidth: 2,
    off: true,
  } as SvgProps,
  [FlashMode.on]: {
    fill: colors.white,
    stroke: colors.white,
    strokeWidth: 2,
  } as SvgProps,
  [FlashMode.auto]: {
    fill: "none",
    stroke: colors.white,
    strokeWidth: 2,
  } as SvgProps,
  [FlashMode.torch]: {
    fill: colors.yellow,
    stroke: colors.yellow,
    strokeWidth: 2,
  } as SvgProps,
};
