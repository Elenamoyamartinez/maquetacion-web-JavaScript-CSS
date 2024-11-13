# Proyecto de Maquetación Web

Este proyecto consiste en una página web sencilla con un menú de navegación, secciones de noticias con imágenes y un diseño responsivo básico. Utiliza JavaScript para la creación dinámica de elementos HTML y CSS para el estilo y la disposición.


## Tabla de Contenidos
- Descripción General
- Demo
- Uso
- JavaScript
- Características
- Estructura del CSS

## Descripción General

Este proyecto es una página web interactiva que utiliza JavaScript para generar dinámicamente el contenido y CSS para el diseño. La página incluye un menú de navegación, una sección de noticias con imágenes, botones y un diseño básico pero funcional. Se utiliza un enfoque de diseño **responsivo** con `flexbox` para asegurar que la página se vea bien en diferentes dispositivos.

La página contiene:
- Un logo en la parte superior.
- Un menú de navegación horizontal con las opciones: **Inicio**, **Nosotros**, **Servicios**, **Contacto**.
- Sección de noticias con una imagen grande, un titular, contenido y un botón de acción.
- Tres noticias con imágenes pequeñas, titulares y botones para simular un enlace de acción.

## Demo

![image](https://github.com/user-attachments/assets/fc93953b-4c19-4932-bb73-1ca0fde8a1e7)
![image](https://github.com/user-attachments/assets/0023278a-af01-4ba0-9589-fa140ef53637)

## Uso

Este proyecto puede servir como base para un sitio web más complejo. Puedes modificar el contenido de las noticias, los botones, las imágenes y el menú para personalizar la página a tus necesidades.

## JavaScript

El archivo script.js es responsable de generar dinámicamente el contenido HTML de la página. El script realiza las siguientes acciones:
- Logo y Menú: Crea un div para el logo y otro para el menú de navegación. Los elementos del menú se agregan mediante un array llamado barraMenu, que contiene los elementos del menú de navegación.
- Sección de Noticias: El script agrega varias secciones de noticias, cada una con una imagen, un titular, contenido y un botón de acción. Los detalles de las noticias están en un array de objetos llamado noticiasPeques.
- Estructura Dinámica: Los elementos HTML son creados de manera programática usando document.createElement, lo que permite mantener el código limpio y fácilmente modificable.
- Interactividad: Aunque el proyecto no tiene eventos avanzados, el botón "Ver más" y los botones de compra están generados, lo que simula una posible acción futura.
Funciones clave del script:
- Crear elementos HTML de manera dinámica.
- Modificar el contenido de la página según los datos proporcionados en los arrays de JavaScript.
- Implementación básica de botones de acción, como "Ver más" y "Comprar".

## Características

- Diseño Responsivo: Utiliza flexbox para un diseño flexible y adaptativo que se ajusta a diferentes tamaños de pantalla.
- Generación Dinámica: Los elementos de la página, como el menú y las noticias, son creados dinámicamente con JavaScript, lo que facilita su personalización y mantenimiento.
- Interactividad Básica: Botones interactivos que simulan acciones como "Ver más" y "Comprar".
- Estilo Simple y Funcional: El diseño es minimalista pero efectivo, con un enfoque en la funcionalidad y la claridad visual.

## Estructura del CSS

El archivo style.css contiene los estilos para los diferentes elementos de la página. Algunas de las características clave de los estilos son:
- Reset Global: Se utiliza un reset básico para que el estilo sea coherente en diferentes navegadores (* { box-sizing: border-box; padding: 0; margin: 0; }).
- Estructura Flexbox: Se utiliza display: flex para los contenedores principales, lo que permite que los elementos se alineen adecuadamente en filas o columnas según sea necesario.
- Estilo del Menú: El menú tiene un fondo rojo, con el texto blanco, y utiliza justify-content: space-around para distribuir de manera equitativa las opciones del menú.
- Noticias: Se crean dos tipos de secciones de noticias:
  1. Una noticia con imagen grande y texto.
  2. Un conjunto de noticias pequeñas con imágenes pequeñas, titulares y botones.
  3. Botones: Los botones tienen un estilo consistente, con un fondo rojo, texto blanco, y un borde redondeado. Además, se les da un estilo de cursor de puntero para indicar que son interactivos.
- Tamaños de Imágenes: Se controla el tamaño de las imágenes a través de clases específicas, como tamano1 para la imagen de la primera noticia, y las imágenes pequeñas tienen un tamaño ajustado al contenedor.
