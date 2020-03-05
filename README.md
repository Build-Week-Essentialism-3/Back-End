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

Authentication Token lasts 1 hour.

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

Errors:

```diff
- **500**   Failed to register user

- **401**   Username and Password must be between 6 and 13 characters
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

Authentication Token lasts 1 hour.

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

Errors:

```diff 
- **401**   Invalid Credentials Provided

- **500**   Failed to login user
```

---
--- 

## Protected Routes

Errors:

```diff 
- **401**   Invalid Credentials Provided

- **400**   Credentials required to access this content     (Not Logged In)
```

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

Errors:

```diff 
- **500**   Failed to retrieve User Account Information

- **404**   Cannot find User
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

Errors:

```diff 
- **500**   Failed to retrieve User Information

- **404**   Cannot find User
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

Errors:

```diff 
- **500**   Failed to add User Information

- **404**   Cannot find User
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

Errors:

```diff 
- **500**   Failed to update User

- **404**   Cannot find User
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

Errors:

```diff 
- **500**   Failed to update User Information

- **404**   Cannot find User
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

Errors:

```diff 
- **500**   Failed to remove User

- **404**   Cannot find User
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

Errors:

```diff 
- **500**   Failed to retrieve User Values

- **404**   Cannot find User
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

Errors: 

```diff 
- **500**   Failed to retrieve specific User Value

- **404**   Cannot find User
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

Errors: 

```diff 
- **500**   Failed to retrieve User Top Values

- **404**   Cannot find User
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

Errors: 

```diff 
- **500**   Failed to retrieve User Prompt(s)

- **404**   Cannot find User
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

Errors: 

```diff 
- **500**   Failed to retrieve User Projects

- **404**   Cannot find User
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

Errors: 

```diff 
- **500**   Failed to retrieve Values
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

Errors: 

```diff 
- **500**   Failed to retrieve Value

- **404**   Cannot find Value
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

Errors: 

```diff 
- **500**   Failed to add Value
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

Errors: 

```diff 
- **500**   Failed to add User Value

- **404**   Cannot find User
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
Errors:

```diff 
- **500**   Failed to add Top Value

- **404**   Cannot find User
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

Errors:

```diff 
- **500**   Failed to update Value

- **404**   Cannot find Value
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

Errors:

```diff 
- **500**   Failed to remove Value

- **404**   Cannot find Value
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

Errors:

```diff 
- **500**   Failed to remove User Value

- **404**   Cannot find User
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

Errors:

```diff 
- **500**   Failed to remove Top Value

- **404**   Cannot find User
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

Errors:

```diff 
- **500**   Failed to retrieve Prompt

- **404**   Cannot find the Prompt
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

Errors:

```diff 
- **500**   Failed to add Prompt
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

Errors:

```diff 
- **500**   Failed to update Prompt

- **404**   Cannot find the Prompt
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

Errors:

```diff 
- **500**   Failed to delete Prompt

- **404**   Cannot find the Prompt
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

Errors:

```diff 
- **500**   Failed to retrieve Project

- **404**   Cannot find the Project
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

Errors:

```diff 
- **500**   Failed to add Project
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

Errors:

```diff 
- **500**   Failed to update Project

- **404**   Cannot find the Project
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

Errors:

```diff 
- **500**   Failed to delete Project

- **404**   Cannot find the Project
```
