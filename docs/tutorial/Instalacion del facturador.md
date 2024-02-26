---
sidebar_position: 4
---

# Instalación del Facturador

<h2 class="subtitulo">Docker | Linux | SSL externo</h2>

## Pasos

1. para instalar debe ejecutar el script evitando instalar el SSL, le será consultado en el proceso y deberá ingresar "**n**"
   
2. finalizada la instalación debe dirigirse a la ruta de instalación:
    
    ```bash 
    cd /root/facturadorpro31/
    ```

3. debe editar el archivo **.env**
    ```bash 
    nano .env
    ```

- Dentro del editor, localice los parámetros y realice los siguientes cambios:
   - **Antes**:
     ```bash
     APP_URL=http://${APP_URL_BASE}
     FORCE_HTTPS=false
     ```
   - **Después**:
     ```bash
     APP_URL=https://${APP_URL_BASE}
     FORCE_HTTPS=true
     ```

    - :black_circle: Una vez realizados los cambios, guarde y salga del editor.

    - :black_circle: Ejecute los siguientes comandos para eliminar la caché de la aplicación:
    
        ```bash
        php artisan config:cache
        ```
    - :black_circle: Con esto, habrá completado la configuración del lado de la herramienta. Sin embargo, tenga en cuenta que hasta que no configure un SSL, no podrá acceder a la herramienta.


:::warning Importante

Recuerde habilitar el puerto 443 para poder acceder a la herramienta.

:::