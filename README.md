# 🧪 QA Automation Exercise — WebdriverIO

Projeto de automação de testes end-to-end desenvolvido com **WebdriverIO**, utilizando **TypeScript**, **Allure Reports** para relatórios de execução e integração contínua via **GitHub Actions**.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) — Ambiente de execução JavaScript
- [WebdriverIO](https://webdriver.io/) — Framework principal de testes E2E
- [TypeScript](https://www.typescriptlang.org/) — Tipagem estática para código mais seguro
- [Allure Reports](https://docs.qameta.io/allure/) — Geração de relatórios de execução
- [GitHub Actions](https://docs.github.com/actions) — Integração Contínua (CI)
- [Prettier](https://prettier.io/) — Padronização de código

---

## 🧩 Estrutura do Projeto

```bash
qa.automationexercise-web.webdriverio/
│
├── .github/workflows/       # Pipeline CI configurada com GitHub Actions
│   └── ci.yml
│
├── allure-results/          # Resultados brutos gerados após execução dos testes
├── node_modules/            # Dependências do projeto
│
├── src/                     # Páginas e componentes mapeados (Page Objects)
│   ├── pages/
│   └── utils/
│
├── test/specs/              # Casos de teste automatizados
│   ├── signup.spec.ts
│   ├── cart.spec.ts
│   └── ...
│
├── wdio.conf.ts             # Arquivo de configuração principal do WebdriverIO
│
├── package.json             # Dependências e scripts de automação
├── .eslintrc.cjs            # Configuração de linting
├── .prettierrc              # Configuração de formatação
└── README.md                # Documentação do projeto
```

---
## ⚙️ Configuração do Ambiente
### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado (versão recomendada: 14.x ou superior)
- [Git](https://git-scm.com/) instalado
- Navegador Google Chrome instalado
- Editor de código (recomendado: [Visual Studio Code](https://code.visualstudio.com/))
- Conta no GitHub (para integração contínua)

### Passos para Configuração
1. Clone este repositório:
   ```bash
    git clone https://github.com/Emerson-Pombo/qa.automationexercise-web.webdriverio.git
   ```
2. Navegue até o diretório do projeto:
   ```bash 
   cd qa.automationexercise-web.webdriverio
    ```
   
3. Instale as dependências do projeto:
    ```bash
   npm install --legacy-peer-deps
    ```

4. Executar os Testes
    - Para executar os testes localmente, utilize o seguinte comando:
      ```bash
      npx wdio run wdio.conf.ts
      ```
    - Após a execução, os relatórios do Allure podem ser gerados com:
      ```bash
      npx allure generate allure-results --clean -o allure-report
      npx allure open allure-report
      ```

Integração Contínua (CI) — GitHub Actions
- O pipeline de CI está configurado para executar os testes automaticamente em cada push ou pull request.
- Os resultados dos testes serão exibidos na aba "Actions" do repositório no GitHub.
- Relatórios do Allure também serão gerados e podem ser acessados conforme configurado no workflow.
- Certifique-se de revisar e ajustar o arquivo `.github/workflows/ci.yml` conforme necessário para atender às suas necessidades específicas.
- ---
#### Emerson Pombo - [LinkedIn](https://www.linkedin.com/in/emerson-pombo/) 



