export class Slider {
  barValue: number;
  htmlBody: HTMLDivElement;
  mapNumber: number;
  constructor(body: HTMLDivElement, mapNumber: number) {
    this.mapNumber = mapNumber;
    this.barValue = mapNumber;
    this.htmlBody = body;
  }

  Create() {
    const bar = document.createElement('input');
    bar.type = 'range';
    bar.min = '0';
    bar.max = '100';
    bar.value = this.barValue.toString();

    const sliderValue = document.createElement('p');
    sliderValue.textContent = this.barValue.toString();

    bar.addEventListener('input', () => {
      sliderValue.textContent = this.barValue.toString();
    });

    this.htmlBody.append(bar, sliderValue);
  }
}
