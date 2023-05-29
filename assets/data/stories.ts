import { Content } from "../../src/types";

const stories = [
  {
    id: "1",
    createdAt: "2023-05-25T10:45:10.733Z",
    content: [
      {
        id: "1",
        type: Content.image,
        content: require("../images/photo_1.jpeg"),
        likes: [
          {
            id: "u1",
            image: require("../images/avatar_1.jpg"),
            username: "user_1_userovich1",
          },
          {
            id: "u2",
            image: require("../images/avatar_2.jpg"),
            username: "user_2_userovich2",
          },
        ],
      },
      {
        id: "2",
        type: Content.image,
        content: require("../images/photo_2.jpeg"),
        likes: [
          {
            id: "u2",
            image: require("../images/avatar_2.jpg"),
            username: "user_2_userovich2",
          },
        ],
      },
      {
        id: "3",
        type: Content.video,
        content: require("../videos/video_1.mp4"),
        likes: [
          {
            id: "u2",
            image: require("../images/avatar_2.jpg"),
            username: "user_2_userovich2",
          },
        ],
      },
    ],
    user: {
      id: "u1",
      image: require("../images/avatar_1.jpg"),
      username: "user_1_userovich1",
    },
  },
  {
    id: "2",
    createdAt: "2023-05-24T10:45:10.733Z",
    content: [
      {
        id: "1",
        type: Content.image,
        content: require("../images/photo_2.jpeg"),
        likes: [
          {
            id: "u3",
            image: require("../images/avatar_3.jpg"),
            username: "user_1_userovich1",
          },
          {
            id: "u4",
            image: require("../images/avatar_4.jpg"),
            username: "user_2_userovich2",
          },
        ],
      },
      {
        id: "2",
        type: Content.video,
        content: require("../videos/video_1.mp4"),
        likes: [
          {
            id: "u3",
            image: require("../images/avatar_3.jpg"),
            username: "user_1_userovich1",
          },
          {
            id: "u4",
            image: require("../images/avatar_4.jpg"),
            username: "user_2_userovich2",
          },
        ],
      },
      {
        id: "3",
        type: Content.video,
        content: require("../videos/video_2.mp4"),
        likes: [
          {
            id: "u3",
            image: require("../images/avatar_3.jpg"),
            username: "user_1_userovich1",
          },
          {
            id: "u4",
            image: require("../images/avatar_4.jpg"),
            username: "user_2_userovich2",
          },
        ],
      },
    ],
    user: {
      id: "u2",
      image: require("../images/avatar_2.jpg"),
      username: "user_2_userovich2",
    },
  },
  {
    id: "3",
    createdAt: "2023-05-23T10:45:10.733Z",
    content: [
      {
        id: "1",
        type: Content.image,
        content: require("../images/photo_1.jpeg"),
        likes: [],
      },
      {
        id: "2",
        type: Content.image,
        content: require("../images/photo_2.jpeg"),
        likes: [
          {
            id: "u3",
            image: require("../images/avatar_3.jpg"),
            username: "user_1_userovich1",
          },
          {
            id: "u4",
            image: require("../images/avatar_4.jpg"),
            username: "user_2_userovich2",
          },
        ],
      },
      {
        id: "3",
        type: Content.video,
        content: require("../videos/video_1.mp4"),
        likes: [
          {
            id: "u3",
            image: require("../images/avatar_3.jpg"),
            username: "user_1_userovich1",
          },
          {
            id: "u4",
            image: require("../images/avatar_4.jpg"),
            username: "user_2_userovich2",
          },
        ],
      },
      {
        id: "4",
        type: Content.video,
        content: require("../videos/video_2.mp4"),
        likes: [],
      },
    ],
    user: {
      id: "u3",
      image: require("../images/avatar_3.jpg"),
      username: "user_3_userovich3",
    },
  },
];

export default stories;
