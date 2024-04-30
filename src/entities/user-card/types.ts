export interface IUser {
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  dob: {
    date: string;
    age: number;
  };
  login: {
    uuid: string;
  };
  location: {
    city: string;
    state: string;
    country: string;
  };
  gender: string;
  picture: {
    medium: string;
  };
}
