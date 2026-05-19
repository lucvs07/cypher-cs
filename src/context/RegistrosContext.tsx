import React, { createContext, useContext, useState } from 'react';
import { RegistroIndustrial } from '../types';
import { mockData } from '../data/mockData';

type RegistrosContextType = {
  registros: RegistroIndustrial[];
  adicionarRegistro: (registro: RegistroIndustrial) => void;
};

const RegistrosContext = createContext<RegistrosContextType | undefined>(undefined);

export function RegistrosProvider({ children }: { children: React.ReactNode }) {
  const [registros, setRegistros] = useState<RegistroIndustrial[]>(mockData);

  const adicionarRegistro = (registro: RegistroIndustrial) => {
    setRegistros((prev) => [registro, ...prev]);
  };

  return (
    <RegistrosContext.Provider value={{ registros, adicionarRegistro }}>
      {children}
    </RegistrosContext.Provider>
  );
}

export function useRegistros(): RegistrosContextType {
  const ctx = useContext(RegistrosContext);
  if (!ctx) {
    throw new Error('useRegistros must be used inside RegistrosProvider');
  }
  return ctx;
}
