const { strict } = require("assert");

/*Створіть дві асинхронні функції для здійснення запитів до сервера:

Перша функція робить запит на сервер за посиланням https://jsonplaceholder.typicode.com/comments/1 і повертає об'єкт comments у вигляді Promise.

Друга функція робить запит на сервер за посиланням https://jsonplaceholder.typicode.com/posts/2 і повертає об'єкт posts у вигляді Promise.

Викликайте ці функції. Використовуйте методи Promise.all та Promise.allSettled, передаючи їм масив із викликами обох функцій. Виведіть результат виконання цих функцій.
*/
"use strict"

  async () => {
    const url = 'https://jsonplaceholder.typicode.com/comments/1';

    try {
      const response = await fetch(url);
      const comments = await response.json();
      return comments;
    } catch (error) {
      throw new Error(`Не вдалося отримати коментарі. Помилка: ${error.message}`);
    }
  }
  
  async function getPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts/2';
  
    try {
      const response = await fetch(url);
      const posts = await response.json();
      return posts;
    } catch (error) {
      throw new Error(`Не вдалося отримати пости. Помилка: ${error.message}`);
    }
  }
  
  // using  Promise.all
  Promise.all([getComments(), getPosts()])
    .then(([comments, posts]) => {
      console.log('Результат викликів Promise.all:');
      console.log('Коментарі:', comments);
      console.log('Пости:', posts);
    })
    .catch(error => {
      console.error('Сталася помилка при виклику Promise.all:', error.message);
    });
  
  // using Promise.allSettled
  Promise.allSettled([getComments(), getPosts()])
    .then(results => {
      console.log('\nРезультат викликів Promise.allSettled:');
      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          console.log(`Операція ${index + 1} виконана успішно. Результат:`, result.value);
        } else {
          console.error(`Операція ${index + 1} завершилася неуспішно. Причина:`, result.reason.message);
        }
      });
    });