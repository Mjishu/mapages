export class Slider {
  barValue: number;
  htmlBody: HTMLDivElement;
  mapNumber: number;
  sliderSize: number;
  constructor(body: HTMLDivElement, mapNumber: number, sliderSize: number) {
    this.mapNumber = mapNumber;
    this.barValue = mapNumber;
    this.htmlBody = body;
    this.sliderSize = sliderSize - 1;
  }

  Create() {
    const bar = document.createElement('input');
    bar.type = 'range';
    bar.min = '0';
    bar.max = this.sliderSize.toString();
    bar.value = this.barValue.toString();
    bar.id = 'bar';

    const sliderValue = document.createElement('p');
    sliderValue.textContent = this.barValue.toString();
    sliderValue.id = 'sliderValue';

    this.htmlBody.append(bar, sliderValue);
  }
}
