# API Guide

## Endpoints
### Retrieve a person from centralized database
GET `/api/v1/universe/<user-id>`

Here `<user-id>` is the unique identification number(below mentioned as `sid`) of the person.

> Note:
> Using this API you cannot insert these users into the central database.

### Register a user to the CosmoWander app
POST `/api/v1/auth/register`

Here you have to use JSON body to register with the app.

* `sid` - secure id is an alphanumeric character sequence (**REQUIRED**)

e.g., request body look like
```json
{
  "sid": "n5e4i3l2a1john"
}
```
### Check a user is registered with the CosmoWander app
POST `/api/v1/auth/authenticate`

Here you have to use JSON body with JSON Web Token to check. The token is provided when you register with the app.

e.g., request body look like
```json
Authorization: Bearer <YOUR JWT TOKEN>

{
  "sid": "n5e4i3l2a1john"
}
```
### Booking CRUD

POST `/api/v1/booking/save`

PUT `/api/v1/booking/update`

GET `/api/v1/booking/get-all-bookings`

GET by Id `/api/v1/booking/get-by-id?id=1`
