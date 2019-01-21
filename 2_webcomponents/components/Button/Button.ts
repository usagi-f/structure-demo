import { LitElement, html, property, customElement } from 'lit-element';

@customElement('my-button')
export default class MyButton extends LitElement {
 
  @property() text: string = 'MyButton';

  render() {
    return html`<button type="button">${this.text}</button>`;
  }
}

if (!customElements.get('my-button')) {
  customElements.define('my-button', MyButton);
}
