const darkModeToggle = document.querySelector('#dark-mode-toggle');

darkModeToggle.addEventListener('click', () => 
{
    toggleColorScheme()
})

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
{
    toggleColorScheme()
}

function toggleColorScheme()
{
    document.body.classList.toggle("dark-mode");
}