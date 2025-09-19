# Basu CRM – Plataforma SaaS Imobiliária com IA

Este repositório contém o MVP de interface da plataforma Basu CRM, um sistema SaaS voltado para
imobiliárias, loteadoras e incorporadoras. O foco é oferecer uma experiência moderna, escalável e
centrada no usuário para captação, nutrição e gestão de leads, residentes, tours e tarefas com apoio
intensivo de inteligência artificial.

## Estrutura do projeto

- **frontend/** – Aplicação React + Vite (TypeScript) que implementa o dashboard navegável do CRM com
  todos os módulos principais descritos no MVP: Leads, Agenda/Tours, Residentes, Comunicação,
  Tickets, Campanhas, Funil de vendas, Empreendimentos e Relatórios.
- **README.md** – Este documento de visão geral.

## Como executar localmente

```bash
cd frontend
npm install
npm run dev
```

O servidor de desenvolvimento ficará disponível em `http://localhost:5173/`.

Para gerar o build de produção:

```bash
npm run build
```

Para verificar a qualidade do código:

```bash
npm run lint
```

## Destaques de UX/UI

- Layout responsivo com navegação lateral fixa, header inteligente e hierarquia visual clara.
- Paleta institucional utilizando roxo (`#7502F6`) e azul (`#38B6FF`) em componentes chave.
- Seções independentes para cada módulo com cards, tabelas, status e ações rápidas que simulam o
  comportamento da IA na operação.
- Dashboards visuais com gráficos de funil, comparativos de equipes e legendas de disponibilidade de
  lotes.

## Próximos passos sugeridos

- Conectar integrações reais (portais, telefonia, e-mail) para popular os módulos dinâmicos.
- Evoluir os gráficos com bibliotecas de visualização e dados em tempo real.
- Adicionar autenticação, controle de permissões e personalização da IA por empreendimento.
