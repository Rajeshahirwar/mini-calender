const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();
//  console.log(today);

const weekday = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

const allmonths = ["junuary","february","march","april","may","june","july","august","september","october","november","december"]

 date.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
 day.innerHTML = weekday[today.getDate()];
 month.innerHTML = allmonths[today.getMonth()];
 year.innerHTML = today.getFullYear();
