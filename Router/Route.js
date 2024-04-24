export default class Route {
  url;
  title;
  pathHtml;
  pathJS;
  constructor(url, title, pathHtml, pathJS = '') {
    this.url = url;
    this.title = title;
    this.pathHtml = pathHtml;
    this.pathJS = pathJS;
  }
}
