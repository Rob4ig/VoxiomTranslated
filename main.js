fetch("https://raw.githubusercontent.com/TheMasterRob4ig/VoxiomTranslated/main/script.js")
    .then(response => response.text())
    .then(data => {
        const sriptElement = document.createElement("script")
        sriptElement.textContent = data
        document.head.appendChild(sriptElement)
    })
