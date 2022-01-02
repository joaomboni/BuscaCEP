//alert("funcionou");

function consultaCep(){
    var cep = document.getElementById("cep").value;
    
    var url = `https://viacep.com.br/ws/${cep}/json/`
    
    console.log(url);
    
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("complemento").innerHTML = response.complemento;
            document.getElementById("ddd").innerHTML = response.ddd;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("uf").innerHTML = response.uf
        }
    })
}