export interface IService {
  _id: string;
  image: string;
  serviceName: string;
  description: string;
  providerImage: string;
  providerName?: string;
  providerEmail: string;
  tourArea: string;
  price: number;
}

export interface IServiceProps {
  service: IService;
}