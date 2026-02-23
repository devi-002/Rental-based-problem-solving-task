const DAMAGE_CHARGE = 200; 

function setRent() {
    let material = document.getElementById("material").value;
    let rent = 0;

    if (material === "sheet") rent = 100;
    else if (material === "pipe") rent = 150;
    else if (material === "column") rent = 200;

    document.getElementById("rent").value = rent;
}

function calculate() {

    let quantity = Number(document.getElementById("quantity").value) || 0;
    let rent = Number(document.getElementById("rent").value) || 0;
    let days = Number(document.getElementById("days").value) || 0;
    let damagedItems = Number(document.getElementById("items").value) || 0;
    let advance = Number(document.getElementById("advanced").value) || 0;
    let totalRent = quantity * rent * days;
    let damageCost = damagedItems * DAMAGE_CHARGE;
    let finalAmount = totalRent + damageCost;
    let balance = finalAmount - advance;
    document.getElementById("totalrent").value = totalRent;
    document.getElementById("damagecost").value = damageCost;
    document.getElementById("finalamount").value = finalAmount;
    document.getElementById("balance").value = balance;
}