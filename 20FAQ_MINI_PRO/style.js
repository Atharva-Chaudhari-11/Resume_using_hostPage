const accordians = document.querySelectorAll('.accordian');

accordians.forEach((accordian) =>{
    // u have to use accordian because u already store whole body on it.so no need to use document
    const icon = accordian.querySelector('.icon');
    const ans = accordian.querySelector('.answer')
    
    accordian.addEventListener('click',()=>{
        if(icon.classList.contains('active')){
            icon.classList.remove('active');
            ans.style.maxHeight = null;
        }else{
            icon.classList.add('active')
            ans.style.maxHeight = ans.scrollHeight +'px';
        }
    })
    
})