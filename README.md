# BugSquashers_CosmoWander

## API Guide

### Locally Install Server
1. `mvn install` (You should have maven installed locally).
2. `java -jar <cosmowander-version>.jar`

Otherwise

1. Download jar file manually with GitHub release and continue(Java 17).

> Note:
> You should have running mysql server on port 3306.
> Otherwise configure `application.properties`

### Endpoints
#### Retrieve a person from centralized database
GET `/api/v1/universe/<user-id>`

Here `<user-id>` is the unique identification number(below mentioned as `sid`) of the person.

> Note:
> Using this API you cannot insert these users into the central database.

#### Register a user to the CosmoWander app
POST `/api/v1/auth/register`

Here you have to use JSON body to register with the app.

* `sid` - secure id is an alphanumeric character sequence (**REQUIRED**)

e.g., request body look like
```json
{
  "sid": "n5e4i3l2a1john"
}
```
#### Check a user is registered with the CosmoWander app
POST `/api/v1/auth/authenticate`

Here you have to use JSON body with JSON Web Token to check. The token is provided when you register with the app.

e.g., request body look like
```json
Authorization: Bearer <YOUR JWT TOKEN>

{
  "sid": "n5e4i3l2a1john"
}
```
#### Booking CRUD

POST `/api/v1/booking/save`

PUT `/api/v1/booking/update`

GET `/api/v1/booking/get-all-bookings`

GET by Id `/api/v1/booking/get-by-id?id=1`

#### Journey Requests

GET `/api/v1/journey` retrieve all journeys
GET `api/v1/spaceship` retrieve all spaceships

POST `api/v1/spaceship` create spaceship
e.g.,
```json
    {
        "spaceshipId": "",
        "spaceshipName": "",
        "totalSeatCapacity": 0,
        "spaceshipSpeed": 0,
        "mode": {
            "modeId": 0,
            "modeName": ""
        }
    }
```

POST `/api/v1/journey`
e.g.,
```json
{
        "journeyId": "j1",
        "startingStationId": null,
        "startingDate": null,
        "startingTime": null,
        "arrivalDate": null,
        "duration": 0,
        "distance": 0,
        "noOfPassengers": 0,
        "noOfInterchanges": 0,
        "totalCost": 0,
        "weight": 0,
        "destinationId": 1,
        "departure": "2321-01-02",
        "station": [],
        "spaceship": {
            "spaceshipId": "sp1",
            "spaceshipName": "Mars Expeditor",
            "totalSeatCapacity": 0,
            "spaceshipSpeed": 0,
            "mode": {
                "modeId": 1,
                "modeName": "Passenger"
            }
        }
    }
```

GET `api/v1/journey/filter`
```json
{
    "destinationId": 0,
    "departure": "",
    "journeyMode": 0
}
```

## CosmoWander Frontend

This is a React + Vite frontend

### Getting Started

To get started, 

(1) Go to the Frontend directory (cd frontend)

(2)run the following commands:   

npm install

npm install vite

npm run dev (This will start the development server)

### All together
1. `cd backend`
2. `mvn install` (You should have maven installed locally).
3. `cd target`
4. `java -jar <cosmowander-version>.jar`
5. `cd frontend`
6. `npm install`
7. `npm install vite`
8. `npm run dev`
