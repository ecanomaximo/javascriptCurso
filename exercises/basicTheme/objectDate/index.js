function zeroInLeft (number) {
    return number >= 10 ? number : `0${number}` 
}

function formatDate(date) {
    const day = zeroInLeft(date.getDate());
    const month = zeroInLeft(date.getMonth() + 1);
    const year = zeroInLeft(date.getFullYear());
    const hours = zeroInLeft(date.getHours());
    const minutes = zeroInLeft(date.getMinutes());
    const seconds = zeroInLeft(date.getSeconds());

    return `${day}/${month}/${year}T${hours}:${minutes}:${seconds}`
}

const date = new Date();
const dateNow = formatDate(date);
console.log(dateNow);