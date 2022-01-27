Durante el proyecto me han surgido una serie de dudas que no he conseguido resolver:

- cómo mejorar el tipado. En el list details, no sé cómo recuperar únicamente las propiedades de la interfaz para no tener que usar any.
- el archivo de la carpeta styles de colors no he logrado que lo identifique de ninguna forma
- Problemas inicialización de variables por la versión de typescript???
- Duda de BEM: ejemplo src/app/pages/form/components/form-create/form-create.html líneas 3-6. lo que está dentro del fieldset cómo se pondría con &__
- cómo hacer para no repetir código en el scss. Por ejemplo, si un elemento padre tiene 3 hijos, cómo hacer para no tener que repetir los estilos en los hijos cuando tienen algunas clases iguales.

- Breakpoints para mediaqueries: //768 990 1280px



-COMPONENTES A CAMBIAR LOS TIPADOS:
-about-body
-form-create, delete y update la variable posts
-character-request tipado de data en el ngOnInit
-componentes hijos de list-detail
-my-posts

En MY-POST-COMPONENT.TS no conseguido asignar a posts algo distinto de any. Si pones tipo object en el html no puedes hacer el for of al ser un objeto. Esto está definido así en el api.service.ts La función getAllPosts es un observable de un objecto.