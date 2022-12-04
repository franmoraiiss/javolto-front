import React from "react";

import styles from "./styles.module.scss";

interface ITravel {
  price: number;
  currency: string;
  destAirport: string;
  airline: string;
  origAirport: string;
}

interface TravelProps {
  travel: ITravel;
}

const Travel: React.FC<TravelProps> = ({ 
  travel: { price, currency, destAirport, airline, origAirport }
 }) => {
  return (
    <div className={styles.container}>
      <span>Companhia: {airline}</span>
      <span>Aeroporto de destino: {destAirport}</span>
      <span>Aeroporto de origem: {origAirport}</span>
      <span>Preço: {price} {currency}</span>
    </div>
  );
}

export default Travel;
