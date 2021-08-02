
      
      const hours = [ "6am" , "7am" ,"8pm","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"];

       let totalFinalC = 0;

      function country (name,max,min,avarege) {


    this.name = name;
    this.max = max ;
    this.min = min ;
    this.avarege = avarege;
    this.numberCookies = [];
    this.cookiesBerHours =[];
    this.result = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    this.total= 0;

};

 
country.prototype.coutmor = function() { 
    for (let i=0 ; i<=hours.length ; i++){
    this.numberCookies[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min) ; 
   }
   return this.numberCookies;
    
  }

  country.prototype.avgrandom = function(){
    for (let i=0 ; i<hours.length ; i++){

        this.cookiesBerHours[i]= Math.floor(this.numberCookies[i] * this.avarege) ;
        this.total +=this.cookiesBerHours[i];


  }
  return this.cookiesBerHours ;

}

country.prototype.finalresult = function(){
    for (let i=0 ; i<hours.length ; i++){
    this.result[i]=   this.cookiesBerHours[i] ;
}
return this.result;
}

country.prototype.rander = function(){
    let totalRows = 0 ;
    let createTr = document.createElement('tr');
    cerateTable.appendChild(createTr);
    let locationTh = document.createElement('th');
    locationTh.textContent = this.name;
    createTr.appendChild(locationTh);

    for(i=0;i<hours.length;i++){
        let createTd = document.createElement('td');
         createTr.appendChild(createTd);

         createTd.textContent = this.result[i];
        totalRows+=this.result[i];

    }

let createTdd = document.createElement('td');
createTdd.textContent = totalRows ;
createTr.appendChild(createTdd);
totalFinalC += totalRows

 }
 

 let getMain = document.getElementById('main');
  
 let cerateTable = document.createElement('table');
 getMain.appendChild(cerateTable);


 function header(){
       let headerTr = document.createElement('tr');
       cerateTable.appendChild(headerTr);
       let locationTh = document.createElement('th');
       locationTh.textContent = "location";
       headerTr.appendChild(locationTh);
    for(i=0;i<hours.length;i++){

        let createTh = document.createElement('th');
    headerTr.appendChild(createTh);
    createTh.textContent = hours[i];
    }
let createThend = document.createElement('th');
createThend.textContent = "Daily Location Total";
headerTr.appendChild(createThend);

}


function footer(){
  let footerTr = document.createElement('tr');
  cerateTable.appendChild(footerTr);
  let totles = document.createElement('tfoot')
  totles.textContent = "Totals";
  footerTr.appendChild(totles);
  let totalPerHour=[];
for(let i =0 ; i<hours.length ; i++){

   totalPerHour[i] = city[0].result[i] + city[1].result[i] +city[2].result[i] +city[3].result[i] + city[4].result[i]  
    let totalTd = document.createElement('td');
    totalTd.textContent =totalPerHour[i];
    footerTr.appendChild(totalTd);


}  
let createTddd = document.createElement('td');
createTddd.textContent = totalFinalC ;
footerTr.appendChild(createTddd);

}






let Seattle = new country('Seattle',65,23,6.3);
let Tokyo = new country('Tokyo',24,3,1.2);
let Dubai = new country('Dubai',38,11,1.7);
let Paris = new country('Paris',38,20,2.3);
let Lima = new country('Lima',16,2,4.6);
const city = [Seattle,Tokyo,Dubai,Paris,Lima]



header();

Seattle.coutmor();
Seattle.avgrandom();
Seattle.finalresult();
Seattle.rander();


Tokyo.coutmor();
Tokyo.avgrandom();
Tokyo.finalresult();
Tokyo.rander();

Dubai.coutmor();
Dubai.avgrandom();
Dubai.finalresult();
Dubai.rander();

Paris.coutmor();
Paris.avgrandom();
Paris.finalresult();
Paris.rander();

Lima.coutmor();
Lima.avgrandom();
Lima.finalresult();
Lima.rander();
footer();
// diallysum()



// const Seattle={
//     name : 'Seattle',
//     numberCookies : [],
//     cookiesBerHours :[],
//     result : [],
//     total : 0,
//     max : 65,
//     min :23	,
//     avarege :6.3 ,
//     random : function() { 
//         for (let i=0 ; i<=hours.length ; i++){
//         this.numberCookies[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min) ; 
//        }
//        return this.numberCookies;
        
//       },
//       avgrandom : function(){
//         for (let i=0 ; i<hours.length ; i++){

//             this.cookiesBerHours[i]= Math.floor(this.numberCookies[i] * this.avarege) ;
//             this.total +=this.cookiesBerHours[i];


//       }
//       return this.cookiesBerHours ;

//     },
//     finalresult : function(){
//         for (let i=0 ; i<hours.length ; i++){
//         this.result[i]=  hours[i]+ ' : ' + this.cookiesBerHours[i] + "cookies";
//     }
// return this.result;
// }
// }
// console.log(Seattle.random());
// console.log(Seattle.avgrandom());
// console.log(Seattle.finalresult());
// console.log('the total' +Seattle.total)

// let createMain = document.getElementById("main");

// let createH2 =  document.createElement("h2");
// createH2.textContent=Seattle.name;
// createMain.appendChild(createH2);

// let createul =document.createElement('ul');
// createMain.appendChild(createul);

// for(let li=0 ; li <hours.length ;li++){

// let createli =document.createElement('li');
// createul.appendChild(createli);
// createli.textContent = Seattle.result[li]

// }
// createli =document.createElement('li');
// createul.appendChild(createli);
// createli.textContent ='total'+ ':' + Seattle.total + 'cookies' ;


// // /////////////////////////////////////////////////////////////////////////////////
// const Tokyo={
//     name : 'Tokyo',
//     numberCookies : [],
//     cookiesBerHours :[],
//     result : [],
//     total : 0,
//     max : 24,
//     min :3	,
//     avarege :1.2 ,
//     random : function() { 
//         for (let i=0 ; i<=hours.length ; i++){
//         this.numberCookies[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min) ; 
//        }
//        return this.numberCookies;
        
//       },
//       avgrandom : function(){
//         for (let i=0 ; i<hours.length ; i++){

//             this.cookiesBerHours[i]= Math.floor(this.numberCookies[i] * this.avarege) ;
//             this.total +=this.cookiesBerHours[i];


//       }
//       return this.cookiesBerHours ;

//     },
//     finalresult : function(){
//         for (let i=0 ; i<hours.length ; i++){
//         this.result[i]=  hours[i]+ ' : ' + this.cookiesBerHours[i] + "cookies";
//     }
// return this.result;
// }
// }
// console.log(Seattle.random());
// console.log(Seattle.avgrandom());
// console.log(Seattle.finalresult());
// console.log('the total' +Seattle.total)

//  createMain = document.getElementById("main");

//  createH2 =  document.createElement("h2");
// createH2.textContent=Tokyo.name;
// createMain.appendChild(createH2);

//  createul =document.createElement('ul');
// createMain.appendChild(createul);

// for(let li=0 ; li <hours.length ;li++){

//  createli =document.createElement('li');
// createul.appendChild(createli);
// createli.textContent = Seattle.result[li]

// }
// createli =document.createElement('li');
// createul.appendChild(createli);
// createli.textContent ='total'+ ':' + Seattle.total + 'cookies' ;

// /////////////////////////////////////////////////////////////

// const Dubai={
//     name : 'Dubai',
//     numberCookies : [],
//     cookiesBerHours :[],
//     result : [],
//     total : 0,
//     max : 38,
//     min :11	,
//     avarege :3.7 ,
//     random : function() { 
//         for (let i=0 ; i<=hours.length ; i++){
//         this.numberCookies[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min) ; 
//        }
//        return this.numberCookies;
        
//       },
//       avgrandom : function(){
//         for (let i=0 ; i<hours.length ; i++){

//             this.cookiesBerHours[i]= Math.floor(this.numberCookies[i] * this.avarege) ;
//             this.total +=this.cookiesBerHours[i];


//       }
//       return this.cookiesBerHours ;

//     },
//     finalresult : function(){
//         for (let i=0 ; i<hours.length ; i++){
//         this.result[i]=  hours[i]+ ' : ' + this.cookiesBerHours[i] + "cookies";
//     }
// return this.result;
// }
// }
// console.log(Seattle.random());
// console.log(Seattle.avgrandom());
// console.log(Seattle.finalresult());
// console.log('the total' +Seattle.total)

//  createMain = document.getElementById("main");

//  createH2 =  document.createElement("h2");
// createH2.textContent=Dubai.name;
// createMain.appendChild(createH2);

//  createul =document.createElement('ul');
// createMain.appendChild(createul);

// for(let li=0 ; li <hours.length ;li++){

//  createli =document.createElement('li');
// createul.appendChild(createli);
// createli.textContent = Seattle.result[li]

// }
// createli =document.createElement('li');
// createul.appendChild(createli);
// createli.textContent ='total'+ ':' + Seattle.total + 'cookies' ;

// /////////////////////////////////////////////////////////////

// const Paris={
//     name : 'Paris',
//     numberCookies : [],
//     cookiesBerHours :[],
//     result : [],
//     total : 0,
//     max : 38,
//     min :20	,
//     avarege :2.3 ,
//     random : function() { 
//         for (let i=0 ; i<=hours.length ; i++){
//         this.numberCookies[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min) ; 
//        }
//        return this.numberCookies;
        
//       },
//       avgrandom : function(){
//         for (let i=0 ; i<hours.length ; i++){

//             this.cookiesBerHours[i]= Math.floor(this.numberCookies[i] * this.avarege) ;
//             this.total +=this.cookiesBerHours[i];


//       }
//       return this.cookiesBerHours ;

//     },
//     finalresult : function(){
//         for (let i=0 ; i<hours.length ; i++){
//         this.result[i]=  hours[i]+ ' : ' + this.cookiesBerHours[i] + "cookies";
//     }
// return this.result;
// }
// }
// console.log(Seattle.random());
// console.log(Seattle.avgrandom());
// console.log(Seattle.finalresult());
// console.log('the total' +Seattle.total)

//  createMain = document.getElementById("main");

//  createH2 =  document.createElement("h2");
// createH2.textContent=Paris.name;
// createMain.appendChild(createH2);

//  createul =document.createElement('ul');
// createMain.appendChild(createul);

// for(let li=0 ; li <hours.length ;li++){

//  createli =document.createElement('li');
// createul.appendChild(createli);
// createli.textContent = Seattle.result[li]

// }
// createli =document.createElement('li');
// createul.appendChild(createli);
// createli.textContent ='total'+ ':' + Seattle.total + 'cookies' ;

// /////////////////////////////////////////////////////////////

// const Lima={
//     name : 'Lima',
//     numberCookies : [],
//     cookiesBerHours :[],
//     result : [],
//     total : 0,
//     max : 16,
//     min :2	,
//     avarege :4.6 ,
//     random : function() { 
//         for (let i=0 ; i<=hours.length ; i++){
//         this.numberCookies[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min) ; 
//        }
//        return this.numberCookies;
        
//       },
//       avgrandom : function(){
//         for (let i=0 ; i<hours.length ; i++){

//             this.cookiesBerHours[i]= Math.floor(this.numberCookies[i] * this.avarege) ;
//             this.total +=this.cookiesBerHours[i];


//       }
//       return this.cookiesBerHours ;

//     },
//     finalresult : function(){
//         for (let i=0 ; i<hours.length ; i++){
//         this.result[i]=  hours[i]+ ' : ' + this.cookiesBerHours[i] + "cookies";
//     }
// return this.result;
// }
// }
// console.log(Seattle.random());
// console.log(Seattle.avgrandom());
// console.log(Seattle.finalresult());
// console.log('the total' +Seattle.total)

//  createMain = document.getElementById("main");

//  createH2 =  document.createElement("h2");
// createH2.textContent=Lima.name;
// createMain.appendChild(createH2);

//  createul =document.createElement('ul');
// createMain.appendChild(createul);

// for(let li=0 ; li <hours.length ;li++){

//  createli =document.createElement('li');
// createul.appendChild(createli);
// createli.textContent = Seattle.result[li]

// }
// createli =document.createElement('li');
// createul.appendChild(createli);
// createli.textContent ='total'+ ':' + Seattle.total + 'cookies' ;
