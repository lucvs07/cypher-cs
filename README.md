# Cypher CS — Monitoramento Industrial

App mobile de monitoramento de registros industriais. Sprint 2 do desafio de desenvolvimento.

## Como rodar

```bash
npm install
npx expo start
```

Escaneie o QR com o app **Expo Go** (iOS/Android) ou pressione `a` para Android Emulator.

## O que o app faz

- **Lista de Registros**: exibe todos os registros com badge de status (Normal / Alerta / Crítico)
- **Cadastro**: formulário para criar novo registro com validação
- **Detalhe**: visualização completa de um registro
- **Tema**: alterna entre dark (padrão) e light pelo botão no TopBar

## Como os dados são mockados

Os dados são simulados via array fixo em `src/data/mockData.ts`. Nenhuma chamada de API é feita. O estado é gerenciado com `useState` em `RegistrosContext`. A estrutura do `RegistroIndustrial` já está preparada para substituição por chamadas reais de API.

## Stack

React Native · Expo · TypeScript · React Navigation · Montserrat · JetBrains Mono
