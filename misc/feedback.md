# Northcoders News Front End

Really nice work :D This app is looking great functionally and just need a little bit of love with it's styling. You've demonstrated some solid React principles and are managin state and props well. Next steps are to

1. Style your app
2. Deploy it to netlify (See instructions)
3. Take a look at the checklist below for further improvements.

## README - write your own and make sure that it:

- [ ] has a link to the deployed version
- [ ] provides general info about your app
- [ ] includes links to your back end repo
- [ ] specifies the minimum version of Node required to run locally (check your Node version, `node --version` and use the major version that you are on)
- [ ] has clear instructions on how to run your project locally (`git clone <repo-url>, cd ...`)

## UX

- [x] Basic styling added
- [x] Responsive design
- [ ] Items aligned
- [x] Content legible (not too wide, obstructed, etc)
- [ ] Refreshing doesn’t cause an issue on sub-pages (See the [deployment guide](https://github.com/northcoders/fe-nc-news/blob/master/netlify-deployment.md))
- [x] No errors in the console
- [x] Votes / Posts / Deletions happen instantly _OR_ give user indication of loading

This is the main thing left to do. Choose a ncie colour scheme and add style the default elements to finish off what is functionaly a great app. A couple of tips:

- On larger screens keeping the content centered with some reasonably large margins keeps the users focus on what you want them to read. A fixed width with margin auto or a flex column generally work well for this.
- Choose a main brand colour and some additional colours to complement this one. The main colour should form the basis of your site and make use of subtle whites / greys to keep the focus on the main colours. Sites like https://coolors.co/ and http://colormind.io/bootstrap/# can help if you need inspiration.
- Your App has a fixed height so the background only takes up 1 whole screen at the most. Swap your apps `height: 100vh` for `min-height: 100vh` to allow it to expand with the content.

## Functionality

### Articles

- [x] Serves all articles / top articles
- [x] Can vote on articles
- [x] Can vote a maximum of once in either direction per page load
- [x] Votes are persistent when page is refreshed
- [x] Topic pages load only relevant articles (especially when navigating from one topic page to another)
- [x] Can sort articles by date created / comment_count / votes

Really nice work here, good job :D

### Individual Article / Comments

- [x] Individual articles are served with comments
- [x] Can vote on comments
- [x] Can vote a maximum of once in either direction per page load
- [x] Votes are persistent when page is refreshed
- [x] Can post new comments, which are persistent

When posting comments we know that you'll have to use a username from the list of users to post. This isn't as obvious to other people viewing your site so I'd suggest either hard coding the user to post / setting the initial value of the form to an exisiting user or giving them a choice of users to post as.

- [ ] Can only delete comments of logged in user
- [ ] Deleted comments don’t re-appear on re-render/refresh

### Additional functionality:

- [x] sort comments by date created / votes
- [x] filter / display articles by specific user

## Error Handling

- [ ] Bad url
- [ ] Bad topic slug in url
- [ ] Bad article id in url
- [x] Post comment: (No text in comment body / Can you post without logging in?)

A little work to do here. Consider making an Error component that you can re-use whenever you need to display an error.

## Code

- [x] Well named components
- [ ] Functional components used where possible

`Nav` could do with a refactor to be a functionaly component as you never use it's state.

- [x] Components reused where possible (`Articles` / `Voter`...)
- [x] Minimal state - don't hold derivable data in state
- [ ] Set state correctly, using previous state where possible

In `AddComment` you are mutating the currState when you do

```js
currState.comment = updatedComment;
currState.error = false;
return currState;
```

This is a react no-no, you should return a new object here to replace the currState.

- [x] Handle asynchronicity clearly (i.e. isLoading pattern)
- [x] Functions are DRY (`handleChange` for controlled components / api calls)
- [x] Use object destructuring where possible
- [x] Tidy? If not: ESLint / Prettier
- [x] `node_modules` git ignored
- [ ] No `console.log`s / comments

Just make sure you remove these when you're done :D

- [x] remove unnecessary files (e.g. App.test.js)

## MAKE SURE ALL TESTS ARE STILL PASSING IN BACK END
