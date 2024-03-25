/* Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/
const now = new Date()
const year = now.getFullYear() 
const month = now.getMonth() + 1 
const date = now.getDate() 
const hours = now.getHours() 
const minutes = now.getMinutes()
console.log(`${year}-${month<10 ?'0'+month :month}-${date<10 ?'0'+date :date} ${hours<10 ?'0'+hours :hours}:${minutes<10 ?'0'+minutes :minutes}`)