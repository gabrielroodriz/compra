# Orçamentos de Serviços

Aplicativo mobile para criação e gerenciamento de orçamentos de serviços. Desenvolvido como projeto de estudos em React Native com Expo.

## Sobre o projeto

O app permite que prestadores de serviço gerenciem seus orçamentos de forma prática: criando propostas com informações do cliente, adicionando itens de serviço com valores, aplicando descontos e acompanhando o status de cada orçamento.

## Funcionalidades

- Criação de orçamentos com dados do cliente e título do serviço
- Adição de múltiplos itens com descrição, quantidade e preço unitário
- Cálculo automático de subtotal, desconto e total
- Filtro e ordenação por status
- Duplicação de orçamentos existentes
- Persistência local com AsyncStorage
- Controle de status: Rascunho, Enviado, Aprovado e Recusado

## Tecnologias

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/) ~57
- [TypeScript](https://www.typescriptlang.org/)
- AsyncStorage

## Como executar

**Pré-requisitos:** Node.js e Expo CLI instalados.

```bash
# Instalar dependências
npm install

# Iniciar o projeto
npx expo start
```

Escaneie o QR code com o aplicativo **Expo Go** (Android ou iOS) ou rode em um emulador.

## Estrutura do projeto

```
src/
├── app/
│   └── Home/          # Tela principal
├── components/
│   ├── Button/
│   ├── Filter/
│   └── Input/
├── assets/            # Imagens e ícones
└── types/             # Tipagens TypeScript
```

## Licença

Este projeto está sob a licença MIT.
