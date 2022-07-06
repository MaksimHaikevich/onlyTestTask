let buttons = document.querySelectorAll('.open-button')
let titles = document.querySelectorAll('h3')

buttons.forEach((button, index) => {
    button.addEventListener('click', function () {
        this.classList.toggle('active')
        let spoilerContent = this.parentNode.nextElementSibling
        let title = titles[index]
        if (spoilerContent.style.maxHeight) {
            spoilerContent.style.maxHeight = null
            button.style.transform = 'rotate(0)'
            title.style.color = '#012B34'
        } else {
            spoilerContent.style.maxHeight = spoilerContent.scrollHeight + 'px'
            button.style.transform = 'rotate(45deg)'
            button.style.transition = '0.2s'
            title.style.color = '#02818A'
        }
        if (this.classList.contains('active')) {
            spoilerContent.classList.add('active')
        } else {
            spoilerContent.classList.remove('active')

        }
    })
})