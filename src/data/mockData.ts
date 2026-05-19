import { RegistroIndustrial } from '../types';

export const mockData: RegistroIndustrial[] = [
  {
    id: 1,
    nome: 'Sensor de Temperatura T-01',
    descricao: 'Temperatura dentro dos parâmetros normais de operação. Leitura estável nas últimas 24 horas.',
    status: 'normal',
    data: '2026-05-19',
  },
  {
    id: 2,
    nome: 'Pressão Caldeira B-07',
    descricao: 'Pressão acima do limite de alerta. Monitoramento intensivo recomendado e ajuste de válvula necessário.',
    status: 'alerta',
    data: '2026-05-18',
  },
  {
    id: 3,
    nome: 'Motor Compressor C-03',
    descricao: 'Falha crítica detectada no sistema de refrigeração. Operação suspensa até inspeção técnica completa.',
    status: 'critico',
    data: '2026-05-17',
  },
  {
    id: 4,
    nome: 'Nível Reservatório R-02',
    descricao: 'Nível de fluido em condições normais. Reposição programada para a próxima semana.',
    status: 'normal',
    data: '2026-05-16',
  },
  {
    id: 5,
    nome: 'Vibração Turbina V-05',
    descricao: 'Vibração levemente elevada acima do baseline. Requer avaliação preventiva antes do próximo ciclo.',
    status: 'alerta',
    data: '2026-05-15',
  },
];
