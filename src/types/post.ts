export interface Post {
  id: number;
  author: {
    name: string;
    avatar: string;
  };
  content: {
    text: string;
    image?: string;
  };
  likes: number;
  comments: number;
  shares: number;
  createdAt: string;
}
