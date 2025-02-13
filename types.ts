export interface Appointment {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
}