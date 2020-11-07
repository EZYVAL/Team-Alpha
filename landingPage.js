var tableau = [];

var descripCour = {
    "titre": "cours d'art plastique",
    "date_creation" : "5 nov 2020",
    "total_hour" : "30",
    "level" : "intermediate",
    "enseignant" : "Joseline",
};

for(let i = 0; i<= 3; i++){
    tableau.push(descripCour);
}

let survol=function(){
    var affichage = document.createElement('div');
    affichage.style.position = 'relative';
    affichage.style.border = ' solid black 2px';
    affichage.style.height= '250px';
    affichage.style.width = '150px';
    for(let i in descripCour){
        var p = document.createElement('p');
        p.innerHTML = i + ' : ' + descripCour[i];
        affichage.appendChild(p);
        console.log(p);
    }
    let okButton = document.createElement('button');
    //okButton.style.id = 'okbut';
    okButton.innerHTML = 'OK!';
    affichage.appendChild(okButton);
    okButton.addEventListener('click', function(){
        document.body.removeChild(affichage);
    }) 
   document.body.appendChild(affichage); 
}


let passage = function(){

    location.replace('artNext.html');

}

let souris = document.getElementById('one');
console.log(souris);

    souris.addEventListener('mouseover', survol);

    souris.addEventListener('click', passage);



