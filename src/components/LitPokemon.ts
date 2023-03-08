import { LitElement, html } from 'lit'
import {customElement, property, state} from 'lit/decorators.js'

@customElement('lit-pokemon')
export class LitPokemon extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more'

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number, attribute: 'poke-id' })
  pokeId = 0

  @state()
  private pokemon: any = null;

  connectedCallback() {
    super.connectedCallback();

    console.log('connectedCallback pokemon in lit', this.pokeId);

    this.loadPokemon()
  }

  async loadPokemon() {
    const res =  await fetch(`/api/${this.pokeId}.json`)

    this.pokemon = await res.json();

    console.log('load', this.pokemon);
  }

  update(changedProperties: Map<string, unknown>) {
    if (changedProperties.has("pokeId")) {
      this.pokemon = null;
      this.loadPokemon()
    }

    super.update(changedProperties);
  }

  render() {
    console.log('render pokemon in lit');

    return this.renderPokemon()
  }

  renderPokemon() {
    if (this.pokemon) {
      return html`
          <div class="link-card">
              <a href=${this.pokemon.species.url}>
                  <h2>
                      ${this.pokemon.species.name}
                      <span>&rarr;</span>
                  </h2>
                  <img src=${this.pokemon.sprites.front_default}/>
                  <p>
                      ${this.pokemon.types.map(({type}) => type.name).join(', ')}
                  </p>
              </a>
          </div>
      `
    }

    return html`
      <div class="card">
          <h2>Loading...</h2>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lit-pokemon': LitPokemon
  }
}
