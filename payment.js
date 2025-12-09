let pm=document.getElementById("pm")
let extra=document.getElementById("extra")
let ok=document.getElementById("ok")
let pay=document.getElementById("pay")

pm.onchange = function(){
    extra.innerHTML=""

    if(pm.value==="bank"){
        extra.innerHTML = "<label>Bank Number</label><input id='bnum' placeholder='Your bank acc here'>"
    }

    else if(pm.value==="wallet"){
        extra.innerHTML = "<label>E-Wallet ID</label><input id='wid' placeholder='your wallet id'>"
    }

    else if(pm.value==="cod"){
        extra.innerHTML = "<div style='font-size:17px;margin-top:15px;'>You can pay when we pick your laundry</div>"
    }
}

pay.onclick=function(){
    if(pm.value===""){
        ok.innerHTML="pick something bro"
    } else {
        ok.innerHTML="payment done ✔"
    }
}
