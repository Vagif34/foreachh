let samirInfo={
    fName :"Samir",
    surname :"Aliyev",
    age:18,
    salary :500
}
let huseynInfo={
    fName:"Huseyn",
    surname:"Makhsudov",
    age:19,
    salary:300
}
let ulviInfo={
    fName:"Ulvi",
    surname:"Israfilov",
    age:18,
    salary:400   
}
let sadiqInfo={
    fName:"Sadiq",
    surname:"Ceferov",
    age:18,
    salary:1000
}
let telmanInfo={
    fName:"Telman",
    surname:"Memmedov",
    age:19,
    salary:600
}
let gulnarInfo={
    fName:"Gulnar",
    surname:"Agazade",
    age:19,
    salary:800
}
let raulInfo={
    fName:"Raul",
    surname:"Kerimli",
    age:18,
    salary:500  
}
let nerminInfo={
    fName:"Nermin",
    surname :"Memmedova",
    age:20,
    salary:550
}


const personsOfSalary =[samirInfo.salary,huseynInfo.salary,ulviInfo.salary,sadiqInfo.salary,telmanInfo.salary,gulnarInfo.salary,raulInfo.salary,nerminInfo.salary]

function sumOfSalary(personsOfSalary)
{
    let sum=0;
    personsOfSalary.forEach(item => {
    sum+=item;
 })

 return sum;

}
console.log(sumOfSalary(personsOfSalary));  

function avaregeOfSalary(){
 let avarage=0;
 avarage=sumOfSalary(personsOfSalary)/personsOfSalary.length;
 return avarage;
}
console.log(avaregeOfSalary());