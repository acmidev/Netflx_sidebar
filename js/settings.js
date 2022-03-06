



function saveLocal(){
     var nameHolder = document.getElementById('info-name')
     var passwordHolder = document.getElementById('info-password')
     var emailHolder = document.getElementById('info-email')
     var phoneHolder = document.getElementById('info-phone')
     

    
     


    //get local storage or create a new one with default values
    
    var user
    if(localStorage.getItem('user') === null){
        user = { "name": "Tim Berners", "password": "*******", "email": "tim@hireme.js", "phone": 12031989}
       
        localStorage.setItem('user', JSON.stringify(user))
    }else {
        var retrievedUSer = JSON.parse(localStorage.getItem('user'))




        //obtener data del input y pasarla ordenadamewntr
        var infoInput = document.querySelector('input')
        
        if(infoInput.value == ""){
            infoInput.placeholder = "Error, Write here"
            const button = document.getElementById('confirm-info')
            button.classList.add('button-error')
    
        }else {
            const button = document.getElementById('confirm-info')
            button.classList.remove('button-error')
            switch(infoInput.id){
                case "name":
                    const name = infoInput.value
                    user = { "name": retrievedUSer.name, "password": retrievedUSer.password, "email": retrievedUSer.email, "phone": retrievedUSer.phone}
                    user = {...user, name}
                    
                    localStorage.setItem('user', JSON.stringify(user))
                    nameHolder.innerText = retrievedUSer.name
                    

        
                    ;
        
                break;
                case "password":
                    const password = infoInput.value
                    user = { "name": retrievedUSer.name, "password": retrievedUSer.password, "email": retrievedUSer.email, "phone": retrievedUSer.phone}
                    user = {...user, password}
                    console.log(user)
                    console.log(user.name)
                    localStorage.setItem('user', JSON.stringify(user))
                    passwordHolder.innerText = retrievedUSer.password

        
                    ;
        
                break;
                case "email":
                    const email = infoInput.value
                    user = { "name": retrievedUSer.name, "password": retrievedUSer.password, "email": retrievedUSer.email, "phone": retrievedUSer.phone}
                    user = {...user, email}
                    console.log(user)
                    console.log(user.name)
                    localStorage.setItem('user', JSON.stringify(user))
                    emailHolder.innerText = retrievedUSer.email

        
                    ;
        
                break;
                case "phone":
                    const phone = infoInput.value
                    user = { "name": retrievedUSer.name, "password": retrievedUSer.password, "email": retrievedUSer.email, "phone": retrievedUSer.phone}
                    user = {...user, phone}
                    console.log(user)
                    console.log(user.name)
                    localStorage.setItem('user', JSON.stringify(user))
                    phoneHolder.innerText = retrievedUSer.phone 

                    
        
                    ;
        
                break;
            }}
        
        
        
        
        var retrievedUSer = JSON.parse(localStorage.getItem('user'))
        const profileName = document.getElementById('sidebar-name')
                    
       
        
        
        nameHolder.innerText = retrievedUSer.name
        passwordHolder.innerText = retrievedUSer.password
        emailHolder.innerText = retrievedUSer.email
        phoneHolder.innerText = retrievedUSer.phone
        profileName.innerText = retrievedUSer.name
    
     

   

    }
    
    
    
   
}
   
    

    
    

function closeModal(){
    var modal = document.getElementById('modal-info')

        modal.classList.remove('active')
        modal.classList.add('inactive')
        if(modal.classList.contains('inactive')){
            modal.innerHTML=""
        }
}



function changeInfo(id){
    

    
    
    
    
    var modal = document.getElementById('modal-info')
    
    
    
    if(modal.classList.contains('inactive')){
        
        modal.classList.remove('inactive')
        modal.classList.add('active')
        
        
    } else {
        modal.classList.remove('active')
        modal.classList.add('inactive');
       
    }

    //Create elements inside modal
    if(modal.innerHTML==""){
        
        const divName = document.createElement('div')
        const label = document.createElement('label')
        const input = document.createElement('input')
        const button = document.createElement('button')
        const close = document.createElement('i')
        
        

                 divName.append(label)
                 divName.append(input)
                 divName.append(close)
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
                 close.classList.add('settings-close-button', 'fa-solid','fa-xmark')
                 close.setAttribute('id','close-button')
                 
                 
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
                 close.classList.add('settings-close-button', 'fa-solid','fa-xmark')
                 close.setAttribute('id','close-button')
                
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
                 close.classList.add('settings-close-button', 'fa-solid','fa-xmark')
                 close.setAttribute('id','close-button')

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
                 close.classList.add('settings-close-button', 'fa-solid','fa-xmark')
                 close.setAttribute('id','close-button')

            break;
        }

        
        

        var closeButton = document.getElementById('close-button')
        var confirm = document.getElementById('confirm-info')
        confirm.addEventListener('click', saveLocal)
        closeButton.addEventListener('click', closeModal)

    
    
    }
    //Close Modal and delete every element on it
    if(modal.classList.contains('inactive')){
        modal.innerHTML=""
    }
    
   
   
    
}



function showData(){
        var retrievedUSer = JSON.parse(localStorage.getItem('user'))
        console.log(retrievedUSer)
        
        passwordHolder = document.getElementById('info-password')
        emailHolder = document.getElementById('info-email')
        phoneHolder = document.getElementById('info-phone')
    

   
        

   
}

     




