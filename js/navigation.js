function showModule(module) {
    [].forEach.call(document.querySelectorAll("[data-module]"), function (e) {
        e.classList.add("hide");
    });

    [].forEach.call(document.querySelectorAll("[data-portfolio]"), function (e) {
        e.classList.remove("active");
    });


    document.querySelector("[data-portfolio='" + module + "']").classList.add("active");
    document.querySelector("[data-module='" + module + "']").classList.remove("hide");
    document.querySelector("[data-module='" + module + "']").classList.add("fadeIn");
    localStorage.setItem("activeModule", module);

    if (module === "blog") {
        document.getElementById("blogButtons").classList.remove("hide");
    } else {
        document.getElementById("blogButtons").classList.add("hide");
    }
}

if (localStorage.getItem("activeModule")) {
    showModule(localStorage.getItem("activeModule"));
}