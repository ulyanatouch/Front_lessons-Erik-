const box = document.querySelector(".block");
const button = document.querySelector("button");
const root = document.getElementById("root");

// 1. Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.

button.addEventListener("click", () => {
    box.style.background = "green";
    box.style.width = "100px";
    box.style.height = "100px";
});

// 2. Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.

const changeColor = () => {
    const color = "blue";
    box.style.background = color;
    console.log(`Обнавлен цвет квадрата:${color}`);
};
button.addEventListener("click", changeColor);

// 3. Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.
button.addEventListener("click", () => {
    box.style.width = `${box.clientWidth + 70}px`;
    box.style.height = `${box.clientHeight + 70}px`;
});

// 4. Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.

button.addEventListener("click", () => {
    const text = "Do it!";
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    paragraph.style.color = "blue";
    root.append(paragraph);
});

// 5. Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.

button.addEventListener("click", () => {
    // храним в переменной наш тескт
    const text = "I can do it!";
    //   создаем параграф
    const paragraph = document.createElement("p");
    // указываем что в параграфе толжен быть текст который хранится в пермеенной "text"
    paragraph.textContent = text;
    //   уже параграф в котором есть текст добацляем в  элемент "root"
    root.append(paragraph);

    //   обращаемся ко всем тегам "p" и храним их в переменой allParagraphs
    const allParagraphs = document.querySelectorAll("p");

    //   Циклично делаем проверку параграфов, если индкс параграфа четный то параграф бует синим
    //  в ином случеа будет зеленым
    allParagraphs.forEach((eachParagraph, index) => {
        if (index % 2 === 0) {
            eachParagraph.style.color = "blue";
        } else {
            eachParagraph.style.color = "green";
        }
    });
});