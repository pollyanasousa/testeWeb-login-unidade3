# README - Automação de Testes Web - Portal do Aluno Unyleya

---

## 📋 Descrição do Projeto

Projeto de automação de testes web desenvolvido para validar o fluxo de login do Portal do Aluno da Unyleya, utilizando **Cypress** como ferramenta de automação e especificações em **Gherkin**.

Este projeto faz parte da **Atividade Prática - Unidade 3** do curso de testes de software.

---

## 🎯 Objetivo

Automatizar testes de login no Portal do Aluno da Unyleya, validando:
- Login com credenciais válidas
- Login com credenciais inválidas
- Validação de campos obrigatórios
- Validação de formato de email
- Funcionalidade de recuperação de senha
- Elementos visuais da página
- Múltiplos formatos de emails inválidos

---

## 🛠️ Tecnologias Utilizadas

- **Node.js** - v22.20.0
- **Cypress** - v15.8.2
- **JavaScript** - Linguagem de programação
- **Gherkin** - Especificação de cenários

---

## 📁 Estrutura do Projeto

```
testeWeb-login-unidade3/
├── .feature                      # Cenários em Gherkin
├── cypress/
│   ├── e2e/
│   │   └── login-portal-aluno.cy.js  # Testes automatizados
│   ├── screenshots/              # Prints automáticos dos testes
│   ├── support/
│   └── fixtures/
├── package.json
├── package-lock.json
└── README.md
```

---

## 🚀 Como Executar

### **Pré-requisitos**

- Node.js instalado (versão 22 ou superior)
- NPM instalado

### **Instalação**

1. Clone ou baixe este repositório

2. Instale as dependências:
```bash
npm install
```

### **Executar os Testes**

#### **Modo Interface Gráfica (Recomendado para visualização):**
```bash
npx cypress open
```
- Selecione "E2E Testing"
- Escolha o navegador (Chrome recomendado)
- Clique no arquivo `login-portal-aluno.cy.js`

#### **Modo Terminal (Headless):**
```bash
npx cypress run --spec "cypress/e2e/login-portal-aluno.cy.js"
```

---

## 📝 Cenários de Teste

O projeto implementa **7 cenários de teste** conforme especificado no arquivo `.feature`:

1. **Login com credenciais válidas** - Valida login bem-sucedido
2. **Login com credenciais inválidas** - Valida que sistema impede acesso com dados incorretos
3. **Tentativa de login com campos vazios** - Verifica validação de campos obrigatórios
4. **Validação de formato de email** - Testa validação de email sem formato correto
5. **Recuperação de senha** - Verifica presença do link de recuperação
6. **Elementos visuais da página** - Valida presença de todos os elementos da interface
7. **Esquema de cenário com múltiplos exemplos** - Testa 5 diferentes formatos de emails inválidos

**Total:** 11 testes automatizados (6 individuais + 5 do esquema de cenário)

---

## 📊 Resultados

Após a execução, o Cypress gera automaticamente:

- **Screenshots** em `cypress/screenshots/` - Prints dos testes que falharam
- **Relatório no terminal** - Resumo com testes que passaram/falharam
- **Vídeos** (quando executado via `cypress run`) em `cypress/videos/`

---

## ⚙️ Configurações

O projeto está configurado para testar o ambiente de produção:
- **URL Base:** `https://portalgraduacao.unyleya.edu.br/login`
- **Timeout padrão:** 4000ms

---

## 📌 Observações Importantes

- Alguns testes podem falhar devido a credenciais fictícias ou validações específicas do portal
- Os testes que validam comportamentos de erro (campos vazios, email inválido) podem apresentar falhas esperadas
- Screenshots são gerados automaticamente para análise de falhas
- O projeto usa credenciais de exemplo para demonstração

---

## Autor

Pollyana Cássia de Sousa
Graduanda – Faculdade Unyleya

Projeto desenvolvido como parte da Avaliação Final da disciplina
Qualidade e Teste de Software.