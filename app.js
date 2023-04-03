// function bbc(){
//     var bbcMins = "British Broadcasting Corporation";
//     // console.log(bbcMins);
//     function dbc(){
//         var dbcMins = "Dhaka Broadcasting Corporation";
//         console.log(bbcMins);
//     }
//     dbc();
// }

// // bbc();

// let bangladesh;

//==========> SET DEFAULT DATA IN JAVASCRIPT<==========//
// function showMe(prmitter = "No data for show."){
//     console.log(prmitter);
// }

// showMe();




//==========> REST PAR MITTER IN JAVASCRIPT <==========//
// function restPara(a, b, ...cd){
//     console.log(a, b, cd);
// }
// restPara(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

//==========>SPREAD PARAMITTER<==========//

const array1 = [1, 2, 3, 4, 5,];
const array2 = [...array1, 6, 7, 8, 9, 0,];

console.log(array2);