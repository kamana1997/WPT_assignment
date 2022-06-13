var dataInput = "";

function refreshValue(){
    dataInput = document.getElementById("inp").value;
}

function generateAlert(x){
    if(x != null){
        alert(x+dataInput);
    } else{
        alert(dataInput);
    }
}