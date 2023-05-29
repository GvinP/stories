import { ViewToken } from "react-native";

export interface IStory {
  id: string;
  createdAt: string;
  content: IContent[];
  user: IUser;
}

export interface IUser {
  id: string;
  image: number;
  username: string;
}

export interface IContent {
  id: string;
  type: ContentType;
  content?: number;
  uri?: string;
  likes: IUser[];
}

export type ContentType = "image" | "video";

export enum Content {
  image = "image",
  video = "video",
}

export type ViewableItemsChangedType = (info: {
  viewableItems: ViewToken[];
}) => void;
