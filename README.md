
# Proyecto Integrador

El siguiente proyecto consta de los siguientes componentes principales:
* Base de datos en MySQL
* Api REST realizado en PHP con Laravel
* Cliente web realizado en JavaScript con React
* Cliente m贸vil realizado en Dart con Flutter

## Video demostrativo 馃摻

Enlace: [YouTube](https://youtu.be/rmZTDK4XNcw)

## Manual t茅cnico 馃摃

Enlace: [Manual de t茅cnico](https://github.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/blob/main/MANUAL%20T%C3%89CNICO/Manual_Tecnico_Curipoma_Guamba.pdf)

## Autores 鉁掞笍

_Este proyecto fue realizado por:_

* **Cristian Guamba** - *EPN* - [GitHub](https://github.com/Cristiangpbf)
* **David Curipoma** - *EPN* - [GitHub](https://github.com/Davix316)

## 1. Herramientas utilizadas 馃洜

### Laravel
Este framework permite generar _endpoints_ de manera facil y rapida, ofreciendo una interaccion simplificada entre las entidades de la base de datos.

### React
Permite la creacion de aplicaciones de manera m谩s ordenada al centrarnos en componentes que por lo general, se buscar谩 que sean reutilizables. 

### Flutter
Este SDK permite crear aplicaciones de r谩pida reacci贸n y con utilitarios pensados especialmente en la creacion de aplicaciones m贸viles.

## 2. Patr贸n arquitect贸nico
### Patr贸n utilizado

![Arquitectura-Api-Rest](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/Nuevo-Arquitectura-Api-Rest.jpg)

### Estructura BDD

![Estructura-BDD](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/BDD.jpg)

## 3. Funcionalidades

Para satisfacer los requerimientos del cliente, se implementaron las siguientes funcionalidades:
### Cliente Web
* ##### Pantalla de inicio 
![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/Inicio-no-loged.jpg)

* ##### Pantalla Inicio de sesi贸n 
![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/Inicio-de-sesion.jpg)
* ##### Pantallas de inicio para usuario _logueado_
![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/Home-admin.jpg)
![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/Home-cliente.jpg)
* ##### Informacion del producto (no _logueado_, admin, cliente, edici贸n, nuevo)
![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/Info-prod1.jpg)
![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/Info-prod2.jpg)
![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/Info-prod3.jpg)
* ##### (ADMIN)Administraci贸n de pedidos
![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/Pedidos1.jpg)
![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/Pedido-detalle.jpg)
* ##### (ADMIN)Administraci贸n de clientes
![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/Clientes-list.jpg)
![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/Clientes-edit.jpg)
![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/Clientes-del.jpg)
* ##### (ADMIN)Administraci贸n de empleados
![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/Empleados-list.jpg)
![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/Empleados-edit.jpg)
* ##### (ADMIN)Producci贸n de empleados
![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/Produccion.jpg)
![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/Produccion2.jpg)
![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/Produccion3.jpg)
* ##### (CLIENTE) Editar perfil

* ##### (CLIENTE) Lista de pedidos

* ##### (CLIENTE) Solicitar productos

* ##### (CLIENTE) Carrito

### Cliente M贸vil

* ##### Pantalla Inicio de sesi贸n
![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/app_login.jpg)

* ##### (ADMIN)Men煤 principal
![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/app_menu_admin.jpg)

* ##### (ADMIN)Pedidos

| **Lista de pedidos** | **Editar pedido** | **Detalle de pedido** | 
| ------------- | ------------- | ------------- | 
|![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/app_ordenes_admin.jpg)|![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/app_editar_orden_admin.jpg)|![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/app_productos_orden.jpg)|

* ##### (ADMIN)Lista de clientes
![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/app_lista_clientes.jpg)

* ##### (ADMIN)Empleados

| **Lista de empleados** | **Producci贸n empleado** | 
| ------------- | ------------- | 
|![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/app_lista_empleados.jpg)| ![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/app_produccion_empleados.jpg)|

* ##### (CLIENTE)Men煤 principal
![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/app_menu_cliente.jpg)
* ##### (CLIENTE)Pedidos en espera

| **Lista de pedidos en espera** | **Editar pedido** | 
| ------------- | ------------- | 
|![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/app_orden_espera_cliente.jpg)| ![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/app_editar_orden_cliente.jpg)|
* ##### (CLIENTE)Pedidos en proceso
![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/app_orden_proceso_cliente.jpg)
* ##### (CLIENTE)Lista de productos
![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/app_lista_productos.jpg)
* ##### (CLIENTE)Nuevo pedido

| **Agregar a carrito** | **Carrito** | **Solicitar pedido** | 
| ------------- | ------------- | ------------- | 
|![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/app_nueva_orden.jpg)| ![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/app_carrito_orden.jpg)| ![Imagen.jpg](https://raw.githubusercontent.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba/main/imagenes-read/app_solicitar_orden.jpg)|

## 4. Instalaci贸n

###### 1. Clonar este repositorio de GitHub

```
git clone https://github.com/Cristiangpbf/Proyecto-Integrador-Curipoma-Guamba.git
```
