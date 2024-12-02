let basicSalary =parseInt(prompt("Please enter your current basic salary: "));
let benefit= parseInt(prompt("Please enter your current benefits or allowances: "));
let gross;
let deduction;
let total;
// calculates gross salary
function grossSalary(basicSalary, benefit){
    gross = (basicSalary + benefit);
    return gross;
}
grossSalary(basicSalary, benefit);
alert("The Gross salary is: " + gross + " Ksh");

/* Calculate NHIF deduction using the values stored in basicSalary 
gottent from function grossSalary*/
function nhif(gross){
    if(basicSalary <= 5999){
        deduction = "150";
    }else if(basicSalary >= 6000 && basicSalary <= 7999){
         deduction ="300";
    }else if(basicSalary >= 8000 && basicSalary <= 11999){
        deduction = "400";
    }else if(basicSalary >= 12000 && basicSalary <= 14999){
        return "500";
    }else if(basicSalary >= 15000 && basicSalary <= 19999){
        deduction = "600";
    }else if(basicSalary >= 20000 && basicSalary <= 24999){
         deduction = "750";
    }else if(basicSalary >= 25000 && basicSalary <= 29999){
        deduction = "850";
    }else if(basicSalary >= 30000 && basicSalary <= 34999){
         deduction = "900";
    }else if(basicSalary >= 35000 && basicSalary <= 39999){
        deduction = "950";
    }else if(basicSalary >= 40000 && basicSalary <= 44999){
         deduction ="1000";
    }else if(basicSalary >=45000 && basicSalary <= 49999){
        deduction = "1100";
    }else if(basicSalary >= 50000 && basicSalary <= 59999){
        deduction = "1200";
    }else if(basicSalary >= 60000 && basicSalary <= 69999){
         deduction ="1300";
    }else if(basicSalary >=70000 && basicSalary <= 79999){
        deduction = "1400";
    }else if(basicSalary >=80000 && basicSalary <= 89999){
         deduction ="1500";
    }else if(basicSalary >=90000 && basicSalary <= 99999){
        deduction = "1600";
    }else if(basicSalary >=100000){
         deduction = "1700";
        
    }
    return  deduction;
}
alert("Amount deducted for NHIF is: " + nhif(deduction) + " Ksh");


//Calculate payee
/*it takes the values of deduction and gross then it subtracts deduction from
gross and stores the new values in a variable called afterDeduction  */

function payee(){
    afrterDeduction = gross - deduction;
    if(afrterDeduction <= 24000){
        result = afrterDeduction * 0.1;
        }else if(afrterDeduction >= 24001 || afrterDeduction <= 32333){
            result = afrterDeduction * 0.25;
        }else if(afrterDeduction >= 32334 || afrterDeduction <= 500000){
            result = afrterDeduction * 0.3;
        }else if(afrterDeduction >= 500001 || afrterDeduction <= 800000){
            result = afrterDeduction * 0.32;
        }else if(afrterDeduction >= 800000){
            result =  afrterDeduction * 0.35;
        }
    return result;
}
payee(deduction);
alert("The amount deducted for paye is: " + result + " Ksh"); 

/*this function calculates the et pay which is the remaining amound
gotten from subtrating all the deductios */
function netPay(){
     total =  gross-deduction-result; 
    return total;

}
netPay(afrterDeduction);
alert(`Yout total net pay is: ${total} Ksh`);