
var modalEnter={};
// модальное окно для входа/региcтрации
function createModal (option) {
const  modal=document.createElement ("div");
modal.classList.add("modal")
modal.insertAdjacentHTML ("afterbegin",`
    <div class="modal-overlay" data-close="true">
        <div class="modal-window">
        <img src="assets/images/registration.png" alt="enter">
        <a href="enter.html">
            <button class="modal-registration">Регистрация</button>
        </a>
        <button class="modal-enter" onclick="enter()">Вход</button>
            <button class="cancel" data-close="true">Отмена</button>
        </div>
     </div>
`);
let addEnter=document.getElementsByTagName("body");
addEnter[0].appendChild(modal);
return modal
}

modalEnter.modal= function modal (option){
    let anime_speed=200;
    let modalEnt=createModal(option)
    let destroyed=false;
    let closing=false;
    const modalka={
        open (){
           if (destroyed) {
                return console.log ("modal is destroyd");
            }
            modalEnt.classList.add("open");

        },
        close(){
            closing=true;
            modalEnt.classList.remove("open");
            modalEnt.classList.add ("hide");
            setTimeout (()=>{
                modalEnt.classList.remove("hide")
                closing=false
            }, anime_speed);}
            // modalEnt.remove("")

    }
    const listener = event=> {
        if (event.target.dataset.close) {
            modalka.close();
        }
    }
    modalEnt.addEventListener("click", listener)
    return Object.assign (modalka, {
        destroy () {
            modalEnt.childNodes.removeChild(modalEnt);
            modalEnt.removeEventListener("click",listener);
            destroyed=true;
        }
    })
}
let myModal=modalEnter.modal();

function enter (){
    let modalWindow=document.getElementsByClassName("modal-window");
    modalWindow[0].remove();
    let buttonEnter=document.createElement("div");
    buttonEnter.classList.add("modal-window")
    buttonEnter.insertAdjacentHTML ("afterbegin",`
    <form class="entered" name="entered" onsubmit="return validate();">
    <label>Логин</label>
		<input type="text" name="login" size=25>
	<label>Пароль</label>
		<input type="password" name="pass1" size=25>
	<label>Повторите пароль</label>
        <input type="password" name="pass2" size=25>
    <input type="submit" id="ok" value="Вход">
    <input type="submit" id="cancel" data-close="true" value="Отмена" >
    </form>
    `);

let wind=document.getElementsByClassName("modal-overlay");
wind[0].appendChild(buttonEnter);
return buttonEnter
}
function individ () {
    let clearEnter=document.querySelector(".regist");
    clearEnter.remove();
    individual = document.createElement("form");
    individual.classList.add("individ");
    individual.id="individ";
    // individual.onsubmit=validateRegistration();
    // individ.addEventListener("submit", validateRegistration() )
    individual.insertAdjacentHTML("afterbegin", `
    <h3>Регистрационная форма</h3>
			<label for="userName">Имя</label>
				<input type="text" name="userName" id="userName">
			<label for="family">Фамилия</label>
				<input type="text" name="family" id="family" >
			<label for="login1">Логин</label>
				<input type="text" name="login1" id="login1" >
			<label for=pass1">Пароль</label>
				<input type="password" name="pass1" id="pass1">
			<label for="pass2">Повторите пароль</label>
				<input type="password" name="pass2" id="pass2">
			<label for="email">E-mail</label>
                <input type="email" name="mail" id="email">
            <label for="telephone">Телефон</label>
                <input type="tel" name="telephone" id="telephone">

			<label></label>
                <input  type="submit" id="submit" value="Зарегистрироваться">
                <input type="reset" id="cancel" data-close="true" value="Отмена">
    `)
//  console.log(individual)
    let indForm=document.getElementsByTagName("main");
    indForm[0].appendChild(individual);
setTimeout(forma(),0);
return individual
}
// individual.onload=function(){
let individUser=document.getElementsByClassName("individual");
console.log(individUser[0])
individUser[0].onclick=function(){
// individual.stopPropagation();

}
function firm () {
    let clearEnter=document.getElementsByClassName("regist");
    clearEnter[0].remove();
    let firm = document.createElement("form");
    firm.classList.add("firm");

    firm.insertAdjacentHTML("afterbegin", `
    <h3>Регистрационная форма</h3>
    <label>Комания</label>
        <input type="text" name="company" >
    <label>Адрес</label>
		<input type="text" name="adress" >
	<label>Регистрационный номер</label>
        <input type="text" name="registNum" >
            <label>Имя</label>
				<input type="text" name="ima" >
			<label>Фамилия</label>
				<input type="text" name="family"  >
			<label>Логин</label>
				<input type="text" name="login"  >
			<label>Пароль</label>
				<input type="password" name="pass1" >
			<label>Повторите пароль</label>
				<input type="password" name="pass2" >
			<label>E-mail</label>
                <input type="email" name="mail" >
            <label>Телефон</label>
                <input type="tel" name="mail" >

			<label></label>
                <input  type="submit" id="submit" value="Зарегистрироваться">
                <input type="submit" id="cancel" data-close="true" value="Отмена" >
    `)
    let firmForm=document.getElementsByTagName("main");
    firmForm[0].appendChild (firm);
return firm
}
// проверка формы вход в модальном окне
function validate (form){
    let errList=document.querySelectorAll ("span");
    for (let i= 0; i<errList.length;  i++) {
        errList[i].remove();
    }
    form=document.entered;
    let login=isFullText(form.login);
    let password1=isFullText(form.pass1);
    let password2=isFullText(form.pass2);
    return login&& password1&&password2;
}

function isFullText(fieldInp) {
    if (fieldInp.value.trim().length===0){
        fieldInp.className="alert";
        let item=document.createElement("span");
        item.innerHTML ="Поле обязательно для заполнения";
        fieldInp.parentNode.insertBefore(item,fieldInp.nextSibling);

        return false;
    }
    fieldInp.className="";
    return true;
}
// проверка формы регистрации  физического лица
// let individUser=document.querySelector(".individual")

// let forma=document.querySelector("#individ");
// console.log(forma)
// // forma.addEventListener(submit, validateRegistration());
// forma.onsubmit
// let indivForm=document.getElementById("individ");
// console.log(indivForm)
//  function validateRegistration(){
//     checkForm=document.getElementById("individ");
//     let err=document.querySelectorAll ("span");
//     for (let i= 0; i<err.length;  i++) {
//         err[i].remove();
//     }
//     // forma=document.individ;
//     // let userName=isFullText()
//     let userName= function isFullText (){
//         let un=document.getElementById("userName");
//         console.log(un)
//         if (un.value.trim().length===0){
//             un.className="alert";
//             let item=document.createElement("span");
//             item.innerHTML ="Поле обязательно для заполнения";
//             un.parentNode.insertBefore(item,un.nextSibling);

//             return false;
//         }

//     };
//     let login1=isFullText(forma.login1);
//     let password1=correctPassword(forma.pass1);
//     let password2=correctPassword(forma.pass2);
//     let family=isFullText(forma.family);
//     let mial=correctEmail(forma.email);


//     return userName&&login1&& password1&&password2&&family;
// }
//    function correctEmail (email) {
//        let regEx=/.+@.+\..+/i;

//        if (!email.match(regEx)) {
//         email.className="alert";
//         let item=document.createElement("span");
//         item.innerHTML ="Поле обязательно для заполнения";
//         email.parentNode.insertBefore(item,email.nextSibling);

//         return false;
//        }
//        email.className="";
//        return true;
//    }
//    function correctPassword (pass) {
//        let RegExp=/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
//        if (!pass.match(regExp)) {
//         pass.className="alert";
//         let item=document.createElement("span");
//         item.innerHTML ="Поле обязательно для заполнения";
//         pass.parentNode.insertBefore(item,pass.nextSibling);

//         return false;
//        }
//        pass.className="";
//        return true;

//     let password1=correctPassword(forma.pass1);
//     let password2=correctPassword(forma.pass2)
//        if  (password1!==password2) {
//         email.className="alert";
//         let item=document.createElement("span");
//         item.innerHTML ="Поле обязательно для заполнения";
//         email.parentNode.insertBefore(item,email.nextSibling);

//         return false;
//     //    }
//    }





// выпадающее меню
function menu (){
   let burger= document.getElementsByClassName("dropdown")
    burger[0].classList.toggle("show");
}

window.onclick=function(event) {
    if (!event.target.matches(".burger_menu")) {
        var dropdowns = document.getElementsByClassName("dropdown");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
    }
}
// }