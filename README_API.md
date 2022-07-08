# json-server-YOUR MONEY

Esse é o repositório com a base de JSON-Server + JSON-Server-Auth já configurada, feita para plataforma de simulador de aplicação financeira e gestão de gastos YOUR MONEY.

## Endpoints

A API tem endpoints desenvolvidas para aplicação configurados conforme abaixo: 

 url base da API é: https://your-money-kenzie.herokuapp.com

### Cadastro do user

Para acessar a plataforma é necessário, fazer o cadastro do usuário.

POST /register

{
		"nome": "Nome",
		"sobrenome": "Sobrenome",
		"contado": "99912341234",
		"usuario": "usuario",	
		"email": "nome@email.com",
		"password": "123456"
}

Caso dê tudo certo, a resposta será assim:

POST /register - FORMATO DA RESPOSTA - STATUS 201

{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vbWVAZW1haWwuY29tIiwiaWF0IjoxNjU3MTE4MzI4LCJleHAiOjE2NTcxMjE5MjgsInN1YiI6IjEifQ.rJFluL3MrLewe8LFaHCPqrFBgs1uF5DgoZMDLZb1lWQ",
	"user": {
		"email": "nome@email.com",
		"nome": "Nome",
		"sobrenome": "Sobrenome",
		"contado": "99912341234",
		"usuario": "usuario",
		"id": 1
	}
}

### Login

POST /login - FORMATO DA REQUISIÇÃO
{
		"email": "nome@email.com",
		"password": "123456"
}

Caso dê tudo certo, a resposta será assim:

POST /login - FORMATO DA RESPOSTA - STATUS 200
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vbWVAZW1haWwuY29tIiwiaWF0IjoxNjU3MTE4Mzg3LCJleHAiOjE2NTcxMjE5ODcsInN1YiI6IjEifQ.0lHzgOB468Ffx-NofY-7-b9dwNxjPndDVAX41Qp-v4g",
	"user": {
		"email": "nome@email.com",
		"nome": "Nome",
		"sobrenome": "Sobrenome",
		"contado": "99912341234",
		"usuario": "usuario",
		"id": 1
	}
}


### Movimentação financeira
Essas rotas necessitam de autorização deve ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

Authorization: Bearer {token}

Após o usuário estar logado, ele deve conseguir informar seus ganhos e gastos.


GET/financeiro?userId=:userID - FORMATO DA REQUISIÇÃO


POST/financeiro - FORMATO DA REQUISIÇÃO
{
	"nome": "gastos referente a",
	"tipo":"Ganho ou Gastos",
	"categoria":"Salario, Investimentos, Moradia, Mercado, Viagem",
	"valor":"1000",
	"data":"data",
	"userId":"1"
}


DELETE/financeiro/:id - FORMATO DA REQUISIÇÃO


PATH/financeiro/:id - FORMATO DA REQUISIÇÃO
{
	"descricao": "Texto alterado"
}
