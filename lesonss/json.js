/* JSON (JavaScript Object Notation) – це загальний формат для представлення значень та об'єктів. Його опис задокументований у стандарті 
RFC 4627. Спочатку він був створений для JavaScript, але багато інших мов також мають бібліотеки, які можуть працювати з ним. Таким чином, JSON легко 
використовувати для обміну даними, коли клієнт використовує JavaScript, а сервер написаний Ruby/PHP/Java або будь-якою іншою мовою.

JavaScript надає методи:


 */
 //    JSON.stringify     для перетворення об'єктів у JSON.


 //     JSON.parse         для перетворення JSON назад на об'єкт.

 let student = {
    name: "Olena",
    age: 36,
    isAngel: true,
    courses: [ 'js', 'html', 'engl'],
    wife: "yes"
 };
  let json = JSON.stringify(student);

  console.log(typeof json)
  console.log(json)

  let user = '{"name": "Serg","age":36,"isAngel":true,"courses":["js","html","engl"],"wife":"yes"}';
   user = JSON.parse(user);
   console.log(user.name)
   
   console.log(user.isAngel)
   