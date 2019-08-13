let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');
    
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
            if ((typeof(a) === "string") && (b != null) && (a != null) && (a.length <= 50) && (a != "") && (b != "")) {
                console.log('Всё верно');
                appData.expenses[a] = b;
                
             } else {
                i = i - 1;
             }
        }
    },
    // расчет дневного бюджета  и вывод на экран этого значения как одну функцию
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    //Оформить блок кода с расчетом уровня достатка как отдельную функцию 
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("ошибка");
        }        
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
             appData.monthIncome = save/100/12*percent;
             alert("Доход в месяц с вашего депозита: " + appData.monthIncome);   
        }        
    },
    //Создать функцию для определения необязательных расходов 
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let a = prompt("Статья необязательных расходов?", ''),
                b = prompt("Во сколько обойдется?", '');
            if ((typeof(a) === "string") && (typeof(a) != null) && (typeof(b) != null) && (a.length <= 50) && (a != "") && (b != "")) {
               appData.optionalExpenses[a] = b;
               console.log("done");
            } else {
                i = i - 1;
                console.log("что-то пошло не так");
            }        
        }        
    },
    chooseIncome: function() {
        let items;
        do {
            items = prompt("Что принесёт дополнительный доход? (Перечислите через запятую)","");
            //console.log(items);
        } while (/*typeof(items) === "string" &&*/ items == "" || typeof(items) == null);
        appData.income = items.split(',');
        let ms = "";
        appData.income.forEach(function(item, i, mass) {
            ms = ms + (i + 1) + ". " + item + ";\n";
        });
        alert("Способы дополнительного заработка:\n" + ms);
        appData.income.push(prompt("Может что-то ещё?",""));
        appData.income.sort();

        console.log("Наша программа включает в себя данные: ");
        for (let key in appData) {
            console.log(key + ": " + appData[key] + ";");
        }
    }
}



