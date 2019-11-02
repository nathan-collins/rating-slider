import { html, css, LitElement } from 'lit-element';

export class RatingSlider extends LitElement {
  static get styles() {
    return css`
      :host {
        --rating-slider-text-color: #000;

        display: block;
      }
    `;
  }

  static get properties() {
    return {
      ratings: { type: Array },
      _currentValue: { type: String },
      _currentSelection: { type: String },
    };
  }

  get sliderInput() {
    return this.shadowRoot.getElementById('slider');
  }

  get currentValue() {
    return this._currentValue;
  }

  set currentValue(currentValue) {
    this._currentValue = currentValue;
  }

  get currentSelection() {
    return this._currentSelection;
  }

  set currentSelection(currentSelection) {
    this._currentSelection = currentSelection;
  }

  render() {
    const min = 1;
    const max = this._calculateMaximum();

    return html`
      <div>
        <input
          type="range"
          min="${min}"
          max="${max}"
          .value="${this.currentValue}"
          class=""
          id="slider"
          @change=${e => this._findSelectedRating(e)}
        />
        <p>Current selection: ${this.currentSelection}</p>
      </div>
    `;
  }

  firstUpdated() {
    if (!this.ratings) return;
    this.findDefaultRating();
  }

  findDefaultRating() {
    if (!this.ratings) return;
    const selectedValue = parseInt(this.sliderInput.value, 10);
    this.currentSelection = this.ratings.find((rating, index) =>
      this.searchRatings(index, selectedValue),
    );
  }

  _calculateMaximum() {
    return this.ratings.length;
  }

  _findSelectedRating(e) {
    const selectedValue = parseInt(e.target.value, 10);
    const selectedRating = this.ratings.find((rating, index) =>
      this.searchRatings(index, selectedValue),
    );
    const selectedIndex = this.ratings.findIndex((rating, index) =>
      this.searchRatings(index, selectedValue),
    );

    this._currentValue = selectedIndex + 1;
    this._currentSelection = selectedRating;
  }

  static searchRatings(index, selectedValue) {
    return index + 1 === selectedValue;
  }
}
