let a = 0;
const items = document.querySelectorAll('.items')


items.forEach((i) => {

    let b;

    i.addEventListener('dragover', (e) => {
        if (a === 0 || a === e.target.id) {
            a = e.target.id
        }

    })
    i.addEventListener('dragover', (e) => {
        b = e.target.id

    })
    i.addEventListener('dragleave', (e) => {
        let d = e.target.id
        console.log(document.getElementById(d).textContent)
        console.log(document.getElementById(a).textContent)

        let c = document.getElementById(d).textContent;
        document.getElementById(d).textContent = document.getElementById(a).textContent
        document.getElementById(a).textContent = c;

    })

})