// UC 4 - Calculating Wages for a Month  

const IS_PART_TIME = 1;  
const IS_FULL_TIME = 2;  
const PART_TIME_HOURS = 4;  
const FULL_TIME_HOURS = 8;  
const WAGE_PER_HOUR = 20;  
const NUM_OF_WORKING_DAYS = 20;  

// Function to Get Work Hours  
function getWorkingHours(empCheck) {  
    switch (empCheck) {  
        case IS_PART_TIME:  
            return PART_TIME_HOURS;  
        case IS_FULL_TIME:  
            return FULL_TIME_HOURS;  
        default:  
            return 0;  
    }  
}  

// Compute Total Employee Wage for a Month  
let totalEmpHrs = 0;  

for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {  
    let empCheck = Math.floor(Math.random() * 10) % 3;  
    totalEmpHrs += getWorkingHours(empCheck);  
}  

let totalEmpWage = totalEmpHrs * WAGE_PER_HOUR;  
console.log("Total Employee Wage for " + NUM_OF_WORKING_DAYS + " days: $" + totalEmpWage);  
