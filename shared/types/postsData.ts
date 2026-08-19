export type Posts = Postx[]

export interface Postx {
    PostId: string;
    TitleData: string | null;
    PublishData: Date | string;
    ShorMessage: string | null;
    Message: string | null;
}
export interface Post {
  PostId: string;
  PublishData: string;
  TitleData: string;
  ShorMessage: string;
  Message: string;
};

