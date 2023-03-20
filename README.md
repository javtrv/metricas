# Metrics project
***
Frontend + Backend application that allows you to post and visualize metrics in a usable way

This app consist in two separated tools:

## Metrics - API
The backend api was build using Flask and a Postgres DB. 
This api allows you to create metrics and reporte then by date range.
The metrics have a name, a value and a date.

### Requisites
***
* A Postgres DB
* Python and pip installed
* A virtual environment with python 3.10


#### Installation
***

Inside the api folder, create a virtual environment, run it and install the requirements:
  
  ```
  $ pip install -r requirements.txt
  ```

Run the create_db script to create the database:

  ```
  $ sh createdb.sh
  ```

  Then export the FLASK_APP environment variable:

  ```
  $ export FLASK_APP=main.py
  ```

Finally, run the app:

  ```
  $ python main.py
  ```
  or with:
  ```
  $ flask run
  ```


## Metrics - APP
The frontend app was build using React and Typescript and it's connected to the backend api. The app allows you to create metrics and visualize them in a chart and a table. 

[Playwright](https://playwright.dev/) was used to test the app.

For the chart, i used the [Recharts](https://recharts.org/en-US/) library.

### Requisites
***
* Node and npm installed

#### Installation
***
Run the following commands inside the app/metrics-app folder:

  ```
  $ npm install
  ```

To run the app, execute the following command:

  ```
  $ npm run dev
  ```
To run the tests, execute the following command (you have to run api and app first)):

  ```
  $ npm run test
  ```
