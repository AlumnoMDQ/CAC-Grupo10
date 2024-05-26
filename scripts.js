const submitButton = /** @type {HTMLButtonElement} */ (
    document.querySelector("button.botonEnviar")
);
const inputs = [
    .../** @type {NodeListOf<HTMLInputElement>} */ (
        document.querySelectorAll("form input, form textarea, form select")
    ),
];
const invalidForm = () => inputs.some(input => !input.validity.valid);

inputs.forEach(input =>
    input.addEventListener("input", () =>
        Object.assign(submitButton, { disabled: invalidForm() }),
    ),
);

/*

const formData = Object.fromEntries(new FormData(event.currentTarget));

traer data como objeto
*/ 