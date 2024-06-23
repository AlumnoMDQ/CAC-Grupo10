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
    return inputs.some(input => !input.validity.valid) || containsNumbers(nombreInput.value);
    alert("No se admiten numeros en nombre")
};

inputs.forEach(input =>
    input.addEventListener("input", () => 
        Object.assign(submitButton, { disabled: invalidForm() }),
    ),
);      