let courseDetails = document.querySelectorAll('.course .courseDetails');
courseDetails = [...courseDetails]

console.log(courseDetails)

let actives = []

function toggle(e) {
    course = e.target
    
    if(course.classList.contains('courseTitle') || course.classList.contains('moreLess')){
        course = course.parentNode
    }
 
    console.log(course)
    
    moreLess = e.target.children[0]
        
    if(!course.classList.contains('active')){
        moreLess.innerHTML = '-'
        console.log(actives.length)
        if(actives.length > 0){
            console.log(actives[0])
            console.log('insidde if')
            moreLess1 = actives[0].children[0]
            actives[0].classList.toggle('active')
            actives[0].style.backgroundColor = "rgb(3, 65, 136)"
            moreLess1.innerHTML = '+'
            console.log(actives[0])
            actives.pop()            
        }
        course.classList.toggle('active')
        course.style.backgroundColor = "rgb(0, 95, 204)"
        actives.push(course)
    }else{
        moreLess.innerHTML = '+'
        actives[0].style.backgroundColor = "rgb(3, 65, 136)"
        console.log(course)
        course.classList.toggle('active')
        actives.pop()            
        console.log(course)
        // actives.pop(actives[0])
    }
}


courseDetails.forEach(courseDetail => {
    courseDetail.addEventListener('click', toggle)
    
})