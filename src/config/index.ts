import eagle from '../assets/eagle.png';
import dummyUser1 from '../assets/dummyUser1.png';
import dummyUser2 from '../assets/dummyUser2.png';
import dummyUser3 from '../assets/dummyUser3.png';
import dummyUser4 from '../assets/dummyUser4.png';
import dummyUser5 from '../assets/dummyUser5.png';
import dummyUser6 from '../assets/dummyUser6.png';

import hi from '../assets/hi.png';
import {IFeedPost} from 'src/Components/FeedPost';
import {IStoryItem} from 'src/Components/StoriesBar';

export const fakePosts: IFeedPost[] = [
  {
    username: 'johndoejohn',
    location: 'São Paulo',
    title: 'Mais um ensaio bem feito 🎸',
    profile_pic: dummyUser2,
    date: 16,
    likes: ['peter', 'paul', 'anne'],
    postContent: [dummyUser2, dummyUser1, dummyUser3],
    comments: [
      {author: 'peter', message: 'Mandou bem! ', isLiked: false},
      {author: 'paul', message: 'Me ensina ', isLiked: false},
      {
        author: 'anne',
        message: 'Ficou excelente 👏',
        isLiked: false,
        response: 'muito obrigado',
      },
    ],
  },
  {
    username: 'aliceaneclark',
    location: '',
    title: 'The World is mine',
    profile_pic: dummyUser3,
    date: 16,
    likes: ['peter'],
    postContent: [dummyUser3],
    comments: [
      {
        author: 'johndoe',
        message: 'This place is amazing 👏',
        isLiked: false,
        response: 'ty 🙂',
      },
    ],
  },
  {
    username: 'patriciadoe',
    location: '',
    title: 'Just saw this incridible bird',
    profile_pic: dummyUser6,
    date: 18,
    likes: ['peter'],
    postContent: [eagle],
    comments: [
      {
        author: 'johndoe',
        message: 'Nice pic 👏',
        isLiked: false,
        response: 'ty 🙂!',
      },
    ],
  },
  {
    username: 'busycore',
    location: 'São Paulo',
    title: 'This is my study',
    profile_pic: hi,
    date: 17,
    likes: ['peter'],
    postContent: [hi],
    comments: [
      {
        author: 'patriciadoe',
        message: 'Looking great 👏',
        isLiked: false,
        response: 'Thanks!',
      },
    ],
  },
];

export const fakeStoriesList: IStoryItem[] = [
  {
    name: 'aliceane_',
    profilePic: dummyUser3,
    type: 'seen',
  },
  {
    name: 'markstra...',
    profilePic: dummyUser1,
    type: 'close',
  },
  {
    name: 'marieanne',
    profilePic: dummyUser4,
    type: 'regular',
  },
  {
    name: 'claradoe',
    profilePic: dummyUser5,
    type: 'regular',
  },
  {
    name: 'patriciad...',
    profilePic: dummyUser6,
    type: 'regular',
  },
];
