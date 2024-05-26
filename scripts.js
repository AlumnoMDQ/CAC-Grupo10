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
const anosInput = /** @type {HTMLInputElement} */ (
    document.querySelector("input[name='años']")
);

const containsNumbers = (str) => /\d/.test(str);
const containsLetters = (str) => /[a-zA-Z]/.test(str);

const invalidForm = () => {
    return inputs.some(input => !input.validity.valid) || containsNumbers(nombreInput.value) || containsLetters(anosInput.value);
};

const checkNombreInput = () => {
    if (containsNumbers(nombreInput.value)) {
        alert("El campo 'nombre' no puede contener números.");
    }
};

const checkAnosInput = () => {
    if (containsLetters(anosInput.value)) {
        alert("El campo 'años' no puede contener letras.");
    }
};

inputs.forEach(input =>
    input.addEventListener("input", () => {
        checkNombreInput();
        checkAnosInput();
        Object.assign(submitButton, { disabled: invalidForm() });
    })
);

Object.assign(submitButton, { disabled: invalidForm() });
