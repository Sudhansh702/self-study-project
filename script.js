let sec = document.querySelector(".sec");
    let min = document.querySelector(".min");
    let hour = document.querySelector(".hour");
    let s = 0;
    let m = 0;
    let h = 0;
    setInterval(() => {
        if (s == 60) {
            s = 0;
            m += 1;
            if (m == 60) {
                m = 0;
                h++;
                if (h == 12) {
                    h = 0;
                }
            }
        }
        sec.innerHTML = s;
        min.innerHTML = m;
        hour.innerHTML = h;

        s++;
    }, 1000);