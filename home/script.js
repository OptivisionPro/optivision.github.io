

function openPage(page) {
    window.location.href = page;
}

function closeFriendInfo() {
    document.getElementById("perfil-amigo").style.display = "none";
}

function toggleListaAmigos() {
    const listaAmigos = document.querySelector('.lista-amigos');
    listaAmigos.classList.toggle('open');
}

function closeFriendInfo() {
    document.getElementById('perfil-amigo').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById('toggle');
    const nav = document.querySelector('.navegacion');
    const navLinks = document.querySelectorAll('.navegacion a');

    // Función para cerrar el menú
    function closeMenu() {
        toggle.checked = false;  // Desmarca el checkbox
    }

    // Cerrar el menú al hacer clic en cualquier enlace
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Cierra el menú al hacer clic fuera del menú
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !toggle.contains(event.target)) {
            closeMenu();
        }
    });
});
