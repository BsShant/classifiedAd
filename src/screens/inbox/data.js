export const data = [
  {
    _id: 1,
    text: "Hello developer",
    createdAt: new Date("Wed Nov 08 2021 21:45:13 GMT+0545 (Nepal Time)"),
    user: {
      _id: 334455,
      name: "Annabeth",
      avatar: "https://placeimg.com/140/140/any",
    },
  },
  {
    _id: 2,
    text: "Hello developer",
    createdAt: new Date("Wed Dec 09 2021 21:45:13 GMT+0545 (Nepal Time)"),
    user: {
      _id: 99393,
      name: "Perseus",
      avatar: "https://placeimg.com/140/140/any",
    },
  },
  {
    _id: 3,
    text: "Hello developer",
    createdAt: new Date("Wed Dec 08 2021 20:45:13 GMT+0545 (Nepal Time)"),
    user: {
      _id: 32233,
      name: "Hiron",
      avatar: "https://placeimg.com/140/140/any",
    },
  },
  {
    _id: 4,
    text: "Hello developer",
    createdAt: new Date("Wed Dec 10 2021 20:45:13 GMT+0545 (Nepal Time)"),
    user: {
      _id: 44566,
      name: "Nomad",
      avatar: "https://placeimg.com/140/140/any",
    },
  },
  {
    _id: 5,
    text: "Hello developer",
    createdAt: new Date("Wed Dec 10 2021 21:45:13 GMT+0545 (Nepal Time)"),
    user: {
      _id: 55662,
      name: "Nemo",
      avatar: "https://placeimg.com/140/140/any",
    },
  },
];

export const userList = [

  {
    _id:226,
    name: 'Bishant Pokharel',
    profileImage: 'https://placeimg.com/140/140/any'

  },
  {
    _id:227,
    name: 'Nemo Pokharel',
    profileImage: 'https://placeimg.com/140/140/any'

  },
  {
    _id:225,
    name: 'Sanjay Dahal',
    profileImage: 'https://placeimg.com/140/140/any'

  },
  {
    _id:229,
    name: 'Nishant Pokharel',
    profileImage: 'https://placeimg.com/140/140/any'

  }
]



export const chatData = [
  {
    id: 226 + "-" + 227,
    user1: 226,
    user2: 227,
    chats: [
      {
        _id: 2225,
        text: "Hello developer",
        createdAt: new Date("Wed Dec 10 2021 21:45:13 GMT+0545 (Nepal Time)"),
        user: {
          _id: 227,
          name: "Nemo",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 2228,
        text: "Hello King",
        createdAt: new Date("Wed Dec 10 2021 21:45:13 GMT+0545 (Nepal Time)"),
        user: {
          _id: 226,
          name: "Bishant",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ],
  },
  {
    id: 225 + "-" + 226,
    user1: 225,
    user2: 226,
    chats: [
      {
        _id: 2229,
        text: "Hello Bishant",
        createdAt: new Date("Wed Dec 10 2021 21:45:13 GMT+0545 (Nepal Time)"),
        user: {
          _id: 225,
          name: "Sanjy",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 22210,
        text: "Hello Sanjay",
        createdAt: new Date("Wed Dec 10 2021 21:45:13 GMT+0545 (Nepal Time)"),
        user: {
          _id: 226,
          name: "Bishant",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ],
  },
  {
    id: 225 + "-" + 229,
    user1: 225,
    user2: 229,
    chats: [
      {
        _id: 22299,
        text: "Hello Nishant",
        createdAt: new Date("Wed Dec 10 2021 21:45:13 GMT+0545 (Nepal Time)"),
        user: {
          _id: 225,
          name: "Sanjay",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 22210,
        text: "Hello Sanjay",
        createdAt: new Date("Wed Dec 10 2021 21:45:13 GMT+0545 (Nepal Time)"),
        user: {
          _id: 229,
          name: "Nishant",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ],
  },
];
