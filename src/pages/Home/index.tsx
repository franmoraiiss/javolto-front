import { useState } from 'react';
import { MoonLoader } from 'react-spinners';

import Results from '../../components/Results';
import Search from '../../components/Search';
import { api } from '../../services/api';

import styles from './styles.module.scss';

interface IParams {
  city: string;
  checkInDate: string;
  checkOutDate: string;
  rooms?: number;
  type?: string;
}

interface ITravel {
  price: number;
  currency: string;
  destAirport: string;
  airline: string;
  origAirport: string;
}

interface IHotel {
  hotelStarRating: number;
  hotelImageUrl: string;
  hotelBrand: string;
  roomImageUrl: string;
  roomPrice: string;
  roomLongDescription: string;
  hotelAddress: {
    zip: string;
    cityName: string;
    phone: string;
    isoCountryCode: string;
    addressLine1: string;
    countryName: string;
  };
  currency: string;
  hotelName: string;
  roomName: string;
  hotelDescription: string;
}

interface IVehicle {
  vehicleExample: string;
  peopleCapacity: string;
  airConditioning: boolean;
  price: string;
  exampleImage: string;
  description: string;
  automatic: boolean;
  bagCapacity: string;
  currency: string;
}

interface IResults {
  travels?: ITravel[];
  vehicles?: IVehicle[];
  hotels?: IHotel[];
}

const API_URL = "https://c5t5kx5f7dwmirjzulrbv55kje0nlnta.lambda-url.us-east-1.on.aws";

const Home = () => {
  const [results, setResults] = useState<IResults | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const getResults = async (params: IParams) => {
    try {
      setIsLoading(true);

      const response = await api.get(API_URL, {
        params
      });

      setResults(response.data);
    } catch(error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      {results && (
        <div className={styles.back}><span onClick={() => setResults(undefined)}>{`<`}</span></div>      
      )}      

      <h1 className={styles.title}>Jávolto</h1>

      {results ? (
        <Results results={results} />
      ) : (        
        <Search getResults={getResults} />
      )}

      {isLoading && (
        <div className={styles.overlay}>
          <MoonLoader color="#fff" />
        </div>
      )}
    </div>
  );
}

export default Home;
