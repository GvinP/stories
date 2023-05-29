import { StyleSheet } from "react-native";

import { SCREEN_HEIGHT } from "../../constants";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: SCREEN_HEIGHT,
  },
  buttonsContainer: {
    position: "absolute",
    width: "100%",
    bottom: 65,
    paddingHorizontal: 24,
  },
  button: {
    backgroundColor: colors.purple,
    paddingVertical: 17,
    borderRadius: 4,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: colors.white,
    marginTop: 16,
  },
  buttonText: {
    color: colors.white,
    fontSize: fonts.size.default,
    fontWeight: "400",
  },
  cancelButtonText: {
    color: colors.text,
  },
});

export default styles;
