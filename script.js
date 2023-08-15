function updateLinks() {
    let a = document.getElementsByTagName('a')
    const url = new URL(window.location.href)
    const playerName = url.pathname.split('/').pop()
    const paths = [
        "/player/" + playerName,
        "/player/" + playerName + "/ctg",
        "/player/" + playerName + "/br"
    ];

    for (let i = 0; i < a.length; i++) {
        let href = a[i].getAttribute('href')

        // main /leaderboard
        const leaderboardLink = document.querySelector("a.YECSn[href='/leaderboard/ctg']")
        if (leaderboardLink) {
            leaderboardLink.textContent = "Лидеры"
        }

        // /player
        if (href && paths.includes(href)) {
            if (href.endsWith(`/ctg`)) {
                a[i].textContent = 'Захват Кристаллов'
            }
            if (href.endsWith(`/br`)) {
                a[i].textContent = 'Королевская Битва'
            }
        }

        // other
        if (linkInfo.hasOwnProperty(href)) {
            a[i].innerHTML = '';
            if (linkInfo[href].hasOwnProperty('imgSrc')) {
                let img = document.createElement('img')
                img.src = linkInfo[href].imgSrc
                a[i].appendChild(img)
            }
            a[i].appendChild(document.createTextNode(linkInfo[href].text))
        }
    }
}
updateLinks()
setInterval(updateLinks, 100)
