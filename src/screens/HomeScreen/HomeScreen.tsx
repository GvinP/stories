import { FlatList, ViewToken } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCallback, useRef, useState } from "react";

import { useStoriesContext } from "../../contexts/StoriesContext";
import Story from "../../components/Story";
import styles from "./styles";
import { ViewableItemsChangedType } from "../../types";

const HomeScreen = () => {
  const { stories } = useStoriesContext();
  const flatlistRef = useRef<FlatList>(null);
  const [viewableItems, setViewableItems] = useState<ViewToken[]>([]);

  const handleViewableItemsChanged: ViewableItemsChangedType = useCallback(
    ({ viewableItems }) => {
      setViewableItems(viewableItems);
    },
    []
  );

  const scrollToIndex = (index: number) => {
    flatlistRef.current?.scrollToIndex({ animated: true, index: index });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={flatlistRef}
        data={stories}
        renderItem={({ item, index }) => (
          <Story
            story={item}
            viewableItems={viewableItems}
            nextPage={() => {
              if (index < stories.length - 1) {
                scrollToIndex(index + 1);
              }
            }}
            prevPage={() => {
              if (index > 0) {
                scrollToIndex(index - 1);
              }
            }}
          />
        )}
        onViewableItemsChanged={handleViewableItemsChanged}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
