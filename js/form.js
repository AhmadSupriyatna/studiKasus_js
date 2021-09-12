function buat_login(){
    var elem = document.getElementById("x");
    elem.parentElement.removeChild(elem);
    var p = document.createElement("p")
    p.className = "tulisan_login";
    p.innerHTML = "Silahkan Login";
    var element = document.getElementsByTagName("div")[0];
    element.appendChild(p);
    var form = document.createElement("FORM");
    element.appendChild(form);
    var label = document.createElement("label");
    label.innerHTML = "Username";
    form.appendChild(label);
    var user = document.createElement("input");
    user.type = "text";
    user.name = "username";
    user.className="form_login"
    form.appendChild(user);
    var label = document.createElement("label");
    label.innerHTML = "Password";
    form.appendChild(label);
    var password = document.createElement("input");
    password.type = "password";
    password.name = "password";
    password.className="form_login"
    form.appendChild(password);
    var tombol = document.createElement("input");
    tombol.type = "submit";
    
    tombol.className="tombol_login"
    form.appendChild(tombol);
}