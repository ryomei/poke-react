export default class Pokemon {
  constructor(data = {}) {
    const { id, name, image, url } = data;

    this.id = id;
    this.name = name;
    this.image = image;
    this.url = url;
  }
}
