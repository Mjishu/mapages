interface mapInfo {
  title: string;
  order: number;
  image_href: string;
}

export class Map {
  map: mapInfo;
  htmlBody: HTMLDivElement;
  constructor(mapData: mapInfo, htmlBody: HTMLDivElement) {
    this.map = mapData;
    this.htmlBody = htmlBody;
  }

  Create() {
    const NewMap = document.createElement('div'); // div creation
    NewMap.className = 'class-div';

    const mapImage = document.createElement('img');
    mapImage.src = this.map.image_href;

    const mapTitle = document.createElement('h2');
    mapTitle.innerHTML = this.map.title;

    NewMap.append(mapImage, mapTitle);
    this.htmlBody.appendChild(NewMap);
  }
}
