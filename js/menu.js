<script>
    // Ottieni il percorso della pagina corrente
    var currentPath = window.location.pathname;

    // Rimuovi la classe "current" da tutti i link nel menu
    var menuLinks = document.querySelectorAll('#menu2 a');
    menuLinks.forEach(function(link) {
        link.classList.remove('current');
    });

    // Aggiungi la classe "current" al link corrispondente alla pagina corrente
    var currentLink = document.querySelector('#menu2 a[href="' + currentPath + '"]');
    if (currentLink) {
        currentLink.classList.add('current');
    }
</script>