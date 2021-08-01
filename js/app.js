
      const hours = ["6am" , "7am" ,"8pm","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"]

const Seattle={
    name : 'Seattle',
    numberCookies : [],
    cookiesBerHours :[],
    result : [],
    total : 0,
    max : 65,
    min :23	,
    avarege :6.3 ,
    random : function() { 
        for (let i=0 ; i<=hours.length ; i++){
        this.numberCookies[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min) ; 
       }
       return this.numberCookies;
        
      },
      avgrandom : function(){
        for (let i=0 ; i<hours.length ; i++){

            this.cookiesBerHours[i]= Math.floor(this.numberCookies[i] * this.avarege) ;
            this.total +=this.cookiesBerHours[i];


      }
      return this.cookiesBerHours ;

    },
    finalresult : function(){
        for (let i=0 ; i<hours.length ; i++){
        this.result[i]=  hours[i]+ ' : ' + this.cookiesBerHours[i] + "cookies";
    }
return this.result;
}
}
console.log(Seattle.random());
console.log(Seattle.avgrandom());
console.log(Seattle.finalresult());
console.log('the total' +Seattle.total)

let createMain = document.getElementById("main");

let createH2 =  document.createElement("h2");
createH2.textContent=Seattle.name;
createMain.appendChild(createH2);

let createul =document.createElement('ul');
createMain.appendChild(createul);

for(let li=0 ; li <hours.length ;li++){

let createli =document.createElement('li');
createul.appendChild(createli);
createli.textContent = Seattle.result[li]

}
createli =document.createElement('li');
createul.appendChild(createli);
createli.textContent ='total'+ ':' + Seattle.total + 'cookies' ;


/////////////////////////////////////////////////////////////////////////////////
const Tokyo={
    name : 'Tokyo',
    numberCookies : [],
    cookiesBerHours :[],
    result : [],
    total : 0,
    max : 24,
    min :3	,
    avarege :1.2 ,
    random : function() { 
        for (let i=0 ; i<=hours.length ; i++){
        this.numberCookies[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min) ; 
       }
       return this.numberCookies;
        
      },
      avgrandom : function(){
        for (let i=0 ; i<hours.length ; i++){

            this.cookiesBerHours[i]= Math.floor(this.numberCookies[i] * this.avarege) ;
            this.total +=this.cookiesBerHours[i];


      }
      return this.cookiesBerHours ;

    },
    finalresult : function(){
        for (let i=0 ; i<hours.length ; i++){
        this.result[i]=  hours[i]+ ' : ' + this.cookiesBerHours[i] + "cookies";
    }
return this.result;
}
}
console.log(Seattle.random());
console.log(Seattle.avgrandom());
console.log(Seattle.finalresult());
console.log('the total' +Seattle.total)

 createMain = document.getElementById("main");

 createH2 =  document.createElement("h2");
createH2.textContent=Tokyo.name;
createMain.appendChild(createH2);

 createul =document.createElement('ul');
createMain.appendChild(createul);

for(let li=0 ; li <hours.length ;li++){

 createli =document.createElement('li');
createul.appendChild(createli);
createli.textContent = Seattle.result[li]

}
createli =document.createElement('li');
createul.appendChild(createli);
createli.textContent ='total'+ ':' + Seattle.total + 'cookies' ;

/////////////////////////////////////////////////////////////

const Dubai={
    name : 'Dubai',
    numberCookies : [],
    cookiesBerHours :[],
    result : [],
    total : 0,
    max : 38,
    min :11	,
    avarege :3.7 ,
    random : function() { 
        for (let i=0 ; i<=hours.length ; i++){
        this.numberCookies[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min) ; 
       }
       return this.numberCookies;
        
      },
      avgrandom : function(){
        for (let i=0 ; i<hours.length ; i++){

            this.cookiesBerHours[i]= Math.floor(this.numberCookies[i] * this.avarege) ;
            this.total +=this.cookiesBerHours[i];


      }
      return this.cookiesBerHours ;

    },
    finalresult : function(){
        for (let i=0 ; i<hours.length ; i++){
        this.result[i]=  hours[i]+ ' : ' + this.cookiesBerHours[i] + "cookies";
    }
return this.result;
}
}
console.log(Seattle.random());
console.log(Seattle.avgrandom());
console.log(Seattle.finalresult());
console.log('the total' +Seattle.total)

 createMain = document.getElementById("main");

 createH2 =  document.createElement("h2");
createH2.textContent=Dubai.name;
createMain.appendChild(createH2);

 createul =document.createElement('ul');
createMain.appendChild(createul);

for(let li=0 ; li <hours.length ;li++){

 createli =document.createElement('li');
createul.appendChild(createli);
createli.textContent = Seattle.result[li]

}
createli =document.createElement('li');
createul.appendChild(createli);
createli.textContent ='total'+ ':' + Seattle.total + 'cookies' ;

/////////////////////////////////////////////////////////////

const Paris={
    name : 'Paris',
    numberCookies : [],
    cookiesBerHours :[],
    result : [],
    total : 0,
    max : 38,
    min :20	,
    avarege :2.3 ,
    random : function() { 
        for (let i=0 ; i<=hours.length ; i++){
        this.numberCookies[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min) ; 
       }
       return this.numberCookies;
        
      },
      avgrandom : function(){
        for (let i=0 ; i<hours.length ; i++){

            this.cookiesBerHours[i]= Math.floor(this.numberCookies[i] * this.avarege) ;
            this.total +=this.cookiesBerHours[i];


      }
      return this.cookiesBerHours ;

    },
    finalresult : function(){
        for (let i=0 ; i<hours.length ; i++){
        this.result[i]=  hours[i]+ ' : ' + this.cookiesBerHours[i] + "cookies";
    }
return this.result;
}
}
console.log(Seattle.random());
console.log(Seattle.avgrandom());
console.log(Seattle.finalresult());
console.log('the total' +Seattle.total)

 createMain = document.getElementById("main");

 createH2 =  document.createElement("h2");
createH2.textContent=Paris.name;
createMain.appendChild(createH2);

 createul =document.createElement('ul');
createMain.appendChild(createul);

for(let li=0 ; li <hours.length ;li++){

 createli =document.createElement('li');
createul.appendChild(createli);
createli.textContent = Seattle.result[li]

}
createli =document.createElement('li');
createul.appendChild(createli);
createli.textContent ='total'+ ':' + Seattle.total + 'cookies' ;

/////////////////////////////////////////////////////////////

const Lima={
    name : 'Lima',
    numberCookies : [],
    cookiesBerHours :[],
    result : [],
    total : 0,
    max : 16,
    min :2	,
    avarege :4.6 ,
    random : function() { 
        for (let i=0 ; i<=hours.length ; i++){
        this.numberCookies[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min) ; 
       }
       return this.numberCookies;
        
      },
      avgrandom : function(){
        for (let i=0 ; i<hours.length ; i++){

            this.cookiesBerHours[i]= Math.floor(this.numberCookies[i] * this.avarege) ;
            this.total +=this.cookiesBerHours[i];


      }
      return this.cookiesBerHours ;

    },
    finalresult : function(){
        for (let i=0 ; i<hours.length ; i++){
        this.result[i]=  hours[i]+ ' : ' + this.cookiesBerHours[i] + "cookies";
    }
return this.result;
}
}
console.log(Seattle.random());
console.log(Seattle.avgrandom());
console.log(Seattle.finalresult());
console.log('the total' +Seattle.total)

 createMain = document.getElementById("main");

 createH2 =  document.createElement("h2");
createH2.textContent=Lima.name;
createMain.appendChild(createH2);

 createul =document.createElement('ul');
createMain.appendChild(createul);

for(let li=0 ; li <hours.length ;li++){

 createli =document.createElement('li');
createul.appendChild(createli);
createli.textContent = Seattle.result[li]

}
createli =document.createElement('li');
createul.appendChild(createli);
createli.textContent ='total'+ ':' + Seattle.total + 'cookies' ;
