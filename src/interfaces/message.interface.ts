export interface MessageInterface {
  [message: string]: {
    id: string;
    username: string;
    image: string;
    date: string;
    text: string;
    map(param: (item) => {id: string, date: string; image: string; text: string; username: string}): MessageInterface[];
  };
}
