function insert(num) {
                document.getElementById('result').innerHTML = `You selected ${num} out of 5`
                localStorage.setItem("num", num)
}

function hide(){
        const num = localStorage.getItem("num")
        if(num == undefined){
                alert('Selecione uma nota.')
        } else {
                document.querySelector(".card").style.display = 'none'
        }
}