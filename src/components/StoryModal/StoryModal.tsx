import { Modal, Pressable, Text, View } from "react-native";
import { FC } from "react";

import styles from "./styles";
import { useAppNavigation } from "../../types/navigation";
import { IContent } from "../../types";
import { useStoriesContext } from "../../contexts/StoriesContext";

interface StoryModalProps {
  isOpen: boolean;
  close: () => void;
  currentContent: IContent;
}

const StoryModal: FC<StoryModalProps> = ({ isOpen, close, currentContent }) => {
  const navigation = useAppNavigation();
  const { removeStory } = useStoriesContext();

  const deleteStory = () => {
    removeStory(currentContent.id);
    close();
  };
  return (
    <Modal visible={isOpen} transparent>
      <View style={styles.container}>
        <View style={styles.buttonsContainer}>
          <View style={styles.topButtons}>
            <Pressable
              style={styles.button}
              onPress={() => {
                close();
                navigation.navigate("Camera");
              }}
            >
              <Text style={styles.buttonText}>Добавить историю</Text>
            </Pressable>
            <View style={styles.divider} />
            <Pressable style={styles.button}>
              <Text
                style={[styles.buttonText, styles.deleteButton]}
                onPress={deleteStory}
              >
                Удалить историю
              </Text>
            </Pressable>
          </View>
          <Pressable style={styles.cancelButton} onPress={close}>
            <Text style={styles.buttonText}>Отмена</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default StoryModal;
