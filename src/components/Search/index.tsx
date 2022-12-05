import React, { useEffect, useState } from "react";
import { addDays, formatISO } from "date-fns";

import styles from "./styles.module.scss";

interface SearchProps {
  getResults: (params: IParams) => void;
}

interface IParams {
  city: string;
  checkInDate: string;
  checkOutDate: string;
  people?: number;
  type: string;
}

const Search: React.FC<SearchProps> = ({ getResults }) => {
  const countries = ["Berlin", "Paris", "Dublin", "Amsterdam", "London", "São Paulo"];

  const [destination, setDestination] = useState("Berlin");
  const [checkInDate, setCheckInDate] = useState(formatISO(new Date(), { representation: "date" }));
  const [checkOutDate, setCheckOutDate] = useState(formatISO(addDays(new Date(), 1), { representation: "date" }));
  const [people, setPeople] = useState<number | undefined>();
  const [type, setType] = useState("");

  const [params, setParams] = useState<IParams>({
    city: destination,
    checkInDate,
    checkOutDate,
    people,
    type,
  }); 

  useEffect(() => {
    setParams({
      city: destination,
      checkInDate,
      checkOutDate,
      people,
      type
    });
  }, [destination, checkInDate, checkOutDate, type, people]);

  const onChangeCategory = (category: string) => {
    if (type.includes(category)) {  
      const newType = type.split(",").filter(item => item !== category).join(",");
      setType(newType);
    } else {
      const newType = type ? `${type},${category}` : category;
      setType(newType);
    }
  };

  return (
    <div className={styles.form}>
      <div style={{ width: "240px" }}>
        <span>Destino:</span><br/>
        <select id="destination" className={styles.input}  placeholder="Destination" style={{ width: "260px"}} value={destination} onChange={(e) => setDestination(e.target.value)}>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>   

      <div style={{ width: "240px"}}>
        <label htmlFor="checkInDate">Check-in</label>
        <input id="checkInDate" className={styles.input} type="date" placeholder="Check in" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)}/>
      </div>

      <div style={{ width: "240px"}}>
        <label htmlFor="checkOutDate">Check-out</label>
        <input id="checkOutDate" className={styles.input} type="date" placeholder="Check out" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)}/>
      </div>

      <div>
        <label htmlFor="rooms">Pessoas:</label>
        <input id="rooms" className={styles.input} type="number" placeholder="Número de pessoas" value={people} onChange={(e) => setPeople(Number(e.target.value))} />
      </div>

      <span style={{ margin: ".5rem 0"}}>Categoria:</span>
      <div className={styles.groupWrapper}>        
        <input type="checkbox" id="travels" name="travels" value="travels" onChange={(e) => onChangeCategory(e.target.value)} />
        <label htmlFor="travels">Viagens</label>
        
        <input type="checkbox" id="vehicles" name="vehicles" value="vehicles" onChange={(e) => onChangeCategory(e.target.value)} />
        <label htmlFor="vehicles">Veículos</label>

        <input type="checkbox" id="hospedagem" name="hospedagem" value="hotels" onChange={(e) => onChangeCategory(e.target.value)} />
        <label htmlFor="hospedagem">Hospedagem</label>
      </div>

      <button type="submit" onClick={() => getResults(params)}>Search</button>        
    </div>
  );
}

export default Search;
