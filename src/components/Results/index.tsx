import React, { useState } from "react";
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
  const [showTravel, setShowTravel] = useState(false);
  const [showHotel, setShowHotel] = useState(false);
  const [showVehicle, setShowVehicle] = useState(false);

  return (
    <div className={styles.container}>
      RESULTADOS ENCONTRADOS
    
      {results?.travels && (
        <div style={{ marginTop: "1rem", width: "500px" }}>
          <button className={styles.type} onClick={() => setShowTravel(!showTravel)}>Viagens</button>
          
          {showTravel && (
            <>
              {results?.travels?.map((travel) => (	
                <Travel travel={travel} />
              ))}
            </>
          )}        
        </div>
      )}      

      {results?.hotels && (
        <div style={{ marginTop: "1rem", width: "500px"  }}>
          <button className={styles.type} onClick={() => setShowHotel(!showHotel)}>Hoteis</button>

          {showHotel && (
            <>
              {results?.hotels?.map((hotel) => (
                <Hotel hotel={hotel} />
              ))}
            </>
          )}
        </div>
      )}

      {results?.vehicles && (
        <div style={{ marginTop: "1rem", width: "500px"  }}>
          <button className={styles.type} onClick={() => setShowVehicle(!showVehicle)}>Veículos</button>

          {showVehicle && (
            <>
              {results?.vehicles?.map((vehicle) => (
                <Vehicle vehicle={vehicle} />
              ))}
            </>          
          )}        
        </div>
      )}
    </div>
  );
}

export default Results;
