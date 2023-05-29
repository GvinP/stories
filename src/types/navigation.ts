import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from "@react-navigation/native";
import { ContentType } from "../types";

export type RootNavigatorParamList = {
  Home: undefined;
  Camera: undefined;
  Create: {
    type: ContentType;
    uri?: string;
  };
};

type UseNavigationType = NavigationProp<RootNavigatorParamList>;

export const useAppNavigation = () => useNavigation<UseNavigationType>();

export type CreateStoryRouteProp = RouteProp<RootNavigatorParamList, "Create">;
