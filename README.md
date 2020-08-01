![logo](./mobile/src/images/logo.png)


## 💻 Sobre


📞 Empresa Ficticia no ramo de telefonia, oferecendo um plano móvel onde o cliente obtém benefícios baseado no plano escolhido.
A empresa oferece no seu suporte web e mobile um sitema que calcula o preço da ligação com o plano e compara com a ligação sem o plano, esse calculo pode ser obtido com os seguintes dados disponibilizados pelo cliente
- ddd Origem da ligação
- ddd Desino da ligação
- Duração da chamada( em minutos)
- Plano escolhido pelo cliente

Na construção desse projeto foi utilizado orientação a objetos com Javascript.

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Expo][expo]
- [Node.js][nodejs]
- [React][reactjs]
- [React Native][rn]



### Mobile

![MobileFaleMais](https://user-images.githubusercontent.com/54605079/89106332-7c139200-d3ff-11ea-8bcb-168fa02e5942.gif )

 

### Web

![WebFaleMais](https://user-images.githubusercontent.com/54605079/89106336-82a20980-d3ff-11ea-88f2-9e4c03f3d12a.gif)


## 🚀 Como rodar este projeto

Podemos considerar este projeto como sendo divido em três partes:
1. Back End
2. Front End 
3. Mobile

💡Tanto o Front End quanto o Mobile precisam que o Back End esteja sendo executado para funcionar.


### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/pleonardodp12/FaleMais

# Acesse a pasta do projeto no terminal/cmd
$ cd FaleMais

# Vá para a pasta server
$ cd backend

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:3001 - acesse http://localhost:3001 
```

### 🧭 Rodando a aplicação web (Front End)

```bash # Clone este repositório
$ git clone https://github.com/pleonardodp12/FaleMais

# Acesse a pasta do projeto no seu terminal/cmd
$ cd FaleMais

# Vá para a pasta da aplicação Front End
$ cd frontend

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```

### 📱 Rodando a aplicação web (Front End)

```bash
  # Clone este repositório
$ git clone https://github.com/pleonardodp12/FaleMais

# Acesse a pasta do projeto no seu terminal/cmd
$ cd FaleMais

# Vá para a pasta da aplicação Front End
$ cd mobile

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ expo start

# A aplicação será aberta na web, basta seguir as instruções do expo.
```