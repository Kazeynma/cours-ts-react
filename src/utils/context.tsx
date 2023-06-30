import React, { createContext, useState, Dispatch } from 'react';
import { Ads } from './types';

export type InitialStateType = {
  ads: Ads[];
  favorite: number;
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<React.SetStateAction<InitialStateType>>;
}>({
  state: { ads: [], favorite: 0 },
  dispatch: () => null,
});

type Props = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useState<InitialStateType>({ ads: [], favorite: 0 });

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
