"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react"
import { Link } from "react-router-dom"

    interface SubMenuItem {
    label: string
    href?: string
    submenu?: SubMenuItem[]
    }

    interface MenuItem {
    label: string
    href?: string
    submenu?: SubMenuItem[]
    }

    export default function Navbar() {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null)
    const [hoveredSubItem, setHoveredSubItem] = useState<string | null>(null)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null)
    const [openMobileSubSubmenu, setOpenMobileSubSubmenu] = useState<string | null>(null)
    const [subMenuDirection, setSubMenuDirection] = useState<"left" | "right">("right")
    const subMenuRef = useRef<HTMLDivElement>(null)

    const menuItems: MenuItem[] = [
        {
        label: "Quiénes somos",
        href: "/quienes-somos",
        submenu: [
            { label: "Nosotros", 
            href: "/nosotros",
            


            },
            {
            label: "Directorios",
            
            submenu: [
                { label: "Directorio ", href: "/directorios" },
                { label: "Organigrama", href: "/organigrama" },
            ],
            },
            { label: "Calendario", href: "/calendario" },
            {
            label: "Disposición jurídica",
           
            submenu: [
                { label: "Reglamentos", href: "/reglamentos" },
                { label: "Lineamientos", href: "/lineamientos" },
                { label: "Políticas", href: "/politicas" },
                { label: "Normatividad", href: "/normatividad" },
            ],
            },
            {
            label: "Programas de desarrollo",
            href: "/programas-desarrollo",
           
            },
            {
            label: "Comités",
            
            submenu: [
                { label: "Comité Académico", href: "/comite-academico" },
                { label: "Comité de Vinculación", href: "/comite-vinculacion" },
                { label: "Comité de Calidad", href: "/comite-calidad" },
                { label: "Comité de Investigación", href: "/comite-investigacion" },
            ],
            },
        ],
        },
        {
        label: "Admisión",
        href: "/admision",
        submenu: [
            { label: "Proceso de admisión", href: "/proceso-admision" },
            { label: "Servicios escolares", href: "/serviciosEscolares" },
            {
            label: "Requisitos",
            href: "/requisitos",
            
           
            },
            {
            label: "Becas y apoyos",
            href: "/becas-apoyos",
            submenu: [
                { label: "Becas académicas", href: "/becas-academicas" },
               
            ],
            },
        ],
        },
        {
        label: "Academia",
       
        submenu: [
            {
            label: "Carreras",
            href: "/#carreras",
         
            },
            { label: "Profesores", href: "/profesores" },
        ],
        },
        {
        label: "Vinculación",
        href: "/vinculacion",
        submenu: [
          
            { label: "Desempeño de egresados", href: "/practicas", submenu: [
                { label: "Bolsa de trabajo", href: "/bolsaTrabajo" },
                { label: "Encuentro de egresados", href: "/egresados" },
            ], },
            { label: "Docente miembros del Sistema Nacional de Investigadoras e Investigadores SNII", href: "/estadias" },
            { label: "Educación continua", href: "/bolsa-trabajo" ,  submenu: [
                { label: "Catálogo de cursos y talleres", href: "/cursos" },
                { label: "Cursos y talleres realizados ", href: "/diplomados" },
            ], },
            { label: "Entidad de certificación y evaluación", href: "/convenios" },
            { label: "Movilidad internacional", href: "/convenios" },
            { label: "Prácticas y estadías", href: "/convenios",
            submenu: [
                { label: "Catálogo de empresas para estadías ", href: "/practicas-profesionales" },
                { label: "Documentos para la gestión de estadías", href: "/estadias" },
                { label: "Servicio social", href: "/estadias" },
            ], }, 
            { label: "Repositorio digital de productos de investigación", href: "/vinculacion" },
            { label: "Servicios Tecnológicos", href: "/convenios", submenu:[
                { label: "Catálogo de servicios tecnológicosón", href: "/laboratorio-innovacion" },
                { label: "Servicios tecnológicos realizados ", href: "/laboratorio-manufactura" },
            ],},
            { label: "Seminario café científico", href: "/convenios" },
        ],
        },
        {
        label: "Accesos",
        href: "/accesos",
        submenu: [
            { label: "Portal estudiantes", href: "/portal-estudiantes" },
            { label: "PIT - Programa Institucional de Tutorías/Portal docentes", href: "/programa-institucional-tutorias" },

            { label: "Portal administrativo", href: "/portal-administrativo" },
            {
            label: "Biblioteca digital",
            href: "https://elibro.net/es/lc/uttecam/login_usuario/?next=/es/lc/uttecam/inicio/",
            },
            
        ],
        },
    ]

    useEffect(() => {
        if (subMenuRef.current && hoveredSubItem) {
        const rect = subMenuRef.current.getBoundingClientRect()
        const windowWidth = window.innerWidth
        const subMenuWidth = 200 // ancho del submenú

        if (rect.right + subMenuWidth > windowWidth - 20) {
            setSubMenuDirection("left")
        } else {
            setSubMenuDirection("right")
        }
        }
    }, [hoveredSubItem])

    const dropdownVariants = {
        hidden: {
        opacity: 0,
        y: -15,
        scale: 0.95,
        },
        visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.25,
            ease: "easeOut",
        },
        },
        exit: {
        opacity: 0,
        y: -15,
        scale: 0.95,
        transition: {
            duration: 0.2,
            ease: "easeIn",
        },
        },
    }

    const subDropdownVariants = {
        hidden: {
        opacity: 0,
        x: subMenuDirection === "right" ? -15 : 15,
        scale: 0.95,
        },
        visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 0.25,
            ease: "easeOut",
        },
        },
        exit: {
        opacity: 0,
        x: subMenuDirection === "right" ? -15 : 15,
        scale: 0.95,
        transition: {
            duration: 0.2,
            ease: "easeIn",
        },
        },
    }

    const toggleMobileSubmenu = (itemLabel: string) => {
        if (openMobileSubmenu === itemLabel) {
        setOpenMobileSubmenu(null)
        setOpenMobileSubSubmenu(null)
        } else {
        setOpenMobileSubmenu(itemLabel)
        setOpenMobileSubSubmenu(null)
        }
    }

    const toggleMobileSubSubmenu = (itemLabel: string) => {
        if (openMobileSubSubmenu === itemLabel) {
        setOpenMobileSubSubmenu(null)
        } else {
        setOpenMobileSubSubmenu(itemLabel)
        }
    }

    return (
        <nav className="bg-white shadow-lg relative z-20 w-full">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
                <div className="flex items-center">
                    <Link to={'/'}>
                        <img src="/logo.png" alt="" className="w-50"/>
                    </Link>
                </div>
            </div>

            {/* Desktop Navigation Menu */}
            <div className="hidden lg:block">
                <div className="ml-10 flex items-center space-x-4 mr-4">
                  {menuItems.map((item) => (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => {
                        setHoveredItem(item.label)
                        setHoveredSubItem(null)
                      }}
                      onMouseLeave={() => {
                        setHoveredItem(null)
                        setHoveredSubItem(null)
                      }}
                    >
                      <button
                        type="button"
                        className="text-[#000000] hover:text-[#0A9782]/80 px-4 py-3 text-base font-semibold flex items-center transition-colors duration-200 focus:outline-none"
                        // No href, solo despliega el menú
                      >
                        {item.label}
                        {item.submenu && (
                          <ChevronDown
                            className={`ml-2 h-5 w-5 text-[#0A9782] transition-transform duration-200 ${
                              hoveredItem === item.label ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </button>

                      {/* First Level Dropdown */}
                      <AnimatePresence>
                        {item.submenu && hoveredItem === item.label && (
                        <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 py-3"
                        >
                            {item.submenu.map((subItem) => (
                            <div
                                key={subItem.label}
                                className="relative"
                                ref={subItem.submenu ? subMenuRef : null}
                                onMouseEnter={() => setHoveredSubItem(subItem.label)}
                                onMouseLeave={() => setHoveredSubItem(null)}
                            >
                                <a
                                href={subItem.href}
                                className="flex items-center justify-between px-5 py-3 text-[#0A9782] hover:bg-[#0A9782]/5 hover:text-[#0A9782] transition-colors duration-150 font-medium"
                                >
                                <span>{subItem.label}</span>
                                {subItem.submenu && <ChevronRight className="h-4 w-4 text-[#0A9782]" />}
                                </a>

                                {/* Second Level Dropdown */}
                                <AnimatePresence>
                                {subItem.submenu && hoveredSubItem === subItem.label && (
                                    <motion.div
                                    variants={subDropdownVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className={`absolute top-0 w-72 bg-white rounded-xl shadow-xl border border-gray-200 py-3 ${
                                        subMenuDirection === "right" ? "left-full ml-2" : "right-full mr-2"
                                    }`}
                                    >
                                    {subItem.submenu.map((subSubItem) => (
                                        <a
                                        key={subSubItem.label}
                                        href={subSubItem.href}
                                        className="block px-5 py-3 text-[#0A9782] hover:bg-[#0A9782]/5 hover:text-[#0A9782] transition-colors duration-150 font-medium"
                                        >
                                        {subSubItem.label}
                                        </a>
                                    ))}
                                    </motion.div>
                                )}
                                </AnimatePresence>
                            </div>
                            ))}
                        </motion.div>
                        )}
                    </AnimatePresence>
                    </div>
                  ))}
                </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
                <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#0A9782] hover:text-[#0A9782]/80 p-2"
                >
                {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                </button>
            </div>
            </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
            {mobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden bg-white border-t border-gray-200"
            >
                <div className="px-6 py-4 space-y-2">
                {menuItems.map((item) => (
                    <div key={item.label}>
                    <div className="flex items-center justify-between">
                      {item.submenu ? (
                        <button
                          type="button"
                          className="text-[#0A9782] font-semibold py-2 block w-full text-left"
                          onClick={() => toggleMobileSubmenu(item.label)}
                        >
                          {item.label}
                        </button>
                      ) : (
                        <a
                          href={item.href}
                          className="text-[#0A9782] font-semibold py-2 block"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </a>
                      )}
                      {item.submenu && (
                        <button onClick={() => toggleMobileSubmenu(item.label)} className="text-[#0A9782] p-1">
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-200 ${
                              openMobileSubmenu === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    <AnimatePresence>
                        {item.submenu && openMobileSubmenu === item.label && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 space-y-1"
                        >
                            {item.submenu.map((subItem) => (
                            <div key={subItem.label}>
                                <div className="flex items-center justify-between">
                                <a
                                    href={subItem.href}
                                    className="text-[#0A9782] py-2 block"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {subItem.label}
                                </a>
                                {subItem.submenu && (
                                    <button
                                    onClick={() => toggleMobileSubSubmenu(subItem.label)}
                                    className="text-[#0A9782] p-1"
                                    >
                                    <ChevronRight
                                        className={`h-4 w-4 transition-transform duration-200 ${
                                        openMobileSubSubmenu === subItem.label ? "rotate-90" : ""
                                        }`}
                                    />
                                    </button>
                                )}
                                </div>

                                {/* Mobile Sub-submenu */}
                                <AnimatePresence>
                                {subItem.submenu && openMobileSubSubmenu === subItem.label && (
                                    <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="ml-4 space-y-1"
                                    >
                                    {subItem.submenu.map((subSubItem) => (
                                        <a
                                        key={subSubItem.label}
                                        href={subSubItem.href}
                                        className="text-[#0A9782] py-2 block"
                                        onClick={() => setMobileMenuOpen(false)}
                                        >
                                        {subSubItem.label}
                                        </a>
                                    ))}
                                    </motion.div>
                                )}
                                </AnimatePresence>
                            </div>
                            ))}
                        </motion.div>
                        )}
                    </AnimatePresence>
                    </div>
                ))}
                </div>
            </motion.div>
            )}
        </AnimatePresence>
        </nav>
    )
}
