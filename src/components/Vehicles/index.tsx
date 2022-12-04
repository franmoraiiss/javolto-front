import React from "react";

import styles from "./styles.module.scss";

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

interface VehicleProps {
  vehicle: IVehicle;
}

const Vehicle: React.FC<VehicleProps> = ({ 
  vehicle: { 
    vehicleExample,
    peopleCapacity,
    airConditioning,
    price,
    exampleImage,
    description,
    automatic,
    bagCapacity,
    currency
  }  
 }) => {
  return (
    <div className={styles.container}>
      <span>Nome: {vehicleExample}</span>
      <span>Capacidade: {peopleCapacity}</span>
      <span>Ar condicionado: {airConditioning ? "Sim" : "Não"}</span>
      <span>Preço: {price} {currency}</span>
      <div><img src={exampleImage} alt=""/></div>
      <span>Descrição: {description}</span>
      <span>Automático: {automatic ? "Sim" : "Não"}</span>
      <span>Capacidade de bagagem: {bagCapacity}</span>      
    </div>
  );
}

export default Vehicle;
