// Урок 2. State, Props.Жизненный цикл react компонента.Хуки
// Задание: Список комментариев с удалением.

//     Цель: Комбинирование useState, рендеринга списков и обработки событий для создания интерактивного интерфейса.

//         Задача:
// Создать компонент CommentsList, который отображает список комментариев.Каждый комментарий должен иметь кнопку для его удаления.При нажатии на кнопку комментарий должен удаляться из списка.

// Можно использовать заготовку:

// const [comments, setComments] = useState([
// { id: 1, text: "Это первый комментарий" },
// { id: 2, text: "Это второй комментарий" },
// { id: 3, text: "Это третий комментарий" }
// ]);

import React, { useState } from "react";

const db = [
    { id: crypto.randomUUID(), readyText: "Это первый комментарий" },
    { id: crypto.randomUUID(), readyText: "Это второй комментарий" },
    { id: crypto.randomUUID(), readyText: "Это третий комментарий" }
]

function Comment() {
    const [comments, setComments] = useState('');
    const [arrayText, setArrayText] = useState(db);

    const handleInputChange = (event) => {
        setComments(event.target.value);
    };

    const handleAddItem = () => {
        if (comments.trim() !== '') {
            setArrayText([...arrayText, {id: crypto.randomUUID(), comments}]);
            setComments('');
        }
    };

    const deleteItem = (id) => {
        setArrayText(text => text.filter((comment) => comment.id !== id));
    };
    
    return (
        <div className="App">
            <h1>Домашнее задание 2</h1>
            <input
                type="text"
                value={comments}
                onChange={handleInputChange}
                placeholder="Введите текст"
            />
            <button onClick={handleAddItem}>Добавить</button>
            <ul>
                {arrayText.map((item) => (
                    <li key={item.id}>{item.readyText}{item.comments} <button onClick={() => deleteItem(item.id)}>удалить</button></li>
                ))}
            </ul>
        </div>
    );  
}
export default Comment;