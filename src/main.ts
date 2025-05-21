import { CreateMap } from './classes/CreateMap';
import { Slider } from './classes/Slider';
import mapsdata from './data/maps.json';

const contentElement = document.querySelector<HTMLDivElement>('#content');
if (!contentElement) {
  throw new Error("Element with id 'content' not found");
}

class StartMain {
  mapNumber: number;
  contentElement: HTMLDivElement;
  constructor(mapNumber: number) {
    this.mapNumber = mapNumber;
    this.contentElement = contentElement as HTMLDivElement;
  }

  init() {
    const map = new CreateMap(this.contentElement, this.mapNumber);
    map.Initialize();
    const slider = new Slider(this.contentElement, this.mapNumber, mapsdata.maps.length);
    slider.Create();
  }
}

const start = new StartMain(0);

start.init();
