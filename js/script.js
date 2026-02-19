// Simple email form submission
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            alert(`Thank you! We'll reach out to ${email} soon.`);
            form.reset();
        });
    }
});
