document.querySelector("form").addEventListener("submit", event=>{
    event.preventDefault();
    console.log(event.currentTarget);
})
