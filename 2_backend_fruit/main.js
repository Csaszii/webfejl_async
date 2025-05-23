const form = document.getElementById("fruitform");
const fruitInput1 = document.getElementById("id1")
const fruitInput2 = document.getElementById("id2")

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const obj = {
        name: fruitInput1.value,
        price: fruitInput2.value
    }

    fetch("http://127.0.0.1:63013/fruits", {method: "post", headers: {"Content-Type": "application/json"}, body: JSON.stringify(obj)}).then(response) => {
        const response1 = response1.json();
        response1.then((data) => {
            console.log(data);
        }
    )};
});
