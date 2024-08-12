# Aplicação de Monitoramento de Dispositivos

## Descrição

Esta é uma aplicação Full Stack para monitoramento de dispositivos conectados à internet. Utiliza Java Spring Boot para o backend e React para o frontend. A aplicação permite visualizar o status dos dispositivos, gerenciar dispositivos, configurar alertas, visualizar logs, e autenticar usuários.

## Funcionalidades

- **Visualização de Dispositivos:** Exibe uma lista de dispositivos conectados.
- **Detalhes do Dispositivo:** Mostra informações detalhadas sobre um dispositivo específico.
- **Alertas:** Exibe alertas gerados com base no status dos dispositivos.
- **Logs:** Exibe logs relacionados ao status dos dispositivos.
- **Autenticação de Usuário:** Permite login e logout de usuários.
- **CRUD de Dispositivos:** Criação, leitura, atualização e exclusão de dispositivos.

## Tecnologias Utilizadas

- **Backend:** Java Spring Boot, Hibernate, MySQL
- **Frontend:** React, CSS
- **Comunicação:** Axios para requisições HTTP, React Router para navegação


## Pré-requisitos

- Java JDK 17 ou superior
- Node.js (14.x ou superior)
- MySQL
- Maven

## Configuração do Backend

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/your-username/monitoramento-dispositivos.git
    ```

2. **Navegue para a pasta do backend:**

    ```bash
    cd monitoramento-dispositivos/backend
    ```

3. **Configure o banco de dados MySQL:**

    - Crie um banco de dados chamado `monitoramento`.
    - Atualize as configurações de conexão no arquivo `src/main/resources/application.properties`.

4. **Compile e inicie o backend:**

    ```bash
    mvn clean install
    mvn spring-boot:run
    ```

    O backend será iniciado na porta `8080`.

## Configuração do Frontend

1. **Navegue para a pasta do frontend:**

    ```bash
    cd ../frontend
    ```

2. **Instale as dependências do frontend:**

    ```bash
    npm install
    ```

3. **Inicie o frontend:**

    ```bash
    npm start
    ```

    O frontend será iniciado na porta `3000`.

## Acesso à Aplicação

- **Frontend:** [http://localhost:3000](http://localhost:3000)
- **Backend:** [http://localhost:8080](http://localhost:8080)

## Estrutura do Código

### Backend

- **`src/main/java/com/example/monitoramento`** - Contém os pacotes e classes principais do backend:
  - **`controller`** - Controladores REST para manipulação de requisições HTTP.
  - **`entities`** - Entidades JPA representando o banco de dados.
  - **`repository`** - Interfaces para acesso ao banco de dados.
  - **`Dtos`** - Lógica de negócio e manipulação dos dados.

- **`src/main/resources/application.properties`** - Configurações do Spring Boot e do banco de dados.

### Frontend

- **`src/components`** - Contém os componentes React:
  - **`Alerts.js`** - Exibe a lista de alertas.
  - **`DeviceDetails.js`** - Exibe detalhes de um dispositivo.
  - **`DeviceList.js`** - Lista todos os dispositivos com opções de editar e excluir.
  - **`DeviceLogs.js`** - Exibe logs de um dispositivo.
  - **`Header.js`** - Cabeçalho com navegação e botão de logout.
  - **`Login.js`** - Formulário de login.
  - **`AddDevice.js`** - Formulário para adicionar um novo dispositivo.

- **`src/styles`** - Contém arquivos CSS para estilização dos componentes.

- **`src/App.js`** - Configura as rotas da aplicação e protege as rotas que requerem autenticação.

## Decisões de Arquitetura

- **Backend**: Utilizamos Spring Boot para criar uma API RESTful eficiente e escalável. Hibernate é usado para a persistência de dados com MySQL. A lógica de negócio é separada dos controladores para facilitar a manutenção e testes.

- **Frontend**: React é utilizado para criar uma interface de usuário interativa e responsiva. Axios é usado para comunicação com a API do backend. A estrutura de componentes é organizada para facilitar a reutilização e manutenção.

## Funcionalidade Extra

- **Autenticação Básica**: Implementada para proteger rotas sensíveis. A autenticação é simulada e pode ser substituída por um sistema mais robusto conforme necessário.




--
