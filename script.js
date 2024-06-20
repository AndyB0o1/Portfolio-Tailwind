fetch('portfolio.json').then(function (res) {
    return res.json()
}).then(function (data) {
    data.project.forEach(function (project){
        console.log(project)
        const projectType = document.querySelector('.project')
        projectType.innerHTML += `
    <div class="specificProject basis-1/3 bg-[#90AEAD] max-w-2xl border solid border white rounded-lg p-3">
            <h2 class="p-3 font-bold text-cyan-900 text-3xl">${project.name}</h2>
        <div>
            <img src="${project.img}" alt="A ${project.name}" class="projectImage blur-sm hover:blur-none" />
        </div>
        <div class="projectText">
            <p class="p-3 font-bold text-cyan-900 text-2xl">Description</p>
            <p class="p-3 text-xl">${project.desc}
            <p p-3><a class="p-3 text-orange-100 text-xl hover:bg-lime-300 hover:text-cyan-900 rounded-lg p-3" href="${project.url}" target="_blank">See it on github</a></p>
        </div>
    </div>`
    })
    })

    const dropdown = document.querySelector('.contact')
    const menu = document.querySelector('.dropdownContent')
    const dropdownList = document.querySelector('.dropdown')

    dropdown.addEventListener('mouseover', function() {
        menu.classList.remove('hidden')
    })

    dropdownList.addEventListener('mouseleave', function(){
        menu.classList.add('hidden')
    })


