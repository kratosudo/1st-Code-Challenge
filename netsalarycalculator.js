const kraTaxRates = [
    { amount: 0, rate: 0 },
    { amount: 24000, rate: 0.1 },
    { amount: 32333, rate: 0.25 },
    { amount: 500000, rate: 0.3 },
    { amount: 800000, rate: 0.325 },
    { amount: Infinity, rate: 0.35 },
];

const nhifrates = [
    { amount: 0, rate: 0 },
    { amount: 5999, rate: 150 },
    { amount: 7999, rate: 300 },
    { amount: 11999, rate: 400 },
    { amount: 14999, rate: 500 },
    { amount: 19999, rate: 600 },
    { amount: 24999, rate: 750 },
    { amount: 29999, rate: 850 },
    { amount: 34999, rate: 900 },
    { amount: 39999, rate: 950 },
    { amount: 44999, rate: 1000 },
    { amount: 49999, rate: 1100 },
    { amount: 59999, rate: 1200 },
    { amount: 69999, rate: 1300 },
    { amount: 79999, rate: 1400 },
    { amount: 89999, rate: 1500 },
    { amount: 99999, rate: 1600 },
    { amount: Infinity, rate: 1700 },
];

const nssfRate = 0.06;

//   calculate gross salary
grossSalary(basicSalary + Deduction)

// calculate netSalary
netSalary(grossSalary - Deduction)

// calculate deductions

tax_deductionS = gross_salary * TAX_RATE
kra_deduction = gross_salary * KRA_RATE
nhif_deduction = gross_salary * NHIF_RATE
nssf_deduction = gross_salary * NSSF_RATE


return {
    "Gross Salary": gross_salary,
    "NSSF Deduction": NSSF_deduction,
    "NHIF Deduction": NHIF_deduction,
    "KRA Deduction": KRA_deduction,
    "net Salary": net_Salary,

}

// To use the program, call the function:
calculateNetSalary();