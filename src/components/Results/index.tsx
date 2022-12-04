import React from "react";
import Hotel from "../Hotels";
import Travel from "../Travel";
import Vehicle from "../Vehicles";

import styles from "./styles.module.scss";

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

interface ResultsProps {
  results?: IResults;
}

const Results: React.FC<ResultsProps> = ({ results }) => {
  return (
    <div className={styles.container}>
      RESULTADOS ENCONTRADOS
    
      <div style={{ marginTop: "1rem" }}>
        <span>Viagens</span>
        {results?.travels?.map((travel) => (	
          <Travel travel={travel} />
        ))}
      </div>

      <div style={{ marginTop: "1rem" }}>
        <span>Hoteis</span>
        {results?.hotels?.map((hotel) => (
          <Hotel hotel={hotel} />
        ))}
      </div>

      Veiculos:
      {results?.vehicles?.map((vehicle) => (
          <Vehicle vehicle={vehicle} />
      ))}
          

    </div>
  );
}

export default Results;
