// Placeholder: can be used for form validation or button action later
console.log("Portfolio page loaded successfully.");
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const toastEl = document.getElementById("contactToast");
    const toast = new bootstrap.Toast(toastEl, { delay: 3000 }); // Auto hide 3 detik

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Tampilkan popup toast
        toast.show();

        // Reset semua input
        form.reset();
    });
});







