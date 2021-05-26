import React from 'react';
import { render, cleanup, waitFor, act } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';
import { fetchArticles } from '../../utils/api';
import ArticlesList from '../ArticlesList';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// https://www.valentinog.com/blog/testing-react/
describe('ArticlesList component', () => {
  test('Loads a list of articles on mount', async () => {
    const fakeResponse = [{ name: 'John Doe' }, { name: 'Kevin Mitnick' }];

    jest.spyOn(window, 'fetch').mockImplementation(() => {
      const fetchResponse = {
        json: () => Promise.resolve(fakeResponse)
      };
      return Promise.resolve(fetchResponse);
    });

    await act(async () => {
      render(<ArticlesList path={'/'} />, container);
    });
    expect(container.textContent).toBe('John DoeKevin Mitnick');

    window.fetch.mockRestore();
  });
});

// test('Fetches and displays data', async () => {
// axiosMock.create.mockResolvedValueOnce('');
// axiosMock.get.mockResolvedValueOnce({
//   data: {
//     articles: [
//       {
//         article_id: 3,
//         title: '22 Amazing open source React projects',
//         body:
//           'This is a collection of open source apps built with React.JS library. In this observation, we compared nearly 800 projects to pick the top 22. (React Native: 11, React: 11). To evaluate the quality, Mybridge AI considered a variety of factors to determine how useful the projects are for programmers. To give you an idea on the quality, the average number of Github stars from the 22 projects was 1,681.',
//         votes: 10,
//         topic: 'coding',
//         author: 'happyamy2016',
//         created_at: '2017-07-21T17:54:10.346Z',
//         comment_count: 14
//       },
//       {
//         article_id: 8,
//         title: 'Express.js: A Server-Side JavaScript Framework',
//         body:
//           'You’re probably aware that JavaScript is the programming language most often used to add interactivity to the front end of a website, but its capabilities go far beyond that—entire sites can be built on JavaScript, extending it from the front to the back end, seamlessly. Express.js and Node.js gave JavaScript newfound back-end functionality—allowing developers to build software with JavaScript on the server side for the first time. Together, they make it possible to build an entire site with JavaScript: You can develop server-side applications with Node.js and then publish those Node.js apps as websites with Express. Because Node.js itself wasn’t intended to build websites, the Express framework is able to layer in built-in structure and functions needed to actually build a site. It’s a pretty lightweight framework that’s great for giving developers extra, built-in web application features and the Express API without overriding the already robust, feature-packed Node.js platform. In short, Express and Node are changing the way developers build websites.',
//         votes: 2,
//         topic: 'coding',
//         author: 'cooljmessy',
//         created_at: '2016-06-30T06:59:39.654Z',
//         comment_count: 7
//       },
//       {
//         article_id: 10,
//         title:
//           'An Introduction to JavaScript Object Notation (JSON) in JavaScript and .NET',
//         body:
//           'When designing an application that will communicate with a remote computer, a data format and exchange protocol must be selected. There are a variety of open, standardized options, and the ideal choice depends on the applications requirements and pre-existing functionality. For example, SOAP-based web services format the data in an XML payload wrapped within a SOAP envelope. While XML works well for many application scenarios, it has some drawbacks that make it less than ideal for others. One such space where XML is often less than ideal is with Ajax-style web applications. Ajax is a technique used for building interactive web applications that provide a snappier user experience through the use of out-of-band, lightweight calls to the web server in lieu of full-page postbacks. These asynchronous calls are initiated on the client using JavaScript and involve formatting data, sending it to a web server, and parsing and working with the returned data. While most browsers can construct, send, and parse XML, JavaScript Object Notation (or JSON) provides a standardized data exchange format that is better-suited for Ajax-style web applications. JSON is an open, text-based data exchange format (see RFC 4627). Like XML, it is human-readable, platform independent, and enjoys a wide availability of implementations. Data formatted according to the JSON standard is lightweight and can be parsed by JavaScript implementations with incredible ease, making it an ideal data exchange format for Ajax web applications. Since it is primarily a data format, JSON is not limited to just Ajax web applications, and can be used in virtually any scenario where applications need to exchange or store structured information as text. This article examines the JSON standard, its relationship to JavaScript, and how it compares to XML. Jayrock, an open-source JSON implementation for .NET, is discussed and examples of creating and parsing JSON messages are provided in JavaScript and C#.',
//         votes: 1,
//         topic: 'coding',
//         author: 'cooljmessy',
//         created_at: '2016-10-29T02:24:09.225Z',
//         comment_count: 14
//       }
//     ],
//     total_count: 3
//   }
// });

//   const { getByTestId } = render(<ArticlesList path={'/'} />);

//   expect(getByTestId('loading')).toHaveTextContent('get:it-ing');

//   const resolvedComponent = await waitFor(() =>
//     getByTestId('articles-landing')
//   );

//   // expect(resolvedComponent).toHaveTextContent('hi');
// });
