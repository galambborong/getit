# get:it

## Introduction

This is a Reddit-like news/content-sharing site. This repository is the front end of the project. You can view the back end repository [here](https://github.com/galambborong/pk-nc-news).

## See it in action

You can preview this project live at [getit.peterkeenan.co.uk](https://getit.peterkeenan.co.uk). You are also welcome to follow these steps to sample it locally, providing you have Git and Node installed. (Note, this project was built using Node v14.15.3.)

1. Clone the repo
2. Within the directory `getit`, run `npm i` to install all dependencies
3. Once this has completed, run `npm start`. This will open a new tab in your browser. Enjoy

### Things to bear in mind

- You are hard-coded in as user `tickle122`, so you can post new comments and delete comments made by `tickle122`
- The site is currently mainly styled for mobile, with basic styling for larger screens

## User experience

I'm making constant updates to this project at the moment, so the following is yet to be implemented or finished:

- **Sort-by handling**. I'm currently providing a selection of options for sorting articles and comments, but ideally the user should be able to control things like the number of articles they want to view per page, the sort direction, etc
- **Article deletion**
- **A landing page** which makes it more explicit to the user that they are 'logged in', who the user is

## Testing

I am using this project to teach myself about front end testing. This is a fairly large topic, I'm discovering, but worthwhile. Alas, I cannot claim that the project was created using test-driven development, but spending time learning some of the ways I can test DOM elements and React components is a useful pursuit.

## Styling overhaul

I'm not happy with the design/styling of the site, so plan to redo this in order to make it a better showcase of my CSS skills and eye for design (which, even if still primitive, are definitely more refined than the current design would indicate...).

## Technology stack

This site is built using

- **React** using
- **Reach Router** for routing components to certain paths,
- **Axios** for fetching all the data from the API, and
- **Sass / CSS** for styling, using the **BEM** method
- **Testing Library** for DOM and React component tests
