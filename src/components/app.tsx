import React, { useState, useEffect } from 'react';

import Content from './content';
import Header from './header';
import Hero from './hero';

import { DonationEntry } from '../types/global.d'

import 'bootstrap/dist/css/bootstrap.css';

interface TableState {
  loaded: boolean,
  error: string | null,
  data: DonationEntry[],
}

const fetchData: () => Promise<TableState> = () => {
  return fetch("https://inlight-panda-rescue-api.herokuapp.com/donations?apiKey=cr2eJJDmDK94NgbaPL8Z")
    .then(res => res.json())
    .then((result) => {
      const stateObj: TableState = { loaded: true, data: result, error: null }
      return stateObj
    }, (error) => {
      const stateObj: TableState = { loaded: true, data: [], error: error }
      return stateObj
    })
}

const App: React.FC = () => {
  const [state, setState] = useState<TableState>({ loaded: false, error: null, data: [] });

  useEffect(() => {
    fetchData().then((e: any) => {
      setState(e);
    });
  }, [])

  if (!state.loaded) {
    return (
      <div className="container">
        <Header />
        <Hero altText='Giant Panda 🐼' />
        <h1>Loading...</h1>
      </div>

    )
  } else {
    return (
      <div className="container">
        <Header />
        <Hero altText='Giant Panda 🐼' />
        <Content dataset={state.data} errorMsg={state.error} />
      </div>
    )
  }
};

export default App;
