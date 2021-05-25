import React from 'react';
import { act, render, screen } from '@testing-library/react';
import ArticlesList from '../ArticlesList';

global.fetchArticles = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        articles: [
          {
            article_id: 3,
            title: '22 Amazing open source React projects',
            body:
              'This is a collection of open source apps built with React.JS library. In this observation, we compared nearly 800 projects to pick the top 22. (React Native: 11, React: 11). To evaluate the quality, Mybridge AI considered a variety of factors to determine how useful the projects are for programmers. To give you an idea on the quality, the average number of Github stars from the 22 projects was 1,681.',
            votes: 10,
            topic: 'coding',
            author: 'happyamy2016',
            created_at: '2017-07-21T17:54:10.346Z',
            comment_count: 14
          },
          {
            'ar{ticle_id': 36,
            title: 'The vegan carnivore?',
            body:
              'The chef Richard McGeown has faced bigger culinary challenges in his distinguished career than frying a meat patty in a little sunflower oil and butter. But this time the eyes and cameras of hundreds of journalists in the room were fixed on the 5oz (140g) pink disc sizzling in his pan, one that had been five years and €250,000 in the making. This was the world’s first proper portion of cultured meat, a beef burger created by Mark Post, professor of physiology, and his team at Maastricht University in the Netherlands. Post (which rhymes with ‘lost’, not ‘ghost’) has been working on in vitro meat (IVM) since 2009. On 5 August this year he presented his cultured beef burger to the world as a ‘proof of concept’. Having shown that the technology works, Post believes that in a decade or so we could see commercial production of meat that has been grown in a lab rather than reared and slaughtered. The comforting illusion that supermarket trays of plastic-wrapped steaks are not pieces of dead animal might become a discomforting reality.',
            votes: 3,
            topic: 'cooking',
            author: 'tickle122',
            created_at: '2017-04-14T09:56:23.248Z',
            comment_count: 10
          },
          {
            article_id: 1,
            title: 'Running a Node App',
            body:
              'This is part two of a series on how to get up and running with Systemd and Node.js. This part dives deeper into how to successfully run your app with systemd long-term, and how to set it up in a production environment.',
            votes: 2,
            topic: 'coding',
            author: 'jessjelly',
            created_at: '2016-08-18T12:07:52.389Z',
            comment_count: 11
          }
        ],
        total_count: 3
      })
  })
);

describe('ArticlesList', () => {
  test('Loads data on mount', async () => {
    await act(async () => render(<ArticlesList path={'/'} />));
    expect(
      screen.getByText('Some reading to get you started...')
    ).toBeInTheDocument();
  });
});
