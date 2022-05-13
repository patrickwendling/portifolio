let theme = localStorage.getItem('theme');

if (theme == null) {
    setTheme('light');
} else {
    setTheme(theme);
}

let themeDot = document.getElementsByClassName('theme-dot');

for (var i = 0; themeDot.length > i; i++) {
    themeDot[i].addEventListener('click', function() {
        let mode = this.dataset.mode;
        setTheme(mode);
    })
}

function setTheme(mode) {
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'default.css';
    }

    if(mode == 'blue'){
        document.getElementById('theme-style').href = 'blue.css';
    }

    if(mode == 'green'){
        document.getElementById('theme-style').href = 'green.css';
    }

    if(mode == 'purple'){
        document.getElementById('theme-style').href = 'purple.css';
    }

    localStorage.setItem('theme', mode);
}

// =====================================================================

const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header');

function toggleSkills(){
    let itemClass = this.parentNode.className;

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close';
    }

    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open';
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
})