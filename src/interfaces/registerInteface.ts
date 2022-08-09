export interface registerInterface {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ethnicity: string;
  birth_date: moment.Moment;
  password: string;
  confirmPassword?: string;
  province: string;
  district: string;
  street: string;
  insurance_id: string;
  member_id: string;
  insurance_provider: string;
  document: any;
}
