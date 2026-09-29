import type { IDisplay } from "./IDisplay";

export class DomDisplay implements IDisplay{
  private el: HTMLElement;

  constructor(el:HTMLElement){
    this.el = el;
  }

  render(text: string): void {
    this.el.textContent = text;
  }

  renderError(message: string): void {
    this.el.textContent = message;
  }
}