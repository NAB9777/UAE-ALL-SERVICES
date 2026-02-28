// ---------------- Particles Background ----------------
tsParticles.load("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#d4af37" },
    shape: { type: "circle" },
    opacity: { value: 0.6 },
    size: { value: 3 },
    move: { enable: true, speed: 1, direction: "none", outModes: "bounce" }
  },
  background: { color: "#000000" }
});

// ---------------- Form & WhatsApp ----------------
function selectService(service){
  document.getElementById("service").value = service;
  window.location.href="#booking";
}

function resetForm(){
  document.getElementById("bookingForm").reset();
  document.getElementById("bookingForm").style.display="flex";
  document.getElementById("successMessage").style.display="none";
}

// Form submit with confirmation popup
document.getElementById("bookingForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const location = document.getElementById("location").value.trim();
  const service = document.getElementById("service").value;

  // Hide form and show confirmation
  document.getElementById("bookingForm").style.display="none";
  document.getElementById("successMessage").style.display="block";

  // Show details in popup
  document.getElementById("confirmText").innerText = 
    `Name: ${name}\nService: ${service}\nLocation: ${location}\nPhone: +971${phone}`;

  // WhatsApp button
  document.getElementById("confirmWhatsApp").onclick = function(){
    const whatsappNumber = "971585770783";
    const text = `Hello, I am ${name}. I want ${service}. My location: ${location}. Contact: +971${phone}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };
});