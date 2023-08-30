
function validateDate(dateString,curYear) {
  const datePattern = /^(\d{4})-(\d{2})-(\d{2})$/;
  if (!datePattern.test(dateString)) {
    return { valid: false, error: 'Invalid format' };
  }

  const [, year, month, day] = dateString.match(datePattern);
  const parsedYear = parseInt(year, 10);
  const parsedMonth = parseInt(month, 10);
  const parsedDay = parseInt(day, 10);

  if (parsedYear < 1000 || parsedYear > 9999) {
    return { valid: false, error: 'Invalid year' };
  }
  if (parsedYear > curYear) {
    return { valid: false, error: 'Must be in the past' };
  }
  if (parsedYear < 1000) {
    return { valid: false, error: 'Must be in the future' };
  }
  if (parsedMonth < 1 || parsedMonth > 12) {
    return { valid: false, error: 'Invalid month' };
  }

  if (parsedDay < 1 || parsedDay > 31) {
    return { valid: false, error: 'Invalid day' };
  }

  const date = new Date(parsedYear, parsedMonth - 1, parsedDay);
  const isValid = (
    date.getFullYear() === parsedYear &&
    date.getMonth() === parsedMonth - 1 &&
    date.getDate() === parsedDay
  );

  return { valid: isValid };
}

  const currentDate =new Date();
  const currentDay  =currentDate.getDate();
  const currentMonth=currentDate.getMonth()+1;
  const currentYear =currentDate.getFullYear();

  const submit=document.getElementById("submit");
  submit.addEventListener("click",function(){
  
  if(dayin.value.length == 1 ){
    dayin.value="0"+dayin.value;
  }
  if(monthin.value.length == 1){
    monthin.value="0"+monthin.value;
  }
  const datePattern2=yearin.value+"-"+monthin.value+"-"+dayin.value;
  console.log(datePattern2);
  const validationResult = validateDate(datePattern2,currentYear);

  switch (validationResult.error) {
   
   case 'Invalid month':
      console.log('Please enter a valid month between 1 and 12');
      if(monthin.value==0){
        const montherror2=document.getElementById("montherror2");
        montherror2.style.display='none';
      }
      if(!monthin.value==0){
        const montherror2=document.getElementById("montherror2");
        montherror2.style.display='block';
      }
      
      if(!1>=dayin.value<=31){
       const dayerror2=document.getElementById("dayerror2");
       dayerror2.style.display='block';
       }
      if (dayin.value>=1 && dayin.value<=31 ){
         const dayerror2=document.getElementById("dayerror2");
       dayerror2.style.display='none';
       }
       if(1000>=yearin.value<=currentYear && 1>=monthin.value<=12 && !1>=dayin.value<=31){       
          const dayerror3=document.getElementById("dayerror3");
          dayerror3.style.display='none';
        } 

      break;
   case 'Invalid day':
     if(!dayin.value==0  ){
     const dayerror2=document.getElementById("dayerror2");
     dayerror2.style.display='block';
     }
     if(monthin.value>1 && monthin.value<12){
      const montherror2=document.getElementById("montherror2");
      montherror2.style.display='none';
     }
     console.log('invalid day');
     break;
  //  case 'Must be in the past':
  //    console.log('The year Must be in the past');
  //    break;
  //  case 'Must be in the future':
  //    console.log('Must be a valid year');
  //    break;  
   default:
     if(1000>=yearin.value<=currentYear && 1>=monthin.value<=12 && !1>=dayin.value<=31){
     const dayerror3=document.getElementById("dayerror3");
     dayerror3.style.display='block';
     }
     else if(1>=monthin.value<=12 && !1>=dayin.value<=31){
      const dayerror3=document.getElementById("dayerror3");
     dayerror3.style.display='block';
     }
     else if(1000>=yearin.value<=currentYear && !1>=dayin.value<=31){
      const dayerror3=document.getElementById("dayerror3");
     dayerror3.style.display='block';
     }

     else{
       const dayerror3=document.getElementById("dayerror3");
       dayerror3.style.display='none';
     }
     console.log('An unknown error occurred');
     break;
 }

  if(validationResult.valid && yearin.value<=currentYear){
    // VALID INPUT --> SHOW OUTPUT
    console.log("Valid");
    // YEAR 
    const yearsold=document.getElementById("yearsold");
    let yearcal=" ";
    yearcal=0;
    if(currentMonth >= monthin.value){
      yearcal=currentYear-yearin.value;
    }
    else{
      yearcal=currentYear-yearin.value-1;
    }
       
    // MONTH
    const monthsold=document.getElementById("monthsold");
    let monthcal=" ";
    monthcal=0;
    
    if(currentDay <= dayin.value && currentMonth >= monthin.value){
      monthcal=currentMonth-monthin.value-1;
    }
    else if(currentDay <= dayin.value && currentMonth <= monthin.value){  
      monthcal=(12-monthin.value)+currentMonth-1;
    }
    else if(currentMonth >= monthin.value){
      monthcal=currentMonth-monthin.value;
    }
    else if(currentMonth <= monthin.value){  
      monthcal=(12-monthin.value)+currentMonth;
    }
    
    // DAY
    const daysold=document.getElementById("daysold");
    let daycal=" ";
    daycal=0;
    if(currentDay >= dayin.value){
      daycal=currentDay-dayin.value;
    }
    else{
      daycal=(31-dayin.value)+currentDay;
    }

    console.log(Date()); 

    // To go from 0 to ans (Animation)
    // const numberDisplay = document.getElementById('numberDisplay');
    let currentNumber1 = 0;
    let currentNumber2 = 0;
    let currentNumber3 = 0;
    const targetNumber1 = yearcal; // Change this to your desired ending number
    const targetNumber2 = monthcal;
    const targetNumber3 = daycal;
    const intervalDuration = 25; // Animation interval in milliseconds 

    function updateNumber1() {
      
      yearsold.textContent = currentNumber1;
      currentNumber1++;
      if (currentNumber1 > targetNumber1) {
        clearInterval(animationInterval1);
      }
    }
    function updateNumber2() {
      monthsold.textContent = currentNumber2;
      currentNumber2++;
      if (currentNumber2 > targetNumber2) {
        clearInterval(animationInterval2);
      }
    }
    function updateNumber3() {
      daysold.textContent = currentNumber3;
      currentNumber3++;
      if (currentNumber3 > targetNumber3) {
        clearInterval(animationInterval3);
      }
    }

    const animationInterval1 = setInterval(updateNumber1, intervalDuration);
    const animationInterval2 = setInterval(updateNumber2, intervalDuration);
    const animationInterval3 = setInterval(updateNumber3, intervalDuration);
    
    const inputs=document.getElementById("inputs");
    const head=inputs.querySelectorAll("h3");
    head.forEach(head=>{
      head.style.color='hsl(0, 1%, 44%)';
    });
    const inputborder=document.querySelectorAll("input");
    inputborder.forEach(inputborder=>{
      inputborder.style.borderColor='hsl(0, 0%, 86%)';
    });
      const dayerror1=document.getElementById("dayerror1");
      dayerror1.style.display='none';
 
      const dayerror2=document.getElementById("dayerror2");
      dayerror2.style.display='none';
  
      const dayerror3=document.getElementById("dayerror3");
      dayerror3.style.display='none';
  
      const montherror1=document.getElementById("montherror1");
      montherror1.style.display='none';
   
      const montherror2=document.getElementById("montherror2");
      montherror2.style.display='none';
  
      const yearerror1=document.getElementById("yearerror1");
      yearerror1.style.display='none';
   
      const yearerror2=document.getElementById("yearerror2");
      yearerror2.style.display='none';
 
      const yearerror3=document.getElementById("yearerror3");
      yearerror3.style.display='none'; 
  }
  
  else{
    const yearsold=document.getElementById("yearsold");
    yearsold.textContent="- -";
    const monthsold=document.getElementById("monthsold");
    monthsold.textContent="- -";
    const daysold=document.getElementById("daysold");
    daysold.textContent="- -";
    // INVALID INPUT --> SHOW ERROR 
    console.log("InValid");
    
    // Error Message
    const inputs=document.getElementById("inputs");
    const head=inputs.querySelectorAll("h3");
    head.forEach(head=>{
      head.style.color='hsl(0, 100%, 67%)';
    });
    const inputborder=document.querySelectorAll("input");
    inputborder.forEach(inputborder=>{
      inputborder.style.borderColor='hsl(0, 100%, 67%)';
    });

    if(dayin.value==0){
      const dayerror1=document.getElementById("dayerror1");
      dayerror1.style.display='block';
    }
    if(dayin.value!=0){
      const dayerror1=document.getElementById("dayerror1");
      dayerror1.style.display='none';
    }
    if(dayin.value==0){
      const dayerror2=document.getElementById("dayerror2");
      dayerror2.style.display='none';
    }
    
    if(monthin.value==0){
      const montherror1=document.getElementById("montherror1");
      montherror1.style.display='block';
    }
    if(monthin.value!=0){
      const montherror1=document.getElementById("montherror1");
      montherror1.style.display='none';
    }
    if(monthin.value > 1 && monthin.value < 12){
      const montherror2=document.getElementById("montherror2");
      montherror2.style.display='block';
      
    }
    if(monthin.value < 1 && monthin.value > 12){
      const montherror2=document.getElementById("montherror2");
      montherror2.style.display='none';
      
    }
    if(yearin.value==0){
      const yearerror1=document.getElementById("yearerror1");
      yearerror1.style.display='block';

    }
    if(yearin.value!=0){
      const yearerror1=document.getElementById("yearerror1");
      yearerror1.style.display='none';
    }
    if(yearin.value>=currentYear){
      const yearerror2=document.getElementById("yearerror2");
      yearerror2.style.display='block';
    }
    if(yearin.value<=currentYear && yearin.value==0){
      const yearerror2=document.getElementById("yearerror2");
      yearerror2.style.display='none';
    }
    if(yearin.value<=1000){
      const yearerror3=document.getElementById("yearerror3");
      yearerror3.style.display='block';
      const yearerror2=document.getElementById("yearerror2");
      yearerror2.style.display='none';
    }
    if(yearin.value>=1000){
      const yearerror3=document.getElementById("yearerror3");
      yearerror3.style.display='none';}
    if(monthin.value==0){
      const montherror2=document.getElementById("montherror2");
      montherror2.style.display='none';
    }
    if(monthin.value>=1 && monthin.value<=12){
      const montherror2=document.getElementById("montherror2");
      montherror2.style.display='none';
     }  
    if(!1000>=yearin.value<=currentYear && !1>=monthin.value<=12 && !1>=dayin.value<=31){       
      const dayerror2=document.getElementById("dayerror2");
      dayerror2.style.display='block';
    }
  }
  })