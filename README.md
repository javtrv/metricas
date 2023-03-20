# Metrics project
***
Frontend + Backend application that allows you to post and visualize metrics in a usable way

This app consist in two separated tools:

## Metrics - API
The backend api was built using Flask and a Postgres DB. 
This api allows you to create metrics and reporte then by date range.
The metrics have a name, a value and a date.

The Postgres DB was deployed in [Render](https://render.com/)

### Requisites
***
* Python3.10 and pip installed



#### Installation
***

  Inside the api folder, create a virtual environment:
    
    ```
    $ python3 -m venv metrics-env
    ```
    
  Activate the virtual environment:
    
    ```
    $ source metrics-env/bin/activate
    ```

  Inside your virtual environment, install the requirements:
  
  ```
  $ pip install -r requirements.txt
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
The frontend app was build using React and Typescript and it's connected to the backend api.
The app allows you to create metrics and visualize them in a chart and a table. 
[Playwright](https://playwright.dev/) was used to test the app.

To add a metric click on 'Add Metric' buttom and fill the form!
![image](https://user-images.githubusercontent.com/33008435/226356731-430a0a9c-85b3-48ef-91e9-ba3e2bf3f3e7.png)

To generate a report of metrics, click on 'Reports', fill the dates and see the results.
![image](https://user-images.githubusercontent.com/33008435/226357086-16b1a522-d80c-4f65-9970-772f835fe308.png)

![image](https://user-images.githubusercontent.com/33008435/226357379-a2e156d6-7e81-4750-b547-88b54b177ce7.png)




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
