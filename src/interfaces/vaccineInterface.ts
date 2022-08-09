export interface vaccineService {
  service_name: string;
  site_location: string;
  duration: moment.Moment[];
  gender: string;
  min_age: number;
  number_of_doses: number;
  ethnicity: string[];
}
