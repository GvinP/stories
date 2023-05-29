import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    width: "100%",
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonTopContainer: {
    position: "absolute",
  },
  circleButtonContainer: {
    position: "absolute",
    bottom: 88,
    alignSelf: "center",
  },
  circleButton: {
    transform: [{ rotate: "90deg" }],
  },
  buttonIcon: {
    padding: 10,
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 4,
  },
  sliderContainer: {
    height: 54,
    flex: 1,
    overflow: "hidden",
    marginHorizontal: 30,
  },
  textContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 14,
    left: -80,
  },
  text: {
    fontSize: 20,
    color: colors.white,
    marginHorizontal: 10,
  },
  canvas: {
    flex: 1,
  },
});
