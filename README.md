# Secure Storage with Ionic 2 and SQLCipher

This project contains three exercises which gradually add secure storage capabilities into the app.
The app is a simple Ionic 2 application that uses a database to store 'sensitive' data. 
The sensitive data in this case is a list of patients and their medical history.

To run the app, make sure you've installed:

- node
- npm
- cordova
- ionic

perform an `npm install` in your project folder before running any ionic commands.

## Exercise 1

Exercise 1 can be found in the exercises/create_db_connection_and_schema branch.
There are 2 files that need to be modified/completed, being:

- src/providers/database-connection.holder.ts
- src/providers/first-startup.service.ts

### database-connection.holder.ts modifications

In the `database-connection.holder.ts` file, you'll be creating the database connection.
Create a Promise first with the constructor that takes the `(resolve, reject) => {} `arrow function.
Call the sqlitePlugin.openDatabase() function (Check the sqlcipher plugin documentation for more information on this function).

In the success callback, resolve the promise you created earlier with the database connection object you receive in the callback.

### first-startup.service.ts modifications

The `first-startup.service.ts` file will contain all the logic concerning the first startup of your application.
Each time the applications starts, we'll be checking to see whether the database was already created. 
If not, we'll run all the schema creation queries. 
There are 2 things that need to be implemented in the `first-startup.service.ts` file, being:

- `public isFirstStartup(): Promise<boolean>` function
- `public createDatabase(): Promise<any>` function

In the `isFirstStartup()` function, start by creating a Promise with the constructor that takes the `(resolve, reject) => {} `arrow function.
Execute the DbQueries.DB_INITIALIZED_QUERY using the sqlcipher `db.executeSql()` function.
(The DbQueries object can be found in src/providers/db-queries.ts).
This query will check the database for the existance of a db_version database table.
If this table does not exist, we'll assume the database was not yet created.
Check the retrieved name from the database and if it exists, resolve your promise with true, else, resolve it with false.

In the `createDatabase()`function, again, start by creating a Promise with the constructor that takes the `(resolve, reject) => {} `arrow function.
Execute the DbSchema queries which can all be found in src/providers/db-schema.ts.
Use the sqlcipher `db.executeBatch()` function to execute all these queries at once.
In the success callback, resolve your promise without a value. 
In the error callback, reject the promise with the error.

This should be enough for your application to create the database at first-startup.
Make sure the application still works by emulating it or running it on a real device (using `ionic emulate platform` or `ionic run platform`).
Check the console output using the chrome developer tools (use chrome://inspect to attach to your applications webview on the emulator or real device)
The application won't display anything yet. 
This will be solved in exercise 2.

## Exercise 2

In exercise 2, our focus will be on retrieving medical data from the database and displaying it in our ionic app.
We'll be implementing 