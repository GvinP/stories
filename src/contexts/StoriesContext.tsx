import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";

import { ContentType, IContent, IStory, IUser } from "../types";
import user from "../../assets/data/user";
import storiesDefault from "../../assets/data/stories";

type StoriesContextType = {
  stories: IStory[];
  user: IUser;
  createStory: (uri: string, type: ContentType) => void;
  removeStory: (id: string) => void;
  addLike: (storyId: string, contentId: string) => void;
  deleteLike: (storyId: string, contentId: string) => void;
};

const StoriesContext = createContext<StoriesContextType>({
  stories: [],
  user: user,
  createStory: () => {},
  removeStory: () => {},
  addLike: () => {},
  deleteLike: () => {},
});

const StoriesContextProvider = ({ children }: { children: ReactNode }) => {
  const [stories, setStories] = useState<IStory[]>([]);

  useEffect(() => {
    setStories(storiesDefault);
  }, []);

  const createStory = (uri: string, type: ContentType) => {
    const newContent: IContent = { id: uuidv4(), type, uri, likes: [] };
    const updatedStories: IStory[] = stories.map((story) =>
      story.user.id === user.id
        ? {
            ...story,
            content: [...story.content, newContent],
          }
        : story
    );
    setStories(updatedStories);
  };
  const removeStory = (id: string) => {
    const updatedStories: IStory[] = stories.map((story) =>
      story.user.id === user.id
        ? {
            ...story,
            content: story.content.filter((content) => content.id !== id),
          }
        : story
    );
    setStories(updatedStories);
  };

  const addLike = (storyId: string, contentId: string) => {
    const updatedStories: IStory[] = stories.map((story) =>
      story.id === storyId
        ? {
            ...story,
            content: story.content.map((content) =>
              content.id === contentId
                ? {
                    ...content,
                    likes: [user, ...content.likes],
                  }
                : content
            ),
          }
        : story
    );
    setStories(updatedStories);
  };
  const deleteLike = (storyId: string, contentId: string) => {
    const updatedStories: IStory[] = stories.map((story) =>
      story.id === storyId
        ? {
            ...story,
            content: story.content.map((content) =>
              content.id === contentId
                ? {
                    ...content,
                    likes: content.likes.filter((like) => like.id !== user.id),
                  }
                : content
            ),
          }
        : story
    );
    setStories(updatedStories);
  };

  return (
    <StoriesContext.Provider
      value={{ user, stories, createStory, removeStory, addLike, deleteLike }}
    >
      {children}
    </StoriesContext.Provider>
  );
};

export default StoriesContextProvider;

export const useStoriesContext = () => useContext(StoriesContext);
