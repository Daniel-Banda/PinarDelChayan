function enviarWhatsApp() {
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const telefono = "5213122115603";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nombre || !email || !mensaje) {
    alert("Por favor completa todos los campos.");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Por favor ingresa un correo electrónico válido.");
    return;
  }

  const texto = `Hola, soy ${nombre}. Mi correo es ${email}. Estoy interesado en organizar un evento en el Pinar del Chayán. Este es mi mensaje:\n\n${mensaje}`;

  // Detectar si es móvil
  const esMovil = /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
  const baseUrl = esMovil ? "https://api.whatsapp.com/send" : "https://web.whatsapp.com/send";
  const url = `${baseUrl}?phone=${telefono}&text=${encodeURIComponent(texto)}`;

  // Evitar múltiples clics
  const boton = document.getElementById("btnEnviar");
  if (boton) {
    boton.disabled = true;
    boton.textContent = "Abriendo WhatsApp...";
    setTimeout(() => {
      boton.disabled = false;
      boton.textContent = "Enviar";
    }, 3000);
  }

  window.open(url, "_blank");
}
