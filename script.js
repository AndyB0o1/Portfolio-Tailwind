fetch('portfolio.json').then(function (res) {
    return res.json()
}).then(function (data) {
    data.project.forEach(function (project){
        console.log(project)
        const projectType = document.querySelector('.project')
        projectType.innerHTML += `
    <div class="specificProject max-w-xl bg-gradient-to-b from-lime-100 to-lime-300 opacity-80 border solid border white rounded-lg p-3">
            <h2 class="p-3 text-amber-700 text-2xl">${project.name}</h2>
        <div>
            <img src="${project.img}" alt="A ${project.name}" class="projectImage" />
        </div>
        <div class="projectText">
            <p class="p-3 text-amber-700 text-2xl">Description</p>
            <p class="p-3 text-amber-700 text-xl">${project.desc}
            <p p-3><a class="p-3 text-amber-700 text-xl" href="${project.url}" target="_blank">See it on github</a></p>
        </div>
    </div>`
    })
    })

    const dropdown = document.querySelector('.contact')
    const menu = document.querySelector('.dropdownContent')

    dropdown.addEventListener('mouseover', function() {
        menu.classList.toggle('hidden')
    })

