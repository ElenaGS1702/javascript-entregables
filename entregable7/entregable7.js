document.addEventListener("DOMContentLoaded", () => {
    const comentario = document.getElementById("comentario");
    const btnAgregar = document.getElementById("agregar");
    const areaComentarios = document.getElementById("area-comentarios");

    btnAgregar.addEventListener("click", (e) => {
        e.preventDefault();

        const com = comentario.value.trim();
        if(com){
            const fecha = getFecha();
            agregarComentario(com, fecha);
            comentario.value = "";
        }
    });

    const agregarComentario = (texto, fecha) => {
        const containerComentario = document.createElement("div");
        
        const itemFecha = document.createElement("span");
        itemFecha.textContent = fecha;
        containerComentario.appendChild(itemFecha);
        
        const itemComentario = document.createElement("p");
        itemComentario.textContent = texto;
        containerComentario.appendChild(itemComentario);
        
        eliminarComentario(containerComentario);

        areaComentarios.appendChild(containerComentario);
    }

    const eliminarComentario = (containerComentario) => {
        const itemEliminar = document.createElement("img");
        itemEliminar.src = "assets/eliminar.svg";
        itemEliminar.style.width = "20px";
        itemEliminar.style.height = "20px";
        containerComentario.appendChild(itemEliminar);

        itemEliminar.addEventListener("click", () => {
            containerComentario.style.display = "none";
        });
    }

    const getFecha = () => {
        const fecha = new Date();
        let mes = "";
        let dia = "";
        const hora = fecha.getHours();
        const minutos = fecha.getMinutes();
        const segundos = fecha.getSeconds();
        let horaStr = "";
        let minutosStr = "";
        let segundosStr = "";

        if(fecha.getDate() <= 9){
            dia = `0${fecha.getDate()}`
        } else {
            dia = `${fecha.getDate()}`
        }

        if((fecha.getMonth() + 1) <= 9){
            mes = `0${fecha.getMonth() + 1}`
        } else {
            mes = `${fecha.getMonth() + 1}`
        }

        if(hora <= 9){
            horaStr = `0${hora}`
        } else {
            horaStr = `${hora}`
        }

        if(minutos <= 9){
            minutosStr = `0${minutos}`
        } else {
            minutosStr = `${minutos}`
        }

        if(segundos <= 9){
            segundosStr = `0${segundos}`
        } else {
            segundosStr = `${segundos}`
        }

        return `${dia}-${mes}-${fecha.getFullYear()} ${horaStr}:${minutosStr}:${segundosStr}`
    }
});

