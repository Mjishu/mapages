import { CreateMap } from './classes/CreateMap';
import { Slider } from './classes/Slider';

const contentElement = document.querySelector<HTMLDivElement>('#content');
if (!contentElement) {
  throw new Error("Element with id 'content' not found");
}

const maps = new CreateMap(contentElement);
const slider = new Slider(contentElement);

maps.Initialize();
slider.Create();
