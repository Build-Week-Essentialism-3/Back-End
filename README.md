# API

Base URL: **To be added when live** localhost:5500/api

### **Navigation:**

[Authentication](#authentication) 

[Users](#users) 

[Values](#values)

[Prompt(s)](#prompt(s))

## Authentication

---

### Registration:

```diff
+ **POST**  /auth/register
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
+ **POST**  /auth/login
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

### Get user's login information:

```diff
+ **GET**   /:id/user
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
+ **GET**   /:id/user-info
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
+ **POST**  /:id/user-info
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
+ **PUT**   /:id/user
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
+ **PUT**   /:id/user-info
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
+ **DELETE**    /:id
```

Response:

```javascript
{
    "id": id,
    "username": "users username",
    "password": "secured password"
}
```

### Get user's chosen values

```diff
+ **GET**   /:id/values
```

Response:

```javascript
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
```

### Get one of user's chosen values

```diff
+ **GET**   /:id/values/:user_value_id
```

Response:

```javascript
{
    "id": user_value_id,
    "user_id": user_id,
    "value_id": value_id,
    "name": "Value Name"
}
```

### Get user's top values

```diff
+ **GET**   /:id/top-values
```

Response:

```javascript
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
```

### Get user's prompt(s)

```diff
+ **GET**   /:id/prompt
```

Response:

```javascript
{
    "id": prompt_id,
    "user_id": user_id,
    "description": "Prompt Text"
}
```

### Get user's projects

```diff
+ **GET**   /:id/projects
```

Response:

```javascript
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
```

---
---

## Values

_Header must include token_

---

### Get add values:

```diff
+ **GET**   /
```

Response:

```javascript
{
    "id": id1,
    "name": "Value name 1"
},
{
    "id": id2,
    "name": "Value name 2"
},
...
```

### Get a value by value id:

```diff
+ **GET**   /:id
```

```javascript
{
    "id": id,
    "name": "Value name"
}
```

### Add a new value:

```diff
+ **POST**  /
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
+ **POST**  /user/:user_id
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

### Add a user top value:

```diff
+ **POST**  /user/:user_id/top-values
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
+ **PUT**   /:id
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
+ **DELETE**    /:id
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
+ **DELETE**    /user/:user_id/:user_value_id
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

### Delete a user's top value

```diff
+ **DELETE**    /user/:user_id/top-values/:top_id
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

## Get something