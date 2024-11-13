const barraMenu = ["Inicio", "Nosotros", "Servicios", "Contacto"];

const noticiasPeques = [{foto: "img/isla.jpg", titular: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.", textoBoton: "Comprar"},
    {foto: "img/kayak.jpeg", titular: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.", textoBoton: "Comprar"},
{foto: "img/avion.jpg", titular: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.", textoBoton: "Comprar"},]

// Contenedor principal
const contenedor = document.createElement("div");
contenedor.className = "contenedor";
document.body.appendChild(contenedor);

// Div con el logo
const logo = document.createElement("div");
logo.className = "logo";
const fotoLogo = document.createElement("img");
fotoLogo.setAttribute("src", "img/logo.jpg");
logo.appendChild(fotoLogo);
contenedor.appendChild(logo);

// Div con el menu
const menu = document.createElement("div");
menu.className = "menu";

for(let i = 0; i < barraMenu.length; i++)
    {
        const textoMenu = document.createElement("div");
        textoMenu.className = "textoMenu";
        textoMenu.textContent = barraMenu[i];
        menu.appendChild(textoMenu);
    }

contenedor.appendChild(menu);


// Div con la noticia 1
const noticia1 = document.createElement("div");
noticia1.className = "noticia1";
    // Foto de la noticia
const divFotoNoticia1 = document.createElement("div");
divFotoNoticia1.className = "divFotoNoticia1";

const fotoNoticia1 = document.createElement("img");
fotoNoticia1.setAttribute("src", "img/puerta.jpg");
fotoNoticia1.className = "tamano1";
divFotoNoticia1.appendChild(fotoNoticia1);
noticia1.appendChild(divFotoNoticia1);

    // Texto de la noticia
const textoNoticia1 = document.createElement("div");
textoNoticia1.className = "textoNoticia1";

const titularNoticia1 = document.createElement("p");
titularNoticia1.className = "titularNoticia1";
titularNoticia1.textContent = "Este es el titular del div del texto";
textoNoticia1.appendChild(titularNoticia1);

const contenidoNoticia1 = document.createElement("p");
contenidoNoticia1.className = "contenidoNoticia1";
contenidoNoticia1.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, repellendus! Veniam dolore numquam quod? Suscipit, iusto iure mollitia cupiditate expedita ex vitae eveniet totam molestiae illum delectus odio autem fuga.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, repellendus! Veniam dolore numquam quod? Suscipit, iusto iure mollitia cupiditate expedita ex vitae eveniet totam molestiae illum delectus odio autem fuga.";
textoNoticia1.appendChild(contenidoNoticia1);

    // Boton noticia
const boton = document.createElement("input");
boton.type = "button";
boton.className = "boton";
boton.value = "Ver más";
textoNoticia1.appendChild(boton);
noticia1.appendChild(textoNoticia1);
contenedor.appendChild(noticia1);

// Div con la noticia 2 (imagen grande)
const noticia2 = document.createElement("div");
noticia2.className = "noticia2";
noticia2.textContent = "Este es el titular de la sección 2";

const imagenGrande = document.createElement("img");
imagenGrande.setAttribute("src", "img/everest.jpg");
noticia2.appendChild(imagenGrande);

contenedor.appendChild(noticia2);

// Div con las imagenes en pequeño
const imagenesPeques = document.createElement("div");
imagenesPeques.className = "imagenesPeques";

    // Div de cada imagen
for (let j = 0; j < noticiasPeques.length; j++)
{
    const divImagenPaisaje = document.createElement("div");
    divImagenPaisaje.className = "divImagenPaisaje";

    const fotoPeque = document.createElement("img");
    fotoPeque.setAttribute("src", noticiasPeques[j].foto);
    divImagenPaisaje.appendChild(fotoPeque);

    const textoPeque = document.createElement("p");
    textoPeque.textContent = noticiasPeques[j].titular;
    divImagenPaisaje.appendChild(textoPeque);

    const botonComprar = document.createElement("input");
    botonComprar.type = "button";
    botonComprar.className = "boton";
    botonComprar.value = noticiasPeques[j].textoBoton;
    divImagenPaisaje.appendChild(botonComprar);
    imagenesPeques.appendChild(divImagenPaisaje);
}
contenedor.appendChild(imagenesPeques);
