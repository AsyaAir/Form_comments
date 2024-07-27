// Функция для преобразования имени
function formatName(name) {
    name = name.trim(); // Убираем лишние пробелы
    name = name.toLowerCase(); // Приводим все буквы к нижнему регистру
    name = name.charAt(0).toUpperCase() + name.slice(1); // Первая буква заглавная
    return name;
}

// Функция для проверки спама (нечувствительная к регистру)
function checkSpam(str) {
    const spamWords = ['viagra', 'xxx'];
    let result = str;

    spamWords.forEach(word => {
        // Регулярное выражение для поиска слова, нечувствительное к регистру
        let regExp = new RegExp(word, 'gi'); 
        result = result.replace(regExp, '***');
    });

    return result;
}

// Функция для добавления комментария
function addComment() {
    const nameInput = document.getElementById('name').value;
    const avatarInput = document.getElementById('avatar').value;
    const commentInput = document.getElementById('comment').value;

    const formattedName = formatName(nameInput);
    const checkedComment = checkSpam(commentInput);

    // Проверка существования элементов
    const avatarImg = document.getElementById('avatar_result');
    const nameResult = document.getElementById('name_result');
    const commentResult = document.getElementById('comment_result');

    if (avatarImg && nameResult && commentResult) {
        // Проверка на пустую ссылку
        if (avatarInput) {
            avatarImg.src = avatarInput;
        } else {
            avatarImg.src = ""; // или можно указать URL по умолчанию
        }

        // Устанавливаем имя и комментарий
        nameResult.innerText = formattedName;
        commentResult.innerText = checkedComment;

        // Очищаем поля ввода
        document.getElementById('name').value = '';
        document.getElementById('avatar').value = '';
        document.getElementById('comment').value = '';
    } else {
        console.error('One or more elements are missing.');
    }
}
