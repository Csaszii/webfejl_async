class Dataviewcontroller {
    #Div
    constructor(){
        this.#Div = document.createElement("div");
        this.#Div.textContent="Loading..."
        document.appendChild(this.#Div);
    }
    renderData(array){
        for (const i of array){
            const div = document.createElement("div");
            div.textContent = `${i.name}-${i.age}-${i.sex}`
            this.#Div.appendChild(div)
        }
    }
}