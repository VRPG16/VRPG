// Функция для скачивания файла
function downloadFile() {
    var filename = 'сборка.txt';
    var fileUrl = 'сборка.txt';

    var element = document.createElement('a');
    element.setAttribute('href', fileUrl);
    element.setAttribute('download', filename);

    // Скрываем элемент, чтобы он не отображался на странице
    element.style.display = 'none';
    document.body.appendChild(element);

    // Симулируем клик по элементу для скачивания файла
    element.click();

    // Удаляем элемент из DOM
    document.body.removeChild(element);
}

// Назначаем функцию downloadFile на кнопку при загрузке страницы
document.getElementById('downloadButton').addEventListener('click', downloadFile);
