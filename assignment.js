//https://github.com/rishad190/assignmentJs


function kilometerToMeter(kilometer){

    if (kilometer < 0){

        return "error" ;
    }
    else{
        var meter = kilometer * 1000;
    }
    

    return meter ;
}


function budgetCalculator(watch,phone,laptop){

    if(watch<0 || phone<0 || laptop <0){
        return "error";
    }
    else{
        var watchPrice = watch*50;
        var phonePrice = phone*100;
        var laptopPrice = laptop*500;
    
        totalPrice = watchPrice + phonePrice + laptopPrice;
    }


    return totalPrice;
}



function hotelCost(day){
    var cost=0;
    if(day<0){

        return "error";

    }
    else{

        if(day<=10){
            cost = day*100;
       }
       else if(day<=20){
          var firstDays = 10*100;
          var remainingDay = day -10;
          var secondDays = remainingDay*80;
           cost = firstDays+secondDays;
   
       }
       else{
           
           var firstDays = 10* 100;
           var secondDays = 10*80;
           var remainingDay = day -20 ;
           var lastDays = remainingDay *50;
           cost = firstDays + secondDays + lastDays;
       }
    }
    

    return cost ;
}



function megaFriend(friends){
    var max = [""];
    if(friends.length <= 1){
        
        return "error";
    }
    else{

        for(var i =0 ; i< friends.length; i++){
       
        
            if(friends[i].length > max.length){
                max =friends[i];
                
            }
    
        }
    }
  
    return max;
}



