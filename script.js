"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

//Цикл из одного повторения для проверки numberOfFilms
for (let i = 0; i < 1; i++) {
  // Проверка на пустую строку
  if (numberOfFilms === "") {
    numberOfFilms = prompt("Вы ничего не ввели! так сколько?", "");
    i--;
  }
  // Проверка на отмену
  else if (numberOfFilms === null) {
    numberOfFilms = prompt("Отмену жать нельзя! сколько фильмов?", "");
    i--;
  }
  // Проверка на цыфры
  else if (isNaN(numberOfFilms)) {
    numberOfFilms = prompt("Только цыфры без пробелов! Сколько?", "");
    i--;
  }
  // Проверка на длину
  else if (numberOfFilms.length > 5) {
    numberOfFilms = prompt("Слишком много! Введите правду!", "");
    i--;
  }
}

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let repeatCheck = []; // для проверки на повтор
//цикл для задачи вопросов по 2 раза
for (let i = 1; i <= 3; i++) {
  let a = prompt(`${i}. "Один из последних просмотренных фильмов?"`, ""); //первый вопрос
  //цикл для проверки первого вопроса
  for (let j = 0; j < 1; j++) {
    // Цикл для провкри на повтор
    for (let k = 0; k < repeatCheck.length; k++) {
      // проверка на повтор
      if (repeatCheck[k] == a) {
        a = prompt("Этот фильм уже был введите другой!", "");
        k = -1;
      }
    }
    // Проверка на пустую строку
    if (a === "") {
      a = prompt("Пустую строку нельзя! Какой фильм?", "");
      j--;
    }
    // Проверка на отмену
    else if (a == null) {
      a = prompt("Отмену жать нельзя! Какой фильм?", "");
      j--;
    }
    // Проверка на длину
    else if (a.length > 5) {
      a = prompt("Слишком длинное название! Укороти", "");
      j--;
    }
    // Проверка на повтор фильма
    else {
      repeatCheck[i - 1] = a;
      console.log(repeatCheck);
    }
  }

  let b = prompt(`${i}. "На сколько оцените его?"`, ""); //второй вопрос
  //цикл для проверки второго вопроса
  for (let l = 0; l < 1; l++) {
    // Проверка на пустую строку
    if (b === "") {
      b = prompt("Пустую строку нельзя! Какая оценка?", "");
      l--;
    }
    // Проверка на отмену
    else if (b === null) {
      b = prompt("Отмену жать нельзя! Какая оценка?", "");
      l--;
    }
    // Проверка на цыфры
    else if (isNaN(b)) {
      b = prompt("Только цыфры! Какая оценка?", "");
      l--;
    }
    // Проверка на длину
    else if (b.length > 5) {
      b = prompt("Слишком много символов! Укороти", "");
      l--;
    }
  }
  personalMovieDB.movies[a] = b;
}

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

if (personalMovieDB.count >= 0 && personalMovieDB.count < 10) {
  console.log("Маловато!");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log("Нормально!");
} else if (personalMovieDB.count > 30) {
  console.log("Дофига!");
} else {
  console.log("Ошебка!");
}

console.log(personalMovieDB);

/*
// ПРОВЕРКА РАБОТЫ ЦЫКЛОВ (НА ВСЯКИЙ)
let countBIG = 0;
let countSMALL = 0;
let answer = prompt("!", "");

for (let i = 0; i < 1; i++) {
  countBIG++;
  console.log(`Большой цикл ${countBIG} раз`);
  console.log(answer);

  if (answer == "") {
    countSMALL++;
    console.log(`Маленький цикл ${countSMALL} раз`);
    answer = prompt("Пустая строка", "");
    i -= 1;
    console.log(`i ${i}`);    
  } else if (answer == null) {
    countSMALL++;
    console.log(`Маленький цикл ${countSMALL} раз`);    
    answer = prompt("null отмена", "");
    i -= 1;
    console.log(`i ${i}`);

  } else if (isNaN(answer)) {
    countSMALL++;
    console.log(`Маленький цикл ${countSMALL} раз`);
    answer = prompt("isNaN", "");
    i -= 1;
    console.log(`i ${i}`);    
  } else if (answer.length > 1) {
    countSMALL++;
    console.log(`Маленький цикл ${countSMALL} раз`);
    answer = prompt("Long", "");
    i -= 1;
    console.log(`i ${i}`);    
  }


  console.log("Большой цикл завершился");
}

*/
