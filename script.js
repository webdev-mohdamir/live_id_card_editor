// User inputs
let input_name = document.getElementById("username"),
input_occupation = document.getElementById("userOccupation"),
input_experience = document.getElementById("userExperience"),
input_experties = document.getElementById("userExperties"),
input_userImg = document.getElementById("userImg");


// Card Details
let user_name = document.querySelector(".user_name"),
user_occupation = document.querySelector(".occupation"),
user_experience = document.querySelector(".experience"),
user_experties = document.querySelector(".experties"),
user_avatarImg = document.querySelector(".avatarImg");


// Calling functions
add_event(input_name, user_name);
add_event(input_occupation, user_occupation);
add_event(input_experience, user_experience);
add_event(input_experties, user_experties);


// adding event listener on every input field
function add_event(target, event_target){
    target.addEventListener("keyup", ()=>{
        change_state(event_target, target.value);
        // console.log(target, event_target);
    });
}

// Change in state to change the card content
// User Info
function change_state(target, value){
    if(value.trim() !== ''){
        target.innerHTML = value;
    }else{
        target.innerHTML= target.dataset.text;
    }
}

// Avatar IMage
input_userImg.addEventListener("change", (e)=>{
    console.log(e.target.files[0]);
    user_avatarImg.src =  URL.createObjectURL(e.target.files[0]);;
})

// Print the final card
const button = document.querySelector('#print');

button.addEventListener('click', ()=>{
    html2canvas(document.querySelector("#id_card"), {backgroundColor:"#fff", useCORS: true, allowTaint: true, logging: true}).then(canvas => {
    // document.body.appendChild(canvas);
    inputURL = canvas.toDataURL('image/jpeg', 1);
    
    
            var link = document.createElement('a');
            link.download = 'filename.png';
            link.href = inputURL;
            link.click();
    });
});