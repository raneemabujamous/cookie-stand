
      
      const hours = [ "6am" , "7am" ,"8pm","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"];

       let totalFinalC = 0;
       let arrayOfobject =[];
      function Country (name,max,min,avarege) {


    this.name = name;
    this.max = max ;
    this.min = min ;
    this.avarege = avarege;
    this.numberCookies = [];
    this.cookiesBerHours =[];
    this.result = [];
    this.total= 0;
 arrayOfobject.push(this)

};

 
Country.prototype.coutmor = function() { 
    for (let i=0 ; i<=hours.length ; i++){
    this.numberCookies[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min) ; 
   }
   return this.numberCookies;
    
  }

  Country.prototype.avgrandom = function(){
    for (let i=0 ; i<hours.length ; i++){

        this.cookiesBerHours[i]= Math.floor(this.numberCookies[i] * this.avarege) ;
        this.total +=this.cookiesBerHours[i];


  }
  return this.cookiesBerHours ;

}

Country.prototype.finalresult = function(){
    for (let i=0 ; i<hours.length ; i++){
    this.result[i]=   this.cookiesBerHours[i] ;
}
console.log(this.result)
return this.result;
}

Country.prototype.rander = function(){
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
  let footerTr = document.createElement('tfoot');
  cerateTable.appendChild(footerTr);
  let totles = document.createElement('tr')
  totles.textContent = "Totals";
  footerTr.appendChild(totles);

for(let i =0 ; i<hours.length ; i++){
    let totalPerHour=0;

    for (let x=0 ; x<arrayOfobject.length ; x++){

   totalPerHour += arrayOfobject[x].result[i]
    
    }
    let totalTd = document.createElement('td');
    totalTd.textContent =totalPerHour;
    totles.appendChild(totalTd);
}  
let createTddd = document.createElement('td');
createTddd.textContent = totalFinalC ;
totles.appendChild(createTddd);

}






let Seattle = new Country('Seattle',65,23,6.3);
let Tokyo = new Country('Tokyo',24,3,1.2);
let Dubai = new Country('Dubai',38,11,1.7);
let Paris = new Country('Paris',38,20,2.3);
let Lima = new Country('Lima',16,2,4.6);



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


let getInfo = document.getElementById('infolocation');

getInfo.addEventListener('submit' , infoOfCity);
function infoOfCity(event){
    event.preventDefault();

let nameNew = event.target.nameCoutry.value;
let minSales = parseInt(event.target.min.value);
let maxSles = parseInt(event.target.max.value);
let avarege = parseInt( event.target.avarge.value);
let newCityCLculation = new Country(nameNew , maxSles,minSales,avarege);

// var letters = /^[A-Za-z]+$/;
// if(!nameNew.match(letters)){
// let note = document.getElementById('note')
// note.textContent="write correct name "

//   } else{
      
    newCityCLculation.coutmor();
    newCityCLculation.avgrandom();
    newCityCLculation.finalresult();
    newCityCLculation.rander();
    cerateTable.deleteTFoot(); 
    footer();
//   }

}

