# idempotent-tasks
## QUICK START WITH DOCKER
   To start the project in development mode you only need to run this command in the root folder:

```bash
docker compose up --build
```

Then you can find the front end running at:

[http://localhost:8080/](http://localhost:8080/ "http://localhost:8080/")

## RUN CLIENT AND SERVER WITHOUT DOCKER

### SERVER

run this in your bash console:
```bash
    cd server && npm i
```

```bash
    node index.js
```

### CLIENT

run this in your bash console:
```bash
    cd client && npm i
```

```bash
    npm run start
```

## SHOWCASE

For show how it works, please enter to:


[http://idempotent-tasks-front.vercel.app/](http://idempotent-tasks-front.vercel.app/ "http://idempotent-tasks-front.vercel.app/")