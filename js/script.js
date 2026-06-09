function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Guna tema pilihan pengguna sebelum ini jika ada
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}
