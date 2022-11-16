#### PROYECTO-FINAL-HERNY BOOTCAMP

# Wave Music

<p align="center">
    <img src="https://res.cloudinary.com/df7zuvuxu/image/upload/v1635368610/dcdxidv1aev28i5fnsup.png" alt="wave-music" border="0">
</p>

### E-COMMERCE de instrumentos musicales

En este proyecto se utilizó para poder comprender el github flow, la metodología de scrum y las responsabilidades del trabajo en equipo. Para el e-commerce utilizamos Javascript, Css, React, Redux, MongoDB y Mongoose. En el deploy se utilizó Mongo Atlas para la base de datos, Heroku para el servidor y Firebase para el front.

## Página principal

En ella podemos encontrar una barra de navegación superior, unos filtros por categorías de los instrumentos, un carrusel de imágenes (el cual cambia automáticamente o se puede recorrer a gusto), un filtro por rango de precios y un ordenamiento ascendente o descendente de los precios, unas tarjetas que muestran el producto publicado, un paginado para poder recorrer la tienda y ver todos los productos, un footer con links importantes y finalmente un asistente virtual.

https://user-images.githubusercontent.com/72575052/141347280-a6aef11a-4534-493f-83c7-88436b4beaa6.mp4

## Filtrar por categorías

Para poder filtrar por categorías se tiene elegir una de las categorías principales, hacer clic y se despliegan sub-categorías. Después elegir la sub-categoría deseada y se mostraran todos los productos de esa categoría. Si se quiere limpiar el filtro solo basta con tocar el logo en la barra de navegación.

https://user-images.githubusercontent.com/72575052/141347316-6d7b485d-9caf-474f-a52c-60bcecbbd5f2.mp4

## Filtrar y ordenar por rangos de precios

Para filtrar por rango de precios se tiene que elegir el rango preferido y tocar el botón “Apply”. Si se quiere elegir el orden ascendente o descendente solo hay que tocar la flechita al costado del filtro. Si se quiere limpiar el filtro solo basta con tocar el botón “Clear”.

https://user-images.githubusercontent.com/72575052/141348416-31b28e9c-47ee-40e8-b063-3af3bbc7ee57.mp4

## Paginado

Si se quiere recorrer todos los productos de la tienda hay que usar los botones “Prev” y “Next”.

https://user-images.githubusercontent.com/72575052/141347369-978c64d9-abbd-4734-b74b-dd1f8eee1d8c.mp4

## Buscar un producto

En la barra de búsqueda se pueden colocar palabras claves como categoría, modelo o marca del instrumento. El buscador tiene un auto completado con sugerencias, una vez elegido lo que se quiere buscar se toca la lupa.

https://user-images.githubusercontent.com/72575052/141348941-14e0595e-dc0e-4fa4-a60d-d7ae67592907.mp4

## Detalle del producto

Cuando se quiere acceder al detalle del producto se pude hacer tocando la imagen o el título de la tarjeta.
En la página del detalle se pueden ver la descripción del producto, las reviews y preguntas que hicieron los clientes.

https://user-images.githubusercontent.com/72575052/141349324-ce3edd22-1085-47c9-b926-b71637d59097.mp4

## Login y Logout

Si se quiere realizar una compra, añadir un producto a la lista de deseados, hacer reviews y/o preguntas se necesita estar logueado. Para loguearse hay que apretar el botón “Login” y te redirige a una página donde se puede crear un usuario, usar un usuario registrado o ingresar con la cuenta de Google

https://user-images.githubusercontent.com/72575052/141349779-05fcf56c-f0f9-4785-a8e5-17d977eb83c0.mp4

## Ver el perfil del usuario y modificar

Cuando se quiere ver el perfil del usuario hay que apretar la imagen del usuario en la barra de navegación, y seleccionar la opcion de "Your profile". A la hora de modificar el perfil se tiene que hacer clic en el boton "Edit" y modificar los cambios deseados.

https://user-images.githubusercontent.com/72575052/141350720-ec4831e4-f10e-4a36-a101-fff4f01e9bfd.mp4

## Comprar

Para realizar una compra se tiene que agregar los productos deseados, se puede hacer desde la página principal en la tarjeta del producto o desde la página del detalle. Se pueden agregar productos hasta el stock máximo, desde el carrito se pueden agregar o restar mas productos del mismo tipo o eliminar la cantidad total del producto.

https://user-images.githubusercontent.com/72575052/141352089-67afea8b-1644-448d-a020-a8d6abe62047.mp4

## Ver mis compras

Se pueden ver las compras desde el perfil del usuario, en el botón con el Ícono de una caja. Se pueden ver los productos comprados en cada compra, la fecha de compra, el precio total y el estado de la compra.

https://user-images.githubusercontent.com/72575052/141351483-1d6da661-cc23-4fda-a7f4-c24fca5bc5b7.mp4

## Agregar a la lista de deseos

Si un producto se lo quiere agregar o eliminar de la lista de deseos hay que hacer clic en el botón con forma de corazón en las tarjetas o desde el detalle del producto.

https://user-images.githubusercontent.com/72575052/141352612-a39dcf4c-d135-422f-95a7-9cae14b40c71.mp4

## Ver lista de deseos

Para acceder a la lista de deseos hay que entrar al perfil del usuario y seleccionar el botón con forma de corazón. Se pueden ver los productos agregados a la lista de deseos y eliminar los productos que se quieran.

https://user-images.githubusercontent.com/72575052/141352932-d3633c22-3e97-4366-a3dc-ba2423419f31.mp4

## Hacer reviews y preguntas

Para hacer reviews hay que entrar al detalle del producto, seleccionar el botón "Review this product" y completar el formulario. Cuando se quiere hacer una pregunta hay que seleccionar el botón "Ask a Question". Se pueden ver las reviews y preguntas realizadas en el detalle de los productos.

https://user-images.githubusercontent.com/72575052/141353932-b86dafc3-67d3-41f6-84b7-c23721b37c52.mp4

## Ver datos de la tienda

Desde el footer se puede ver los datos de la tienda, el número de teléfono, el mail, la dirección de la tienda y un mapa de la ubicación del e-commerce.

https://user-images.githubusercontent.com/72575052/141354573-85152edb-8a31-4e54-af48-e81f4dc5086e.mp4

## Asistente virtual

Se puede acceder al asistente virtual tocando el botón que se encuentra abajo a la derecha. Al hablar con Maribot se puede llegar a la página de contacto y dependiendo de lo que se esté buscando te puede sugerir un producto.

https://user-images.githubusercontent.com/72575052/141355176-47292890-37d9-47be-82ba-89c3dc67ac4b.mp4

## Crear o eliminar productos

Para crear productos en la tienda se necesita ser usuario admin, para entrar en la página de administrador hay que apretar la imagen del usuario en la barra de navegación, y seleccionar la opcion de "Admin panel". Al entrar tocar el botón “+” y completar el formulario. Cuando se quiere eliminar hay que buscar el producto y apretar el botón con forma de tacho de basura.

https://user-images.githubusercontent.com/72575052/141361241-c912030b-c2a2-435b-981a-3374caeee1e7.mp4

https://user-images.githubusercontent.com/72575052/141362109-e86a963b-381b-44c1-9781-b52677c453a5.mp4

## Modificar o poner en descuento un producto

Dentro del panel de admin se puede modificar el producto tocando el botón con forma de un lápiz y modificar el formulario. A la hora de realizar una oferta se tiene que buscar el producto y tocar el botón con forma de una etiqueta, si se quiere eliminar la oferta se usa el botón con forma de tic.

https://user-images.githubusercontent.com/72575052/141361262-b3918ec8-0a98-4557-a1de-b6817102c34a.mp4

https://user-images.githubusercontent.com/72575052/141361748-688c1f2a-d21e-46ef-a07f-8d2baf80a6a4.mp4

## Modificar estado de la compra o cancelar

Dentro del panel de administrador en la sección de ventas se puede modificar el estado de una compra tocando el botón con forma de lápiz y seleccionando el nuevo estado de la compra. Cuando se quiere eliminar una compra se tiene que hace clic en el botón con forma de tacho de basura.

https://user-images.githubusercontent.com/72575052/141356085-fcef8c8f-f9e8-4a54-a4d2-84c46c6de09c.mp4

## Responder preguntas

Si se quiere responder preguntas hay que ir a la pagina de preguntas, apretar el botón con forma de mensaje y escribir la respuesta deseada.

https://user-images.githubusercontent.com/72575052/141355716-ce55a9b7-2e91-472c-8737-af8e5212219e.mp4

## Banear, eliminar, hacer admin y resetear las contraseñas de los usuarios

En la pagina de administrar usuarios se puede hacer administrador a un usuario usando el botón con una llave, si se quiere enviar un mail para que el usuario resetee su contraseña hay que apretar el botón con forma de un mail, cuando se quiere banear al usuario y que no pueda hacer nada se tiene que apretar el botón de prohibido. Finalmente, si se quiere eliminar el usuario hay que apretar el botón con forma de tacho de basura.

https://user-images.githubusercontent.com/72575052/141363561-c6a548ad-a746-41a5-be1b-922a00941a34.mp4

## Modificar datos de la tienda

Cuando se quiere modificar algún dato del negocio se hace desde la página de administrar información, se modifica el dato en el formulario.

https://user-images.githubusercontent.com/72575052/141362363-1eff9a11-bd36-49ea-baf9-eb6d97dfaab7.mp4

## Link del proyecto deployado

https://proyecto-grupal-18c81.web.app
