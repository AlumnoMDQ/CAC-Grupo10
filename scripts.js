const submitButton = /** @type {HTMLButtonElement} */ (
    document.querySelector("button.botonEnviar")
);

const inputs = [
    .../** @type {NodeListOf<HTMLInputElement>} */ (
        document.querySelectorAll("form input, form textarea, form select")
    ),
];

const nombreInput = /** @type {HTMLInputElement} */ (
    document.querySelector("input[name='nombre']")
);

const containsNumbers = (str) => /\d/.test(str);

const invalidForm = () => {
    if (containsNumbers(nombreInput.value)) {
        alert("No se admiten números en el nombre");
        return true; // Devuelve true indicando que el formulario es inválido
    }

    return inputs.some(input => !input.validity.valid);
};

inputs.forEach(input =>
    input.addEventListener("input", () => 
        Object.assign(submitButton, { disabled: invalidForm() }),
    ),
);    
