import { StyleSheet } from "react-native";

import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    flex: 1,
  },
  statusTabContainer: {
    position: "absolute",
    top: 10,
    paddingHorizontal: 5,
    flexDirection: "row",
    width: "100%",
    zIndex: 2,
  },
  statusTab: {
    height: 3,
    borderRadius: 2,
    marginHorizontal: 2,
    backgroundColor: colors.statusTabBG,
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 8,
    overflow: "hidden",
  },
  imageStyle: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  userContainer: {
    position: "absolute",
    top: 30,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    zIndex: 2,
  },
  avatar: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 8,
    marginRight: 14,
  },
  name: {
    fontWeight: "500",
    fontSize: fonts.size.default,
    color: colors.white,
  },
  date: {
    fontSize: fonts.size.s,
    color: colors.white,
  },
  closeIcon: {
    marginLeft: "auto",
  },
  footerContainer: {
    height: 64,
  },
  avatarsContainer: {
    flexDirection: "row",
  },
  footerAvatar: {
    width: 32,
    aspectRatio: 1,
    borderRadius: 8,
    borderColor: colors.black,
    borderWidth: 2,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 3,
  },
  button: {
    padding: 10,
  },
  progressView: {
    backgroundColor: colors.white,
    height: 3,
    borderRadius: 2,
  },
});

export default styles;
