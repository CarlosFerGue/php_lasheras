function buscar() {
    const input1 = document.getElementById("b_texto").value;
    const input2 = document.getElementById("b_telefono").value;
    console.log(input1);
    console.log(input2);
    if (input1 && !input2) {
        // Caso 1: Solo input1 tiene texto
        buscarUsuarios();
        console.log("Solo input1 tiene texto.");
    } else if (!input1 && input2) {
        buscarTelefono();
        // Caso 2: Solo input2 tiene texto
        console.log("Solo input2 tiene texto.");
    } else if (input1 && input2) {
        // Caso 3: Ambos inputs tienen texto
        buscarTelefonoyUsuario();
        console.log("Ambos inputs tienen texto.");
    } else {
        buscarUsuarios();
        // Caso 4: Ningún input tiene texto
        console.log("Ninguno de los inputs tiene texto.");
    }
}


function buscarTelefonoyUsuario() {
    let opciones = { method: "GET" };
    let parametros = "controlador=Usuarios&metodo=buscarTelefonoyUsuario";
    parametros += "&" + new URLSearchParams(new FormData(document.getElementById("formularioBuscarTelefono"))).toString();
    parametros += "&" + new URLSearchParams(new FormData(document.getElementById("formularioBuscar"))).toString();

    fetch("C_Ajax.php?" + parametros, opciones)
        .then(res => {
            if (res.ok) {
                console.log('respuesta ok Telefono y Usuario');
                return res.text();
            }
        })
        .then(vista => {
            document.getElementById("CapaResultadoBusqueda").innerHTML = vista;
        })
        .catch(err => {
            console.log("Error al realizar la petición", err.message);
        });
}


function buscarUsuarios() {
    let opciones = { method: "GET" };
    let parametros = "controlador=Usuarios&metodo=buscarUsuarios";
    parametros += "&" + new URLSearchParams(new FormData(document.getElementById("formularioBuscar"))).toString();

    fetch("C_Ajax.php?" + parametros, opciones)
        .then(res => {
            if (res.ok) {
                console.log('respuesta ok Usuarios');
                return res.text();
            }
        })
        .then(vista => {
            document.getElementById("CapaResultadoBusqueda").innerHTML = vista;
        })
        .catch(err => {
            console.log("Error al realizar la petición", err.message);
        });
}

function buscarTelefono() {
    let opciones = { method: "GET" };
    let parametros = "controlador=Usuarios&metodo=buscarTelefono";
    parametros += "&" + new URLSearchParams(new FormData(document.getElementById("formularioBuscarTelefono"))).toString();

    fetch("C_Ajax.php?" + parametros, opciones)
        .then(res => {
            if (res.ok) {
                console.log('respuesta ok Telefono');
                return res.text();
            }
        })
        .then(vista => {
            document.getElementById("CapaResultadoBusqueda").innerHTML = vista;
        })
        .catch(err => {
            console.log("Error al realizar la petición", err.message);
        });
}

function insertarUsuario() {
    let opciones = { method: "GET" };
    let parametros = "controlador=Usuarios&metodo=insertarUsuario";
    parametros += "&" + new URLSearchParams(new FormData(document.getElementById("formularioInsertar"))).toString();

    fetch("C_Ajax.php?" + parametros, opciones)
        .then(res => {
            if (res.ok) {
                console.log('respuesta ok Insertar');
                return res.text();
            }
        })
        .then(vista => {
            document.getElementById("CapaResultadoBusqueda").innerHTML = vista;
        })
        .catch(err => {
            console.log("Error al realizar la petición", err.message);
        });
}

function cambiarSexo(sexo) {
    document.getElementById("b_sexo").value = sexo;
    console.log(sexo);
}


function editarUsuario() {
    let opciones = { method: "GET" };
    let parametros = "controlador=Usuarios&metodo=editarUsuario";
    parametros += "&" + new URLSearchParams(new FormData(document.getElementById("formularioActualizar"))).toString();

    fetch("C_Ajax.php?" + parametros, opciones)
        .then(res => {
            if (res.ok) {
                console.log('respuesta ok Editar');
                return res.text();
            }
        })
        .then(vista => {
            document.getElementById("CapaResultadoBusqueda").innerHTML = vista;
        })
        .catch(err => {
            console.log("Error al realizar la petición", err.message);
        });
}

function cambiarSexo(sexo) {
    document.getElementById("b_sexo").value = sexo;
    console.log(sexo);
}


function mostrarEditar(idUsuario, nombre, apellido1, apellido2, sexo, mail, movil, activo) {
    // Verificar si el div popup ya existe
    var popupExistente = document.getElementById('popup');

    // Si existe, eliminarlo antes de crear uno nuevo
    if (popupExistente) {
        popupExistente.remove();
    }

    // Crear el div emergente
    var popup = document.createElement('div');
    popup.id = 'popup';
    // popup.innerHTML = `
    //         <h2>ID Usuario: ${idUsuario}</h2>
    //         <p>Nombre: ${nombre}</p>
    //         <p>Apellido 1: ${apellido1}</p>
    //         <p>Apellido 2: ${apellido2}</p>
    //         <p>Sexo: ${sexo}</p>
    //         <p>Email: ${mail}</p>
    //         <p>Móvil: ${movil}</p>
    //         <p>Activo: ${activo}</p>
    //         <button onclick="cerrarPopup()">Cerrar</button>
    //     `;
    //<h2 id="b_id" name="b_id">ID Usuario: ${idUsuario}</h2>
    popup.innerHTML = `

    <form id="formularioActualizar" name="formularioActualizar" onkeydown="return event.key != 'Enter';">
        <div id="hide"><label for="b_id">ID Usuario: </label>
        <input  id="b_id" name="b_id" value="${idUsuario}"></div>

        <h2>El id: ${idUsuario}</h2>

        <label for="b_nombre">Nombre del usuario:</label>
        <input type="text" id="b_nombre" name="b_nombre" value="${nombre}">
        
        <label for="b_apellido1">Apellido 1:</label>
        <input type="text" id="b_apellido1" name="b_apellido1" value="${apellido1}">
        
        <label for="b_apellido2">Apellido 2:</label>
        <input type="text" id="b_apellido2" name="b_apellido2" value="${apellido2}">
        
        <label for="b_sexo">Sexo:</label>
        <div id="sexo" class="sexo">
            <button type="button" id="b_sexo_hombre" name="b_sexo" onclick="cambiarSexo('H')" ${sexo === 'H' ? 'disabled' : ''}>Hombre</button>
            <button type="button" id="b_sexo_mujer" name="b_sexo" onclick="cambiarSexo('M')" ${sexo === 'M' ? 'disabled' : ''}>Mujer</button>
        </div>

        <label for="b_email">Email:</label>
        <input type="text" id="b_email" name="b_email" value="${mail}">
        
        <label for="b_movil">Movil:</label>
        <input type="text" id="b_movil" name="b_movil" value="${movil}">

        <button type="button" onclick="editarUsuario()">Editar usuario</button>
        <button type="button" onclick="cerrarPopup()">Cerrar</button>
        </form>

    `;
    let oculto = document.getElementById('hide');
    if (oculto != null) {
        oculto.style.display = "none";
    }

    // Añadir el div emergente al body
    document.body.appendChild(popup);

    // Mostrar el div emergente
    popup.style.display = 'block';

}



function cerrarPopup() {
    // Eliminar el div emergente al hacer clic en el botón Cerrar
    var popup = document.getElementById('popup');
    if (popup) {
        document.body.removeChild(popup);
    }
}