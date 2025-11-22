# DivisApp19001704 - Conversor de Divisas GTQ a USD

Aplicación móvil para convertir Quetzales (GTQ) a Dólares Estadounidenses (USD).

## Tecnologías

- **Ionic 8.7.10**
- **Angular 20.3.13**
- **Capacitor 6.2.1**
- **TypeScript**
- **SCSS**

## Características

- Conversión de GTQ a USD con tasa fija (1 USD = 8 GTQ)
- Diseño responsive
- Funciona offline una vez instalada

## Instalación y Desarrollo

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm
- Android Studio (para compilar APK)
- JDK 17 o superior

### Clonar el repositorio

git clone + el link


### Instalar dependencias
```bash
npm install
```

### Ejecutar en desarrollo (navegador)
```bash
ionic serve
```

La aplicación se abrirá en `http://localhost:8100`

### Ejecutar en dispositivo Android en modo desarrollo
```bash
ionic build --prod
npx cap sync android
ionic cap run android
```

## Generar APK de Producción

### Paso 1: Build de producción
```bash
ionic build --prod
npx cap sync android
```

### Paso 2: Abrir en Android Studio
```bash
npx cap open android
```

O manualmente:
1. Abre Android Studio
2. File > Open
3. Selecciona la carpeta `android` del proyecto

### Paso 3: Generar APK firmada

1. En Android Studio: **Build** > **Generate Signed Bundle / APK**
2. Selecciona **APK**
3. Configura tu keystore (o crea uno nuevo)
4. Selecciona la variante **release**
5. La APK estará en `android/app/release/app-release.apk`



## Notas Técnicas

- Este proyecto usa **componentes standalone de Angular**, no módulos tradicionales
- Los Web Components de Ionic requieren inicialización explícita con `defineCustomElements()` cuando se usa Capacitor
- La tasa de cambio (8 GTQ = 1 USD) está hardcodeada en el componente `home.page.ts`
