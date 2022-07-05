# json-server-YOUR MONEY

Esse é o repositório com a base de JSON-Server + JSON-Server-Auth já configurada, feita para plataforma de simulador de aplicação financeira e gestão de gastos YOUR MONEY.

## Endpoints

A API tem endpoints desenvolvidas para aplicação configurados conforme abaixo: 

 url base da API é: https://your-money-kenzie.herokuapp.com

### Cadastro do user

Para acessar a plataforma é necessário, fazer o cadastro do usuário.

POST /register

{
"email": "nome@email.com",
"password": "123456",
"name": "Nome",
}

Caso dê tudo certo, a resposta será assim:

POST /register - FORMATO DA RESPOSTA - STATUS 201

{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVseTJAbWFpbC5jb20iLCJpYXQiOjE2NTcwMzk1ODAsImV4cCI6MTY1NzA0MzE4MCwic3ViIjoiMyJ9.cDm4IZawI8gDF1mkl0G3qxnhfDxRt8neFqxKymKSe04",
	"user": {
		"email": "nome@email.com",
		"name": "Nome",
		"id": 1
	}
}

### Login

POST /login - FORMATO DA REQUISIÇÃO
{
	"email": "nome@mail.com",
	"password":"123456"
}

Caso dê tudo certo, a resposta será assim:

POST /login - FORMATO DA RESPOSTA - STATUS 200
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVseUBtYWlsLmNvbSIsImlhdCI6MTY1NzAzOTI5NSwiZXhwIjoxNjU3MDQyODk1LCJzdWIiOiIyIn0.cuwRReH5_IhUqZHPsMybgacnTJvUVg5UfY5xFvzJ_Jk",
	"user": {
		"email": "nome@mail.com",
		"name": "Nome",
		"id": 1
	}
}


### Movimentação financeira
Essas rotas necessitam de autorização deve ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

Authorization: Bearer {token}

Após o usuário estar logado, ele deve conseguir informar seus gastos.

GET/gastos - FORMATO DA REQUISIÇÃO
{
	"userId":"2"
}


POST/gastos - FORMATO DA REQUISIÇÃO
{
	"Descricao": "gastos referente a",
	"Tipo":"entrada ou gastos",
	"Valor":"100",
	"Data":"data",
	"Realizada":"true ou false",
	"userId":"2"
}


DELETE/gastos/:id - FORMATO DA REQUISIÇÃO
{
	"userId":"1"
}

PATH/gastos/:id - FORMATO DA REQUISIÇÃO
{
	"Descricao": "gastos referente a"
}
