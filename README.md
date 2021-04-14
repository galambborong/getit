# get:it

## Introduction

This is a Reddit-like news/content-sharing site. This repository is the front end of the project. You can view the back end repository [here](https://github.com/galambborong/pk-nc-news).

## See it in action

You can preview this project live at [getit.peterkeenan.co.uk](http://getit.peterkeenan.co.uk). You are also welcome to follow these steps to sample it locally, providing you have Git and Node installed. (Note, this project was built using Node v14.15.3.)

1. Clone the repo
2. Within the directory `getit`, run `npm i` to install all dependencies
3. Once this has completed, run `npm start`. This will open a new tab in your browser. Enjoy

### Things to bear in mind

- You are hard-coded in as user `tickle122`, so you can post new comments and delete comments made by `tickle122`
- The site is currently styled for mobile-only (see below)

## Work in progress

I'm making constant updates to this project at the moment, so the following is yet to be implemented or finished:

- Sort-by handling
  - I'm currently providing a selection of options, but ideally the user should be able to control things like the number of articles they want to view per page, the sort direction, etc
- Article deletion
- Styling rules for larger screens
- Some styling still required for components

## Technology stack

This site is built using

- **React** using
- **Reach Router** for routing components to certain paths,
- **Axios** for fetching all the data from the API, and
- **Sass / CSS** for styling, using the **BEM** method
