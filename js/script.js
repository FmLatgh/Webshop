let item3max = 72;
let item2max = 12;
let item1max = 15;

let modalUsed = 0;
let modalreq = 0;

let totalprice = 0.00;

let backdrop = document.getElementById("backdrop");
let currentMod = document.getElementById("mod1");
let totalrice = document.getElementById("totalprice");

function AddValue(modalUsed) {
    switch (modalUsed) {
        case 1:
            if (item1max != 0) {
                totalprice = totalprice + 3.99;
                item1max = item1max - 1;
                document.getElementById("stockM1").innerText = item1max + " on stock"
                totalrice.innerText = parseFloat(totalprice).toFixed(2) + " €"
            } else {
                alert("Out of stock!");
            }
            break;
        case 2:
            if (item2max != 0) {
                totalprice = totalprice + 15.00;
                item2max = item2max - 1;
                document.getElementById("stockM2").innerText = item2max + " on stock"
                totalrice.innerText = parseFloat(totalprice).toFixed(2) + " €"
            } else {
                alert("Out of stock!");
            }
            break;
        case 3:
            if (item3max != 0) {
                totalprice = totalprice + 1.99;
                item3max = item3max - 1;
                document.getElementById("stockM3").innerText = item3max + " on stock"
                totalrice.innerText = parseFloat(totalprice).toFixed(2) + " €"
            } else {
            alert("Out of stock!");
            }
            break;
        default:
            break;
    }
}

function RemoveValue (modalUsed) {
    switch (modalUsed) {
        case 1:
            if (item1max < 15) {
                totalprice = totalprice - 3.99;
                item1max = item1max + 1;
                document.getElementById("stockM1").innerText = item1max + " on stock"
                if (totalprice == 0) {
                    totalrice.innerText = "0.00€"
                } else {
                    totalrice.innerText = parseFloat(totalprice).toFixed(2) + " €"
                }
            }
            break;
        case 2:
            if (item2max < 12) {
                totalprice = totalprice - 15.00;
                item2max = item2max + 1;
                document.getElementById("stockM2").innerText = item2max + " on stock"
                if (totalprice === 0) {
                    totalrice.innerText = "0.00€"
                } else {
                    totalrice.innerText = parseFloat(totalprice).toFixed(2) + " €"
                }
            }
            break;
        case 3:
            if (item3max < 72) {
                totalprice = totalprice - 1.99;
                item3max = item3max + 1;
                document.getElementById("stockM3").innerText = item3max + " on stock"
                if (totalprice === 0) {
                    totalrice.innerText = "0.00€"
                } else {
                    totalrice.innerText = parseFloat(totalprice).toFixed(2) + " €"
                }
            }
            break;
        default:
            break;
    }
}

function showModal(modalreq) {
    switch (modalreq) {
        case 1:
            document.getElementById("mod1").style.display = "block";
            currentMod = document.getElementById("mod1");
            document.getElementById("backdrop").style.display = "block";
            break;
        case 2:
            document.getElementById("mod2").style.display = "block";
            currentMod = document.getElementById("mod2");
            document.getElementById("backdrop").style.display = "block";
            break;
        case 3:
            document.getElementById("mod3").style.display = "block";
            currentMod = document.getElementById("mod3");
            document.getElementById("backdrop").style.display = "block";
            break;
        default:

            break;
    }
}

function clearItems() {
    item3max = 72;
    item2max = 12;
    item1max = 15;
    totalprice = 0.00;

    totalrice.innerText = parseFloat(totalprice).toFixed(2) + " €"
    document.getElementById("stockM1").innerText = item1max + " on stock"
    document.getElementById("stockM2").innerText = item2max + " on stock"
    document.getElementById("stockM3").innerText = item3max + " on stock"
}

backdrop.onclick = HideModal;

function HideModal() {
    backdrop.style.display = "none"
    currentMod.style.display = "none"
}