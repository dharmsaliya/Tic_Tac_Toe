let position = ['','','','','','','','',''];
let turn = "X";

let coins = document.querySelectorAll(".coin");
let reset = document.querySelector("#again");

let check = () => {
    let c = document.querySelectorAll(".coin");
    if(position[0] === position[1] && position[1] === position[2]){
        if(position[0] === "X" || position[0] === "O"){
            c[0].style.backgroundColor = '#B3E2A7';
            c[1].style.backgroundColor = '#B3E2A7';
            c[2].style.backgroundColor = '#B3E2A7';
            return "over"
        }else{return "notover"}
    }
    else if(position[3] === position[4] && position[4] === position[5]){
        if(position[3] === "X" || position[3] === "O"){
            c[3].style.backgroundColor = '#B3E2A7';
            c[4].style.backgroundColor = '#B3E2A7';
            c[5].style.backgroundColor = '#B3E2A7';
            return "over"
        }else{return "notover"}
    }
    else if(position[6] === position[7] && position[7] === position[8]){
        if(position[6] === "X" || position[6] === "O"){
            c[6].style.backgroundColor = '#B3E2A7';
            c[7].style.backgroundColor = '#B3E2A7';
            c[8].style.backgroundColor = '#B3E2A7';
            return "over"
        }else{return "notover"}
    }
    else if(position[0] === position[3] && position[3] === position[6]){
        if(position[0] === "X" || position[0] === "O"){
            c[0].style.backgroundColor = '#B3E2A7';
            c[3].style.backgroundColor = '#B3E2A7';
            c[6].style.backgroundColor = '#B3E2A7';
            return "over"
        }else{return "notover"}
    }
    else if(position[1] === position[4] && position[4] === position[7]){
        if(position[1] === "X" || position[1] === "O"){
            c[1].style.backgroundColor = '#B3E2A7';
            c[4].style.backgroundColor = '#B3E2A7';
            c[6].style.backgroundColor = '#B3E2A7';
            return "over"
        }else{return "notover"}
    }
    else if(position[2] === position[5] && position[5] === position[8]){
        if(position[2] === "X" || position[2] === "O"){
            c[2].style.backgroundColor = '#B3E2A7';
            c[5].style.backgroundColor = '#B3E2A7';
            c[8].style.backgroundColor = '#B3E2A7';
            return "over"
        }else{return "notover"}
    }
    else if(position[0] === position[4] && position[4] === position[8]){
        if(position[0] === "X" || position[0] === "O"){
            c[0].style.backgroundColor = '#B3E2A7';
            c[4].style.backgroundColor = '#B3E2A7';
            c[8].style.backgroundColor = '#B3E2A7';
            return "over"
        }else{return "notover"}
    }
    else if(position[2] === position[4] && position[4] === position[6]){
        if(position[2] === "X" || position[2] === "O"){
            c[2].style.backgroundColor = '#B3E2A7';
            c[4].style.backgroundColor = '#B3E2A7';
            c[6].style.backgroundColor = '#B3E2A7';
            return "over"
        }else{return "notover"}
    }
    else{return "notover"}
}


let print = (index) => {
    
    document.getElementById(index).innerHTML = turn;
    position[parseInt(index[1])] = turn;

    let answer = check();
    
    if(answer === "notover"){
        if(position.includes("")){
            if(turn === "X"){turn = "O"}
            else{turn = "X"}
        }
        else{
            document.querySelector("#result").innerHTML = "Tie";
            let again = document.querySelector("#again");
            again.style.visibility = "visible";
        }
    }
    else{
        if(answer === 'over'){
            document.querySelector("#result").innerHTML = turn + " Wins...";
            let again = document.querySelector("#again");
            again.style.visibility = "visible";
        }
    }
    
}

reset.addEventListener("click",() => {
    position = ['','','','','','','','',''];
    document.querySelector("#result").innerHTML = "";
    let again = document.querySelector("#again");
    again.style.visibility = "hidden";

    let re = document.querySelectorAll(".coin");

    re.forEach(coin => {
        coin.style.backgroundColor = "#D8EFD3";
    })

    re.forEach(coin => {
        coin.innerHTML = "";
    })
})



coins.forEach(coin => {
    coin.addEventListener("click", () => {
        print(coin.id);
    });
});
