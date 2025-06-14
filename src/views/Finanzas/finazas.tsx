import TablaDocumentosReutilizable2 from "@/components/tablaDocumentosReutilizable2"


const datos = [
    {
        id: "2025_T1",
        titulo: "1. Estados Financieros 1er Trimestre 2025",
        documentos: [
            { id: "doc1", titulo: "Ayudas.PDF", archivo: "Ayudas.PDF" },
            { id: "doc2", titulo: "Edo. de Actividades.PDF", archivo: "Edo. de Actividades.PDF" },
            { id: "doc3", titulo: "Edo. Situación Financiera.PDF", archivo: "Edo. Situación Financiera.PDF" },
            { id: "doc4", titulo: "Edo. Cambios en la Sit Fin_.PDF", archivo: "Edo. Cambios en la Sit Fin_.PDF" },
            { id: "doc5", titulo: "Edo de Flujos de efectivos.PDF", archivo: "Edo de Flujos de efectivos.PDF" },
            { id: "doc6", titulo: "Edo. Variación en la Hda Púb.PDF", archivo: "Edo. Variación en la Hda Púb.PDF" },
            { id: "doc7", titulo: "Pasivos contingentes.PDF", archivo: "Pasivos contingentes.PDF" },
            { id: "doc8", titulo: "Notas a los Edos. Financieros.PDF", archivo: "Notas a los Edos. Financieros.PDF" },
            { id: "doc9", titulo: "Edo. Analítico del Activo.PDF", archivo: "Edo. Analítico del Activo.PDF" },
            { id: "doc10", titulo: "Analítico de la Deuda y otros Pasivo.PDF", archivo: "Analítico de la Deuda y otros Pasivo.PDF" },
            { id: "doc11", titulo: "Estado Analítico de Ingresos.PDF", archivo: "Estado Analítico de Ingresos.PDF" },
            { id: "doc12", titulo: "Clasificación Administrativa.PDF", archivo: "Clasificación Administrativa.PDF" },
            { id: "doc13", titulo: "Clasificación Económica.PDF", archivo: "Clasificación Económica.PDF" },
            { id: "doc14", titulo: "Clasificación por objeto del Gasto.PDF", archivo: "Clasificación por objeto del Gasto.PDF" },
            { id: "doc15", titulo: "Clasificación Funcional.PDF", archivo: "Clasificación Funcional.PDF" },
            { id: "doc16", titulo: "Endeudamiento Neto.PDF", archivo: "Endeudamiento Neto.PDF" },
            { id: "doc17", titulo: "Intereses de la deuda.PDF", archivo: "Intereses de la deuda.PDF" },
            { id: "doc18", titulo: "Gasto por Categoría Programática.PDF", archivo: "Gasto por Categoría Programática.PDF" },
            { id: "doc19", titulo: "Indicadores para resultados.PDF", archivo: "Indicadores para resultados.PDF" },
            { id: "doc20", titulo: "Proyectos de inversión.PDF", archivo: "Proyectos de inversión.PDF" },
            { id: "doc21", titulo: "Analítico del Ingreso Marzo 2025.PDF", archivo: "Analítico del Ingreso Marzo 2025.PDF" },
            { id: "doc22", titulo: "Analítico de Egresos 2501_Marzo 2025.PDF", archivo: "Analítico de Egresos 2501_Marzo 2025.PDF" },
            { id: "doc23", titulo: "Analítico de Egresos 2502_Marzo 2025.PDF", archivo: "Analítico de Egresos 2502_Marzo 2025.PDF" },
            { id: "doc24", titulo: "Formatos de LDF 1er Trim.pdf", archivo: "Formatos de LDF 1er Trim.pdf" },
            { id: "doc25", titulo: "Edo Analítico pto cap gasto.PDF", archivo: "Edo Analítico pto cap gasto.PDF" },
            { id: "doc26", titulo: "Fuente de financiamiento.PDF", archivo: "Fuente de financiamiento.PDF" },
            { id: "doc27", titulo: "Flujos de Fondos.PDF", archivo: "Flujos de Fondos.PDF" }
        ]
    },
    {
        id: "2024_T4",
        titulo: "4. Estados Financieros 4° Trimestre 2024",
        documentos: [
            { id: "doc28", titulo: "Montos ayudas.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2024/1. Montos ayudas.PDF" },
            { id: "doc29", titulo: "Edo. de Actividades.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2024/2. Edo. de Actividades.PDF" },
            { id: "doc30", titulo: "Edo. Situación Financiera.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2024/3. Edo. Situación Financiera.PDF" },
            { id: "doc31", titulo: "Edo. Cambios en la Sit Fin.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2024/4. Edo. Cambios en la Sit Fin.PDF" },
            { id: "doc32", titulo: "Edo de Flujos de efectivos.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2024/5. Edo de Flujos de efectivos.PDF" },
            { id: "doc33", titulo: "Edo. Variación en la Hda Púb.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2024/6. Edo. Variación en la Hda Púb.PDF" },
            { id: "doc34", titulo: "Pasivos Contingentes.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2024/7. Pasivos Contingentes.PDF" },
            { id: "doc35", titulo: "Notas a los Edos. Financieros.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2024/8. Notas a los Edos. Financieros.PDF" },
            { id: "doc36", titulo: "Edo. Analítico del Activo.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2024/9. Edo. Analítico del Activo.PDF" },
            { id: "doc37", titulo: "Analítico de la Deuda y otros Pasivo.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2024/10. Analítico de la Deuda y otros Pasivo.PDF" },
            { id: "doc38", titulo: "Estado Analítico de Ingresos.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2024/11. Estado Analítico de Ingresos.PDF" },
            { id: "doc39", titulo: "Clasificación Administrativa.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2024/12. Clasificación Administrativa.PDF" },
            { id: "doc40", titulo: "Clasificación Económica.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2024/13. Clasificación Económica.PDF" },
            { id: "doc41", titulo: "Clasificación por objeto del Gasto.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2024/14. Clasificación por objeto del Gasto.PDF" },
            { id: "doc42", titulo: "Clasificación Funcional.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2024/15. Clasificación Funcional.PDF" },
            { id: "doc43", titulo: "Endeudamiento Neto.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2024/16. Endeudamiento Neto.PDF" },
            { id: "doc44", titulo: "Intereses de la deuda.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2024/17. Intereses de la deuda.PDF" },
            { id: "doc45", titulo: "Gasto por Categoría Programática.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2024/18. Gasto por Categoría Programática.PDF" },
            { id: "doc46", titulo: "Indicadores para resultados.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2024/19. Indicadores para resultados.PDF" },
            { id: "doc47", titulo: "Proyectos de inversión.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2024/20. Proyectos de inversión.PDF" },
            { id: "doc48", titulo: "Edo. Presupuesto Ingresos.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2024/21. Edo. Presupuesto Ingresos.PDF" },
            { id: "doc49", titulo: "Edo. Presupuesto Egresos_Federal.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2024/22. Edo. Presupuesto Egresos_Federal.PDF" },
            { id: "doc50", titulo: "4° Trimestre FLDF.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2024/23. 4° Trimestre FLDF.PDF" },
            { id: "doc51", titulo: "Bienes muebles e inmuebles.pdf", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2024/24. Bienes muebles e inmuebles.pdf" },
            { id: "doc52", titulo: "Capítulo del gasto.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2024/25. Capítulo del gasto.PDF" },
            { id: "doc53", titulo: "Fuente de financiamiento.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2024/26. Fuente de financiamiento.PDF" },
            { id: "doc54", titulo: "Flujo de Fondos.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2024/27. Flujo de Fondos.PDF" },
            { id: "doc55", titulo: "Capítulo del gasto por partida.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2024/28. Capítulo del gasto por partida.PDF" }
        ]
    },
    {
        id: "2024T3",
        titulo: "3. Estados Financieros 3° Trimestre 2024",
        documentos: [
            { id: "1", titulo: "Montos ayudas.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2024/1. Montos ayudas.PDF" },
            { id: "2", titulo: "Edo. de Actividades.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2024/2. Edo. de Actividades.PDF" },
            { id: "3", titulo: "Edo. Situación Financiera.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2024/3. Edo. Situación Financiera.PDF" },
            { id: "4", titulo: "Edo. Cambios en la Sit Fin.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2024/4. Edo. Cambios en la Sit Fin.PDF" },
            { id: "5", titulo: "Edo de Flujos de efectivos.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2024/5. Edo de Flujos de efectivos.PDF" },
            { id: "6", titulo: "Edo. Variación en la Hda Púb.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2024/6. Edo. Variación en la Hda Púb.PDF" },
            { id: "7", titulo: "Pasivos Contingentes.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2024/7. Pasivos Contingentes.PDF" },
            { id: "8", titulo: "Notas a los Edos. Financieros.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2024/8. Notas a los Edos. Financieros.PDF" },
            { id: "9", titulo: "Edo. Analítico del Activo.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2024/9. Edo. Analítico del Activo.PDF" },
            { id: "10", titulo: "Analítico de la Deuda y otros Pasivo.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2024/10. Analítico de la Deuda y otros Pasivo.PDF" },
            { id: "11", titulo: "Estado Analítico de Ingresos.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2024/11. Estado Analítico de Ingresos.PDF" },
            { id: "12", titulo: "Clasificación Administrativa.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2024/12. Clasificación Administrativa.PDF" },
            { id: "13", titulo: "Clasificación Económica.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2024/13. Clasificación Económica.PDF" },
            { id: "14", titulo: "Clasificación por objeto del Gasto.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2024/14. Clasificación por objeto del Gasto.PDF" },
            { id: "15", titulo: "Clasificación Funcional.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2024/15. Clasificación Funcional.PDF" },
            { id: "16", titulo: "Endeudamiento Neto.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2024/16. Endeudamiento Neto.PDF" },
            { id: "17", titulo: "Intereses de la deuda.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2024/17. Intereses de la deuda.PDF" },
            { id: "18", titulo: "Gasto por Categoría Programática.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2024/18. Gasto por Categoría Programática.PDF" },
            { id: "19", titulo: "Indicadores para resultados.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2024/19. Indicadores para resultados.PDF" },
            { id: "20", titulo: "Proyectos de inversión.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2024/20. Proyectos de inversión.PDF" },
            { id: "21", titulo: "Edo Presupuesto Egresos federal.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2024/21. Edo Presupuesto Egresos federal.PDF" },
            { id: "22", titulo: "Edo. Presupuesto Ingresos.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2024/22. Edo. Presupuesto Ingresos.PDF" },
            { id: "23", titulo: "Egresos por Unidad Junio.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2024/23. Egresos por Unidad Junio.PDF" },
            { id: "24", titulo: "Egresos por Unidad Marzo.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2024/24. Egresos por Unidad Marzo.PDF" },
            { id: "25", titulo: "Egresos por Unidad Septiembre.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2024/25. Egresos por Unidad Septiembre.PDF" }
        ]
    },
    {
        id: "2024T2",
        titulo: "2. Estados Financieros 2° Trimestre 2024",
        documentos: [
            { id: "1", titulo: "Montos ayudas.pdf", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2024/1. Montos ayudas.pdf" },
            { id: "2", titulo: "Edo. de Actividades.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2024/2. Edo. de Actividades.PDF" },
            { id: "3", titulo: "Edo. Situación Financiera.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2024/3. Edo. Situación Financiera.PDF" },
            { id: "4", titulo: "Edo. Cambios en la Sit Fin.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2024/4. Edo. Cambios en la Sit Fin.PDF" },
            { id: "5", titulo: "Edo de Flujos de efectivos.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2024/5. Edo de Flujos de efectivos.PDF" },
            { id: "6", titulo: "Edo. Variación en la Hda Púb.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2024/6. Edo. Variación en la Hda Púb.PDF" },
            { id: "7", titulo: "Pasivos Contingentes.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2024/7. Pasivos Contingentes.PDF" },
            { id: "8", titulo: "Notas a los Edos. Financieros.pdf", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2024/8. Notas a los Edos. Financieros.pdf" },
            { id: "9", titulo: "Edo. Analítico del Activo.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2024/9. Edo. Analítico del Activo.PDF" },
            { id: "10", titulo: "Analítico de la Deuda y otros Pasivos.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2024/10. Analítico de la Deuda y otros Pasivos.PDF" },
            { id: "11", titulo: "Estado Análitico de Ingresos.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2024/11. Estado Análitico de Ingresos.PDF" },
            { id: "12", titulo: "Clasificación Administrativa.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2024/12. Clasificación Administrativa.PDF" },
            { id: "13", titulo: "Clasificación Económica.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2024/13. Clasificación Económica.PDF" },
            { id: "14", titulo: "Clasificación por Objeto del Gasto.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2024/14. Clasificación por Objeto del Gasto.PDF" },
            { id: "15", titulo: "Clasifiación Funcional.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2024/15. Clasifiación Funcional.PDF" },
            { id: "16", titulo: "Endeudamiento Neto.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2024/16. Endeudamiento Neto.PDF" },
            { id: "17", titulo: "Intereses de la deuda.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2024/17. Intereses de la deuda.PDF" },
            { id: "18", titulo: "Gasto por Categoria Programatica.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2024/18. Gasto por Categoria Programatica.PDF" },
            { id: "19", titulo: "Indicadores para resultados.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2024/19. Indicadores para resultados.PDF" },
            { id: "20", titulo: "Proyectos de Inversión.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2024/20. Proyectos de Inversión.PDF" },
            { id: "21", titulo: "Inventario de bienes.pdf", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2024/21. Inventario de bienes.pdf" },
            { id: "22", titulo: "Edo Análitico de Ingresos jun.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2024/22. Edo Análitico de Ingresos jun.PDF" },
            { id: "23", titulo: "Edo Análitico de Egresos fed jun.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2024/23. Edo Análitico de Egresos fed jun.PDF" }
        ]
    },
    {
        id: "2024T1",
        titulo: "1. Estados Financieros 1° Trimestre 2024",
        documentos: [
            { id: "1", titulo: "Montos ayudas.pdf", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2024/1. Montos ayudas.pdf" },
            { id: "2", titulo: "Estado de Actividades.PDF", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2024/2. Estado de Actividades.PDF" },
            { id: "3", titulo: "Estado de Situación Financiera.PDF", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2024/3. Estado de Situación Financiera.PDF" },
            { id: "4", titulo: "Edo. Cambios en la Sit Fin.PDF", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2024/4. Edo. Cambios en la Sit Fin.PDF" },
            { id: "5", titulo: "Edo de Flujos de efectivos.PDF", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2024/5. Edo de Flujos de efectivos.PDF" },
            { id: "6", titulo: "Edo. Variación en la Hda Pública.PDF", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2024/6. Edo. Variación en la Hda Pública.PDF" },
            { id: "7", titulo: "Informe pasivos contingentes.PDF", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2024/7. Informe pasivos contingentes.PDF" },
            { id: "8", titulo: "Notas a los Edos. Financieros.PDF", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2024/8. Notas a los Edos. Financieros.PDF" },
            { id: "9", titulo: "Edo. Analítico del Activo.PDF", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2024/9. Edo. Analítico del Activo.PDF" },
            { id: "10", titulo: "Analítico de la Deuda y Otros Pasivos.PDF", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2024/10. Analítico de la Deuda y Otros Pasivos.PDF" },
            { id: "11", titulo: "Estado Análitico de Ingresos.PDF", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2024/11. Estado Análitico de Ingresos.PDF" },
            { id: "12", titulo: "Clasificación Administrativa.PDF", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2024/12. Clasificación Administrativa.PDF" },
            { id: "13", titulo: "Clasificación Económica.PDF", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2024/13. Clasificación Económica.PDF" },
            { id: "14", titulo: "Clasificación por Objeto del Gasto.PDF", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2024/14. Clasificación por Objeto del Gasto.PDF" },
            { id: "15", titulo: "Clasifiación Funcional.PDF", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2024/15. Clasifiación Funcional.PDF" },
            { id: "16", titulo: "Endeudamiento Neto.PDF", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2024/16. Endeudamiento Neto.PDF" },
            { id: "17", titulo: "Intereses de la deuda.PDF", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2024/17. Intereses de la deuda.PDF" },
            { id: "18", titulo: "Gasto por Categoria Programatica.PDF", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2024/18. Gasto por Categoria Programatica.PDF" },
            { id: "19", titulo: "Indicadores para resultados.PDF", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2024/19. Indicadores para resultados.PDF" },
            { id: "20", titulo: "Proyectos de Inversión.PDF", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2024/20. Proyectos de Inversión.PDF" },
            { id: "21", titulo: "Edo Analítico de Ingresos mzo.pdf", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2024/21. Edo Analítico de Ingresos mzo.pdf" },
            { id: "22", titulo: "Edo Analítico de Egresos fed mzo.pdf", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2024/22. Edo Analítico de Egresos fed mzo.pdf" }
        ]
    },
    {
        id: "2023T4",
        titulo: "4. Estados Financieros 4° Trimestre 2023",
        documentos: [
            { id: "doc1", titulo: "cuarto trimestre 4000 ayudas___.pdf", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2023/1. cuarto trimestre 4000 ayudas___.pdf" },
            { id: "doc2", titulo: "Edo. de Actividades.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2023/2. Edo. de Actividades.PDF" },
            { id: "doc3", titulo: "Edo. Situación Financiera.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2023/3. Edo. Situación Financiera.PDF" },
            { id: "doc4", titulo: "Edo. Cambios en la Sit Fin.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2023/4. Edo. Cambios en la Sit Fin.PDF" },
            { id: "doc5", titulo: "Edo de Flujos de efectivos.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2023/5. Edo de Flujos de efectivos.PDF" },
            { id: "doc6", titulo: "Edo. Variación en la Hda Púb.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2023/6. Edo. Variación en la Hda Púb.PDF" },
            { id: "doc7", titulo: "Informe pasivos contingentes_.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2023/7. Informe pasivos contingentes_.PDF" },
            { id: "doc8", titulo: "Notas a los Edos. Financieros.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2023/8. Notas a los Edos. Financieros.PDF" },
            { id: "doc9", titulo: "Edo. Analítico del Activo.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2023/9. Edo. Analítico del Activo.PDF" },
            { id: "doc10", titulo: "Analítico de la Deuda y otros Pasivo.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2023/10. Analítico de la Deuda y otros Pasivo.PDF" },
            { id: "doc11", titulo: "Estado Analítico de Ingresos.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2023/11. Estado Analítico de Ingresos.PDF" },
            { id: "doc12", titulo: "Clasificación Administrativa.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2023/12. Clasificación Administrativa.PDF" },
            { id: "doc13", titulo: "Clasificación Económica.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2023/13. Clasificación Económica.PDF" },
            { id: "doc14", titulo: "Clasificación por objeto del Gasto.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2023/14. Clasificación por objeto del Gasto.PDF" },
            { id: "doc15", titulo: "Clasificación Funcional.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2023/15. Clasificación Funcional.PDF" },
            { id: "doc16", titulo: "Endeudamiento Neto.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2023/16. Endeudamiento Neto.PDF" },
            { id: "doc17", titulo: "Intereses de la deuda.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2023/17. Intereses de la deuda.PDF" },
            { id: "doc18", titulo: "Gasto por Categoría Programática.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2023/18. Gasto por Categoría Programática.PDF" },
            { id: "doc19", titulo: "Indicadores para resultados.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2023/19. Indicadores para resultados.PDF" },
            { id: "doc20", titulo: "Proyectos de inversión.PDF", archivo: "/EstadosFinancieros/4. Estados Financieros 4° Trimestre 2023/20. Proyectos de inversión.PDF" }
        ]
    },
    {
        id: "2023T3",
        titulo: "3. Estados Financieros 3° Trimestre 2023",
        documentos: [
            { id: "doc1", titulo: "Montos ayudas sep_.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2023/1. Montos ayudas sep_.PDF" },
            { id: "doc2", titulo: "Edo. de Actividades.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2023/2. Edo. de Actividades.PDF" },
            { id: "doc3", titulo: "Edo. Situación Financiera.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2023/3. Edo. Situación Financiera.PDF" },
            { id: "doc4", titulo: "Edo. Cambios en la Sit Fin.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2023/4. Edo. Cambios en la Sit Fin.PDF" },
            { id: "doc5", titulo: "Edo de Flujos de efectivos.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2023/5. Edo de Flujos de efectivos.PDF" },
            { id: "doc6", titulo: "Edo. Variación en la Hda Púb.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2023/6. Edo. Variación en la Hda Púb.PDF" },
            { id: "doc7", titulo: "Informe pasivos contingentes_.pdf", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2023/7. Informe pasivos contingentes_.pdf" },
            { id: "doc8", titulo: "Notas a los Edos. Financieros.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2023/8. Notas a los Edos. Financieros.PDF" },
            { id: "doc9", titulo: "Edo. Analítico del Activo.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2023/9. Edo. Analítico del Activo.PDF" },
            { id: "doc10", titulo: "Analítico de la Deuda y otros Pasivo.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2023/10. Analítico de la Deuda y otros Pasivo.PDF" },
            { id: "doc11", titulo: "Estado Analítico de Ingresos.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2023/11. Estado Analítico de Ingresos.PDF" },
            { id: "doc12", titulo: "Clasificación Administrativa.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2023/12. Clasificación Administrativa.PDF" },
            { id: "doc13", titulo: "Clasificación Económica.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2023/13. Clasificación Económica.PDF" },
            { id: "doc14", titulo: "Clasificación por objeto del Gasto.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2023/14. Clasificación por objeto del Gasto.PDF" },
            { id: "doc15", titulo: "Clasificación Funcional.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2023/15. Clasificación Funcional.PDF" },
            { id: "doc16", titulo: "Endeudamiento Neto.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2023/16. Endeudamiento Neto.PDF" },
            { id: "doc17", titulo: "Intereses de la deuda.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2023/17. Intereses de la deuda.PDF" },
            { id: "doc18", titulo: "Gasto por Categoría Programática.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2023/18. Gasto por Categoría Programática.PDF" },
            { id: "doc19", titulo: "Indicadores para resultados.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2023/19. Indicadores para resultados.PDF" },
            { id: "doc20", titulo: "Proyectos de inversión.PDF", archivo: "/EstadosFinancieros/3. Estados Financieros 3er Trimestre 2023/20. Proyectos de inversión.PDF" }
        ]
    },
    {
        id: "2023T2",
        titulo: "2. Estados Financieros 2° Trimestre 2023",
        documentos: [
            { id: "doc1", titulo: "Capítulo 4000.pdf", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2023/1. Capítulo 4000.pdf" },
            { id: "doc2", titulo: "Edo. de Actividades.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2023/2. Edo. de Actividades.PDF" },
            { id: "doc3", titulo: "Edo. Situación Financiera.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2023/3. Edo. Situación Financiera.PDF" },
            { id: "doc4", titulo: "Edo. Cambios en la Sit. Fin.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2023/4. Edo. Cambios en la Sit. Fin.PDF" },
            { id: "doc5", titulo: "Edo. de Flujos de Efectivo.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2023/5. Edo. de Flujos de Efectivo.PDF" },
            { id: "doc6", titulo: "Edo. Variación en la Hda Púb.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2023/6. Edo. Variación en la Hda Púb.PDF" },
            { id: "doc7", titulo: "Informe pasivos contingentes_.pdf", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2023/7. Informe pasivos contingentes_.pdf" },
            { id: "doc8", titulo: "Notas a los Edos. Financieros.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2023/8. Notas a los Edos. Financieros.PDF" },
            { id: "doc9", titulo: "Edo. Analítico del Activo.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2023/9. Edo. Analítico del Activo.PDF" },
            { id: "doc10", titulo: "Analítico de la Deuda y otros Pasivos.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2023/10. Analítico de la Deuda y otros Pasivos.PDF" },
            { id: "doc11", titulo: "Estado Análitico de Ingresos.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2023/11. Estado Análitico de Ingresos.PDF" },
            { id: "doc12", titulo: "Clasificación Administrativa.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2023/12. Clasificación Administrativa.PDF" },
            { id: "doc13", titulo: "Clasificación Económica.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2023/13. Clasificación Económica.PDF" },
            { id: "doc14", titulo: "Clasificación por Objeto del Gasto.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2023/14. Clasificación por Objeto del Gasto.PDF" },
            { id: "doc15", titulo: "Clasifiación Funcional.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2023/15. Clasifiación Funcional.PDF" },
            { id: "doc16", titulo: "Endeudamiento Neto.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2023/16. Endeudamiento Neto.PDF" },
            { id: "doc17", titulo: "Intereses de la Deuda.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2023/17. Intereses de la Deuda.PDF" },
            { id: "doc18", titulo: "Gasto por Categoria Programatica.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2023/18. Gasto por Categoria Programatica.PDF" },
            { id: "doc19", titulo: "Indicadores para Resultados.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2023/19. Indicadores para Resultados.PDF" },
            { id: "doc20", titulo: "Proyectos de Inversión.PDF", archivo: "/EstadosFinancieros/2. Estados Financieros 2° Trimestre 2023/20. Proyectos de Inversión.PDF" }
        ]
    },
    {
        id: "2023T1",
        titulo: "1. Estados Financieros 1° Trimestre 2023",
        documentos: [
            { id: "doc1", titulo: "Montos ayudas.pdf", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2023/1. Montos ayudas.pdf" },
            { id: "doc2", titulo: "Estado de Actividades.pdf", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2023/2. Estado de Actividades.pdf" },
            { id: "doc3", titulo: "Estado de Situación Financiera.pdf", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2023/3. Estado de Situación Financiera.pdf" },
            { id: "doc4", titulo: "Estado de Cambios en la Situación Fin.pdf", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2023/4. Estado de Cambios en la Situación Fin.pdf" },
            { id: "doc5", titulo: "Estado de Flujos de Efectivo.pdf", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2023/5. Estado de Flujos de Efectivo.pdf" },
            { id: "doc6", titulo: "Estado de Variación en la Hda Pública.pdf", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2023/6. Estado de Variación en la Hda Pública.pdf" },
            { id: "doc7", titulo: "Informe pasivos contingentes_.pdf", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2023/7. Informe pasivos contingentes_.pdf" },
            { id: "doc8", titulo: "Notas a los Edos Financieros.pdf", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2023/8. Notas a los Edos Financieros.pdf" },
            { id: "doc9", titulo: "Estado Analítico del Activo.pdf", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2023/9. Estado Analítico del Activo.pdf" },
            { id: "doc10", titulo: "Analítico de la Deuda y Otros Pasivos.pdf", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2023/10. Analítico de la Deuda y Otros Pasivos.pdf" },
            { id: "doc11", titulo: "Estado Análitico de Ingresos.pdf", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2023/11. Estado Análitico de Ingresos.pdf" },
            { id: "doc12", titulo: "Clasificación Administrativa.pdf", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2023/12. Clasificación Administrativa.pdf" },
            { id: "doc13", titulo: "Clasificación Económica.pdf", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2023/13. Clasificación Económica.pdf" },
            { id: "doc14", titulo: "Clasificación por Objeto del Gasto.pdf", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2023/14. Clasificación por Objeto del Gasto.pdf" },
            { id: "doc15", titulo: "Clasifiación Funcional.pdf", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2023/15. Clasifiación Funcional.pdf" },
            { id: "doc16", titulo: "Endeudamiento Neto.pdf", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2023/16. Endeudamiento Neto.pdf" },
            { id: "doc17", titulo: "Intereses de la Deuda.pdf", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2023/17. Intereses de la Deuda.pdf" },
            { id: "doc18", titulo: "Gasto por Categoria Programatica.pdf", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2023/18. Gasto por Categoria Programatica.pdf" },
            { id: "doc19", titulo: "Indicadores para Resultados.pdf", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2023/19. Indicadores para Resultados.pdf" },
            { id: "doc20", titulo: "Proyectos de Inversión.pdf", archivo: "/EstadosFinancieros/1. Estados Financieros 1er Trimestre 2023/20. Proyectos de Inversión.pdf" }
        ]
    },
]

export default function Finazas() {
    return (
        <TablaDocumentosReutilizable2
            secciones={datos}
            titulo="Finanzas"
            descripcion="Explora los productos de investigación generados por la comunidad académica de la institución, organizados por año y tipo de documento."
        />
    )
}
