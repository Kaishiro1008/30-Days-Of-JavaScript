/* Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
Write a program which tells the number of days in a month, now consider leap year.
*/
let month = prompt('Enter the month:')
switch (true) {
    case month.search(/Jan/gmi) != -1:
        alert('January has 31 days.')
        break;
    case month.search(/Feb/gmi) != -1:
        alert('February has 28 days.')
        break;
    case month.search(/Mar/gmi) != -1:
        alert('March has 31 days.')
        break;
    case month.search(/Apr/gmi) != -1:
        alert('April has 30 days.')
        break;
    case month.search(/May/gmi) =! -1:
        alert('May has 31 days.')
        break:
    case month.search(/Jun/gmi) =! -1:
        alert('June has 30 days')
        break:
    case month.search(/Jul/gmi) =! -1:
        alert('July has 31 days.')
        break:
    case month.search(/Aug/gmi) =! -1:
        alert('August has 31 days.')
        break:
    case month.search(/Sep/gmi) =! -1:
        alert('September has 30 days.')
        break:
    case month.search(/Oct/gmi) =! -1:
        alert('October has 31 days.')
        break:
    case month.search(/Nov/gmi) =! -1:
        alert('November has 30 days.')
        break:
    case month.search(/Dec/gmi) =! -1:
        alert('December has 31 days.')
        break:

}