# Especificación de API de CMS para el Componente "Nosotros"

## Introducción

Esta especificación define la API de CMS necesaria para gestionar el contenido dinámico del componente "Nosotros" en la aplicación web de la Universidad Tecnológica de Tecamachalco. El componente incluye secciones como Visión, Misión, Valores, Política Integral, Objetivo Integral y Política de Igualdad, No Discriminación y Derechos Humanos.

La API debe permitir a los administradores del CMS crear, leer, actualizar y eliminar (CRUD) el contenido de estas secciones de manera segura y eficiente.

## Base URL

La API estará disponible en: `https://api.utt.edu.mx/cms/nosotros`

## Autenticación

Todos los endpoints requieren autenticación mediante JWT (JSON Web Token) en el header `Authorization: Bearer <token>`. Solo usuarios con rol de administrador pueden acceder a los endpoints de escritura.

## Endpoints

### 1. Obtener Contenido de "Nosotros"

- **Método**: GET
- **URL**: `/content`
- **Descripción**: Recupera todo el contenido dinámico para el componente "Nosotros".
- **Respuesta Exitosa (200)**:
  ```json
  {
    "vision": {
      "imageSrc": "nosotros/vision.jpg",
      "title": "Visión",
      "description": "En el año 2027 ser una institución de excelencia, reconocida Nacional e Internacionalmente por su eficiencia, eficacia, pertinencia, equidad, inclusión, vinculación y cuerpos académicos consolidados y comprometidos con las expectativas de los aprendientes y de la sociedad, al brindar educación de calidad y profesionistas con alto sentido humano, competitivos e integrados en el ámbito productivo"
    },
    "mision": {
      "imageSrc": "nosotros/mision.webp",
      "title": "Misión",
      "description": "Somos una Institución de Educación Superior comprometida con la excelencia, transparencia y rendición de cuentas, que brinda servicios educativos, científicos y tecnológicos con calidad, equidad, inclusión, responsabilidad social y sentido humano para contribuir al bienestar y desarrollo integral regional, estatal y nacional, cumpliendo los requerimientos de las partes interesadas, mediante un modelo formativo integral."
    },
    "valores": {
      "imageSrc": "nosotros/valores.avif",
      "title": "Valores",
      "description": [
        "Austeridad",
        "Honestidad",
        "Empatía",
        "Generosidad",
        "Respeto",
        "Tolerancia",
        "Igualdad",
        "Equidad",
        "Justicia",
        "Fraternidad",
        "Compromiso",
        "Bien Común"
      ]
    },
    "politicaIntegral": "Somos una institución comprometida en la formación de profesionistas con responsabilidad social, sentido humano y ético, que en conjunto con la comunidad universitaria, contribuyen al desarrollo sustentable a través de establecimiento de objetivos integrales, actualización e innovación de los programas educativos, gestión de la propiedad intelectual y la mejora continua del Sistema de Gestión Integral, considerando el desarrollo educativo, científico y técnico, cumpliendo el marco legal aplicable, considerando las necesidades y expectativas de las partes interesadas, atendiendo los criterios ambientales de manera que se pueda controlar y prevenir la contaminación derivada de nuestros procesos y servicios para la preservación del medio ambiente.",
    "objetivoIntegral": "Formar integralmente profesionistas competentes socialmente responsables, creativos, emprendedores e innovadores, comprometidos con el cuidado del medio ambiente y la sustentabilidad, a través del proceso enseñanza-aprendizaje, conducido por una planta docente con sentido humano, perfil profesional, experiencia y capacitación adecuada para la realización de su labor educativa.",
    "noDiscriminacion": [
      [
        "Apariencia Física",
        "Cultura",
        "Discapacidad",
        "Idioma"
      ],
      [
        "Estado civil",
        "Religión",
        "Sexo",
        "Embarazo"
      ],
      [
        "Opiniones",
        "Origen étnico o nacional",
        "Género",
        "Edad"
      ]
    ]
  }
  ```

### 2. Actualizar Contenido de "Nosotros"

- **Método**: PUT
- **URL**: `/content`
- **Descripción**: Actualiza todo el contenido dinámico para el componente "Nosotros".
- **Cuerpo de la Solicitud**:
  ```json
  {
    "vision": {
      "imageSrc": "nosotros/vision.jpg",
      "title": "Visión",
      "description": "En el año 2027 ser una institución de excelencia, reconocida Nacional e Internacionalmente por su eficiencia, eficacia, pertinencia, equidad, inclusión, vinculación y cuerpos académicos consolidados y comprometidos con las expectativas de los aprendientes y de la sociedad, al brindar educación de calidad y profesionistas con alto sentido humano, competitivos e integrados en el ámbito productivo"
    },
    "mision": {
      "imageSrc": "nosotros/mision.webp",
      "title": "Misión",
      "description": "Somos una Institución de Educación Superior comprometida con la excelencia, transparencia y rendición de cuentas, que brinda servicios educativos, científicos y tecnológicos con calidad, equidad, inclusión, responsabilidad social y sentido humano para contribuir al bienestar y desarrollo integral regional, estatal y nacional, cumpliendo los requerimientos de las partes interesadas, mediante un modelo formativo integral."
    },
    "valores": {
      "imageSrc": "nosotros/valores.avif",
      "title": "Valores",
      "description": [
        "Austeridad",
        "Honestidad",
        "Empatía",
        "Generosidad",
        "Respeto",
        "Tolerancia",
        "Igualdad",
        "Equidad",
        "Justicia",
        "Fraternidad",
        "Compromiso",
        "Bien Común"
      ]
    },
    "politicaIntegral": "Somos una institución comprometida en la formación de profesionistas con responsabilidad social, sentido humano y ético, que en conjunto con la comunidad universitaria, contribuyen al desarrollo sustentable a través de establecimiento de objetivos integrales, actualización e innovación de los programas educativos, gestión de la propiedad intelectual y la mejora continua del Sistema de Gestión Integral, considerando el desarrollo educativo, científico y técnico, cumpliendo el marco legal aplicable, considerando las necesidades y expectativas de las partes interesadas, atendiendo los criterios ambientales de manera que se pueda controlar y prevenir la contaminación derivada de nuestros procesos y servicios para la preservación del medio ambiente.",
    "objetivoIntegral": "Formar integralmente profesionistas competentes socialmente responsables, creativos, emprendedores e innovadores, comprometidos con el cuidado del medio ambiente y la sustentabilidad, a través del proceso enseñanza-aprendizaje, conducido por una planta docente con sentido humano, perfil profesional, experiencia y capacitación adecuada para la realización de su labor educativa.",
    "noDiscriminacion": [
      [
        "Apariencia Física",
        "Cultura",
        "Discapacidad",
        "Idioma"
      ],
      [
        "Estado civil",
        "Religión",
        "Sexo",
        "Embarazo"
      ],
      [
        "Opiniones",
        "Origen étnico o nacional",
        "Género",
        "Edad"
      ]
    ]
  }
  ```
- **Respuesta Exitosa (200)**: `{ "message": "Contenido actualizado exitosamente" }`
- **Errores**: 400 (Bad Request) si los datos son inválidos, 401 (Unauthorized) si no autenticado, 403 (Forbidden) si no tiene permisos.

### 3. Actualizar Sección Específica

- **Método**: PATCH
- **URL**: `/content/{section}`
- **Parámetros de URL**:
  - `section`: Puede ser `vision`, `mision`, `valores`, `politicaIntegral`, `objetivoIntegral`, `noDiscriminacion`
- **Descripción**: Actualiza una sección específica del contenido.
- **Cuerpo de la Solicitud**: Depende de la sección (ver estructura en GET).
- **Respuesta Exitosa (200)**: `{ "message": "Sección actualizada exitosamente" }`

## Modelos de Datos

### Feature (Visión, Misión, Valores)
```json
{
  "imageSrc": "string (URL relativa a /public)",
  "title": "string",
  "description": "string | string[] (para valores es array)"
}
```

### No Discriminación
Array de arrays de strings, representando las columnas de listas.

## Consideraciones de Seguridad

- Validar todos los inputs para prevenir inyección de código.
- Sanitizar HTML si se permite en descripciones.
- Limitar el tamaño de las imágenes y textos.
- Implementar rate limiting para prevenir abuso.

## Manejo de Errores

- **400 Bad Request**: Datos inválidos.
- **401 Unauthorized**: Token faltante o inválido.
- **403 Forbidden**: Usuario sin permisos.
- **404 Not Found**: Recurso no encontrado.
- **500 Internal Server Error**: Error del servidor.

## Versionado

Esta API sigue el versionado semántico. La versión actual es v1. Futuras versiones serán accesibles en `/v2/...`.

## Notas Adicionales

- Las imágenes deben subirse a través de un endpoint separado de manejo de archivos (no cubierto en esta spec).
- El frontend debe cachear el contenido para mejorar el rendimiento.
- Considerar internacionalización si se expande a múltiples idiomas.
