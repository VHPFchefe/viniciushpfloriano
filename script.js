
function type_writer(param){
    const vetor = param.innerHTML.split('')
    param.innerHTML= ''
    vetor.forEach((letra,i)=>{
        setTimeout(() => param.innerHTML+= letra, 100 * i )
    })
}

const texto = document.getElementById('escrita')
setInterval(()=> type_writer(texto),10000)
