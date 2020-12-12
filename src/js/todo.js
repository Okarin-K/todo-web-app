
const todoList = [];

/**
 * 入力したTodoを追加する
 */
function addTodo() {
    // 入力したTodoをリストに追加する
    const input = document.getElementById('inputTodo');

    if(input.value == '') {
        alert('Todoを入力してください！');
        return;
    }
        
    todoList.push(input.value);
    clearInput();

    showTodo();
}

/**
 * Todoを削除する
 * @param target 削除するTodoのindex番号
 */
function deleteTodo(target) {
    todoList.splice(target, 1);

    showTodo();
}

/**
 * Todoを表示する
 */
function showTodo() {
    const todoListDiv = document.getElementById('todoList');

    // 中身を初期化する
    todoListDiv.innerHTML = '';
    // todoを表示するためのHTMLを追加していく
    for(let i = 0; i < todoList.length; i++) {
        todoListDiv.innerHTML += `<li>${todoList[i]}  <button onclick="deleteTodo(${i})">delete</button></li>`
    }
}

function clearInput() {
    const input = document.getElementById('inputTodo');
    input.value = '';
}