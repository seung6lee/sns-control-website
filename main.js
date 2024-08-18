window.onload = function () {
    const url = new URLSearchParams(window.location.search).get('url');
    let yesButton = document.getElementById("yesButton");
    let noButton = document.getElementById("noButton");

    yesButton.onclick = function () {
        console.log("Yes");

        if ( url ) {
            if ( url.includes('?') ) {
                window.location.replace(`${url}&snsControl=true`)
            } else {
                window.location.replace(`${url}?snsControl=true`)
            }
        } else {
            console.log("Don't play with this site LoL")
        }
    }

    noButton.onclick = function () {
        window.location.replace("https://google.com")
    }

    setTimeout(function () {
        document.getElementById("timeBar").style.width = '100%';
        document.getElementById("timeBar").style.display = 'none';
        document.getElementById("selection").style.display = 'block';
    }, 5000);
}