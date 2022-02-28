import React, { useEffect, useState } from 'react';

import Content from './content';
import Header from './header';
import Hero from './hero';

import { DonationEntry } from '../types/global.d'

import 'bootstrap/dist/css/bootstrap.css';

let updErrorData: React.Dispatch<React.SetStateAction<string | null>>;
let updIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
let updData: React.Dispatch<React.SetStateAction<DonationEntry[]>>;

const fetchData: Function = () => {
  fetch("https://inlight-panda-rescue-api.herokuapp.com/donations?apiKey=cr2eJJDmDK94NgbaPL8Z")
    .then(res => res.json())
    .then((result) => {
      updIsLoaded(true);
      updData(result);
    }, (error) => {
      updIsLoaded(true);
      updErrorData(error);
    })
}

const App: React.FC = () => {
  const [errorData, setErrorData] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [data, setData] = useState<DonationEntry[]>([]);

  updErrorData = setErrorData;
  updIsLoaded = setIsLoaded;
  updData = setData;

  useEffect(() => {
    fetchData();
  }, [])

  if (!isLoaded) {
    return (
      <h1>Loading...</h1>
    )
  } else {
    return (
      <div className="container">
        <Header />
        <Hero altText='Giant Panda 🐼' />
        <Content dataset={data} errorMsg={errorData} />
      </div>
    )
  }
};

export default App;
