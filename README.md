# RegistroProductos

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Actividad 2 - Formulario Reactivo de Registro de Productos en Angular 

---

# Descripción

Se desarrolló una aplicación en Angular para el registro de productos utilizando Formularios Reactivos (Reactive Forms). El sistema permite ingresar información de productos, validar los datos ingresados por el usuario y enviar la información a un servicio que simula la comunicación con un backend.

Además, se implementó navegación mediante Angular Router, permitiendo acceder a una vista de inicio y a una vista de registro de productos.

---

# Objetivos Cumplidos

- Diseñar un formulario reactivo para el registro de productos.
- Crear un modelo de datos para representar un producto.
- Aplicar Data Binding entre la interfaz y el formulario.
- Configurar validaciones para los campos del formulario.
- Mostrar mensajes de error dinámicos mediante `*ngIf`.
- Generar categorías dinámicamente mediante `*ngFor`.
- Implementar comunicación con un servicio utilizando Inyección de Dependencias.
- Verificar que los datos solo sean enviados cuando el formulario sea válido.
- Proporcionar retroalimentación visual al usuario.

---

# Estructura del Proyecto

```text
src/app
│
├── components
│   ├── inicio
│   └── producto-form
│
├── services
│   └── producto.service.ts
│
├── models
│   └── producto.ts
│
├── app.routes.ts
├── app.ts
├── app.html
└── app.css
```

---

# Modelo de Datos

Se creó la interfaz `Producto` para representar la información que será registrada.

Campos definidos:

- Nombre
- Descripción
- Precio
- Categoría
- Stock

---

# Formulario Reactivo

El formulario fue construido utilizando:

- `FormGroup`
- `FormControl`
- `Validators`

Controles configurados:

- nombre
- descripcion
- precio
- categoria
- stock

---

# Validaciones Implementadas

| Campo | Validaciones |
|---------|---------|
| Nombre | Obligatorio y mínimo 3 caracteres |
| Descripción | Obligatoria y mínimo 20 caracteres |
| Precio | Obligatorio y mayor que 0 |
| Categoría | Obligatoria |
| Stock | Obligatorio y valor mínimo 0 |

Para controlar el comportamiento del formulario se utilizaron estados como:

- `touched`
- `invalid`
- `hasError()`

---

# 🔄 Data Binding

Se implementó Data Binding mediante:

- `[formGroup]`
- `formControlName`
- Interpolación `{{ }}`
- `[disabled]`

Esto permite mantener sincronizados los datos entre el formulario y la interfaz.

---

# 🧩 Directivas Estructurales Utilizadas

## `*ngIf`

Utilizada para mostrar mensajes de error dinámicos cuando un campo no cumple una validación.

Ejemplos:

- Campo obligatorio.
- Longitud mínima.
- Valor mínimo permitido.

### Ejemplo

```html
<div *ngIf="productoForm.get('nombre')?.*asError('required')">
    El nombre es obligatorio.
</div>
```

---

## `*ngFor`

Utilizada para generar las categorías dentro del elemento `<select>`.

Categorías generadas:
- Electrónica
- Hogar
- Ropa
- Alimentos
- Deportes

### Ejemplo

```html
<option *ngFor="let categoria of categorias">
    {{ categoria }}
</option>
```

---

# 🎨 Retroali*entación Visual

Para mejorar la experiencia del usuario se implementaron:

- Mensajes de error debajo de cada campo.
- Botón deshabilitado cuando el formulario es inválido.
* Mensaje de éxito después de registrar un producto.
- Estilos CSS perzonalizados para el formulario y la navegación.

---

# 🔌 Servicio e Inyección de Dependencias

Se implementó un servicio llamado:

```text
ProductoService
```

Este servicio simula la comunicación con un backend.

Funciones realizadas:

1. Recibir el objeto producto.
2. Verificar la información recibida.
3. Mostrar el producto en la consola.

La inyección de dependencias se realizó mediante el constructor del componente.

```ts
constructor(
  private productoService: ProductoService
) {}
```

---

# 🚀 Flujo de Funcionamiento

```text
Usuario
   │
   ▼
Ingresa información
   │
   ▼
Angular valida los datos
   │
   ├── Datos inválidos
   │      ▼
   │ Mostrar errores
   │
   └── Datos válidos
           ▼
     Crear objeto Producto
           ▼
      Enviar al Servicio
           ▼
 Verificación en Consola
           ▼
 Mostrar Mensaje de Éxito
```

---

# 🧭 Navegación

La aplicación utiliza Angular Router para navegar entre las páginas.

## Inicio

Muestra una pantalla de bienvenida al sistema.

## Productos

Permite registrar productos mediante un formulario reactivo.

---

# 🧪 Pruebas Realizadas

## Prueba 1

**Nombre vacío**

Resultado:

- Mensaje de error mostrado.
- Formulario inválido.
- No se realiza el envío.

---

## Prueba 2

**Nombre con menos de 3 caracteres**

Resultado:

- Mensaje de longitud mínima.
- Formulario inválido.

---

## Prueba 3

**Descripción menor a 20 caracteres**

Resultado:

- Mensaje de error mostrado.
- El formulario no se envía.

---

## Prueba 4

**Precio igual a 0**

Resultado:

- Mensaje de error mostrado.
- Formulario inválido.

---

## Prueba 5

**Todos los datos válidos**

Resultado:

- Producto registrado correctamente.
- Datos enviados al servicio.
- Información mostrada en consola.
- Formulario reiniciado automáticamente.