const links = {
    instagram: "https://www.instagram.com/9nines_india",
    whatsapp: "https://wa.me/8433661045",
    email: "mailto:9nines.in@gmail.com",
    phone: "tel:+918433661045"
};

document.getElementById("instagram").addEventListener("click", () => {
    window.open(links.instagram, "_blank");
});

document.getElementById("whatsapp").addEventListener("click", () => {
    window.open(links.whatsapp, "_blank");
});

document.getElementById("email").addEventListener("click", () => {
    window.location.href = links.email;
});

document.getElementById("phone").addEventListener("click", () => {
    window.location.href = links.phone;
});