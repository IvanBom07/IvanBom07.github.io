var sigma = prompt ("Введіть ім'я:")
while (sigma === null || sigma.trim() == '') {
    sigma = prompt("Введіть ім'я:")
}

alert("Вітаю, " + sigma + "!")