import uniqid from "uniqid";

export class Branch {
  constructor(name,url) {
    this.id = uniqid();
    this.name = name;
    this.children = [];
    this.url = url
  }
}
