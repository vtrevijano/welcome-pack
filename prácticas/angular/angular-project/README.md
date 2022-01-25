# AngularProject

Para este proyecto de angular será necesario, en primer lugar, tener levantado el server. Este server se encuentra en la carpeta BACKEND-ANGULAR. Para arrancarlo, ejecutar en la terminal de vscode: npm run server. Se levantará en el puerto 3000.

Con el servidor levantado, podremos hacer un ng serve en este mismo proyecto. Se levantará en el puerto 4200.

El proyecto cuenta con todo lo solicitado en la iteration 1 y 2, a excepción de los bonus (test unitarios y traducción) por falta de tiempo.

Las apis usadas han sido: rick and morty, fake api creada con json server y la api de github.

Durante el proyecto me han surgido una serie de dudas que no he conseguido resolver:

- cómo mejorar el tipado. En el list details, no sé cómo recuperar únicamente las propiedades de la interfaz para no tener que usar any.
- el archivo de la carpeta styles de colors no he logrado que lo identifique de ninguna forma
- Problemas inicialización de variables por la versión de typescript???
- Duda de BEM: ejemplo src/app/pages/form/components/form-create/form-create.html líneas 3-6. lo que está dentro del fieldset cómo se pondría con &__
- cómo hacer para no repetir código en el scss. Por ejemplo, si un elemento padre tiene 3 hijos, cómo hacer para no tener que repetir los estilos en los hijos cuando tienen algunas clases iguales.
- Breakpoints para mediaqueries.