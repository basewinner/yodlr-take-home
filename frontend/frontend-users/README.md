# Run React App

To run front end go to front end directory and start React app with npm start

The front end will run on at [http://localhost:3000]

## To run server

### `npm start`

Run this command in the top-level directory of this source tree:

This will run the server at [http://localhost:3001]

REST API
The Users JSON REST API is exposed at http://localhost:3001/users.

On server start, user data is read into memory from init_data.json. All subsequent actions are done against this memory store. Stopping and starting the server will re-initialize data from init_data.json.

API Endpoints
/users
HTTP GET: returns array of all users
HTTP POST: creates a new user, returns the created user data
/users/:id
HTTP GET: returns the user with given id (numeric, auto-incrementing). HTTP 404 if user not found
HTTP PUT: updates the user with given id and returns updated record. HTTP 404 if user not fund.
HTTP DELETE: removes the users with given id, returns nothing (HTTP 204)
Here is an example of results returned from HTTP GET on /users:

[{"id":1,"email":"kyle@getyodlr.com","firstName":"Kyle","lastName":"White","state":"active"},
{"id":2,"email":"jane@getyodlr.com","firstName":"Jane","lastName":"Stone","state":"active"},
{"id":3,"email":"lilly@getyodlr.com","firstName":"Lilly","lastName":"Smith","state":"pending"},
{"id":4,"email":"fred@getyodlr.com","firstName":"Fred","lastName":"Miles","state":"pending"},
{"id":5,"email":"alex@getyodlr.com","firstName":"Alexandra","lastName":"Betts","state":"pending"}]
