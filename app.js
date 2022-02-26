var $h = document.querySelector('.hour');
var $m = document.querySelector('.minute');
var $s = document.querySelector('.second');
var h = document.getElementById('timer-hour');
var m = document.getElementById('timer-minutes');
var s = document.getElementById('timer-seconds');
var link = document.getElementById('link-input');
var form = document.getElementById('input-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    h = parseInt(h.value, 10);
    m = parseInt(m.value, 10);
    s = parseInt(s.value, 10);
    link = link.value;

    var timeout = h*60*60 + m*60 + s;

    var timer = setInterval(function() {
        if (timeout == 0) {
            clearInterval(timer);
            window.open(link, '_self');
        }
    
        let timeVal = timeout;
        let hour = Math.floor(timeVal/3600);
        timeVal %= 3600;
        let minute = Math.floor(timeVal/60);
        timeVal %= 60;
        let second = timeVal; 
    
        $h.innerHTML = hour;
        $m.innerHTML = minute;
        $s.innerHTML = second;

        timeout--;
    }, 1000);
})

