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
  barSlider: HTMLInputElement;
  sliderValue: HTMLParagraphElement;
  map: CreateMap;
  slider: Slider;

  constructor(mapNumber: number) {
    this.mapNumber = mapNumber;
    this.contentElement = contentElement as HTMLDivElement;
    this.map = new CreateMap(this.contentElement, this.mapNumber);
    this.map.Initialize();
    this.slider = new Slider(this.contentElement, this.mapNumber, mapsdata.maps.length);
    this.slider.Create();
    this.barSlider = document.querySelector('#bar') as HTMLInputElement;
    this.sliderValue = document.querySelector('#sliderValue') as HTMLParagraphElement;
  }

  init() {
    this.barSlider
      ? this.barSlider.addEventListener('input', () => {
          this.onChange();
        })
      : console.log('not working');
  }

  onChange() {
    console.log(this.barSlider.value);
    this.sliderValue.textContent = this.barSlider.value.toString();
    this.mapNumber = Number(this.barSlider.value);
    this.CleanupAndCreate();
  }

  CleanupAndCreate() {
    const element = document.getElementById('classHolder');
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }

    const newMap = new CreateMap(this.contentElement, this.mapNumber);
    newMap.Initialize();
  }
}

const start = new StartMain(0);

start.init();
