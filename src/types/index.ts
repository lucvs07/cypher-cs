export type RegistroIndustrial = {
  id: number;
  nome: string;
  descricao: string;
  status: 'normal' | 'alerta' | 'critico';
  data: string; // ISO "YYYY-MM-DD"
};

export type RootStackParamList = {
  Lista: undefined;
  Cadastro: undefined;
  Detalhe: { registro: RegistroIndustrial };
};
