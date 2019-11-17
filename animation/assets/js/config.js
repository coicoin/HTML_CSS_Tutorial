/*приветствие*/
var user = []; //переменная массив
//цикл для фильтрации и повторного запрашивания данных
while (user.length == 0 || user == "undefined") {
    user = prompt("Пожалуйста введите свое имя: "); //Запрос ввода имени
    //двойное условие
    if (user.length > 1 && user != "undefined") {
        if (user == "Джордж") {
            alert("\n                            Здравствуйте " + user + "!\n\n          Р а д   ч т о   В ы   п о с е т и л и   м о ю   с т р а н и ц у"); //Вывод окна
        }
        else {
            alert("\nЗдравствуйте " + user + "! Это лабораторная работа №2.");
        }
    }
    else {
        alert("Вы ввели неверные данные!");
    }
}

/*создаем часы*/
function showTime() {
	var t = document.getElementById("time"); //получаем данные по id которые заменим
	var d = new Date(); //подключаем объект Date
	var hours = d.getHours(); //метод час
	hours = (hours<10) ? ("0" + hours) : hours; //тернарное условие для подстановки нулей
	var mins = d.getMinutes(); //метод минут
	mins = (mins<10) ? ("0" + mins) : mins;
	var secs = d.getSeconds(); //метод секунд
	secs = (secs<10) ? ("0" + secs) : secs;
	t.innerHTML = hours + ":" + mins + ":" + secs; //вывод.innerHTML меняет содержимое
}
setInterval(showTime, 1000); //установить интервал в 1 секунду