# API

Base URL: https://essentialism3.herokuapp.com

### **Navigation:**

[Authentication](#authentication) 

[Users](#users) 

[Values](#values)

[Prompt(s)](#prompt(s))

[Projects](#projects)

## Authentication

---

### Registration:

```diff
+ **POST**  /api/auth/register
```

Request Body:

```javascript
{
    "username": (string),
    "password": (string)
}
```

Response:

```javascript
{
    "saved": {
        "id": id,
        "username": "users username",
        "password": "secured password"
    },
    "token": "authentication token"
}
```

### Login:

```diff
+ **POST**  /api/auth/login
```

Request Body:

```javascript
{
    "username": (string),
    "password": (string)
}
```

Response:

```javascript
{
    "user": {
        "id": id,
        "username": " users username",
        "password": "secured password"
    },
    "token": "authentication token"
}
```

---
--- 

## Users

_Header must include token_

---

### Initial username & password:

```javascript
{
    "username": "testing",
    "password": "123456"
}
```

### Get user's login information:

```diff
+ **GET**   /api/users/:id/user
```

Response:

```javascript
{
    "id": id,
    "username": "users username",
    "password": "secured password"
}
```

### Get user's profile information:

```diff
+ **GET**   /api/users/:id/user-info
```

Response:

```javascript
{
    "user_id": id,
    "name": "Users Name",
    "nickname": "Users Nickname"
}
```

### Add user's profile information:

```diff
+ **POST**  /api/users/:id/user-info
```

Request Body:

```javascript
{
    "user_id": (number),
    "name": (string),
    "nickname": (string)
}
```

Response:

```javascript
{
    "user_id": user id,
    "name": "Users Name",
    "nickname": "Users Nickname"
}
```

### Update user's login information:

```diff
+ **PUT**   /api/users/:id/user
```

Request Body:

```javascript
{
    "id": (number),
    "username": (string),
    "password": (string)
}
```

Response:

```javascript
{
    "id": id,
    "username": "users username",
    "password": "secured password"
}
```

### Update user's profile information:

```diff
+ **PUT**   /api/users/:id/user-info
```

Request Body:

```javascript
{
    "user_id": (number),
    "name": (string),
    "nickname": (string)
}
```

Response:

```javascript
{
    "user_id": user id,
    "name": "Users Name",
    "nickname": "Users Nickname"
}
```

### Delete user's credentials:

```diff
+ **DELETE**    /api/users/:id
```

Response:

```javascript
{
    "id": id,
    "username": "users username",
    "password": "secured password"
}
```

### Get user's chosen values:

```diff
+ **GET**   /api/users/:id/values
```

Response:

```javascript
[
    {
        "id": user_value_id,
        "user_id": user_id,
        "value_id": value_id,
        "name": "Value Name"
    },
    {
        "id": user_value_id,
        "user_id": user_id,
        "value_id": value_id,
        "name": "Value Name"
    },
    ...
]
```

### Get one of user's chosen values:

```diff
+ **GET**   /api/users/:id/values/:user_value_id
```

Response:

```javascript
[
    {
        "id": user_value_id,
        "user_id": user_id,
        "value_id": value_id,
        "name": "Value Name"
    }
]
```

### Get user's top values:

```diff
+ **GET**   /api/users/:id/top-values
```

Response:

```javascript
[
    {
        "id": user_value_id,
        "user_id": user_id,
        "value_id": value_id,
        "priority": priority #,
        "name": "Value Name"
    },
    {
        "id": user_value_id,
        "user_id": user_id,
        "value_id": value_id,
        "priority": priority #,
        "name": "Value Name"
    },
    ...
]
```

### Get user's prompt(s):

```diff
+ **GET**   /api/users/:id/prompt
```

Response:

```javascript
[
    {
        "id": prompt_id,
        "user_id": user_id,
        "description": "Prompt Text"
    }
]
```

### Get user's projects:

```diff
+ **GET**   /api/users/:id/projects
```

Response:

```javascript
[
    {
        "id": project_id,
        "user_id": user_id,
        "project": "Project Name",
        "description": "Project Description"
    },
    {
        "id": project_id,
        "user_id": user_id,
        "project": "Project Name",
        "description": "Project Description"
    },
    ...
]
```

---
---

## Values

_Header must include token_

---

### Get all values:

```diff
+ **GET**   /api/values/
```

Response:

```javascript
[
    {
        "id": id1,
        "name": "Value name 1"
    },
    {
        "id": id2,
        "name": "Value name 2"
    },
    ...
]
```

### Get a value by value id:

```diff
+ **GET**   /api/values/:id
```

```javascript
{
    "id": id,
    "name": "Value name"
}
```

### Add a new value:

```diff
+ **POST**  /api/values/
```

Request Body:

```javascript
{
    "name": (string)
}
```

Response:

```javascript
{
    "id": value_id,
    "name": "Value Name"
}
```

### Add a user value:

```diff
+ **POST**  /api/values/user/:user_id
```

Request Body:

```javascript
{
    "user_id": (number),
    "value_id": (number)
}
```

Response:

```javascript
{
    "id": value_id,
    "name": "Value Name"
}
```

### Add a user top value (max: 3):

```diff
+ **POST**  /api/values/user/:user_id/top-values
```

Request Body:

```javascript
{
    "user_id": (number),
    "value_id": (number),
    "priority": (number)
}
```

Response:

```javascript
{
    "id": value_id,
    "name": "Value Name"
}
```

### Update a value (user added only):

```diff
+ **PUT**   /api/values/:id
```

Request Body:

```javascript
{
    "id": (number),
    "name": (string)
}
```

Response:

```javascript
{
    "id": value_id,
    "name": "Value Name"
}
```

### Delete a value (user added only):

```diff
+ **DELETE**    /api/values/:id
```

Response:

```javascript
{
    "id": value_id,
    "name": "Value Name"
}
```

### Delete a user's chosen value:

```diff
+ **DELETE**    /api/values/user/:user_id/:user_value_id
```

Response:

```javascript
[
    {
        "id": user_value_id,
        "user_id": user_id,
        "value_id": value_id,
        "name": "Value Name"
    }
]
```

### Delete a user's top value:

```diff
+ **DELETE**    /api/values/user/:user_id/top-values/:top_id
```

Response:

```javascript
[
    {
        "id": user_value_id,
        "user_id": user_id,
        "value_id": value_id,
        "priority": priority #,
        "name": "Value Name"
    }
]
```

---
---

## Prompt(s)

_Header must include token_

---

### Get a prompt by Id:

```diff
+ **GET**   /api/prompt/:id
```

Response:

```javascript
{
    "id": prompt_id,
    "user_id": user_id,
    "description": "Prompt Text"
}
```

### Add a prompt:

```diff
+ **POST**  /api/prompt/
```

Request Body:

```javascript
{
    "user_id": (number),
    "description": (string)
}
```

Response:

```javascript
{
    "id": prompt_id,
    "user_id": user_id,
    "description": "Prompt Text"
}
```

### Update a prompt:

```diff
+ **PUT**   /api/prompt/:id
```

Request Body:

```javascript
{
    "id": (number),
    "user_id": (number),
    "description": (string)
}
```

Response: 

```javascript
{
    "id": prompt_id,
    "user_id": user_id,
    "description": "Prompt Text"
}
```

### Delete a prompt:

```diff
+ **DELETE**    /api/prompt/:id
```

Response:

```javascript
{
    "id": prompt_id,
    "user_id": user_id,
    "description": "Prompt Text"
}
```

---
---

## Projects

_Header must include token_

---

### Get a project by id:

```diff
+ **GET**   /api/projects/:id
```

Response:

```javascript
{
    "id": project_id,
    "user_id": user_id,
    "project": "Project Name",
    "description": "Project Description"
}
```

### Add a project:

```diff
+ **POST**  /api/projects/
```

Request Body:

```javascript
{
    "user_id": (number),
    "project": (string),
    "description": (string)
}
```

Response:

```javascript
{
    "id": project_id,
    "user_id": user_id,
    "project": "Project Name",
    "description": "Project Description"
}
```

### Update a project:

```diff
+ **PUT**   /api/projects/:id
```

Request Body:

```javascript
{
    "id": (number),
    "user_id": (number),
    "project": (string),
    "description": (string)
}
```

Response:

```javascript
{
    "id": project_id,
    "user_id": user_id,
    "project": "Project Name",
    "description": "Project Description"
}
```

### Delete a project:

```diff
+ **DELETE**    /api/projects/:id
```

Response:

```javascript
{
    "id": project_id,
    "user_id": user_id,
    "project": "Project Name",
    "description": "Project Description"
}
```