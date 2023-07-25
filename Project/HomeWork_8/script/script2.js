// My HomeWork

// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.

// Получаем ссылку на элемент div с классом "numbers"
let numbersDiv = document.querySelector('.numbers');

// Цикл для создания параграфов с каждым десятым числом в промежутке от 100 до 50
for (let i = 100; i >= 50; i -= 10) {
    // Создаем новый элемент параграфа
    let paragraph = document.createElement('p');
    // Задаем текст параграфа равным текущему числу
    paragraph.textContent = i;
    // Добавляем параграф в div
    numbersDiv.append(paragraph);
}

// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.

// Массив строк
const strings = ['Pop', 'Rock', 'Rap', 'Disco'];

// Получаем ссылку на элемент div с классом "strings_container"
const stringsContainer = document.querySelector('.users_container');

// Цикл для создания параграфов для каждой строки в массиве
for (let i = 0; i < strings.length; i++) {
    // Создаем новый элемент параграфа
    const paragraph = document.createElement('p');
    // Задаем текст параграфа равным текущей строке
    paragraph.textContent = strings[i];
    // Добавляем параграф в div
    stringsContainer.appendChild(paragraph);
}

//Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

// Массив с объектами пользователей
const users = [
    { first_name: 'Pol', last_name: 'Loop', age: 25 },
    { first_name: 'Donna', last_name: 'Node', age: 17 },
    { first_name: 'Kiko', last_name: 'Kook', age: 33 },
    { first_name: 'Rio', last_name: 'More', age: 19 }
];

// Получаем ссылку на элемент div с классом "users_container"
const usersContainer = document.querySelector('.users_container');

// Цикл для создания карточек только для совершеннолетних пользователей
for (let i = 0; i < users.length; i++) {
    const user = users[i];

    // Проверка на совершеннолетие
    if (user.age >= 18) {
        // Создаем новый элемент карточки
        const card = document.createElement('div');
        card.classList.add('user_card');

        // Создаем элементы для имени, фамилии и возраста пользователя
        const name = document.createElement('p');
        name.textContent = `Name: ${user.first_name}`;
        card.appendChild(name);

        const lastName = document.createElement('p');
        lastName.textContent = `Lastname: ${user.last_name}`;
        card.appendChild(lastName);

        const age = document.createElement('p');
        age.textContent = `Age: ${user.age}`;
        card.appendChild(age);

        // Добавляем карточку в div
        usersContainer.appendChild(card);
    }
}
