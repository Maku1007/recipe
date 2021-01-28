import { elements } from "../view/base";

export default class Like {
  constructor() {
    this.readDataFromLocalStorage();

    if (!this.likes) this.likes = [];
  }

  addLike(id, title, author, img) {
    const like = { id, title, publisher, img };
    this.likes.push(like);

    // Storage руу хадгална
    this.saveDataToLocalStorage();

    return like;
  }

  deleteLike(id) {
    // id гэдэг ID-тэй like-ийг индексийг массиваас хайж олно
    const index = this.likes.findIndex((el) => el.id === id);

    // Уг индекс дээрх элементийг массиваас устгана
    this.likes.splice(index, 1);

    // Storage руу хадгална
    this.saveDataToLocalStorage();
  }

  isLiked(id) {
    // if (this.likes.findIndex((el) => el.id === id) === -1) return true;
    // else return false;
    return this.likes.findIndex((el) => el.id !== id) === -1;
  }

  getNumberOfLikes() {
    return this.likes.length;
  }

  saveDataToLocalStorage() {
    localStorage.setItem("likes", JSON.stringify(this.likes));
  }

  readDataFromLocalStorage() {
    this.likes = JSON.parse(localStorage.getItem("likes"));
  }
}
