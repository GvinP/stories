import { View, Image, ViewToken, Pressable } from "react-native";
import { FC, useEffect, useState } from "react";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { withPause } from "react-native-redash";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

import { IStory } from "../../types";
import VideoPlayer from "../VideoPlayer";
import ProgressView from "./ProgressView";
import styles from "./styles";
import { SCREEN_WIDTH, STORY_DURATION } from "../../constants";
import colors from "../../constants/colors";
import Footer from "./Footer";
import StoryUser from "./StoryUser";

interface StoryProps {
  story: IStory;
  viewableItems: ViewToken[];
  nextPage: () => void;
  prevPage: () => void;
}

const Story: FC<StoryProps> = ({
  story,
  viewableItems,
  nextPage,
  prevPage,
}) => {
  const [isVisible, setIsVisible] = useState(
    !!viewableItems
      .filter((vItem) => vItem.isViewable)
      .find((vItem) => vItem.item.id === story.id)
  );
  const progress = useSharedValue(0);
  const isPaused = useSharedValue(false);
  const [viewed, setViewed] = useState<number[]>([]);
  const [current, setCurrent] = useState({
    content: story.content[0],
    index: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(
      !!viewableItems
        .filter((vItem) => vItem.isViewable)
        .find((vItem) => vItem.item.id === story.id)
    );
  }, [viewableItems]);

  useEffect(() => {
    if (isVisible) {
      progress.value = withPause(
        withTiming(1, { duration: STORY_DURATION }, (isFinished) => {
          if (isFinished) {
            runOnJS(nextStory)();
          }
        }),
        isPaused
      );
    }
  }, [current, isVisible]);

  const nextStory = () => {
    if (current.index < story.content.length - 1) {
      progress.value = 0;
      setCurrent({
        ...current,
        index: current.index + 1,
        content: story.content[current.index + 1],
      });
      setViewed((prev) => [...prev, current.index]);
    } else {
      nextPage();
    }
  };

  const prevStory = () => {
    if (current.index > 0) {
      progress.value = 0;
      setCurrent({
        ...current,
        index: current.index - 1,
        content: story.content[current.index - 1],
      });
      setViewed((prev) => prev.filter((v) => v !== current.index - 1));
    } else {
      prevPage();
    }
  };

  const handleGesture = Gesture.Tap()
    .onStart((event) => {
      if (event.x < SCREEN_WIDTH / 2) {
        runOnJS(prevStory)();
      } else {
        runOnJS(nextStory)();
      }
    })
    .maxDuration(300);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: withTiming(isPaused.value ? 0 : 1, { duration: 500 }),
  }));

  return (
    <View>
      <GestureDetector gesture={handleGesture}>
        <Animated.View style={styles.container}>
          <Animated.View style={[styles.statusTabContainer, animatedStyle]}>
            {story.content.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.statusTab,
                  {
                    backgroundColor:
                      viewed.includes(index) && current.index !== 0
                        ? colors.white
                        : colors.statusTabBG,
                  },
                ]}
              >
                {current.index === index && isVisible && (
                  <ProgressView progress={progress} />
                )}
              </View>
            ))}
          </Animated.View>
          <StoryUser
            user={story.user}
            date={story.createdAt}
            isPaused={isPaused}
          />
          <Pressable
            onLongPress={() => {
              setIsVisible(false);
              isPaused.value = true;
            }}
            onTouchEnd={() => {
              setIsVisible(true);
              isPaused.value = false;
            }}
            style={styles.imageContainer}
          >
            {current.content.type === "image" ? (
              <Image
                source={current.content.content ?? { uri: current.content.uri }}
                resizeMode="cover"
                style={styles.imageStyle}
              />
            ) : (
              <VideoPlayer video={current.content} isPaused={!isVisible} />
            )}
          </Pressable>
        </Animated.View>
      </GestureDetector>
      <Footer
        currentStory={story}
        currentContent={current.content}
        isModalOpen={isModalOpen}
        openModal={() => {
          setIsModalOpen(true);
          setIsVisible(false);
          isPaused.value = true;
        }}
        closeModal={() => {
          setIsModalOpen(false);
          setIsVisible(true);
          isPaused.value = false;
        }}
      />
    </View>
  );
};

export default Story;
