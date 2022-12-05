import React, { useState } from "react";

import styles from "./styles.module.scss";

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

interface HotelProps {
  hotel: IHotel;
}

const Hotel: React.FC<HotelProps> = ({ hotel: {
  currency,
  hotelAddress,
  hotelBrand,
  hotelDescription,
  hotelImageUrl,
  hotelName,
  hotelStarRating,
  roomImageUrl,
  roomLongDescription,
  roomName,
  roomPrice
} }) => {
  const [longText, setLongText] = useState(false);

  function limitChar(str: string, limit: number) {
    if(longText) return str;
    return str.length > limit ? `${str.slice(0, limit)}...` : str;
  }

  return (
    <div className={styles.container}>
      <span>Nome: {hotelName}</span>
      <span>Endereço: {hotelAddress.addressLine1}</span>
      <span>Preço: {roomPrice} {currency}</span>
      <span>Estrelas: {hotelStarRating}</span>
      <span>Descrição: {limitChar(hotelDescription, 150)} <button className={styles.type} onClick={() => setLongText(!longText)}>{longText ? "Esconder" : "Ler mais"}</button></span>
      <span>Nome do quarto: {roomName}</span>
      <span>Descrição do quarto: {roomLongDescription}</span>
      <span>Marca: {hotelBrand}</span>  
      <div><img src={hotelImageUrl} alt="" style={{ width: "200px" }}/></div>
      <div><img src={roomImageUrl} alt="" style={{ width: "200px" }}/></div>
    </div>
  );
}

export default Hotel;
