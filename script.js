"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
    //Цикл из одного повторения для проверки numberOfFilms
    for (let i = 0; i < 1; i++) {
      // Проверка на пустую строку
      if (personalMovieDB.count === "") {
        personalMovieDB.count = prompt("Вы ничего не ввели! так сколько?", "");
        i--;
      }
      // Проверка на отмену
      else if (personalMovieDB.count === null) {
        personalMovieDB.count = prompt(
          "Отмену жать нельзя! сколько фильмов?",
          ""
        );
        i--;
      }
      // Проверка на цыфры
      else if (isNaN(personalMovieDB.count)) {
        personalMovieDB.count = prompt("Только цыфры! Сколько?", "");
        i--;
      }
      // Проверка на длину
      else if (personalMovieDB.count.length > 5) {
        personalMovieDB.count = prompt("Слишком много! Введите правду!", "");
        i--;
      }
      // Проверка на пробелы
      else if (personalMovieDB.count.trim() == "") {
        personalMovieDB.count = prompt("Пробелы? Только цыфры, Алёша!", "");
        i--;
      }
    }
  },
  rememberMyFilms: function () {
    let repeatCheck = []; // для проверки на повтор
    //цикл для задачи вопросов по 3 раза
    for (let i = 1; i <= 3; i++) {
      let a = prompt(`${i}. "Один из последних просмотренных фильмов?"`, ""); //первый вопрос
      //цикл для проверки первого вопроса
      for (let j = 0; j < 1; j++) {
        // Цикл для провкри на повтор
        for (let k = 0; k < repeatCheck.length; k++) {
          if (a == null) {
            break;
          } else if (repeatCheck[k] == a.trim()) {
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
        // Проверка на пробелы
        else if (a.trim() == "") {
          a = prompt("Пробелы - не фильм! Введи название", "");
          j--;
        }
        // Для проверки на повтор
        else {
          repeatCheck[i - 1] = a.trim();
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
      personalMovieDB.movies[a] = b.trim();
    }
  },
  detectPersonalLevel: function (data) {
    if (data.count >= 0 && data.count < 10) {
      console.log("Маловато!");
    } else if (data.count >= 10 && data.count <= 30) {
      console.log("Нормально!");
    } else if (data.count > 30) {
      console.log("Дофига!");
    } else {
      console.log("Ошебка!");
    }
  },
  showMyDB: function (data) {
    if (!data.privat) {
      console.log(data);
    }
  },
  writeYourGenres: function (data) {
    // Цикл для задания вопроса 3 раза
    for (let i = 0; i < 3; i++) {
      let a = prompt(`Ваш любимый жанр под номером #${i + 1}`, "");
      for (let b = 0; b < 1; b++) {
        // Цикл для проверки на повтор
        for (let j = 0; j < data.genres.length; j++) {
          if (data.genres[j] == a) {
            a = prompt(
              `Жанр уже был под номером ${j + 1}!  Напишите другой!`,
              ""
            );
            j = -1;
          }
        }
        // Проверки
        if (a === "") {
          a = prompt(`Вы ничего не ввели! Кокой жанр под номером #${i + 1}`, "");
          b--;
        } else if (a === null) {
          a = prompt(`Отмену жать нельзя! Кокой жанр под номером #${i + 1}`, "");
          b--;
        } else if (a.length > 5) {
          a = prompt(`Слишком длинный! Жанр под номером #${i + 1} покороче`, "");
          b--;
        } else if (a.trim() == "") {
          a = prompt(`Ай-яй-яй! Пробелы - это не жанр! Введи жанр под номером #${i + 1}`, "");
          b--;
        } else {
          data.genres[i] = a;
          console.log(data.genres);
        }
      }
    }
    data.genres.forEach((element, index) => {
      console.log(`Любимый жанр #${index + 1} - это ${element}`);
    });
  },
  toggleVisibleMyDB: function (data) {
    if (data.privat) {
      data.privat = false;
    } else {
      data.privat = true;
    }
  },
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel(personalMovieDB);
// personalMovieDB.toggleVisibleMyDB(personalMovieDB);
// personalMovieDB.showMyDB(personalMovieDB);
// personalMovieDB.writeYourGenres(personalMovieDB);
// console.log(personalMovieDB);

//

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
