import mapsData from '../data/maps.json';
import { Map } from './Map';

interface mapInfo {
  title: string;
  order: number;
  image_href: string;
}

export class CreateMap {
  currentMap: number;
  mapData: mapInfo[];
  htmlBody: HTMLDivElement;
  constructor(body: HTMLDivElement, mapNumber: number) {
    this.currentMap = mapNumber;
    this.mapData = mapsData.maps;
    this.htmlBody = body;
  }

  Initialize() {
    for (const map of this.mapData as mapInfo[]) {
      console.log(map.title + map.order + this.currentMap);
      if (map.order === this.currentMap) {
        console.log('creating new map ' + map.title);
        let newMap = new Map(map, this.htmlBody);
        newMap.Create();
        this.currentMap += 1;
        return;
      }
    }
  }
}
