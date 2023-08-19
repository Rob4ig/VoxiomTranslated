function trUpdate(words) {
    for (let classes in words) {
        let translations = words[classes]
        document.querySelectorAll(classes).forEach(element => {
            for (let key in translations) {
                if (element.textContent.trim() === key) {
                    element.textContent = translations[key]
                }
            }
        })
    }
}
fetch('https://raw.githubusercontent.com/TheMasterRob4ig/VoxiomTranslated/main/tr.json')
    .then(response => response.json())
    .then(data => setInterval(() => trUpdate(data.translations), 100))
