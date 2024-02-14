const btnPrint = document.querySelector("button")
const resultList = document.querySelector("#resultPrint")

btnPrint.addEventListener("click", () => {
    resultList.innerHTML = ""

    const input = ("I am awesome!")

    for(let i = 0; i < 10; i++) {
        let newLi = document.createElement("li")
        newLi.innerText = `${i + 1}. ${input}`
        resultList.appendChild(newLi)
    }
})