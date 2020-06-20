# 📚 DOCUMENTAÇÃO DA API

## 😎 ROTAS DE USUÁRIOS

### 🥰 Criar novo usuário :: POST

Endpoint:
```
POST :: /user/create
```

Body:
```json
{
  "username": "<username>",
  "name": "<realname>",
  "email": "<email>",
  "avatar": "<avatar:Base64-image || url>",
  "password": "<password>",
  "github": "<github-username>"
}
```

Retorno booleano.

### 🔐 Logar usuário :: POST

Endpoint:
```
POST :: /user/login
```

Body:
```json
{
  "username": "<username>",
  "password": "<password>"
}
```

Retorna um objeto com token da API do respectivo usuário.

### 🤠 Atualizar um usuário :: PUT

#### token obrigatorio

Endpoint:
```
PUT :: /user/update?token=<api-token>
```

Body:
```json
{
  "name": "<full-name>",
  "cover": "<avatar:Base64-image || url>",
  "github": "<github-username>"
}
```

Retorno booleano.

### 🧐 Buscar um usuário :: GET

Endpoint:
```
GET :: /user/get/:username
```

Retorna um objeto.

## ⚒ ROTAS DE PROJETOS

### 🔨 Criar novo projeto :: POST

#### token obrigatorio

Endpoint:
```
POST :: /project/create?token=<api-token>
```

Body:
```json
{
  "username": "<username>",
  "name": "<project-name>",
  "description": "<project-description>",
  "cover": "<project-cover:Base64-image || url>",
  "link": "<project-link>",
  "git": "<project-git>",
  "color": "<project-highlight-color>"
}
```

Retorno booleano.

### 🔧 Atualizar um projeto :: PUT

#### token obrigatorio

Endpoint:
```
PUT :: /project/update/:username?id=<project-id>&token=<api-token>
```

Body:
```json
{
  "name": "<project-name>",
  "description": "<project-description>",
  "cover": "<project-cover:Base64-image || url>",
  "link": "<project-link>",
  "git": "<project-git>",
  "color": "<project-highlight-color>"
}
```

Retorno booleano.

### 🔎 Buscar um projeto :: GET

Endpoint:
```
GET :: /project/get/:username/:id
```

Retorna o projeto.

### 🔍 Buscar todos os projetos de um usuário :: GET

Endpoint:
```
GET :: /project/getAll/:username
```

Retorna um **array** com os projetos.

### 🗑 Deletar um projeto :: DELETE

Endpoint:
```
DELETE :: /project/delete/:username?id=<project-id>&token=<api-token>
```

Retorna um response de objeto com uma chave **booleana** com a confirmação.