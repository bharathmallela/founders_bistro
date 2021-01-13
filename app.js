const togglebtn = document.getElementsByClassName('toggle')[0]
const linkslist = document.getElementsByClassName('links')[0]


togglebtn.addEventListener('click', () => {
    console.log('navbar expanded/colapsed')
    linkslist.classList.toggle('active')
})
