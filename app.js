const items = document.querySelectorAll('.countdown-item > h4')
const countDownElement = document.querySelector('.countdown')
console.log(items);

// назначаем дату финиша
const countDownDate = new Date(2025, 4, 2, 22, 45, 0).getTime()
console.log(countDownDate);

// создаем функцию запуска счетчика
getCountDownTime = function() {
    // чтобы знать откуда начать, создаем время СЕЙЧАС
    const now = new Date()
    console.log(now);

    // расчитаем дистанцию между началом и концом
    const distance = countDownDate - now
    console.log(distance);

    // создаем переменные в миллисекундах
    const oneDay = 24 * 60 * 60 * 1000
    const oneHour = 60 * 60 * 1000
    const oneMinute = 60 * 1000
    const oneSecond = 1000

    // Подсчет для item дней, для item часов, для item минут, для item секунд
    const days = Math.floor(distance / oneDay)
    console.log('Дней в этой дистанции', days);

    const hours = Math.floor((distance % oneDay) / oneHour)
    console.log('Часов в этой дистанции', hours);

    const minutes = Math.floor((distance % oneHour) / oneMinute)
    console.log('Минуты в этой дистанции', minutes);

    const seconds = Math.floor((distance % oneMinute) / oneSecond)
    console.log('Секунды в этой дистанции', seconds);

    // создаем массив с переменными из предыдущего шага
    const values = [days, hours, minutes, seconds]
    console.log(values);

    // добавляем значения переменных на страницу сайта
    items.forEach((elem, index) => {
        elem.textContent = values[index]

    })

    // что произойдет после заершения времени
    if (distance < 0) {
        clearInterval(countDown)
        countDownElement.innerHTML = "<h4 class='expired'>Время вышло</h4>"
    }

}

// Обновление счетчика каждую секунду
let countDown = setInterval(getCountDownTime, 1000)

getCountDownTime()


