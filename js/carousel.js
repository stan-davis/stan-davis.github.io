let currentIndex = 0;
let slides = document.getElementsByClassName("slide");
let buttons = document.getElementsByClassName("btn");

window.onload = function()
{
    runSlides();
}

function runSlides()
{
    currentIndex++;
    if(currentIndex >= slides.length)
        currentIndex = 0;

    showSlide();
    setTimeout(runSlides, 10000);
}

function showSlide()
{
    for(let i = 0; i < slides.length; i++)
    {
        let selected = i == currentIndex;

        slides[i].style.display = selected ? "block" : "none";
        buttons[i].className = selected ? "btn active" : "btn";
    }
}

function setSlide(n)
{
    currentIndex = n;
    showSlide();
}