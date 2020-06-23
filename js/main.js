function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/"+cep+"/json/";
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $('#codPostal').html(response.cep)
            $('#logradouro').html(response.logradouro);
            $('#bairro').html(response.bairro);
            $('#localidade').html(response.localidade);
            $('#uf').html(response.uf);
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            //document.getElementById("bairro").innerHTML = response.bairro;
            //document.getElementById("localidade").innerHTML = response.localidade;
            //document.getElementById("uf").innerHTML = response.uf;
            $(".cep").show();
            $(".barra-progresso").hide();

            // Mostra a barra de progrsso por 2 segundos.
                /* setTimeout(function () {
                    $(".barra-progresso").hide();
                }, 2000); */
       }
    })
}

/* 
function mostraCep(){
    $(".cep").show();
};
 */

$(function(){
    $(".cep").hide();

});

