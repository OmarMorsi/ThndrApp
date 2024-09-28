## Thndr App challenge

````

Run tests:
```bash
Jest UNIT Test
````

Components:

- [x] Frontend

## Frontend

- React Native 
- TypeScript

### API

- Polygon.io

### Technologies

- React
- Axios
- React Hooks
- React Router

## Features

- Implemented two screens: one for the native splash screen and another for the Tickers list screen.
- Fetched the endpoint to retrieve all the tickers and listed them in a ScrollView.
- Implemented a search bar input that returns the items being searched for and serves as a parameter for the endpoint.
- Created a unit test for UI and another for Service.
- Implemented some error handling to ensure the app loads correctly without crashes.

## Enhancements

- Add more unit tests to cover the whole codebase.
- Figure out the api contract to actually fetch the icon_URL instead of a random static Image for each Ticker.
- Enhance the search bar fetching method, making it more dynamic.
- Use Redux for better management of the app.
- Implement better theme management to facilitate futur designing.
