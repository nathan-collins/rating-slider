/* eslint-disable import/extensions */
import { html } from 'lit-html';
import { withKnobs, withWebComponentsKnobs, text } from '@open-wc/demoing-storybook';

import '../rating-slider.js';

export default {
  title: 'RatingSlider|Playground',
  component: 'rating-slider',
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: { options: { selectedPanel: 'storybookjs/knobs/panel' } },
};

export const singleComponent = () => html`
  <rating-slider></rating-slider>
`;

export const manualContent = () => html`
  <rating-slider>
    <p>${text('Content', 'Some text', 'Properties')}</p>
  </rating-slider>
`;
