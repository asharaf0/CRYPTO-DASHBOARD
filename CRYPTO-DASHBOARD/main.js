

//theme toggle
const themeBtn = document.querySelector('.nav__theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')
    if(document.body.classList.contains('dark-theme')) {
        themeBtn.innerHTML = `<i class="uil uil-sun"></i>`
        //save theme to local storage
        localStorage.setItem('currentTheme', 'dark-theme')
    } else {
        themeBtn.innerHTML = `<i class="uil uil-moon"></i>`
        //save theme to local storage
        localStorage.setItem('currentTheme', '')
    }
})


document.body.className = localStorage.getItem('currentTheme')
if(document.body.classList.contains('dark-theme')) {
    themeBtn.innerHTML = `<i class="uil uil-sun"></i>`
    //save theme to local storage
    localStorage.setItem('currentTheme', 'dark-theme')
} else {
    themeBtn.innerHTML = `<i class="uil uil-moon"></i>`
    //save theme to local storage
    localStorage.setItem('currentTheme', '')
}







//show hide sidebar menu
const sidebar = document.querySelector('.sidebar')
const closeSidebarBtn = document.querySelector('.sidebar__close-btn')
const openSidebarBtn = document.querySelector('.nav__menu-btn')



openSidebarBtn.addEventListener('click', () => {
    sidebar.style.display = 'flex'
})

closeSidebarBtn.addEventListener('click', () => {
    sidebar.style.display = 'none'
})








const chart = document.querySelector('#chart').getContext('2d');

new Chart(chart, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'BTC',
                data: [29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116, 61004, 63456],
                borderColor: "red",
                borderWidth: 2
            },
            {
                label: "ETH",
                data: [31500, 41000, 88800, 26000, 46000, 32698, 5000, 3000, 18656, 24832, 36844, 35678],
                borderColor: "blue",
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
})