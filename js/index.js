// Your code goes here

//1/mouseover - mouseleave
//mouseover
const navMouseOver = document.querySelectorAll('a')
navMouseOver[0].addEventListener('mouseover', (event) => {
    navMouseOver[0].style.color = "red";
});
navMouseOver[1].addEventListener('mouseover', (event) => {
    navMouseOver[1].style.color = "red";
});
navMouseOver[2].addEventListener('mouseover', (event) => {
    navMouseOver[2].style.color = "red";
});
navMouseOver[3].addEventListener('mouseover', (event) => {
    navMouseOver[3].style.color = "red";
});
//mouseleave
const navMouseLeave = document.querySelectorAll('a')
navMouseLeave[0].addEventListener('mouseleave', (event) => {
    navMouseLeave[0].style.color = "black";
});
navMouseLeave[1].addEventListener('mouseleave', (event) => {
    navMouseLeave[1].style.color = "black";
});
navMouseLeave[2].addEventListener('mouseleave', (event) => {
    navMouseLeave[2].style.color = "black";
});
navMouseLeave[3].addEventListener('mouseleave', (event) => {
    navMouseLeave[3].style.color = "black";
});

//2/keydown - keyup
//keydown
const enterKeyDown = document.querySelector('body')
enterKeyDown.addEventListener('keydown', (event) => {
    if (event.keyCode == 13)
    document.body.style.background = "lightgrey";
});
//keyup
enterKeyDown.addEventListener('keyup', (event) => {
    if (event.keyCode == 13)
    document.body.style.background = "white";
});

//3/wheel - click
//wheel
const bodyMouseWheel = document.querySelector('body')
bodyMouseWheel.addEventListener('wheel', (event) => {
    document.body.style.background = "yellow";
});
//click
bodyMouseWheel.addEventListener('click', (event) => {
    document.body.style.background = "white";
});

//4/drag - dragleave
//drag
const imageDrag = document.querySelector('.intro img')
imageDrag.addEventListener('drag', (event) => {
    event.target.style.opacity =.1;
});
//dragleave
imageDrag.addEventListener('dragleave', (event) => {
    event.target.style.opacity = 100;
});

//5/load
const pageLoaded = document.querySelector('body')
window.addEventListener('load', (event) => {
    alert('Page is fully loaded');
})

//6/mousemove - mouseleave
//mousemove
const busLogoMouseMove = document.querySelector('h1')
busLogoMouseMove.addEventListener('mousemove', (event) => {
    busLogoMouseMove.style.fontSize = "8rem";
    busLogoMouseMove.style.color = "red";
})
//mouseleave
busLogoMouseMove.addEventListener('mouseleave', (event) => {
    busLogoMouseMove.style.fontSize = "5rem";
    busLogoMouseMove.style.color = "black";
})

//7/ resize

const footerBackgroundColor = document.querySelector('footer')
window.addEventListener('resize', (event) => {
    footerBackgroundColor.style.background = "red";
})

const footerParagraphColor = document.querySelector('footer p')
window.addEventListener('resize', (event) => {
    footerParagraphColor.style.color = "white";
})

//8/scroll - click
//schroll - click for h2
const h2FontColors = document.querySelectorAll('h2')
window.addEventListener('scroll', (event) => {
    h2FontColors[0].style.color = "red"
    h2FontColors[1].style.color = "red"
    h2FontColors[2].style.color = "red"
    h2FontColors[3].style.color = "red"
})

const h2FontColorsBack = document.querySelectorAll('h2')
window.addEventListener('click', (event) => {
    h2FontColorsBack[0].style.color = "black"
    h2FontColorsBack[1].style.color = "black"
    h2FontColorsBack[2].style.color = "black"
    h2FontColorsBack[3].style.color = "black"
})
//scroll - click for main-navigation
const navBarBackground = document.querySelector('.main-navigation')
window.addEventListener('scroll', (event) => {
    navBarBackground.style.background = "red"
})

const navBarBackgroundBack = document.querySelector('.main-navigation')
window.addEventListener('click', (event) => {
    navBarBackgroundBack.style.background = "white"
})

const navBarLogocolor = document.querySelector('.main-navigation')
window.addEventListener('scroll', (event) => {
    navBarLogocolor.style.color = "white"
})

const navBarLogocolorBack = document.querySelector('.main-navigation')
window.addEventListener('click', (event) => {
    navBarLogocolorBack.style.color = "black"
})
//scroll - click for nav links
const navBarLinksColor = document.querySelectorAll('a')
window.addEventListener('scroll', (event) => {
    navBarLinksColor[0].style.color = "white"
    navBarLinksColor[1].style.color = "white"
    navBarLinksColor[2].style.color = "white"
    navBarLinksColor[3].style.color = "white"
})

const navBarLinksColorBack = document.querySelectorAll('a')
window.addEventListener('click', (event) => {
    navBarLinksColorBack[0].style.color = "black"
    navBarLinksColorBack[1].style.color = "black"
    navBarLinksColorBack[2].style.color = "black"
    navBarLinksColorBack[3].style.color = "black"
})

//9/copy
const paragraphsCopyWarning = document.querySelectorAll('p')
paragraphsCopyWarning[0].addEventListener('copy', (event) => {
    alert(`This paragraph has a copyright. You can not copy it!`)
})
paragraphsCopyWarning[1].addEventListener('copy', (event) => {
    alert(`This paragraph has a copyright. You can not copy it!`)
})
paragraphsCopyWarning[2].addEventListener('copy', (event) => {
    alert(`This paragraph has a copyright. You can not copy it!`)
})
paragraphsCopyWarning[3].addEventListener('copy', (event) => {
    alert(`This paragraph has a copyright. You can not copy it!`)
})
paragraphsCopyWarning[4].addEventListener('copy', (event) => {
    alert(`This paragraph has a copyright. You can not copy it!`)
})
paragraphsCopyWarning[5].addEventListener('copy', (event) => {
    alert(`This paragraph has a copyright. You can not copy it!`)
})
paragraphsCopyWarning[6].addEventListener('copy', (event) => {
    alert(`This paragraph has a copyright. You can not copy it!`)
})
paragraphsCopyWarning[7].addEventListener('copy', (event) => {
    alert(`This paragraph has a copyright. You can not copy it!`)
})
paragraphsCopyWarning[8].addEventListener('copy', (event) => {
    alert(`This paragraph has a copyright. You can not copy it!`)
})
paragraphsCopyWarning[9].addEventListener('copy', (event) => {
    alert(`This paragraph has a copyright. You can not copy it!`)
})


//10/dblclick
const navLinksError = document.querySelectorAll('a')
navLinksError[0].addEventListener('dblclick', (event) => {
    alert(`We appologize, we are currently having some technical difficulties and working to resolve it ASAP!`)
})
navLinksError[1].addEventListener('dblclick', (event) => {
    alert(`We appologize, we are currently having some technical difficulties and working to resolve it ASAP!`)
})
navLinksError[2].addEventListener('dblclick', (event) => {
    alert(`We appologize, we are currently having some technical difficulties and working to resolve it ASAP!`)
})
navLinksError[3].addEventListener('dblclick', (event) => {
    alert(`We appologize, we are currently having some technical difficulties and working to resolve it ASAP!`)
})
