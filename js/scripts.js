fetch('https://api.ipify.org?format=json')
.then(response => response.json())
.then(data => {
    fetch('https://ip-api.com/json/' + data.ip)
    .then(response => response.json())
    .then(data => {
        document.getElementById('geo').innerHTML = '<h1>'+ data.city + ' - ' + data.region + '</h1>'
    })
})

var principal = document.getElementById('s-main')
var link = document.querySelector("link[rel~='icon']")

setInterval(() => {
    let d = new Date()
    document.getElementById('time').innerHTML = '<h4>'+ d.toLocaleTimeString(); + '</h4>'
    if (d.getHours() > 6 && d.getHours() < 12) {
        document.getElementById('isNight').innerHTML = '<h2>Boa manhã</h2>'
        principal.classList.add('morning')
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = 'sunny.png';
        newTitle = 'Bom dia!'
        if (document.title != newTitle) {
            document.title = newTitle;
        }
    } else if (d.getHours() > 12 && d.getHours() < 18) {
        document.getElementById('isNight').innerHTML = '<h2>Boa tarde</h2>'
        principal.classList.add('evening')
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = 'sunset.png';
        newTitle = 'Boa tarde!'
        if (document.title != newTitle) {
            document.title = newTitle;
        }
    } else if (d.getHours() > 18) {
        document.getElementById('isNight').innerHTML = '<h2>Boa noite!</h2>'
        principal.classList.add('night')
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = 'crescent-moon.png';
        newTitle = 'Boa noite!'
        if (document.title != newTitle) {
            document.title = newTitle;
        }
    }
    else {
        document.getElementById('isNight').innerHTML = '<h2>Boa madrugada!</h2>'
        principal.classList.add('midnight')
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = 'moon.png';
        newTitle = 'Boa madrugada!'
        if (document.title != newTitle) {
            document.title = newTitle;
        }
    }

},1000)