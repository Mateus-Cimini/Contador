 function contar() {
    
    let inicio = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let pulos = document.getElementById('pulos');

    let res = document.querySelector('div#result');


    res.innerHTML = "Contando..."
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(pulos.value)


   for (let c = i; c <= f; c += p) {
    res.innerHTML += `${c}`
    
   }

   
  
    }
