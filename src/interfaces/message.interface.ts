export interface MessageInterface {
  [message: string]: {
    username: string;
    image: string;
    date: string;
    text: string;
    map(param: (item) => { date: any; image: any; text: any; username: any }): MessageInterface[];
  };
}
