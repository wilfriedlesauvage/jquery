$(function(){
    //J'ajoute un évènement click à mon bouton id verify.
    $('#Button_validate').click(function(){
        // Je stock dans des variables la valeur des input.
        var exam1 = $('#exam1').val();
        var exam2 = $('#exam2').val();
        var exam3 = $('#exam3').val();
        var exam4 = $('#exam4').val();
        var exam5 = $('#exam5').val();
        //Je stock dans la variable average la moyenne des notes . J'utilise parseFloat pour transformer les chaînes de caractères renvoyées par .val() en valeur numériques.
        var average = ((parseFloat(exam1) + parseFloat(exam2) + parseFloat(exam3) + parseFloat(exam4) + parseFloat(exam5)) / 5);
        //Je compare ma variable Result par des intervalles.
        if(average >= 0 && average < 10 ){
            alert('En dessous de la moyenne' + average);
        }
        else if (average >= 10 && average < 13 ){
            alert('Moyen' + average);
        }
        else if (average >= 13 && average < 16){
            alert('Bien' + average);
        }
        else if (average >= 16 && average < 20){
            alert('Très Bien ' + average);
        }
        else if(average == 20) {
            alert('Excellent' + average);
        }
    });
});




 


