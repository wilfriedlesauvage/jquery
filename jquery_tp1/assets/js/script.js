$(function(){
    
    var justePrix = 89; // je stock dans la variable chiffreUser la valeur à trouver par l'utilisateur

    $('#Button_validate').click(function(){
        var chiffreUser = $('#nb').val(); //je stock dans la variable chiffreUser la valeur rentré par l'utilisateur
    
    if (chiffreUser == justePrix){
    alert("Bravo ! le nombre est exact !");
    } else if (chiffreUser > justePrix){
    alert("Le juste prix est plus bas !");
    } else {
    alert("Le juste prix est plus haut!");
    }
    });
});







