export interface vaccineService {
  name: string;
  location: string;
  duration: moment.Moment[];
  gender: string;
  age: string;
  ethnicity: string[];
}
