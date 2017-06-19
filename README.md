# CS340_database_viewer

## Description
This project is an ongoing effort to convert a badly-written course project from an Oregon State University class to a well-written, modular
project implemented entirely in basic JavaScript. The course project was to write an application that allowed the user to
add to, edit, and remove from a relational database written in MySQL. What I turned in was messy, hard to read, and
in consistent in style, in both the front-end and the back-end. I also had no method of doing unit testing and
integration testing for any of my functions.

## Goals
I would like to re-implement this project in several languages, hopefully bettering the implementation each time, and always
with modular organization, unit-testing, and integration testing. The database might be reconfigured to use PostrgreSQL - initial
googling suggests it might be easier to use than MySQL, which I struggled to get to work with me in the initial iteration of this
project. Other than that, the languages are as follows:
* Pure Javascript, using built-in data structures and a functional-style of programming.
* Pure Javascript, using the Model-View-Controller design pattern (perhaps this can be combined with the previous point).
* Pure Javascript, but with the aid of solid, widely-used libraries--If I can find them. I have little experience with finding and using
  non-standard libraries in any language. React, maybe?
* A language that compiles (transpiles?) to Jasascript, like Elm or ClojureScript. Ideally it would be almost a purely functional
  language, to teach me something new.
* A language like Rust for at least the back-end. Rust is just a language I hope to get good at using, and to perhaps use in systems
  programming in the future.
  
## File Overview
* database_viewer.js - original version. This file sets up the server operations for the web application
* dbcon.js - configuration file for the database. Originally configured to use a MySQL database on a Oregon State University server. I'll
  likely have to set up a database on my own computer in the future.
* model.js - contains basic data for web application tables.
* view.js - creates DOM objects to be rendered.
* controller.js - organizes the DOM objects and attaches even handlers to them.
* tables.js - defines and exports functions for creating table DOM elements.
* package.json - currently utilizes the following packages:
    1. body-parser
    2. express
    3. express-handlebars
    4. express-session
    5. forever
    6. mysql
    7. request
    8. workerjs
* public/ - Javascript and CSS files that are called from database_viewer.js and from views/
* views/ - Express-Handlbars view files that are rendered by the server logic in database_viewer.js
