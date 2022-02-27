//Alerta de cookies
Swal.fire({
    title: "Sitio con cookies",
    showDenyButton: true,
    showCancelButton: true,
    text: "Utilizamos cookies para mejorar la navegación",
    imageUrl: 'img/logo.png',
    imageWidth: 330,
    imageHeight: 100,
    imagealt: 'cookies',
}).then(function (result) {
    //Si se pulsa al botón aceptar, sale el mensaje de cookies aceptadas
    if (result.isConfirmed) {
        Swal.fire('Cookies Aceptadas', '', 'success');
        sessionStorage.setItem(1, "YourTracks cookie");
    
    //Si se pulsa el botón cancelar, sale el mensaje de cookies rechazadas
    } else {
        Swal.fire('Cookies rechazadas, no las usaremos', '<a href="cookies/miPagina.html" target="_blank">Política de cookies</a>', 'info');
    }
});
