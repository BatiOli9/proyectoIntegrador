window.addEventListener("load", () => {
    console.log('Hola');
    let form = document.querySelector(".form");
    form.nombre.focus();
    let errorsHtml = document.querySelector(".errores");

    form.addEventListener("submit", (event) => {
        let errors = [];

        /* Nombre */
        if(form.nombre.value == ""){
            errors.push("El nombre del producto esta vacio");
            form.nombre.classList.remove("is-valid");
            form.nombre.classList.add("is-invalid");
        } else if (form.nombre.value.length < 8) {
            errors.push("El nombre debe tener al menos 8 caracteres")
        } else {
            form.nombre.classList.remove("is-invalid");
            form.nombre.classList.add("is-valid");
        }
        /* Codigo */
        if(form.codigo.value == ""){
            errors.push("El codigo del producto esta vacio");
            form.codigo.classList.remove("is-valid");
            form.codigo.classList.add("is-invalid");
        } else if (form.codigo.value.length < 4) {
            errors.push("El codigo debe tener al menos 4 caracteres")
        } else {
            form.codigo.classList.remove("is-invalid");
            form.codigo.classList.add("is-valid");
        }
        /* Precio */
        if(form.precio.value == ""){
            errors.push("El precio del producto esta vacio");
            form.precio.classList.remove("is-valid");
            form.precio.classList.add("is-invalid");
        } else if (form.precio.value.length < 1) {
            errors.push("El precio debe tener al menos 1 caracter")
        } else {
            form.precio.classList.remove("is-invalid");
            form.precio.classList.add("is-valid");
        }
        /* Garantia */
        if(form.garantia.value == ""){
            errors.push("La garantia del producto esta vacia");
            form.garantia.classList.remove("is-valid");
            form.garantia.classList.add("is-invalid");
        } else if (form.garantia.value.length < 2) {
            errors.push("El codigo debe tener al menos 2 caracteres")
        } else {
            form.garantia.classList.remove("is-invalid");
            form.garantia.classList.add("is-valid");
        }
        /* Tipo */
        if(form.tipo.value == ""){
            errors.push("El tipo del producto esta vacio");
            form.tipo.classList.remove("is-valid");
            form.tipo.classList.add("is-invalid");
        } else {
            form.tipo.classList.remove("is-invalid");
            form.tipo.classList.add("is-valid");
        }
        /* Descripcion */
        if(form.descripcion.value == ""){
            errors.push("La descripcion del producto esta vacia");
            form.descripcion.classList.remove("is-valid");
            form.descripcion.classList.add("is-invalid");
        } else if (form.descripcion.value.length < 15) {
            errors.push("La descripcion del producto debe tener al menos 15 caracteres")
        } else {
            form.descripcion.classList.remove("is-invalid");
            form.descripcion.classList.add("is-valid");
        }

        if (errors.length > 0) {

            event.preventDefault();
            errorsHtml.innerHTML = "";
            errors.forEach(error => {
                errorsHtml.innerHTML += `<li class="error"><i class="fa-solid fa-circle-exclamation"></i> ${error}</li>`
            });
        } else {
            errorsHtml.innerHTML = "";
            form.submit();
        }
    })
})