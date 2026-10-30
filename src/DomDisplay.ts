import type { IDisplay } from "./IDisplay";

export class DomDisplay implements IDisplay{
  private el: HTMLElement;
  private historyEl : HTMLElement;

  constructor(el:HTMLElement,historyEl:HTMLElement){
    this.el = el;
    this.historyEl = historyEl;
  }

  render(text: string): void {
    this.el.textContent = text;
  }

  renderError(message: string): void {
    this.el.textContent = message;
  }

  renderHistory(text: string): void {
    this.historyEl.textContent = text;
  }
}