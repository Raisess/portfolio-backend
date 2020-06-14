# DOCUMENTAÇÃO DA API

## ROTAS DE USUÁRIOS

### Criar novo usuário :: POST

Endpoint:
```
POST :: /user/create
```

Body:
```json
{
  "username": "<username>",
  "email": "<email>",
  "avatar": "<avatar>",
  "password": "<password>"
}
```

Retorno booleano.

### Logar usuário :: POST

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

Retorna o token da API do respectivo usuário.

## ROTAS DE PROJETOS

### Criar novo projeto :: POST

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
  "cover": "<project-cover>",
  "link": "<project-link>",
  "git": "<project-git>",
  "color": "<project-highlight-color>"
}
```

Retorno booleano.

### Atualizar um projeto :: PUT

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
  "cover": "<project-cover>",
  "link": "<project-link>",
  "git": "<project-git>",
  "color": "<project-highlight-color>"
}
```

Retorno booleano.

### Buscar um projeto :: GET

Endpoint:
```
GET :: /project/get/:username/:id
```

Retorna o projeto.