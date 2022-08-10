export interface vaccineServiceWithId {
  id: string;
  service_name: string;
  site_location: string;
  duration: moment.Moment[];
  gender: string;
  min_age: number;
  number_of_doses: number;
  ethnicity: string;
}

export type vaccineService = Omit<vaccineServiceWithId, 'id'>;
