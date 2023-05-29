import { Image, Pressable, View } from "react-native";
import { FC, useEffect, useState } from "react";

import Heart from "../../../assets/icons/Heart";
import ThreeDots from "../../../assets/icons/ThreeDots";
import colors from "../../constants/colors";
import StoryModal from "../StoryModal/StoryModal";
import { IContent, IStory } from "../../types";
import styles from "./styles";
import { useStoriesContext } from "../../contexts/StoriesContext";

interface FooterProps {
  isModalOpen: boolean;
  currentStory: IStory;
  currentContent: IContent;
  openModal: () => void;
  closeModal: () => void;
}

const Footer: FC<FooterProps> = ({
  isModalOpen,
  currentStory,
  currentContent,
  openModal,
  closeModal,
}) => {
  const { user, deleteLike, addLike } = useStoriesContext();
  const [likes, setLikes] = useState(currentContent.likes);
  const [userLike, setUserLike] = useState(
    currentContent.likes.find((like) => like.id === user.id) ?? null
  );

  useEffect(() => {
    setUserLike(
      currentContent.likes.find((like) => like.id === user.id) ?? null
    );
    setLikes(currentContent.likes);
  }, [currentContent]);

  const toggleLike = () => {
    if (userLike) {
      deleteLike(currentStory.id, currentContent.id);
      setLikes(currentContent.likes.filter((like) => like.id !== user.id));
      setUserLike(null);
    } else {
      addLike(currentStory.id, currentContent.id);
      setLikes((prev) => [user, ...prev]);
      setUserLike(user);
    }
  };
  return (
    <>
      <View style={styles.footerContainer}>
        <View style={styles.footer}>
          <View style={styles.avatarsContainer}>
            {likes.map((user, index) => (
              <Image
                key={user.id}
                source={user.image}
                resizeMode="contain"
                style={[
                  styles.footerAvatar,
                  {
                    marginLeft: index !== 0 ? -8 : 0,
                    zIndex: -index,
                  },
                ]}
              />
            ))}
          </View>
          <View style={styles.buttonsContainer}>
            <Pressable style={styles.button} onPress={toggleLike}>
              <Heart
                stroke={userLike ? colors.purple : colors.white}
                strokeWidth={2}
                fill={userLike ? colors.purple : "none"}
              />
            </Pressable>
            <Pressable style={styles.button} onPress={openModal}>
              <ThreeDots />
            </Pressable>
          </View>
        </View>
      </View>
      <StoryModal
        isOpen={isModalOpen}
        close={closeModal}
        currentContent={currentContent}
      />
    </>
  );
};

export default Footer;
