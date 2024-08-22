# HypeStacks Web Functional Test

## Project Overview

The objective is to develop a straightforward social media application in nextjs allowing users to log in, retrieve a list of users, and view user details.

---

## Task Details

### Designs

Please adhere to the provided designs:

- Login page: [Login Page Design](https://www.figma.com/file/JeP9fwZY0eIwWFSH5C5xyH/HypeStacks-FE-test-Design?type=design&node-id=0-1&mode=design). (Please note that you don't need to export the illustration as we already export it for you under `/images` folder)
- Users page: [Users Page Design](https://www.figma.com/file/JeP9fwZY0eIwWFSH5C5xyH/HypeStacks-FE-test-Design?type=design&node-id=2-41&mode=design)
- User Details page: [User Details Page Design](https://www.figma.com/file/JeP9fwZY0eIwWFSH5C5xyH/HypeStacks-FE-test-Design?type=design&node-id=2-150&mode=design)

Striving for pixel-perfect alignment will be appreciated!

### Implementation Checklist

- [ ] Create a React component for the login form.
- [ ] Create a React component for the user list.
- [ ] Create a React component for the user details.
- [ ] Integrate the login form with the `POST /login` endpoint. Users must be logged in to access the `/users` and `/users/{id}` pages. If not logged in, redirect to the login page.
- [ ] Integrate the user list component with the `GET /users` endpoint.
- [ ] Integrate the user details component with the `GET /users/{id}` and `GET /posts/{id}` endpoint.

### Bonus Points
- [ ] Utilize web standards when fetching data; implement server-side rendering.
- [ ] Implement the happy path, of course, but it would be a plus if you also handle errors!
- [ ] Complete typescript types
- [ ] Would be a plus if you provide the mobile view!

### Time to Implement

3 Hours

---

## Setup

- Clone the repository and execute `npm install` to install the dependencies.
- Run `npm run dev` to initiate the client development server and launch the API server.

## API

The API endpoint will be accessible at `http://localhost:9992`.

Please use the credentials below to test the overall workflow:

```
Email: user1@gmail.com
Password: 123456
```

### Login

```
POST /login

{
    "email": "user1@gmail.com",
    "password": "123456"
}

// Sample response:
{
    "accessToken": "...",
    "user": {
        "email": "user1@gmail.com",
        "name": "User 1",
        "avatar": "https://i.pravatar.cc/150?u=1",
        "id": 1,
        "address": {
            "street": "123 Main Street",
            "city": "New York",
            "state": "NY",
            "zipcode": "10001",
            "country": "USA"
        },
        "website_link": "http://www.user1site.com"
    }
}
```

### Get all users

```
GET /users

// Sample response:
[
    {
        "email": "user1@gmail.com",
        "name": "User 1",
        "password": "...",
        "avatar": "https://i.pravatar.cc/150?u=1",
        "id": 1,
        "address": {
            "street": "123 Main Street",
            "city": "New York",
            "state": "NY",
            "zipcode": "10001",
            "country": "USA"
        },
        "website_link": "http://www.user1site.com"
    },
    ...
]
```

### Get user by ID

```
GET /users/{id}

// Sample response:
{
    "email": "user1@gmail.com",
    "name": "User 1",
    "password": "...",
    "avatar": "https://i.pravatar.cc/150?u=1",
    "id": 1,
    "address": {
        "street": "123 Main Street",
        "city": "New York",
        "state": "NY",
        "zipcode": "10001",
        "country": "USA"
    },
    "website_link": "http://www.user1site.com"
}
```

### Get posts by User ID

```
GET /posts/{id}

// Sample response:
{
    "id": 1,
    "post_contents": [
        {
            "id": 1,
            "content": "Hello, this is my first post"
        },
        {
            "id": 2,
            "content": "Just wanted to say hi to everyone!"
        },
        ...
    ]
}
```


## Development Guidelines

### Do's

- Develop clean, maintainable, and well-documented code adhering to best practices and coding standards.
- Utilize official documentation or language references (MDN, React Docs, etc.).
- Employ debugging tools and standard IDE features (only standard Auto-Completion).

### Don'ts

- Avoid using external libraries for implementation.
- Refrain from utilizing Coding Assistants like GitHub Copilot, ChatGPT, etc., or any other AI-based tools.
- Do not consult direct blogs or articles related to task implementation.
- Avoid using Stack Overflow or any other forum websites.
