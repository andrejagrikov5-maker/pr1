//# pr1
//практическая работа номер 1
let balance = 10000; // начальный баланс
const currency = "RUB"; // валюта
let transactions = []; // массив для хранения операций

// Примеры начальных транзакций
transactions = [
    { id: 1, type: "расход", category: "еда", amount: 500, date: "2024-01-15", description: "Обед в кафе" },
    { id: 2, type: "доход", category: "зарплата", amount: 30000, date: "2024-01-10", description: "Зарплата за январь" },
    { id: 3, type: "расход", category: "транспорт", amount: 1200, date: "2024-01-12", description: "Такси до работы" },
    { id: 4, type: "расход", category: "развлечения", amount: 2500, date: "2024-01-14", description: "Кино" }
];

// Функция для отображения текущего баланса
function showBalance() {
    console.log(`\n💰 ТЕКУЩИЙ БАЛАНС: ${balance} ${currency}`);
}

// Функция для добавления транзакции
function addTransaction(type, category, amount, description) {
    // TODO: Создайте новый объект транзакции со свойствами:
    // id (увеличивать на 1 от предыдущей транзакции),
    // type, category, amount, date (текущая дата в формате "2024-01-20"),
    // description
    // Добавьте объект в массив transactions

    // TODO: Обновите баланс:
    // если type = "доход" - увеличить balance на amount
    // если type = "расход" - уменьшить balance на amount


    const newId = transactions[transactions.length] > 0 ? transactions[transactions.length - 1].id + 1 : 1;
     // transactions.length - сколько операций в массиве (сейчас 4)
    // > 0 - проверяем, есть ли хоть одна операция
    // ? - если да, то делаем то, что после ?
    // : - если нет, то делаем то, что после :
    // transactions[transactions.length - 1] - берем последнюю операцию
    // .id - берем ее id (у последней операции id = 4)
    // + 1 - прибавляем 1 (4 + 1 = 5)

    const currentDay = new Date(); //Берем текущую дату с компьютера
    const year = currentDay.getFullYear(); // Берем год
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
    // getMonth() дает месяц от 0 до 11, поэтому +1
    // String() превращает число в текст
    // padStart(2, '0') - если число из одной цифры, добавляет 0 впереди
    // Например: 5 станет "05"
    const day = String(currentDate.getDate()).padStart(2, '0'); // день месяца
    const formattedDate = `${year}-${month}-${day}`; // собираем дату

    //Создаем объект новой транзакции
    const newTransaction = {
        id: newId,           // новый id (5)
        type: type,          // то, что передали в функцию (например "расход")
        category: category,  // что передали (например "еда")
        amount: amount,      // сумма (например 1200)
        date: formattedDate, // сегодняшняя дата
        description: description // описание (например "Продукты на неделю")
    };

    //Добавляем в массив всех транзакций
    transactions.push(newTransaction);
    // push - команда "добавить в конец массива"
    // Теперь в массиве transactions 5 операций

    //Обновляем баланс
    if (type === "доход") {
        // если это доход
        balance = balance + amount; // прибавляем деньги
        // balance += amount - можно записать короче
    } else if (type === "расход") {
        // если это расход
        balance = balance - amount; // вычитаем деньги
        // balance -= amount - короткая запись
    }



    console.log(`✅ Транзакция добавлена: ${description}`);
    showBalance();
}

// Функция для просмотра всех транзакций
function showAllTransactions() {
    console.log("\n📋 ВСЕ ТРАНЗАКЦИИ:");
    console.log("=".repeat(60));

    // TODO: Используя цикл for или forEach, выведите все транзакции
    // Формат вывода: "[доход/расход] Категория: сумма (описание)"
    // Пример: "расход  еда: 500 RUB (Обед в кафе)"


    // Перебираем все транзакции
    transactions.forEach(transaction => {
        // forEach - для каждого элемента массива сделать что-то
        // transaction - текущая операция (берется по очереди)
        console.log(`${transaction.type.padEnd(8)} ${transaction.category.padEnd(12)}: ${transaction.amount} ${currency} (${transaction.description})`);
        // padEnd(8) - сделать текст длиной 8 символов, добавить пробелы справа
        // Чтобы все строки красиво выровнялись
        // Пример: "расход" (6 букв) + 2 пробела = 8 символов
    });


    console.log("=".repeat(60));
}

// Функция для фильтрации транзакций по типу
function filterTransactionsByType(type) {
    console.log(`\n🔍 ТРАНЗАКЦИИ (${type.toUpperCase()}):`);

    // TODO: Используя цикл, найдите и выведите только транзакции указанного типа
    // Если транзакций нет, выведите "Транзакций не найдено"


     let found = false; // флаг - нашли ли что-то? пока нет (false)
    // Перебираем все транзакции
    for (const transaction of transactions) {
        // for...of - еще один способ перебора массива
        // transaction - текущая операция
        if (transaction.type === type) {
            // если тип совпадает с тем, что ищем
            console.log(`${transaction.type} ${transaction.category}: ${transaction.amount} ${currency} (${transaction.description})`);
            found = true; // отмечаем, что нашли
        }
    }
    if (!found) { // если НЕ нашли (found === false)
        console.log("Транзакций не найдено");
    }


}

// Функция для подсчёта суммы по категории
function getTotalByCategory(category) {
    let total = 0;

    // TODO: Используя цикл, посчитайте общую сумму всех транзакций указанной категории
    // Учитывайте и доходы, и расходы


    for(let i = 0; i < transactions.length; i++){
        if(transactions[i].category === category){
            total = total + transactions[i].amount
        }
    }


    console.log(`\n📊 Общая сумма по категории "${category}": ${total} ${currency}`);
    return total;
}


// Функция для проверки возможности совершить трату
function canAfford(amount) {
    // TODO: Проверьте, достаточно ли средств на балансе для указанной суммы
    // Верните true если достаточно, false если нет
    // Выведите соответствующее сообщение


    if(balance >= amount ){
        const dif = balance - amount;
        console.log("На вашем счету достаточно средств на покупку", `\nТекущий баланс: ${balance} \n Сумма траты ${amount}  \n Остаток при совершение траты ${dif}`)
        return true;
    }
    if(balance < amount ){
        const dif = amount - balance;
        console.log("На вашем счету недостаточно средств на покупку", `\nТекущий баланс: ${balance} \n Сумма траты ${amount}  \n Не хватает средств ${dif}`)
        return false;
    }


}

// Функция для поиска транзакций по ключевому слову в описании
function searchTransactions(keyword) {
    console.log(`\n🔎 Поиск: "${keyword}"`);
    let found = false;

    // TODO: Используя цикл, найдите все транзакции, в описании которых
    // содержится keyword (регистр не учитывайте)
    // Используйте метод .includes() или .toLowerCase()


    const lowerKeyword = keyword.toLowerCase();
    // toLowerCase() - переводим в нижний регистр (маленькие буквы)
    // Чтобы искать независимо от того, как написано: "Продукты" или "продукты"
    for (const transaction of transactions) {
        // transaction.description.toLowerCase() - описание маленькими буквами
        // .includes(lowerKeyword) - проверяем, есть ли там наше слово
        if (transaction.description.toLowerCase().includes(lowerKeyword)) {
            console.log(`${transaction.type} ${transaction.category}: ${transaction.amount} ${currency} (${transaction.description})`);
            found = true;
        }
    }
    


    if (!found) {
        console.log("Транзакций не найдено.");
    }
}

// Главная функция для тестирования
function runTests() {
    console.log("🚀 ЗАПУСК ФИНАНСОВОГО МЕНЕДЖЕРА");
    console.log("=".repeat(60));

    showBalance();

    // Добавляем новые транзакции
    addTransaction("расход", "еда", 1200, "Продукты на неделю");
    addTransaction("доход", "фриланс", 8000, "Заказ на фрилансе");
    addTransaction("расход", "развлечения", 3500, "Ресторан");

    // Показываем все транзакции
    showAllTransactions();

    // Фильтруем
    filterTransactionsByType("расход");

    // Считаем по категории
    getTotalByCategory("развлечения");

    // Поиск
    searchTransactions("продукты");
    searchTransactions("зарплата");

    // Проверяем возможность траты
    console.log("\n💳 Проверка возможности траты:");
    canAfford(5000);
    canAfford(50000);

    console.log("\n✅ Тестирование завершено!");
}

runTests();
