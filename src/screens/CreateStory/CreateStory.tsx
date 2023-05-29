import { Image, Pressable, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

import { CreateStoryRouteProp, useAppNavigation } from "../../types/navigation";
import VideoPlayer from "../../components/VideoPlayer";
import { useStoriesContext } from "../../contexts/StoriesContext";
import styles from "./styles";

const CreateStory = () => {
  const navigation = useAppNavigation();
  const { params } = useRoute<CreateStoryRouteProp>();
  const { createStory } = useStoriesContext();

  const uploadStory = () => {
    if (params.uri) {
      createStory(params.uri, params.type);
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.container}>
      {params.type === "video" ? (
        <VideoPlayer video={{ uri: params.uri }} />
      ) : (
        <Image source={{ uri: params.uri }} style={styles.image} />
      )}
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button} onPress={uploadStory}>
          <Text style={styles.buttonText}>Опубликовать</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.cancelButton]}
          onPress={navigation.goBack}
        >
          <Text style={[styles.buttonText, styles.cancelButtonText]}>
            Отмена
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CreateStory;
