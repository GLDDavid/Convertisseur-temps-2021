 // on récupère les valeurs des inputs et on attribut à des variables
 var userSeconds = document.getElementById('userSeconds');
 var secondSubmit = document.getElementById('secondSubmit');

 //variable pour l'affichage du résultat
 var result = document.querySelector('.affichage');

 // fonction de calcul
 function calculHours() {
     // on récupère la valeur de la variable userSeconds
     var secondsCalc = Number(userSeconds.value);

     // calcul pour les heures avec la méthode Math.floor pour 1h = 3600s
     // on recupère le plus grand entier qui est inférieur ou égale
     var hours = Math.floor(secondsCalc / 3600);

     // on récupère le reste de la division de hours grace au modulo
     // cela correspond à secondsCalc = secondsCalc % 3600
     secondsCalc %= 3600;
     // et on calcul les minutes
     var minutes = Math.floor(secondsCalc / 60);
     // et pour finir les secondes avec le modulo pour le restant
     var seconds = secondsCalc % 60;

     //alert(hours + ' heure ' + minutes + ' minutes et ' + seconds + ' seconds ');

     // et on affiche le résultat 
     result.innerHTML = 'La conversion correspond à <br/>' + hours + ' Heure(s), ' + minutes + ' Minute(s) et <br/>' + seconds + ' Seconde(s).'
 }
 // appelle de la fonction au click
 secondSubmit.addEventListener('click', calculHours);
