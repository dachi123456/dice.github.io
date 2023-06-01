const images = ['one.png','two.png','three.png','four.png','five.png','six.png']

let dice = document.querySelectorAll('img')
const btn = document.querySelector('button')


const roll = () => {
    dice.forEach((d) => {
        d.classList.add('shake')
    })
    setTimeout(() => {
        dice.forEach((d) => {
            d.classList.remove('shake')
        })
        let diceOneVal = Math.floor(Math.random() * 6)
        let diceTwoVal = Math.floor(Math.random() * 6)
       
        document.querySelector('#dice-1').setAttribute('src',images[diceOneVal])
        document.querySelector('#dice-2').setAttribute('src',images[diceTwoVal])

        document.querySelector('p').textContent = 'YOUR ROLL IS ' + ((diceOneVal+1) + (diceTwoVal+1))
    }, 1000);
}

btn.addEventListener('click',roll)