# API-Mock Server
This Mock Server is created to run locally as a `NodeJS` app using `ExpressJS`, `MongoDB` and `Mongoose` packages to run.

# Installation
Be sure to have:
	- `NodeJS`
	- `ExpressJS`
	- `MongoDB`

And the following `npm modules`:
	- `Mongoose`
	- `Request`

# Running

Start the `MongoDB`
```
$ mongod [--dbpath <path>]
```

Then you can start the node application
```
$ npm run start
```

## Configuration

Be sure to configure the `fallback` proxy host on the API by modifying the file `proxy.js` before running the application.

#### TIP:
You can use the git to untrack changes to `proxy.js` file to keep the remote version unchanged :+1: : 
```
git update-index --skip-worktree proxy.js
```

# Mocks

This project was created in order for us to create **MOCKS**  for some endpoints we wish to evaluate some behaviors in a controlled environment.

In order to achieve this goal, EVERY request made to the `/mocks` path will be routed to the `MockController`  in order to perform CRUD operations for mocks.
### ADDING A MOCK
This will add a mock to the Mongo repository, it will use the defined `path` variable for responding the request with the mocked `responseData`.

```
POST /mocks
```
Body:
```
{
	"path": "/balances",
	"status": 200,
	"responseData": {
	    "balanceAvailable": "0.00",
	    "balanceBlocked": "11.11",
	    "balanceReceivable": "22.22",
	    "lastUpdate": "13/10/2017 00:00:00"
	}
}
```
> Creates a mock to respond a status 200 (optional data), with a mocked account balance data for the path /balances.
> The request would be: a GET to http://localhost:3000/balances

Response:
```
{
    "status": 200,
    "_id": "5be0c6ff51500a218f2ad678",
    "path": "/balances",
    "responseData": {
        "balanceAvailable": "0.00",
        "balanceBlocked": "11.11",
        "balanceReceivable": "22.22",
        "lastUpdate": "13/10/2017 00:00:19"
    },
    "__v": 0
}
```

### DELETING A MOCK
Deletes a mocked endpoint from the Mongo repository, you should pass a `mockId` parameter that matches the `_id` from a registered mock.

```
DELETE /mocks/<mockId>
```
SUCCESS RESPONSE:
```
{
    "message": "Mocked endpoint successfully deleted"
}
```

### LISTING ALL MOCKS
List all the registered mocks in the database.

```
GET /mocks
```
SUCCESS RESPONSE:
```
[
    { <mock object as in the POST> }
]
```

#### POSTMAN
I've created a simple postman collection to use and show what's expected
> https://www.getpostman.com/collections/2d757c533c866a3d0147

It has some examples of requests and responses for basic operations :)

# LIMITATIONS

Since it's the v0.1 version for this MockServer for local purposes, it has some limitations yet.

- **GET** verb only for mocked paths
- No User Interface
- No data optimization
- No networking optimization
- Bad error handling and fallback code
- Packages dependency
- Code performance
- No coding-style applied
