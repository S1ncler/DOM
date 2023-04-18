console.log("hello world");
function sayHi() {
    alert("Hola");
}
function login(user = "", pass = "") {
    let db = [
        {
            email: "mcocuy@mail.com",
            password: "compaq1",
            usermane: "striker",
            active: true
        },
        {
            email: "CRocuy@mail.com",
            password: "compaq2",
            usermane: "carosReact",
            active: true
        },
        {
            email: "DB@mail.com",
            password: "compaq3",
            usermane: "danielaButstrap",
            active: false
        }
    ]
    for (let i of db) {
        if (user === i.email || user == i.usermane && pass === i.password) {
            if (i.active) return alert("El usuario inicio sesion correctamente");
            else return alert("El usuario esta inactivo");
        }
    }
    return alert("Usuario o contraseña incorrecta");
}
function getlogin() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;
    if (user === "" || user === null || user === undefined) return alert("Por favor escriba un nombre de usuario");
    if (pass === "" || pass === null || pass === undefined) return alert("Por favor escriba una contraseña");
    login(user, pass);
}



