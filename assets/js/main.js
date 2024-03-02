let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}
// hide menu and search 
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
}
//header 
let header = document.querySelector('header');
window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
})

//vo hieu hoa code
document.addEventListener("keydown", function (event){
    if (event.ctrlKey){
       event.preventDefault();
    }
    if(event.keyCode == 123){
       event.preventDefault();
    }
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Chặn hành động mặc định khi chuột phải được nhấp
    alert('Xin lỗi, chức năng này đã bị chặn!');
});