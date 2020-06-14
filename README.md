# DOCUMENTAÇÃO DA API

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

### Buscar um projeto :: GET

Endpoint:
```
GET :: /project/get/:username/:id
```