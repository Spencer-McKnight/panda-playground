import React, { useReducer, useEffect } from 'react';

import Content from './content';
import Header from './header';
import Hero from './hero';

import { DonationEntry } from '../types/global.d'

import 'bootstrap/dist/css/bootstrap.css';

type TableState = {
  loaded: boolean,
  error: string | null,
  data: DonationEntry[],
}

type Action =
  | { type: 'success', dataset: DonationEntry[] }
  | { type: 'failure', errorMsg: string }

const reducer = (state: TableState, action: Action) => {
  switch (action.type) {
    case action.type = "success":
      return { loaded: true, data: action.dataset, error: null }
    case action.type = "failure":
      return { loaded: true, data: [], error: action.errorMsg }
    default:
      return state;
  }
}

const fetchData: () => Promise<Action> = () => {
  return fetch("https://inlight-panda-rescue-api.herokuapp.com/donations?apiKey=cr2eJJDmDK94NgbaPL8Z")
    .then(res => res.json())
    .then((result) => {
      const doneObj: Action = { type: "success", dataset: result };
      return doneObj
    }, (error) => {
      const failObj: Action = { type: "failure", errorMsg: error.value };
      return failObj
    })
}

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { loaded: false, error: null, data: [] })

  useEffect(() => {
    fetchData().then((e: any) => {
      dispatch(e);
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
