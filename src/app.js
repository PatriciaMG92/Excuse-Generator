/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

const button = document.getElementById("myButton");

button.addEventListener("click", setExcuse);

const who = ["Mi perro", "Mi cuñado", "La gata", "El vecino"];
const action = ["se ha comido", "ha tirado", "ha roto", "ha quemado"];
const what = ["mis deberes", "la televisión", "la moto", "el ordenador"];
const when = [
  "esta misma mañana",
  "durante la comida",
  "cuando estaba a punto de salir de casa",
  "por la noche"
];

function getRandomNumber(array) {
  return Math.floor(Math.random() * array.length);
}

function getValue(array) {
  return array[getRandomNumber(array)];
}

function getWho() {
  return getValue(who);
}

function getAction() {
  return getValue(action);
}

function getWhat() {
  return getValue(what);
}

function getWhen() {
  return getValue(when);
}

function joinMessage() {
  return (
    '"' + getWho() + " " + getAction() + " " + getWhat() + " " + getWhen() + '"'
  );
}

function showMessage() {
  document.getElementById("message").innerHTML = joinMessage();
}

const color = ["green", "blue", "red", "purple", "black", "pink"];

function getRandomIndexOfColors(array) {
  return Math.floor(Math.random() * array.length);
}

function getColor() {
  return color[getRandomIndexOfColors(color)];
}

function changeColor() {
  document.getElementById("message").style.color = getColor();
}

function setExcuse() {
  showMessage();
  changeColor();
}
