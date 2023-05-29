import { Image, Text, View } from "react-native";
import { FC } from "react";
import { formatDistance } from "date-fns";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import Close from "../../../assets/icons/Close";
import { IUser } from "../../types";
import styles from "./styles";

interface StoryUserProps {
  user: IUser;
  date: string;
  isPaused: Animated.SharedValue<boolean>;
}

const StoryUser: FC<StoryUserProps> = ({ user, date, isPaused }) => {
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: withTiming(isPaused.value ? 0 : 1, { duration: 500 }),
  }));

  return (
    <Animated.View style={[styles.userContainer, animatedStyle]}>
      <Image source={user.image} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{user.username}</Text>
        <Text style={styles.date}>
          {formatDistance(new Date(date), new Date(), {
            addSuffix: true,
          })}
        </Text>
      </View>
      <Close style={styles.closeIcon} />
    </Animated.View>
  );
};

export default StoryUser;
