# 🧹 Limpieza de /public - Migración a API

**Fecha:** 27 de enero de 2026  
**Estado:** ✅ **COMPLETADO**

---

## 📊 Resumen de Cambios

### 🗑️ Archivos y Carpetas Eliminados (~180MB)

#### Contenido Dinámico (ahora desde API)
- ❌ `noticias/` (3.9MB) → Ahora: `GET /api/noticias`
- ❌ `nosotros/` → Ahora: `GET /api/nosotros`
- ❌ `Profesores/` → Ahora: `GET /api/directorios`
- ❌ `ProfesorAsociadoA/` (2.0MB) → Ahora: `GET /api/directorios`
- ❌ `ProfesorDeAsignatura/` (5.9MB) → Ahora: `GET /api/directorios`

#### Documentos (ahora desde API)
- ❌ `becas/` (15MB) → Ahora: `GET /api/becas` o `GET /api/documentos`
- ❌ `ProductosInvestigacion/` (12MB) → Ahora: `GET /api/productos-investigacion`
- ❌ `ExtensionUniversitaria/` (6.1MB) → Ahora: `GET /api/extension`
- ❌ `proceso-ingreso/` (6.0MB) → Ahora: `GET /api/servicios-escolares`

#### Archivos Estáticos Grandes (ahora desde API)
- ❌ `PORTADASPE/` (78MB) → Ahora: `GET /api/carreras`
- ❌ `PE2025/` (22MB) → Ahora: `GET /api/carreras`
- ❌ `PIT/` (17MB) → Ahora: `GET /api/documentos`
- ❌ `GACETA/` → Ahora: `GET /api/documentos`
- ❌ `Coordiancion de genero/` (6.3MB) → Ahora: `GET /api/documentos`
- ❌ `miEscuela/` → Ahora: según contenido

#### Archivos Individuales
- ❌ `CALENDARIOUTTECAM2024-2025.pdf` → Ahora: `GET /api/calendarios`
- ❌ `becas.pdf` → Ahora: `GET /api/becas`
- ❌ `calendario.png` → Ahora: `GET /api/calendarios`
- ❌ `modeloeducativo.png` → Ahora: `GET /api/modelo-educativo`
- ❌ `hero1.jpg`, `hero2.jpg` → Ahora: `GET /api/hero-slides`
- ❌ `PortadaPW.jpg` → Ahora: desde API

---

## ✅ Archivos Mantenidos (~15MB)

### Recursos Estáticos del Frontend
- ✅ `logo.png` (96KB) - Logo institucional
- ✅ `icon.png` (49KB) - Favicon
- ✅ `vite.svg` (1.5KB) - Icono de Vite
- ✅ `motocle.png` (135KB) - Mascota de la universidad
- ✅ `motocle404.png` (1.6MB) - Imagen de error 404
- ✅ `banner_ut.webp` (1.3MB) - Banner general
- ✅ `banner_ut2.webp` (1.5MB) - Banner general
- ✅ `INGRESOUTTECAM2025.jpg` (6.0MB) - Banner de ingreso
- ✅ `INGRESOUTTECAM2025.webp` (1.2MB) - Banner de ingreso optimizado
- ✅ `logos/` - Logos institucionales
- ✅ `Organigrama/` - Imágenes del organigrama (si es estático)
- ✅ `sw.js` (3.3KB) - Service Worker
- ✅ `last-update.json` (48B) - Metadata

---

## 📉 Impacto

### Reducción de Tamaño
- **Antes:** ~195MB
- **Después:** ~15MB
- **Ahorro:** ~180MB (92% de reducción)

### Beneficios
- ✅ Menor tamaño del bundle de producción
- ✅ Despliegues más rápidos
- ✅ Contenido dinámico actualizable sin redesplegar frontend
- ✅ Mejor separación de responsabilidades
- ✅ Contenido centralizado en el backend

---

## 🔄 Migración de Código

### Antes (archivos estáticos)
```javascript
// Imagen desde /public
<img src="/noticias/noticia1.jpg" alt="Noticia" />

// PDF desde /public
<a href="/becas/convocatoria.pdf">Descargar</a>
```

### Después (desde API)
```javascript
// Obtener noticias desde API
const noticias = await fetch('http://localhost:3002/api/noticias').then(r => r.json());

// Imagen desde backend
<img src={`http://localhost:3002${noticia.imagen_url}`} alt={noticia.titulo} />
// Ejemplo: http://localhost:3002/uploads/noticias/noticia1.jpg

// PDF desde backend
<a href={`http://localhost:3002${beca.documento_url}`}>Descargar</a>
// Ejemplo: http://localhost:3002/uploads/becas/convocatoria.pdf
```

---

## 🎯 Tareas Pendientes

### 1. Actualizar Componentes del Frontend

#### Noticias
```javascript
// src/pages/Noticias.jsx
const [noticias, setNoticias] = useState([]);

useEffect(() => {
  fetch('http://localhost:3002/api/noticias')
    .then(r => r.json())
    .then(data => setNoticias(data));
}, []);

// Renderizar
{noticias.map(noticia => (
  <img src={`http://localhost:3002${noticia.imagen_url}`} />
))}
```

#### Nosotros (Visión, Misión, Valores)
```javascript
// src/pages/Nosotros.jsx
const [contenido, setContenido] = useState([]);

useEffect(() => {
  fetch('http://localhost:3002/api/nosotros')
    .then(r => r.json())
    .then(data => setContenido(data));
}, []);
```

#### Directorio
```javascript
// src/pages/Directorio.jsx
const [directorio, setDirectorio] = useState([]);

useEffect(() => {
  fetch('http://localhost:3002/api/directorios')
    .then(r => r.json())
    .then(data => setDirectorio(data));
}, []);
```

#### Hero Slides
```javascript
// src/components/HeroSlider.jsx
const [slides, setSlides] = useState([]);

useEffect(() => {
  fetch('http://localhost:3002/api/hero-slides')
    .then(r => r.json())
    .then(data => setSlides(data));
}, []);
```

#### Carreras
```javascript
// src/pages/Carreras.jsx
const [carreras, setCarreras] = useState([]);

useEffect(() => {
  fetch('http://localhost:3002/api/carreras')
    .then(r => r.json())
    .then(data => setCarreras(data));
}, []);
```

### 2. Configurar Variables de Entorno

```env
# .env.local
VITE_API_URL=http://localhost:3002
VITE_UPLOADS_URL=http://localhost:3002/uploads
```

### 3. Crear Servicio API Centralizado

```javascript
// src/services/api.js
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3002';

export const api = {
  noticias: {
    getAll: () => fetch(`${API_URL}/api/noticias`).then(r => r.json()),
    getById: (id) => fetch(`${API_URL}/api/noticias/${id}`).then(r => r.json())
  },
  nosotros: {
    getAll: () => fetch(`${API_URL}/api/nosotros`).then(r => r.json())
  },
  directorios: {
    getAll: () => fetch(`${API_URL}/api/directorios`).then(r => r.json())
  },
  carreras: {
    getAll: () => fetch(`${API_URL}/api/carreras`).then(r => r.json()),
    getById: (id) => fetch(`${API_URL}/api/carreras/${id}`).then(r => r.json())
  },
  heroSlides: {
    getAll: () => fetch(`${API_URL}/api/hero-slides`).then(r => r.json())
  },
  eventos: {
    getAll: () => fetch(`${API_URL}/api/eventos`).then(r => r.json())
  },
  becas: {
    getAll: () => fetch(`${API_URL}/api/becas`).then(r => r.json())
  }
};

// Uso en componentes
import { api } from './services/api';

const noticias = await api.noticias.getAll();
```

### 4. Actualizar Rutas de Imágenes

```javascript
// Función helper para construir URLs de imágenes
export const getImageUrl = (path) => {
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3002';
  return path ? `${API_URL}${path}` : '/placeholder.jpg';
};

// Uso
<img src={getImageUrl(noticia.imagen_url)} alt={noticia.titulo} />
```

---

## 📋 Checklist de Migración

- [ ] Configurar variables de entorno (VITE_API_URL)
- [ ] Crear servicio API centralizado
- [ ] Migrar componente de Noticias
- [ ] Migrar componente de Nosotros
- [ ] Migrar componente de Directorio
- [ ] Migrar componente de Hero Slides
- [ ] Migrar componente de Carreras
- [ ] Migrar componente de Eventos
- [ ] Migrar componente de Becas
- [ ] Migrar componente de Productos de Investigación
- [ ] Migrar componente de Extensión Universitaria
- [ ] Migrar componente de Calendarios
- [ ] Migrar componente de Modelo Educativo
- [ ] Actualizar todas las rutas de imágenes
- [ ] Probar en desarrollo
- [ ] Probar en producción
- [ ] Actualizar documentación

---

## 🔗 Referencias

- **Backend API:** http://localhost:3002
- **Documentación API:** [API_REFERENCE.md](../BKUTTECAM/docs/API_REFERENCE.md)
- **Guía de Integración:** [frontend_integration_guide.md](../BKUTTECAM/API_READY.md)

---

## 📞 Soporte

Si encuentras problemas durante la migración:
1. Verifica que el backend esté corriendo en el puerto 3002
2. Revisa la consola del navegador para errores de CORS
3. Verifica que las URLs de las imágenes sean correctas
4. Consulta la documentación de la API

---

**Estado:** ✅ Limpieza completada - Listo para migración de código  
**Última actualización:** 27 de enero de 2026
