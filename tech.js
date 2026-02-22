let totalrent1;
function totalrent(){
    const number1=document.getElementById("quantity").value
     const number2=document.getElementById("rent").value
      const number3=document.getElementById("days").value
       
       totalrent1=number1*number2*number3
    
       if (!isNaN (totalrent1)){
        document.getElementById("result").innerHTML=totalrent1
        return totalrent1
       }
       else {
        document.getElementById("result").innerHTML="invalid input"

       }
}

function damagedcost(){
    const number4=document.getElementById("damaged").value
    const number5=document.getElementById("items").value
    let damagecost=number4*number5
    if(!isNaN(damagecost)){
        document.getElementById("damagedcost").innerHTML=damagecost
        return damagecost
    }
    else{
        document.getElementById("damagedcost").innerHTML="invalid input"
    }
}
function finalamount(){
    const rent=totalrent()
    const damage=damagedcost()
    const finalamt=rent+damage
    if(!isNaN(finalamt)){
        document.getElementById("final").innerHTML=finalamt
        return finalamt
    }
    else{
        document.getElementById("final").innerHTML="invalid input"
    }

}
function balance(){
    const final=finalamount();
    const number6=document.getElementById("advanced").value
    const balance=final-number6
    if(!isNaN(balance)){
        document.getElementById("balance").innerHTML=balance
    }
    else{
        document.getElementById("balance").innerHTML="invalid input"
    }
}
