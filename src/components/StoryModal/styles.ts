import { StyleSheet } from "react-native";

import colors from "../../constants/colors";
import fonts from "../../constants/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.maodalBG,
    justifyContent: "flex-end",
  },
  buttonsContainer: {
    marginHorizontal: 24,
    marginBottom: 48,
  },
  topButtons: {
    marginBottom: 10,
    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: colors.white,
  },
  button: {
    paddingVertical: 17,
    alignItems: "center",
  },
  divider: {
    backgroundColor: colors.dividerBG,
    height: 1,
    opacity: 0.25,
    marginHorizontal: 20,
  },
  buttonText: {
    color: colors.text,
    fontSize: fonts.size.default,
    fontWeight: "500",
  },
  cancelButton: {
    backgroundColor: colors.white,
    paddingVertical: 17,
    borderRadius: 4,
    alignItems: "center",
  },
  deleteButton: {
    color: colors.red,
  },
});

export default styles;
