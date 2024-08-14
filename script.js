const boundr = document.querySelector('.boundry')   
const networkICO = document.querySelector('#networkICON')
const adddetail = document.querySelector('.adddetails')
const addICO = document.querySelector('#addnewPerson')



// for add connection 
addICO.addEventListener('click',(e)=>{
    e.preventDefault()
    adddetail.style.display ='flex'
    boundr.style.display = 'none'
})
// to come back to connection (main page)
networkICO.addEventListener('click',(e)=>{
    e.preventDefault()
    adddetail.style.display ='none'
    boundr.style.display = 'flex'

})



document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('enterDetail');
    const addnewPersonButton = document.getElementById('addnewPerson');
    const addDetailsDiv = document.querySelector('.adddetails');
    const container = document.querySelector('.container');

    addnewPersonButton.addEventListener('click', () => {
        addDetailsDiv.style.display = 'flex';
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const linkedInProfile = document.getElementById('linkedInProfile').value;
        const imageInput = document.getElementById('upload_image');
        const imageUrl = URL.createObjectURL(imageInput.files[0]);

        const newDiv = document.createElement('div');
        newDiv.classList.add('boundry');

        newDiv.innerHTML = `
            <div class="userOverview">
                <div class="information" id="upperForImage">
                    <img class="imag" src="${imageUrl}" alt="">
                </div>
                <div class="information" id="lowerTextInfo">
                    <h1>${name}</h1>
                    <p>${description}</p>
                    <a href="${linkedInProfile}" target="_blank"><button class="connect">Connect</button></a>
                </div>
            </div>
        `;

        container.appendChild(newDiv);
        form.reset(); // this is the imp tag with this we can refresh the form ...once the form is submit the prev info from the form will be vanished ... ye tag nai dalege to nai hoga ...
        addDetailsDiv.style.display = 'none';
    });
});








// code with local storage
// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('enterDetail');
//     const addnewPersonButton = document.getElementById('addnewPerson');
//     const addDetailsDiv = document.querySelector('.adddetails');
//     const container = document.querySelector('.container');

//     // Load saved data from localStorage
//     loadSavedProfiles();

//     addnewPersonButton.addEventListener('click', () => {
//         addDetailsDiv.style.display = 'flex';
//     });

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const name = document.getElementById('name').value;
//         const description = document.getElementById('description').value;
//         const linkedInProfile = document.getElementById('linkedInProfile').value;
//         const imageInput = document.getElementById('upload_image');
//         const imageUrl = URL.createObjectURL(imageInput.files[0]);

//         const newProfile = {
//             name,
//             description,
//             linkedInProfile,
//             imageUrl
//         };

//         addProfileToContainer(newProfile);
//         saveProfile(newProfile);

//         form.reset();
//         addDetailsDiv.style.display = 'none';
//     });

//     function addProfileToContainer(profile) {
//         const newDiv = document.createElement('div');
//         newDiv.classList.add('boundry');

//         newDiv.innerHTML = `
//             <div class="userOverview">
//                 <div class="information" id="upperForImage">
//                     <img class="imag" src="${profile.imageUrl}" alt="">
//                 </div>
//                 <div class="information" id="lowerTextInfo">
//                     <h1>${profile.name}</h1>
//                     <p>${profile.description}</p>
//                     <a href="${profile.linkedInProfile}" target="_blank"><button class="connect">Connect</button></a>
//                 </div>
//             </div>
//         `;

//         container.appendChild(newDiv);
//     }

//     function saveProfile(profile) {
//         const profiles = JSON.parse(localStorage.getItem('profiles')) || [];
//         profiles.push(profile);
//         localStorage.setItem('profiles', JSON.stringify(profiles));
//     }

//     function loadSavedProfiles() {
//         const profiles = JSON.parse(localStorage.getItem('profiles')) || [];
//         profiles.forEach(profile => {
//             addProfileToContainer(profile);
//         });
//     }
// });












// my generated code with some issues


// const body = document.querySelector('body')
// const boundry = document.querySelector('.boundry')   
// const userOverview = document.querySelector('.userOverview')
// const information = document.querySelector('.information')
// const upperForImage = document.querySelector('#upperForImage')
// const lowerTextInfo = document.querySelector('#lowerTextInfo')    
// const addperson = document.querySelector('.add')
// const networkICON = document.querySelector('#networkICON')


// const adddetails = document.querySelector('.adddetails')
// const name = document.querySelector('#name')
// const description = document.querySelector('#description')
// const linkedInProfile = document.querySelector('#linkedInProfile')
// const upload_image = document.querySelector('#upload_image')
// const submit = document.querySelector('#submit')
// const addICON = document.querySelector('#addnewPerson')


// console.log('je');


// for add connection 
// addICON.addEventListener('click',(e)=>{
//     e.preventDefault()
//     adddetails.style.display ='flex'
//     boundry.style.display = 'none'
// })
// // to come back to connection (main page)
// networkICON.addEventListener('click',(e)=>{
//     e.preventDefault()
//     adddetails.style.display ='none'
//     boundry.style.display = 'flex'

// })


// // to submit the info and directly display it on screen
// submit.addEventListener('click',(e)=>{
//     e.preventDefault()

//     // to create new elements and div
//     const newcontainer = document.createElement('div')
//     newcontainer.className = 'container'
//     const newboundry = document.createElement('div')
//     newboundry.className = 'boundry'   
//     const newuserOverview = document.createElement('div')
//     newuserOverview.className = 'userOverview'
//     const newinformation = document.createElement('div')
//     newinformation.className = 'information'
//     const newupperForImage = document.createElement('div')
//     newupperForImage.id = 'upperForImage'
//     const newlowerTextInfo = document.createElement('div')
//     newlowerTextInfo.id = 'lowerTextInfo'  




//     // below command is to remove form once summitted
//     adddetails.style.display ='none'
//     boundry.style.display = 'flex'



//     newlowerTextInfo.innerHTML =  `
//                     <h1>${name.value}</h1>
//                     <p>${description.value}</p>
//                     <a href="${linkedInProfile.value}" target="_blank"><button class="connect">Connect</button></a>
//     `

//     const imag = document.createElement('img')
//     imag.className = 'imag'
//     imag.src = URL.createObjectURL(upload_image.files[0])

//     newupperForImage.appendChild(imag)
//     newinformation.appendChild(newupperForImage)
//     newinformation.appendChild(newlowerTextInfo)
//     newuserOverview.appendChild(newinformation)
//     newboundry.appendChild(newuserOverview)
//     newcontainer.appendChild(newboundry)
//     body.appendChild(newcontainer)
// })





