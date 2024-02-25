---
sidebar_position: 1
---



# Manual para Script de Instalación
 <h2 class="subtitulo">Docker | GitLab | Opción SSL | Opción SSH</h2>
 <h3 class="subtitulo_small"> Facturador PRO4</h3>


## Descripción

Hemos elaborado un script para uso en instancias Linux con Ubuntu 18 o superior. Este archivo actualiza el sistema, instala las herramientas, sus dependencias y realiza todas las configuraciones previas, dejando el aplicativo listo para probar en menos de 20 minutos (siempre y cuando el dominio ya esté configurado hacia la instancia). Su ejecución es muy sencilla.

## Requisitos previos

1. Tener acceso a su servidor, vps, máquina virtual o local via SSH, en las instalaciones que realizamos para AWS o Google Cloud, hacemos entrega del usuario,
   la IP del servidor y la clave ssh que puede ser un archivo .ppk o .pem, recuerde almacenarlas en su equipo local.
2. Tener instalado una versión de ssh en su máquina para conectarse de manera remota, puede utilizar putty, filezilla o una consola terminal. 
   para mayor información sobre el acceso SSH visite los siguientes manuales:
- [guía para acceder con Putty ](https://docs.google.com/document/d/1PmQejvNd_dkXVm8DPUYlQTag0wvES46tMpxX3MPhkNY/edit#)(gestión de servidor)
- [guía para acceder con Winscp ](https://docs.google.com/document/d/1Xpri2102N4b5C-dG-FVPXW5ZWjEz5S4iDjpvl7Zwq2E/edit##)(gestión de archivos con aplicación de escritorio)
3. Si es posible configurar su dominio apuntando a su instancia para que al finalizar la instalación se encuentre disponible el aplicativo. Edite los récords A y CNAME donde A debe contener su IP y CNAME el valor * (asterisco) para que se tomen los subdominios registrados por la herramienta.


<img class="imagenes_horizontales" src="https://github.com/AntonyCandiotti/Practica02Manual/blob/main/docs/tutorial/img/image3.png?raw=true" alt="haaaolaa"/>

4. En caso de contar con servicios instalados en su instancia como mysql, apache o nginx, debe detenerlos, ya que estos ocupan los puertos que pasarán a usar el aplicativo con los contenedores de Docker.

## Pasos

1. Acceder a su instancia vía SSH.
2. Loguearse como superusuario:

```md 
sudo su
```
3. Clonar el snippet de GitLab que contiene el script: 

```md 
git clone https://gitlab.com/snippets/2079063.git script
```

4. Ingresar a la carpeta clonada:
```md 
cd script
```
5. <p id ="paso6">Dar permisos de ejecución al script: </p>
```md 
chmod +x install.sh
```
6. Ejecutar el comando para iniciar el despliegue:
```md 
./install.sh [dominio] 
```
  - por ejemplo:

```md 
./install.sh facturador.pro
```
7. Una vez ejecutado el comando iniciará el proceso de actualización del sistema, en el proceso se le solicitará:
  - a. el usuario y contraseña de GitLab, para que se pueda descargar el proyecto en su instancia
  - b. si desea instalar  SSL gratuito, tenga en cuenta que este debe ser actualizado cada 90 días, el mensaje será el siguiente:
    - <p class="letras_negras">instalar con SSL? (debe tener acceso al panel de su dominio para editar/agregar records TXT). si[s] no[n]</p>
      - i. deberá contestar con “s” o “n” para continuar
      - ii. si selecciona **SÍ**, deberá contestar las siguientes preguntas con “y”, son 2 en total, seguidamente se le ofrecerá un código que debe añadir en un récord tipo TXT en su dominio quedando como **_acme-challenge.example.com** o simplemente **_acme-challenge** dependerá de su proveedor.
      - <img src="https://github.com/AntonyCandiotti/Practica02Manual/blob/main/docs/tutorial/img/image1.png?raw=true" /> 
      - iii. para continuar presione **enter**, luego deberá repetir las acciones para añadir un segundo código y habrá finalizado la configuración, si el proceso es exitoso la ejecución del script continuará.
  - c. si desea obtener y gestionar actualizaciones automáticas, deberá disponer de su sesión de gitlab al momento
    - <p class="letras_negras">configurar clave SSH para actualización automática? (requiere acceso a https://gitlab.com/profile/keys). si[s] no[n]</p>
      - i. deberá contestar con “s” o “n” para continuar
      - ii. de seleccionar SÍ, al final del despliegue se le dará un extracto de texto que debe añadir a su configuración de gitlab
      - <img id="ssh_key" src="https://github.com/AntonyCandiotti/Practica02Manual/blob/main/docs/tutorial/img/image2.png?raw=true"/>

8. Finalizado el script y dependiendo de sus selecciones anteriores, se le entregará varios datos que debe guardar, como;
  - a. usuario administrador 
  - b. contraseña para usuario administrador
  - c. url del proyecto 
  - d. ubicación del proyecto dentro del servidor 
  - e. clave ssh para añadir a gitlab(obligatorio para quienes seleccion la instalación de SSH)


# Enlaces de interés 

- :black_circle: <a href="#seccion1">Actualización de SSL</a>
- :black_circle: <a href="#seccion1">Actualización mediante ejecución Script para instalaciones Docker</a>
- :black_circle: <a href="#seccion1">Gestión de SSL independiente, no el que incorpora el Script</a>
- :black_circle: <a href="#seccion1">Guía gitlab para la instalación, contiene el script usado en el presente manual</a>, además posee los parámetros extras que pueden usarse en la ejecución del <a href="#paso6">paso 6</a>
