// Sélectionnez le bouton à l'aide de son ID
let bouton = document.getElementById("monBouton");

// Ajoutez un écouteur d'événements pour le clic sur le bouton
bouton.addEventListener("click", function() {
    // Lorsque le bouton est cliqué, affichez une boîte de dialogue avec un message
    alert("Bonjour, vous avez cliqué sur le bouton !");
});