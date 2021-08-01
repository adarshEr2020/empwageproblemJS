// variables
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0
let empDailyWageArray = new Array();

// calculale daily wage
function calDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}
 
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++
    let empcheck =  Math.floor(Math.random()* 10) % 3;
    let empHrs = getWorkingHours(empcheck);
    totalEmpHrs += empHrs;
    empDailyWageArray.push(calDailyWage(empHrs));
}

// calculate working hours
function getWorkingHours(empcheck) {
    switch(empcheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0; 
    }
}
let empWage = calDailyWage(totalEmpHrs);
console.log(empDailyWageArray);
console.log("Total Days:" +totalWorkingDays +"total Emp Hrs: "+totalEmpHrs +"Employee Wage:" +empWage);

// Array helper function
// using forEach method traversal array and reduce method
let totalEmpWage =0;
function sum(dailyWage) {
    totalEmpWage += dailyWage;
}
empDailyWageArray.forEach(sum);
console.log(empDailyWageArray);
console.log("UC7A - Total Days:" +totalWorkingDays +"Total Hrs" +totalEmpHrs +"Emp Wage: " +totalEmpWage);

// using reduce method
function totalWages(totalWage,dailyWage){
    return totalWage + dailyWage;
}
console.log(" Emp Wage with reduce:" +empDailyWageArray.reduce(totalWages,0));

// show the day along with daily wage using Array map helper function   
let dailyCount = 0;
function mapDayWithWage(dailyWage) {
    dailyCount++;
    return dailyCount +"=" +dailyWage;
}
let mapDayWihtWageArray = empDailyWageArray.map(mapDayWithWage);
console.log("UC7b Daily wage with map:");
console.log(mapDayWihtWageArray);

// show days when Full Time wage of 160 were enered 
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}

let fullDayWageArray = mapDayWihtWageArray.filter(fullTimeWage);
console.log("UC7C -Daily wage Filter when Full time wage earned:")
console.log(fullDayWageArray);

// Find the first occurrence when full Time wage was earned using Find function
function findFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("First time FullTime wage was earned on day" +mapDayWihtWageArray.find(findFullTimeWage));

// UC7F - check if there is any part time wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UCF - check if any Part Time Wage: " +mapDayWihtWageArray.some(isAnyPartTimeWage));