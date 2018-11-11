# MyReads Project - [Udacity FEND](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001) Project 6

I used the [starter repository](https://github.com/udacity/reactnd-project-myreads-starter) for this project, and added components and functionality as required.

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Created new files for each component
* Views
** Home (main page view): Home.js
** Search (search page view): Search.js
* Components
** BookShelf 
** Book

## Backend Server

To simplify the development process, a backend server was provided to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Resources
* Forrest Walker's [Udacity Project 6 Walk Through](https://www.youtube.com/watch?v=bpKI3R0nf7E)
** Decided to use Ryan's walk through, as Forrest was implementing this using the Context npm library,
	making this unnecessarily complicated (IMHO).
* Ryan Waite's [FEND Project 6 Walk Through](https://www.youtube.com/watch?v=acJHkd6K5kI)
** Updated the tutorial's use of mixed operators (`&&, ||` ) to use the ternary opearator (`?, :`).
* Łukasz Wróbel's [tmux Tutorial - Split Terminal Windows Easily](https://lukaszwrobel.pl/blog/tmux-tutorial-split-terminal-windows-easily/)

## Contributing

This repository is code for _my_ Udacity course. Therefore, I will not accept pull requests.

