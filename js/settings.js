

//Im Sorry for having a lot of js in same page but i realized to
// late that this would be a bigger project. i was just having fun with a little project


function changeInfo(id){
    
    
    var modal = document.getElementById('modal-info')
    var name = document.getElementById('change_name')
    var password = document.getElementById('change_password')
    var email = document.getElementById('change_email')
    var phone = document.getElementById('change_phone')
    
    
    if(modal.classList.contains('inactive')){
        
        modal.classList.remove('inactive')
        modal.classList.add('active')
        
    } else {
        modal.classList.remove('active')
        modal.classList.add('inactive');
       
    }


    if(modal.innerHTML==""){
        
        const divName = document.createElement('div')
        const label = document.createElement('label')
        const input = document.createElement('input')
        const button = document.createElement('button')
        
                 divName.append(label)
                 divName.append(input)
                 modal.append(divName)
                 modal.append(button)
        
        
        
        switch (id) {
            case "change_name": 

                 divName.classList.add('change-name', 'change')
                 label.innerText = "Change Name:"
                 label.setAttribute('for', 'name')
                 input.type = "text"
                 input.id = "name"
                 input.placeholder="New Name"
                 button.classList.add('confirm-button')
                 button.id = "confirm-info"
                 button.innerText = "Confirm"
                 
            break;
            case "change_password":
                 divName.classList.add('change-password', 'change')
                 label.innerText = "Change Password:"
                 label.setAttribute('for', 'password')
                 input.type = "text"
                 input.id = "password"
                 input.placeholder="New Password"
                 button.classList.add('confirm-button')
                 button.id = "confirm-info"
                 button.innerText = "Confirm"
                
            break;
            case "change_email":
                 divName.classList.add('change-email', 'change')
                 label.innerText = "Change Email:"
                 label.setAttribute('for', 'email')
                 input.type = "text"
                 input.id = "email"
                 input.placeholder="New Email"
                 button.classList.add('confirm-button')
                 button.id = "confirm-info"
                 button.innerText = "Confirm"

            break;
            case "change_phone":
                 divName.classList.add('change-phone', 'change')
                 label.innerText = "Change Phone:"
                 label.setAttribute('for', 'phone')
                 input.type = "text"
                 input.id = "phone"
                 input.placeholder="New Phone"
                 button.classList.add('confirm-button')
                 button.id = "confirm-info"
                 button.innerText = "Confirm"

            break;
        }

    
    
    }
    if(modal.classList.contains('inactive')){
        modal.innerHTML=""
    }
   
    
    
}




