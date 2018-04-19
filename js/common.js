window.addEventListener('DOMContentLoaded', function() {

let overlay = document.getElementsByClassName('overlay')[0],
    main = document.getElementsByClassName('main')[0],
    popup = document.getElementsByClassName('popup')[0],
    popup_btn = document.getElementById('popup-btn'),
    custom_overlay = document.getElementsByClassName('custom')[0],
    custom_info = document.getElementsByClassName('custom-info')[0],
    custom_char = document.getElementsByClassName('custom-char')[0],
    custom_style = document.getElementsByClassName('custom-style')[0];


    popup_btn.addEventListener('click', function() {
    	overlay.style.display = 'none';
    	main.style.display = 'none';

    	custom_overlay.style.display = 'flex';
    	custom_info.style.display = 'block';
    	custom_char.style.display = 'block';
    	custom_style.style.display = 'block';



        let name = document.getElementById('name'),
            age = document.getElementById('age'),
            bio = document.getElementById('bio'),
            female = document.getElementById('female'),
            textBio = document.getElementById('bio');
                  if (window.performance) {
                   name.value = '';
                   age.value = '';
                   bio.value = '';
                   female.checked = true;
                   textBio = '';

                    }


    });

  
// Customization

let ready = document.getElementById('ready'),

    name = document.getElementById('name'),
    age = document.getElementById('age'),
    //sexRadio = document.getElementsByClassName('radio')[0],
    male = document.getElementById('male'),
    female = document.getElementById('female'),
    select = document.getElementById('select'),
    textBio = document.getElementById('bio'),

    main_cards = document.getElementsByClassName('main-cards-item-active')[0],
    nameCards = document.getElementsByClassName('name')[0],
    ageCards = document.getElementsByClassName('age')[0],
    sex = document.getElementsByClassName('sex')[0],
    views = document.getElementsByClassName('views')[0],
    bio = document.getElementsByClassName('bio')[0];
        
        ready.addEventListener('click', function() {
            custom_overlay.style.display = 'none';
            custom_info.style.display = 'none';
            custom_char.style.display = 'none';
            custom_style.style.display = 'none';
            main.style.display = 'block';


            nameCards.textContent = name.value;
            ageCards.textContent = age.value;
            
                if (male.checked) {
                    sex.textContent = male.value;
                } else {
                    sex.textContent = female.value;
                }

            views.textContent = select.value;
            bio.textContent = textBio.value;


        });

});