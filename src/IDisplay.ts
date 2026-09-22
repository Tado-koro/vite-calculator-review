import { DomDisplay } from "./DomDisplay";
import { Calculator } from "./Calculator";

export interface IDisplay{
  render(text:string):void;

  renderError(message:string):void;
}