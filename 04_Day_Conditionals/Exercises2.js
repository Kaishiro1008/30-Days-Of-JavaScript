/* Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/
let score = parseFloat(prompt('Enter your score:'))
switch (true) {
    case score > 89:
        alert('A')
        break;
    case score > 69:
        alert('B')
        break;
    case score > 59:
        alert('C')
        break;
    case score > 49:
        alert('D')
        break;
    case score < 50:
        alert('F')
        break;
}

/* Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
*/
let month = prompt('Enter the month:')
switch (true) {
    case month.search(/Sep|Oct|Nov/gmi) != -1:
        alert('The season is Autumn.')
        break;
    case month.search(/Dec|Jan|Feb/gmi) != -1:
        alert('The season is Winter.')
        break;
    case month.search(/Mar|Apr|May/gmi) != -1:
        alert('The season is Srping.')
        break;
    case month.search(/Jun|Jul|Aug/gmi) != -1:
        alert('The season is Summer')
        break;
}


/* Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
*/
let day = prompt('What is the day today?')
switch (true) {
    case day.search(/Sun/gmi) != -1:
        alert(`Sunday is a weekend.`)
        break;
    case day.search(/Sat/gmi) != -1:
        alert(`Saturday is a weekend.`)
        break;
    case day.search(/Fri/gmi) != -1:
        alert(`Friday is a weekday.`)
        break;
    case day.search(/Thu/gmi) != -1:
        alert(`Thursday is a weekday.`)
        break;
    case day.search(/Wed/gmi) != -1:
        alert(`Wednesday is a weekday.`)
        break;
    case day.search(/Tue/gmi) != -1:
        alert(`Tuesday is a weekday.`)
        break;
    case day.search(/Mon/gmi) != -1:
        alert(`Monday is a weekday.`)
        break; 
}