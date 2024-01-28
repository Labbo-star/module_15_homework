const btn = document.querySelector('.btn_screen')

btn.addEventListener('click', () => {
    let screenHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight);
    let screenWidth = Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth);
    alert(`Высота экрана: ${screenHeight} ` + `Ширина экрана: ${screenWidth}`);
})