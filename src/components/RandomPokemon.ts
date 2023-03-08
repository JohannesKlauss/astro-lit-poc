import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

import './LitPokemon'

@customElement('random-pokemon')
export class RandomPokemon extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more'

  /**
   * The number of times the button has been clicked.
   */
  @state()
  protected _pokeId = Math.floor(Math.random() * 150) + 1;

  render() {
    console.log('render pokmeon');

    return html`
      <div class="card">
          <h1>Currently showing: ${this._pokeId}</h1>
        <button @click=${this._onClick}>
          Randomize
        </button>
        <lit-pokemon poke-id=${this._pokeId}></lit-pokemon>
      </div>
    `
  }

  private _onClick() {
    this._pokeId = Math.floor(Math.random() * 150) + 1;
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.lit:hover {
      filter: drop-shadow(0 0 2em #325cffaa);
    }

    .card {
      padding: 2em;
    }

    .read-the-docs {
      color: #888;
    }

    h1 {
      font-size: 3.2em;
      line-height: 1.1;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }

    button {
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'random-pokemon': RandomPokemon
  }
}
