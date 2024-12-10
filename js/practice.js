// Задача-1
// Напишіть функцію для охоронця нічного клубу яка приймає два параметри age та balance.
//  Функція повинна повернути рядок "Wellcome" якщо age більший за 18 та balance більший за 100. 
// В іншому випадку функцію повинна повернути рядок "Goodbye".
function checkEntry (age, balance) {
    if (age >=18 && balance > 100) {
        return 'Welcome'
    } else {
       return 'Goodbye'
    }
}
console.log(checkEntry (20, 99));
// Задача-2
// Напишіть функцію для магазину яка приймає кількість товару (amount) та його вартість (price). 
// Функція повинна повернути рядок "Ми це купуємо" якщо загальна вартість не перевищує 1000, 
// в іншому випадку функція повинна повернути рядок "Це занадто дорого".
function forStore (amount, price) {
    const totalAmount = amount * price;
    if (totalAmount <= 1000) {
        return 'Ми це купуємо'
    } else {
        return 'Це занадто дорого'
    }
}
console.log(forStore(20, 15.5));
// Задача-3
// Напишіть функцію, яка приймає температуру (temp) в градусах Цельсія. Якщо температура нижче 0, функція повинна повернути рядок "Замерзає",
//  якщо більше 0 але менше 25 - "Нормальна температура", якщо більше 25 - "Спекотно".
function checkTemperature(temp) {
    if (temp < 0) {
        return "Замерзає";
    } else if (temp >= 0 && temp < 25) {
        return "Нормальна температура";
    } else {
        return "Спекотно";
    }
}
console.log(checkTemperature(26));
// Задача-4
// Напишіть функцію, яка приймає 2 числа: number та divisor. Якщо number ділиться на divisor без остатку, 
// поверніть рядок "Ділиться", в іншому випадку поверніть "Не ділиться".
function checkNumber (number, divisor) {
    if (number % divisor === 0) {
        return 'Ділиться';
    } else {
       return 'Не ділиться';
    }
}
console.log(checkNumber(20, 15.5));
// Задача-5
// Напишіть функцію, яка приймає 2 параметри: isRaining (булевий) і hasUmbrella (булевий). Якщо дощить і у вас є парасоля, поверніть "Не змокнеш", 
// якщо дощить і немає парасолі, поверніть "Змокнеш", в іншому випадку поверніть "Без дощу".
function checkWeather(isRaining, hasUmbrella) {
    if (isRaining && hasUmbrella) {
        return "Не змокнеш";
    } else if (isRaining && !hasUmbrella) {
        return "Змокнеш";
    } else {
        return "Без дощу";
    }
}
console.log(checkWeather(true, true));
// Задача-6
// Напишіть функцію, яка приймає оцінку студента (grade) за шкалою від 0 до 100. Якщо оцінка 90 і більше,
// поверніть "Відмінно", від 75 до 89 - "Добре", від 50 до 74 - "Задовільно", нижче 50 - "Незадовільно".
function checkGrade (grade) {
    if (grade >= 90) {
        return "Відмінно";
    } else if (grade >=75 && grade <=89) {
       return "Добре"
    } else if (grade >=50 && grade <=74) {
       return "Задовільно"
    }else {
        return "Незадовільно"
    }
}
console.log(checkGrade(95))
// Задача-7
// Напишіть функцію, яка приймає два параметри: dayOfWeek та isHoliday. Якщо dayOfWeek це "Saturday" або "Sunday" або isHoliday є true, 
// поверніть "Вихідний", в іншому випадку поверніть "Робочий день".
function checkWeekend (dayOfWeek, isHolliday) {
    if (dayOfWeek === 'Sunday' || dayOfWeek === 'Saturday' || isHolliday ) {
        return "Вихідний";
    } else {
        return "Робочий день";
    }
}
console.log(checkWeekend('Saturday'));
// Задача-8
// Напишіть функцію, яка приймає один параметр year. Якщо рік ділиться на 4 і не ділиться на 100,
//  або ділиться на 400, поверніть "Високосний рік", в іншому випадку - "Звичайний рік".
function checkYear (year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)  {    
        return "Високосний рік";
    } else {
        return "Звичайний рік";
    }
}
console.log(checkYear(1990));
// Задача-9
// Напишіть функцію, яка приймає два параметри: hasInvitation (булевий) і isFriend (булевий). Якщо у вас є 
// запрошення або ви друг, поверніть "Ви запрошені", в іншому випадку поверніть "Вхід заборонено".
function checkInvitation (hasInvitation, isFriend) {
    if (hasInvitation || isFriend) {
        return "Ви запрошені";
    } else {
        return "Вхід заборонено";
    }
}
console.log(checkInvitation(false, true));
// Задача-10
// Напишіть функцію, яка приймає вік особи (age). Якщо вік менший за 12, поверніть "Дитина", якщо від 12 до 18, 
// поверніть "Підліток", якщо від 18 до 60, поверніть "Дорослий", більше 60 - "Пенсіонер".
function seeAge (age) {
    if (age<12) {
        return "Дитина";
    } else if(age>12 && age<18) {
return "Підліток";
    }else if(age>18 && age<60) {
return "Дорослий";
    }else {
        return "Пенсіонер";
    }
}
console.log(seeAge(65))
// Задача-11
// Напишіть функцію, яка приймає два параметри: isLoggedIn (булевий) та hasAdminRights (булевий). Якщо ви увійшли в 
// систему і маєте права адміністратора, поверніть "Адмін-сторінка", якщо увійшли, але не є адміністратором, 
// поверніть "Користувач", в іншому випадку - "Гість".
function getUserRole(isLoggedIn, hasAdminRights) {
    if (isLoggedIn && hasAdminRights) {
        return "Адмін-сторінка";
    } else if (isLoggedIn) {
        return "Користувач";
    } else {
        return "Гість";
    }
}
console.log(getUserRole(true, false));
// Задача-12
// Напишіть функцію, яка приймає один параметр speed. Якщо швидкість менша за 60 км/год, поверніть 
// "Безпечно", якщо від 60 до 100 км/год, поверніть "Увага", якщо більше 100 км/год, поверніть "Небезпечно".
function checkSafety (speed) {
    if (speed<60) {
        return "Безпечно";
    } else if(speed>60 && speed<100){
        return "Увага";
    } else {
        return "Небезпечно";
    }
}
console.log(checkSafety(70));
// Задача-13
// Напишіть функцію, яка приймає два параметри: time та isWeekend. Якщо time менше 12 і це не вихідний день, поверніть "Ранок буднього дня", 
// якщо більше 12 і менше 18 і це вихідний, поверніть "День вихідного дня", в іншому випадку поверніть "Вечір".
function checkDay (time, isWeekend) {
    if (time<12 && !isWeekend) {
        return "Ранок буднього дня";
    } else if(time>12 && time<18 && isWeekend){
        return "День вихідного дня";
    } else {
        return "Вечір";
    }
}
console.log(checkDay(10, true))
// Задача-14
// Напишіть функцію, яка приймає два параметри: hasGlutenAllergy (булевий) та containsGluten (булевий). Якщо у вас є алергія на глютен і продукт містить 
// глютен, поверніть "Не можна їсти", в іншому випадку поверніть "Можна їсти".
function seeAllergy (hasGlutenAllergy, containsGluten) {
    return hasGlutenAllergy && containsGluten ? "Не можна їсти" : "Можна їсти"; }
console.log(seeAllergy(true, true));
// Задача-15
// Напишіть функцію, яка приймає один параметр age. Якщо вік менше 18, 
// поверніть "Не можна купувати алкоголь", якщо 18 або більше, поверніть "Можна купувати алкоголь".
function groupAge (age){
  return age<18 ? "Не можна купувати алкоголь" : "Можна купувати алкоголь"
}
console.log(groupAge(18));
// Задача-16
// Напишіть функцію, яка приймає один параметр isSunny (булевий). 
// Якщо сонячно, поверніть "Вийдемо на прогулянку", якщо ні, поверніть "Залишимося вдома".
function decideActivity(isSunny) {
    return isSunny ? "Вийдемо на прогулянку" : "Залишимося вдома";
}
console.log(decideActivity(true));
// Задача-17
// Напишіть функцію, яка приймає один параметр number. 
// Якщо число парне, поверніть "Парне", якщо непарне, поверніть "Непарне".
function seeNum (number){
    return number%2===0 ? "Парне" : "Непарне";
}
console.log(seeNum(40));
// // Задача-18
// // Напишіть функцію, яка приймає два параметри: password та confirmPassword. 
// // Якщо ці два паролі однакові, поверніть "Паролі збігаються", якщо ні, поверніть "Паролі не збігаються".
function checkPass (password, confirmPassword){
    return password === confirmPassword ? "Паролі збігаються" : "Паролі не збігаються";
}
console.log(checkPass(12345, 12445));
// // Задача-19
// // Напишіть функцію, яка приймає один параметр temperature в градусах Цельсія. Якщо температура нижче 0, поверніть "Зима", 
// // якщо від 0 до 15, поверніть "Весна", якщо від 16 до 25, поверніть "Літо", якщо більше 25, поверніть "Осінь".
function checkSeason (temparature){
    if (temparature<0) {
       return "Зима";
    } else if(temparature>0 && temparature<15){
        return "Весна";
    } else if (temparature>=16 && temparature<=25){
        return "Осінь";
    } else {
        return "Літо";
    }
}
console.log(checkSeason(-5));
// // Задача-20
// // Напишіть функцію, яка приймає два параметри: number1 та number2. Якщо number1 більше number2, поверніть "Перше більше", якщо менше, поверніть "Перше менше", якщо рівні, поверніть "Рівні".
function seeNumber(number1, number2){
    if (number1>number2) {
        return "Перше більше";
    } else if(number1<number2){
        return "Перше менше";
    } else {
        return "Рівні";
    }
}
console.log(seeNumber(12,12));
// // Задача-21
// // Напишіть функцію, яка приймає один параметр isBatteryFull (булевий). Якщо акумулятор повний, поверніть "Не потрібно заряджати", якщо ні, поверніть "Заряджати".
function chargeBattery(isBatteryFull){
    return isBatteryFull ? "Не потрібно заряджати" : "Заряджати";
}
console.log(chargeBattery(false));
// // Задача-22
// // Напишіть функцію, яка приймає два параметри: isStudent (булевий) та hasID (булевий). Якщо ви студент і маєте посвідчення, поверніть "Вхід дозволено", якщо ні, поверніть "Вхід заборонено".
function checkStudent(isStudent, hasID){
    return isStudent && hasID ? "Вхід дозволено" : "Вхід заборонено";
}
console.log(checkStudent(true, true));
// // Задача-23
// // Напишіть функцію, яка приймає два параметри: temperature та isRaining. Якщо температура менша за 0 або йде дощ, поверніть "Потрібно носити теплий одяг", в іншому випадку поверніть "Легка одяг".
function checkWeather(isRaining, temparature){
    return temparature<0 || isRaining ? "Потрібно носити теплий одяг" : "Легка одяг";
}
console.log(checkWeather(false, 5));
// // Задача-24
// // Напишіть функцію, яка приймає два параметри: hasCar (булевий) та hasLicense (булевий). Якщо у вас є автомобіль та водійські права, поверніть "Можете водити машину", якщо ні, поверніть "Водити заборонено".
function hasCar (hasCar, hasLicense) {
    return hasCar && hasLicense ? "Можете водити машину" : "Водити заборонено";
}
console.log(hasCar(true,true));
// // Задача-25
// // Напишіть функцію, яка приймає два параметри: age та hasParentConsent (булевий). Якщо вік менше 18 і немає батьківської згоди, поверніть "Доступ заборонено", якщо старше 18 або є згода батьків, поверніть "Доступ дозволено".
function checkKid (age, hasParentConsent) {
    if (age<18 && !hasParentConsent) {
        return "Доступ заборонено";
    } else {
      return  "Доступ дозволено";
    }
}
console.log(checkKid(12, false));
// Задача-26
// Напишіть функцію, яка приймає два параметри: isVegetarian (булевий) та containsMeat (булевий). Якщо ви вегетаріанець і страва містить м'ясо, поверніть "Не можна їсти", в іншому випадку поверніть "Можна їсти".
function checkAllergy (isVegetarian, containsMeat) {
    return isVegetarian && containsMeat ? "Не можна їсти" : "Можна їсти";
}
console.log(checkAllergy(true,true));
// Задача-27
// Напишіть функцію, яка приймає два параметри: hoursWorked та overtime. Якщо ви працювали більше 40 годин або у вас є понаднормові, поверніть "Отримуєте бонус", в іншому випадку поверніть "Без бонусу".
function checkSalary (hoursWorked, overtime) {
    return hoursWorked>40 || overtime ? "Отримуєте бонус" : "Без бонусу";
}
console.log(checkSalary(50, true));
// Задача-28
// Напишіть функцію, яка приймає два параметри: number та isPositive. Якщо число більше 0 і isPositive дорівнює true, поверніть "Це позитивне число", в іншому випадку поверніть "Це не позитивне число".
function checkNumber (number, isPositive) {
    return number>0 && isPositive ? "Це позитивне число" : "Це не позитивне число";
}
    console.log(checkNumber(2,true));
// Задача-29
// Напишіть функцію, яка приймає два параметри: temperature та isSunny. Якщо температура більше 20 і це сонячний день, поверніть "Час для прогулянки", в іншому випадку поверніть "Залишимося вдома".
function seeWeather (temperature, isSunny){
    return temperature>20 && isSunny ? "Час для прогулянки" : "Залишимося вдома";
}
console.log(seeWeather(15, true));
// Задача-30
// Напишіть функцію, яка приймає два параметри: weight та height. Якщо вага більше 100 кг і зріст менше 150 см, поверніть "Перевищено допустимий ліміт", в іншому випадку поверніть "У межах норми".
function checkIndexWeight(weight, height) {
    return weight >100 && height< 150 ? "Перевищено допустимий ліміт" : "У межах норми";
}
console.log(checkIndexWeight(65, 176));
// Напишіть функцію, яка приймає три параметри: temperature, isRaining, і hasUmbrella (булевий). Якщо температура більше 25 і йде дощ, і у вас є парасоля, поверніть "Візьміть парасолю та одягніться легше", якщо немає парасолі, поверніть "Залишайтеся вдома", в іншому випадку поверніть "Виходьте на прогулянку".
function checkWeather (temparature, isRaining, hasUmbrella) {
    if (temparature>25 && isRaining && hasUmbrella) {
        return "Візьміть парасолю та одягніться легше";
    } else if(!hasUmbrella){
        return "Залишайтеся вдома";
    }else {
        return "Виходьте на прогулянку";
    }
}
console.log(checkWeather(26, true, true));
// Задача-34
// Напишіть функцію, яка приймає три параметри: isMember (булевий), hasCoupon (булевий), і purchaseAmount. Якщо ви є членом клубу або маєте купон, і сума покупки більше 100, поверніть "Отримаєте знижку", в іншому випадку поверніть "Знижка не доступна".
function club (isMember, hasCoupon, purchaseAmount){
    return isMember || hasCoupon && purchaseAmount >100 ? "Отримаєте знижку" : "Знижка не доступна";
}
console.log(club(true, false, 120));
// Задача-35
// Напишіть функцію, яка приймає два параметри: password і confirmPassword. Якщо password містить як мінімум одну цифру і збігається з confirmPassword, поверніть "Пароль прийнято", в іншому випадку поверніть "Пароль не відповідає вимогам".
function validatePassword(password, confirmPassword) {
    const hasNumber = /\d/.test(password);
    if (password === confirmPassword && hasNumber) {
        return "Пароль прийнято";
    } else {
        return "Пароль не відповідає вимогам";
    }
}
console.log(validatePassword('hello1', 'hello1'));
// Задача-36
// Напишіть функцію, яка приймає три параметри: isOnline (булевий), hasCamera (булевий), і hasMicrophone (булевий). Якщо ви онлайн і маєте камеру або мікрофон, поверніть "Готові до відеоконференції", якщо ви не онлайн або не маєте жодного з них, поверніть "Немає можливості для відеоконференції".
function checkConnection (isOnline, hasCamera, hasMicrophone) {
    return isOnline && (hasCamera || hasMicrophone) ? "Готові до відеоконференції" : "Немає можливості для відеоконференції";
}
console.log(checkConnection(false, true, true));
// Задача-37
// Напишіть функцію, яка приймає три параметри: currentTime, isWeekend, і isHoliday. Якщо зараз менше 8 ранку і це не вихідний день, і це не свято, поверніть "Скоро час на роботу", в іншому випадку поверніть "Вільний час".
function seeDay (currentTime, isWeekend, isHoliday) {
    return currentTime < 8 && !isWeekend && !isHoliday ? "Скоро час на роботу" : "Вільний час";
}
console.log(seeDay(7, false, false));
// Задача-38
// Напишіть функцію, яка приймає три параметри: temperature, isSnowing, і hasHeater (булевий). Якщо температура нижче 0 і йде сніг, і у вас є обігрівач, поверніть "Тепло та затишно", якщо обігрівача немає, поверніть "Потрібно зігрітися", в іншому випадку поверніть "Погода нормальна".
function whatToDo(temperature, isSnowing, hasHeater ){
    if (temperature<0 && isSnowing && hasHeater) {
        return "Тепло та затишно";
    } else if(!hasHeater){
        return "Потрібно зігрітися";
    }else {
        return "Погода нормальна";
    }
}
console.log(whatToDo(-5, true, false));
// Задача-39
// Напишіть функцію, яка приймає три параметри: age, hasDriverLicense (булевий), і isInsured (булевий). Якщо ви старше 18 років, маєте водійське посвідчення і страховку, поверніть "Можна керувати автомобілем", в іншому випадку поверніть "Не можна керувати автомобілем".
function checkValidation (age, hasDriverLicense, isInsured) {
    return age>18 && hasDriverLicense && isInsured ? "Можна керувати автомобілем" : "Не можна керувати автомобілем";
}
console.log(checkValidation(25, true, false));
// Задача-40
// Напишіть функцію, яка приймає три параметри: currentDay, hasMeeting (булевий), і isHoliday. Якщо сьогодні понеділок, середа або п'ятниця, і у вас є зустріч, і це не свято, поверніть "Є зустріч", в іншому випадку поверніть "Немає зустрічі".
function checkAvailability(currentDay, hasMeeting, isHoliday) {
    const meetingDays = ["понеділок", "середа", "п'ятниця"];
    return meetingDays.includes(currentDay) && hasMeeting && !isHoliday
        ? "Є зустріч"
        : "Немає зустрічі";
}
console.log(checkAvailability("понеділок", true, true));
// Задача-41
// Напишіть функцію, яка приймає три параметри: itemPrice, isDiscounted (булевий), і discountAmount. Якщо ціна товару більше 1000, і він знижений на 10% або більше, поверніть "Скидка доступна", в іншому випадку поверніть "Скидка не доступна".
function checkPrice (itemPrice, isDiscounted, discountAmount) {
    return itemPrice > 1000 && isDiscounted && discountAmount >= 10 ? "Скидка доступна" : "Скидка не доступна";
}
console.log(checkPrice(1220, true, 0));
// Задача-42
// Напишіть функцію, яка приймає один параметр dayOfWeek. Використовуючи switch, поверніть "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота" або "Неділя" залежно від введеного числа (1 - Понеділок, 2 - Вівторок, і т.д.). Якщо введене число не в діапазоні від 1 до 7, поверніть "Невідомий день".
function getDayOfWeek(dayOfWeek) {
    switch (dayOfWeek) {
        case 1:
            return "Понеділок";
        case 2:
            return "Вівторок";
        case 3:
            return "Середа";
        case 4:
            return "Четвер";
        case 5:
            return "П'ятниця";
        case 6:
            return "Субота";
        case 7:
            return "Неділя";
        default:
            return "Невідомий день";
    }
}
console.log(getDayOfWeek(4));
// Задача-43
// Напишіть функцію, яка приймає один параметр grade. Використовуючи switch, поверніть "Відмінно", "Добре", "Задовільно", "Незадовільно" в залежності від оцінки: "A" - "Відмінно", "B" - "Добре", "C" - "Задовільно", "D" або "F" - "Незадовільно".
function showGrade (grade){
    switch (grade) {
        case 'A':
           return "Відмінно";
        case 'B': 
        return "Добре";
        case 'C': 
        return "Задовільно";
        case 'D':
            case 'F':
            return "Незадовільно";
            default:
                return "Невідома оцінка";
    }
}
console.log(showGrade('5'));
// Задача-44
// Напишіть функцію, яка приймає один параметр fruit. Використовуючи switch, поверніть "Цитрус", "Яблуко", "Груша", або "Ягода" в залежності від введеного фрукта. Наприклад, "Лимон", "Апельсин", "Грейпфрут" повинні повернути "Цитрус", "Яблуко" - "Яблуко", "Груша" - "Груша", "Полуниця", "Малина", "Чорниця" - "Ягода".
function checkFruit (fruit){
    switch (fruit) {
        case 'Лимон':
        case 'Апельсин':
        case 'Грейпфрут':
            return "Цитрус";
        case 'Яблуко':
            return 'Яблуко';
        case 'Груша':
            return 'Груша';
        case 'Полуниця':
        case 'Малина':
        case 'Чорниця':
                    return 'Ягода';
                    default:
            return "Невідомий фрукт";
    }
}
console.log (checkFruit('Апельсин'));
// Задача-45
// Напишіть функцію, яка приймає один параметр vehicleType. Використовуючи switch, поверніть "Легковий автомобіль", "Вантажівка", "Мотоцикл", або "Інше" в залежності від введеного типу транспортного засобу. Наприклад, "Car" - "Легковий автомобіль", "Truck" - "Вантажівка", "Motorcycle" - "Мотоцикл", і інші випадки - "Інше".
function identifyVehicle (vehicleType){
    switch (vehicleType) {
        case "Car":
            return "Легковий автомобіль";
        case "Truck":
            return "Вантажівка";
        case "Motorcycle":
            return "Мотоцикл";
        default:
            return "Інше";
    }
}
console.log(identifyVehicle("Car"));
// Задача-46 Напишіть функцію, яка приймає один параметр animal. Використовуючи switch, поверніть "Ссавець", "Птах", "Риба", або "Рептилія" в залежності від введеної тварини. Наприклад, "Кішка", "Собака", "Кінь" - "Ссавець", "Голуб", "Орлан", "Горобець" - "Птах", "Лосось", "Тунець", "Тріска" - "Риба", "Ящірка", "Черепаха", "Змія" - "Рептилія".
function identifyAnimal (animal) {
    switch (animal){
        case "Кішка":
        case "Собака":
        case "Кінь":
            return "Ссавець";
        case "Голуб":
        case "Орлан":
        case "Горобець":
            return "Птах";
        case "Лосось":
        case "Тунець":
        case "Тріска":
            return "Риба";
        case "Ящірка":
        case "Черепаха":
        case "Змія":
            return "Рептилія";
        default:
            return "Інше";
    }
}
console.log(identifyAnimal("Кішка"));
// Задача-47
// Напишіть функцію, яка приймає один параметр weather. Використовуючи switch, поверніть "Сонячно", "Хмарно", "Дощ", або "Сніг" в залежності від введеного типу погоди. Наприклад, "Sunny" - "Сонячно", "Cloudy" - "Хмарно", "Rainy" - "Дощ", "Snowy" - "Сніг".
function seeWhatToDress(weather){
    switch (weather){
        case "Sunny":
            return "Сонячно";
        case "Cloudy":
            return "Хмарно";
        case "Rainy":
            return "Дощ";
        case "Snowy":
            return "Сніг";
            default:
                return "Інше";
    }
}
console.log(seeWhatToDress("Summer"));
// Задача-48
// Напишіть функцію, яка приймає один параметр mood. Використовуючи switch, поверніть "Щасливий", "Сумний", "Злий", або "Здивований" в залежності від введеного настрою. Наприклад, "Happy" - "Щасливий", "Sad" - "Сумний", "Angry" - "Злий", "Surprised" - "Здивований".
function checkMood(mood){
    switch(mood){
        case "Happy":
            return "Щасливий";
        case "Sad":
            return "Сумний";
        case 'Angry':
            return "Злий";
        case "Surprised":
            return "Здивований";
            default:
                return "Інше";  
    }
}
console.log(checkMood("Sad"));
// Задача-49
// Напишіть функцію, яка приймає один параметр month. Використовуючи switch, поверніть назву сезону ("Весна", "Літо", "Осінь", "Зима") в залежності від місяця. Наприклад, "Березень", "Квітень", "Травень" - "Весна", "Червень", "Липень", "Серпень" - "Літо", "Вересень", "Жовтень", "Листопад" - "Осінь", "Грудень", "Січень", "Лютий" - "Зима".
function checkMonth(month){
    switch(month){
        case "Березень":
        case "Квітень":
        case "Травень":
            return "Весна";
        case "Червень":
        case "Липень":
        case "Серпень":
            return "Літо";
        case "Вересень":
        case "Жовтень":
        case "Листопад":
            return "Осінь";
        case "Грудень":
        case "Січень":
        case "Лютий":
            return "Зима";
     default:
                return "Інше";    
    }
}
console.log(checkMonth("Серпень"));
// Задача-50
// Напишіть функцію, яка приймає один параметр color. Використовуючи switch, поверніть "Теплий колір" або "Холодний колір" в залежності від кольору. Наприклад, "Red", "Orange", "Yellow" - "Теплий колір", "Blue", "Green", "Purple" - "Холодний колір".
function checkColor(color){
    switch(color){
        case "Red":
        case "Orange":
        case "Yellow":
            return "Теплий колір";
        case "Blue":
        case "Green":
        case "Purple":
            return "Холодний колір";
            default:
                return "Інше";
    }
}
console.log(checkColor("Blue"));
// Задача-51
// Напишіть функцію, яка приймає один параметр continent. Використовуючи switch, поверніть назву континенту або "Невідомий континент" в залежності від введеного значення. Наприклад, "Africa", "Europe", "Asia", "North America", "South America", "Antarctica", "Australia" - відомі континенти, інші випадки - "Невідомий континент".
function checkContinent (continent){
    switch(continent){
        case "Africa":
        case "Europe":
        case "Asia":
        case "North America":
        case "South America":
        case "Antarctica":
        case "Australia":
            return "Known continent";
            default:
                return "Невідомий континент";  
    }
}
console.log(checkContinent("Asial"));

// What will be the result???

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);
// console.log(1 && 5);
// console.log(5 && 1);
// console.log(0 && 2);
// console.log(2 && 0);
// console.log('' && 'Mango');
// console.log('Mango' && '');
// console.log('Mango' && 'Poly');
// console.log('Poly' && 'Mango');
// console.log(true || false);
// console.log(false || true);
// console.log(true || true);

// console.log(3 || false);
// console.log(false || 3);
// console.log(3 || true);
// console.log(true || 3);
// console.log(!true);
// console.log(!false);
// console.log(!3);
// console.log(!'Mango');
// console.log(!0);
// console.log(!'');

// const isOnline = true;
// const isNotOnline = !isOnline;

// console.log(true && false);
// console.log(false && true);
// console.log(true && true);
// console.log(false && false);

// console.log(true || false);
// console.log(false || true);
// console.log(true || true);
// console.log(false || false);

// console.log(!true);
// console.log(!false);
// console.log(!!true);
// console.log(!!false);

// console.log(1 === 1 && 2 === 2);
// console.log(1 === 2 && 2 === 2);
// console.log(1 === 1 || 2 === 2);
// console.log(1 === 2 || 2 === 2);

// console.log(1 > 2 && 2 < 3);
// console.log(1 < 2 && 2 < 3);
// console.log(1 > 2 || 2 < 3);
// console.log(1 < 2 || 2 < 3);

// console.log(0 && 3);
// console.log(3 && 0);
// console.log(0 || 3);
// console.log(3 || 0);

// console.log('' || 'apple');
// console.log('orange' || '');
// console.log('' && 'banana');
// console.log('grape' && '');

// console.log(0 || false);
// console.log(false || 0);
// console.log(1 && 'cherry');
// console.log('banana' && 1);
// console.log(null && 'pear');
// console.log('peach' && undefined);
// console.log(undefined || 'plum');
// console.log('melon' || null);
// console.log(undefined && false);
// console.log(true || 'watermelon');
// console.log('watermelon' || true);
// console.log(false && 'pineapple');
// // console.log('pineapple' && false);
// console.log(NaN || 'kiwi');
// console.log('kiwi' || NaN);
// console.log(NaN && 'mango');
// console.log('mango' && NaN);
// console.log(Infinity || 'apricot');
// console.log('apricot' || Infinity);
// console.log(Infinity && 'blueberry');
// console.log('blueberry' && Infinity);
// console.log(null || undefined);

//----------------------------- Масиви та методи рядочків---------------------------------

// Напиши цикл, який виведе на консоль числа від 1 до 10.
// for (let i = 1; i<=10; i++){
//     console.log(i);
// }
// Напиши цикл, який виведе на консоль парні числа від 1 до 20.
// for (let i=1; i<=20; i++){
//     if(i%2===0){
//     console.log(i);}
// }
// Напиши цикл, який знайде та виведе на консоль суму всіх чисел від 1 до 100.
// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//     sum += i; // Додаємо поточне число до змінної sum
// }
// console.log(sum);
// // Напиши цикл, який виведе на консоль таблицю множення для числа 7 (від 1 до 10).
// const number = 7;

// for (let i = 1; i <= 10; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
// }
// // Напиши цикл, який обчислить факторіал числа, введеного користувачем (наприклад, факторіал числа 5: !5 = 1 * 2 * 3 * 4 * 5).
// const number = parseInt(prompt("Введіть число для обчислення факторіалу:"));

// if (number < 0) {
//     console.log("Факторіал для від'ємних чисел не визначений.");
// } else {
//     let factorial = 1;

//     for (let i = 1; i <= number; i++) {
//         factorial *= i; // Множимо факторіал на поточне число
//     }

//     console.log(`Факторіал числа ${number} дорівнює ${factorial}.`);
// }
// // Напиши цикл, який виведе кожну другу літеру рядочку "Hello world"
// const str = "Hello world";

// for (let i = 1; i < str.length; i += 2) {
//     console.log(str[i]);
// }
// // Напиши цикл, який виведе кожну літеру рядочку "Hello world" у зворотньому порядку.
// for (let i = str.length - 1; i >= 0; i--) {
//     console.log(str[i]);
// }
// Напиши цикл, який виведе кожну літеру рядочку "Hello world" поки не зустріне пробіл.
// const str = "Hello world";
// for(let i = 0; i<=str.length; i++){
//     if(str[i]===" "){
//         break;
//     }
//     console.log(str[i]);
// }
// // Напиши цикл, який виведе на консоль кожну другу літеру слова "JavaScript".
// const string = "JavaScript";
// for(i=0; i<string.length; i+=2){
//     console.log(string[i]);
// }
// // Напиши функцію, яка приймає рядок та повертає перевернутий рядок
// function reverseString(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }
// console.log(reverseString('I LOVE YOU'));
// Напиши функцію, яка приймає рядок та повертає рядок де кожен другий символ у верхньому регістрі
function alternateUpperCase(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 1) {
            result += str[i].toUpperCase(); 
        } else {
            result += str[i]; 
        }
    }
    return result;
}
console.log(alternateUpperCase("life is beatuful"));
// Напиши функцію getString(str1, str2, count). Функція повинна додати str2 до рядочка str1 стільки разів скільки вказали у параметрі count.
function getString(str1, str2, count) {
    for (let i = 0; i < count; i++) {
        str1 += str2; 
    }
    return str1;
}
console.log(getString("Hello", " World", 3));