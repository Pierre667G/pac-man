const pacman = document.getElementById("pac-man")
document.addEventListener('keypress', (e) => {
    console.log(e)
    for (let i = 0; i < e.length; i++) {
        setInterval(() => {
        pacman.classList.add("move")        
    }, 1000)
    }
})