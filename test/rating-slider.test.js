import { html, fixture, expect } from '@open-wc/testing';

import '../rating-slider.js';

describe('RatingSlider', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const ratings = ['Very Good', 'Great', 'Awesome'];

    const el = await fixture(html`
      <rating-slider .ratings="${ratings}"></rating-slider>
    `);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  // it('shows initially the text "hey there Nr. 5!" and an "increment" button', async () => {
  //   const el = await fixture(html`
  //     <rating-slider></rating-slider>
  //   `);

  //   expect(el).shadowDom.to.equal(`
  //     <h2>Hey there Nr. 5!</h2>
  //     <button>increment</button>
  //   `);
  // });

  // it('increases the counter on button click', async () => {
  //   const el = await fixture(html`
  //     <rating-slider></rating-slider>
  //   `);
  //   el.shadowRoot.querySelector('button').click();

  //   expect(el.counter).to.equal(6);
  // });

  // it('can override the title via attribute', async () => {
  //   const el = await fixture(html`
  //     <rating-slider title="attribute title"></rating-slider>
  //   `);

  //   expect(el.title).to.equal('attribute title');
  // });
});
