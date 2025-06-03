// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { ChevronDown, Menu } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardFooter } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Switch } from "@/components/ui/switch"
// import { Label } from "@/components/ui/label"

// export default function Home() {
//   const [modeloEducativo, setModeloEducativo] = useState("2024")

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Header */}
//       <header className="sticky top-0 z-50 w-full border-b bg-white">
//         <div className="container flex h-16 items-center justify-between">
//           <div className="flex items-center gap-2">
//             <Image src="/logo-uttecam.png" alt="UTTECAM Logo" width={180} height={50} className="h-auto" />
//           </div>

//           <nav className="hidden md:flex items-center gap-6">
//             <Link href="#" className="text-sm font-medium hover:text-[#0A9782] transition-colors">
//               Nosotros
//             </Link>
//             <Link href="#" className="text-sm font-medium hover:text-[#0A9782] transition-colors">
//               Servicios Escolares
//             </Link>
//             <Link href="#" className="text-sm font-medium hover:text-[#0A9782] transition-colors">
//               Vinculación
//             </Link>
//             <Link href="#" className="text-sm font-medium hover:text-[#0A9782] transition-colors">
//               Becas
//             </Link>
//             <div className="relative group">
//               <button className="flex items-center gap-1 text-sm font-medium hover:text-[#0A9782] transition-colors">
//                 Extensión Universitaria
//                 <ChevronDown className="h-4 w-4" />
//               </button>
//               <div className="absolute hidden group-hover:block right-0 mt-2 w-48 bg-white border rounded-md shadow-lg p-2">
//                 <Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">
//                   Opción 1
//                 </Link>
//                 <Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md">
//                   Opción 2
//                 </Link>
//               </div>
//             </div>
//           </nav>

//           <button className="md:hidden">
//             <Menu className="h-6 w-6" />
//           </button>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="relative bg-[#0A9782] text-white">
//         <div className="container flex flex-col lg:flex-row items-center py-12 md:py-24">
//           <div className="lg:w-1/2 space-y-6 z-10">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//               Formando profesionales para el futuro
//             </h1>
//             <p className="text-lg md:text-xl opacity-90 max-w-xl">
//               Universidad Tecnológica de Tehuacán, comprometida con la educación de calidad y el desarrollo integral.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <Button className="bg-[#D1672A] hover:bg-[#c05a23] text-white border-none">
//                 Conoce nuestras carreras
//               </Button>
//               <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
//                 Más información
//               </Button>
//             </div>
//           </div>
//           <div className="lg:w-1/2 mt-10 lg:mt-0 z-10 flex justify-center">
//             <Image
//               src="/placeholder.svg?height=400&width=500"
//               alt="Estudiantes UTTECAM"
//               width={500}
//               height={400}
//               className="rounded-lg shadow-xl"
//             />
//           </div>
//           <div className="absolute right-0 bottom-0 w-full h-full overflow-hidden">
//             <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#D1672A] opacity-20 rounded-full"></div>
//             <div className="absolute right-40 bottom-20 w-32 h-32 bg-[#D1672A] opacity-10 rounded-full"></div>
//           </div>
//         </div>
//       </section>

//       {/* Convocatoria 2025 Section */}
//       <section className="py-12 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-[#0A9782]/10 to-[#D1672A]/10 z-0"></div>
//         <div className="container relative z-10">
//           <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
//             <div className="grid md:grid-cols-5">
//               <div className="md:col-span-3 p-8 md:p-10 lg:p-12">
//                 <div className="inline-block px-4 py-2 bg-[#D1672A] text-white rounded-full text-sm font-bold mb-6 animate-pulse">
//                   ¡NUEVO!
//                 </div>
//                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
//                   Convocatoria <span className="text-[#0A9782]">2025</span>
//                 </h2>
//                 <p className="text-lg text-gray-600 mb-6">
//                   Forma parte de nuestra comunidad universitaria. Abrimos nuestras puertas para que inicies tu formación
//                   profesional con nosotros.
//                 </p>

//                 <div className="grid sm:grid-cols-2 gap-6 mb-8">
//                   <div className="flex items-start gap-3">
//                     <div className="w-12 h-12 rounded-lg bg-[#0A9782]/10 flex items-center justify-center text-[#0A9782]">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       >
//                         <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
//                         <line x1="16" x2="16" y1="2" y2="6" />
//                         <line x1="8" x2="8" y1="2" y2="6" />
//                         <line x1="3" x2="21" y1="10" y2="10" />
//                         <path d="M8 14h.01" />
//                         <path d="M12 14h.01" />
//                         <path d="M16 14h.01" />
//                         <path d="M8 18h.01" />
//                         <path d="M12 18h.01" />
//                         <path d="M16 18h.01" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-gray-900">Registro en línea</h3>
//                       <p className="text-gray-600">Del 15 de enero al 30 de marzo de 2025</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-3">
//                     <div className="w-12 h-12 rounded-lg bg-[#D1672A]/10 flex items-center justify-center text-[#D1672A]">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       >
//                         <path d="M2 12h10" />
//                         <path d="M9 4v16" />
//                         <path d="M12 9h10" />
//                         <path d="M19 4v16" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-gray-900">Examen de admisión</h3>
//                       <p className="text-gray-600">Del 15 al 30 de abril de 2025</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-3">
//                     <div className="w-12 h-12 rounded-lg bg-[#0A9782]/10 flex items-center justify-center text-[#0A9782]">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       >
//                         <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-gray-900">Resultados</h3>
//                       <p className="text-gray-600">15 de mayo de 2025</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-3">
//                     <div className="w-12 h-12 rounded-lg bg-[#D1672A]/10 flex items-center justify-center text-[#D1672A]">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       >
//                         <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
//                         <path d="M13.73 21a2 2 0 0 1-3.46 0" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-gray-900">Inicio de clases</h3>
//                       <p className="text-gray-600">Agosto de 2025</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex flex-wrap gap-4">
//                   <Button className="bg-[#0A9782] hover:bg-[#097a6b] text-white">Descargar convocatoria</Button>
//                   <Button className="bg-[#D1672A] hover:bg-[#c05a23] text-white">Registrarse ahora</Button>
//                 </div>
//               </div>

//               <div className="md:col-span-2 bg-gradient-to-br from-[#0A9782] to-[#D1672A] p-8 md:p-10 lg:p-12 flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-2xl font-bold text-white mb-6">Cuenta regresiva para registro</h3>
//                   <div className="grid grid-cols-4 gap-2 text-center">
//                     <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
//                       <div className="text-3xl font-bold text-white">120</div>
//                       <div className="text-xs text-white/80">Días</div>
//                     </div>
//                     <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
//                       <div className="text-3xl font-bold text-white">14</div>
//                       <div className="text-xs text-white/80">Horas</div>
//                     </div>
//                     <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
//                       <div className="text-3xl font-bold text-white">36</div>
//                       <div className="text-xs text-white/80">Minutos</div>
//                     </div>
//                     <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
//                       <div className="text-3xl font-bold text-white">52</div>
//                       <div className="text-xs text-white/80">Segundos</div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-8">
//                   <h4 className="font-bold text-white mb-4">Beneficios de estudiar con nosotros</h4>
//                   <ul className="space-y-3">
//                     <li className="flex items-center gap-2 text-white">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="20"
//                         height="20"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="text-white"
//                       >
//                         <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
//                         <polyline points="22 4 12 14.01 9 11.01" />
//                       </svg>
//                       Becas y apoyos económicos
//                     </li>
//                     <li className="flex items-center gap-2 text-white">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="20"
//                         height="20"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="text-white"
//                       >
//                         <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
//                         <polyline points="22 4 12 14.01 9 11.01" />
//                       </svg>
//                       Vinculación con empresas
//                     </li>
//                     <li className="flex items-center gap-2 text-white">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="20"
//                         height="20"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="text-white"
//                       >
//                         <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
//                         <polyline points="22 4 12 14.01 9 11.01" />
//                       </svg>
//                       Instalaciones de vanguardia
//                     </li>
//                     <li className="flex items-center gap-2 text-white">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="20"
//                         height="20"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="text-white"
//                       >
//                         <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
//                         <polyline points="22 4 12 14.01 9 11.01" />
//                       </svg>
//                       Programas de intercambio
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="mt-12 text-center">
//             <p className="text-gray-600 mb-4">¿Tienes dudas sobre el proceso de admisión?</p>
//             <Button variant="outline" className="border-[#0A9782] text-[#0A9782] hover:bg-[#0A9782] hover:text-white">
//               Preguntas frecuentes
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Modelo Educativo Section */}
//       <section className="py-16 md:py-24 bg-gray-50">
//         <div className="container">
//           <div className="text-center max-w-3xl mx-auto mb-10">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A9782]">Modelo Educativo</h2>
//             <p className="text-gray-600 text-lg mb-8">
//               Conoce nuestro enfoque educativo diseñado para formar profesionales competitivos.
//             </p>

//             <div className="flex items-center justify-center gap-4 mb-8">
//               <Label
//                 htmlFor="modelo-switch"
//                 className={text-lg font-medium ${modeloEducativo === "2024" ? "text-[#0A9782]" : "text-gray-500"}}
//               >
//                 Modelo 2024
//               </Label>
//               <Switch
//                 id="modelo-switch"
//                 checked={modeloEducativo === "2025"}
//                 onCheckedChange={(checked) => setModeloEducativo(checked ? "2025" : "2024")}
//                 className="data-[state=checked]:bg-[#D1672A]"
//               />
//               <Label
//                 htmlFor="modelo-switch"
//                 className={text-lg font-medium ${modeloEducativo === "2025" ? "text-[#D1672A]" : "text-gray-500"}}
//               >
//                 Modelo 2025
//               </Label>
//             </div>
//           </div>

//           {modeloEducativo === "2024" ? (
//             <div className="grid md:grid-cols-2 gap-8 items-center">
//               <div>
//                 <Image
//                   src="/placeholder.svg?height=400&width=600&text=Modelo+Educativo+2024"
//                   alt="Modelo Educativo 2024"
//                   width={600}
//                   height={400}
//                   className="rounded-lg shadow-lg"
//                 />
//               </div>
//               <div className="space-y-6">
//                 <h3 className="text-2xl font-bold text-[#0A9782]">Modelo Educativo 2024</h3>
//                 <p className="text-gray-600">
//                   Nuestro modelo educativo 2024 se basa en un enfoque por competencias, centrado en el estudiante y
//                   orientado a la práctica profesional. Está diseñado para formar profesionales con habilidades técnicas
//                   y competencias blandas que respondan a las necesidades del sector productivo.
//                 </p>
//                 <div className="space-y-4">
//                   <div className="flex items-start gap-3">
//                     <div className="w-10 h-10 rounded-full bg-[#0A9782] flex items-center justify-center text-white font-bold shrink-0">
//                       1
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-[#0A9782]">Formación basada en competencias</h4>
//                       <p className="text-gray-600">
//                         Desarrollo de habilidades específicas requeridas por el sector productivo.
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-3">
//                     <div className="w-10 h-10 rounded-full bg-[#0A9782] flex items-center justify-center text-white font-bold shrink-0">
//                       2
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-[#0A9782]">Vinculación con el sector productivo</h4>
//                       <p className="text-gray-600">
//                         Colaboración estrecha con empresas para estadías y prácticas profesionales.
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-3">
//                     <div className="w-10 h-10 rounded-full bg-[#0A9782] flex items-center justify-center text-white font-bold shrink-0">
//                       3
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-[#0A9782]">Formación integral</h4>
//                       <p className="text-gray-600">
//                         Desarrollo de competencias técnicas, metodológicas, sociales y personales.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <Button className="bg-[#0A9782] hover:bg-[#097a6b] text-white mt-4">Conocer más</Button>
//               </div>
//             </div>
//           ) : (
//             <div className="grid md:grid-cols-2 gap-8 items-center">
//               <div className="order-2 md:order-1 space-y-6">
//                 <h3 className="text-2xl font-bold text-[#D1672A]">Modelo Educativo 2025</h3>
//                 <p className="text-gray-600">
//                   El modelo educativo 2025 representa una evolución hacia la educación del futuro, incorporando
//                   tecnologías emergentes, metodologías innovadoras y un enfoque en la sostenibilidad y responsabilidad
//                   social. Preparamos a nuestros estudiantes para los retos del mañana.
//                 </p>
//                 <div className="space-y-4">
//                   <div className="flex items-start gap-3">
//                     <div className="w-10 h-10 rounded-full bg-[#D1672A] flex items-center justify-center text-white font-bold shrink-0">
//                       1
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-[#D1672A]">Educación híbrida y flexible</h4>
//                       <p className="text-gray-600">
//                         Combinación de modalidades presenciales y virtuales con horarios adaptables.
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-3">
//                     <div className="w-10 h-10 rounded-full bg-[#D1672A] flex items-center justify-center text-white font-bold shrink-0">
//                       2
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-[#D1672A]">Tecnologías emergentes</h4>
//                       <p className="text-gray-600">
//                         Incorporación de IA, realidad aumentada y virtual en los procesos de enseñanza.
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-3">
//                     <div className="w-10 h-10 rounded-full bg-[#D1672A] flex items-center justify-center text-white font-bold shrink-0">
//                       3
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-[#D1672A]">Enfoque en sostenibilidad</h4>
//                       <p className="text-gray-600">Formación con conciencia ambiental y responsabilidad social.</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-3">
//                     <div className="w-10 h-10 rounded-full bg-[#D1672A] flex items-center justify-center text-white font-bold shrink-0">
//                       4
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-[#D1672A]">Internacionalización</h4>
//                       <p className="text-gray-600">
//                         Programas de intercambio y colaboración con universidades extranjeras.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <Button className="bg-[#D1672A] hover:bg-[#c05a23] text-white mt-4">Descubrir más</Button>
//               </div>
//               <div className="order-1 md:order-2">
//                 <Image
//                   src="/placeholder.svg?height=400&width=600&text=Modelo+Educativo+2025"
//                   alt="Modelo Educativo 2025"
//                   width={600}
//                   height={400}
//                   className="rounded-lg shadow-lg"
//                 />
//               </div>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Valores Section */}
//       <section className="py-16 md:py-24">
//         <div className="container">
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A9782]">Ser Mejor Hoy</h2>
//             <p className="text-gray-600 text-lg">
//               En este espacio, nos comprometemos a promover y cultivar los siguientes valores fundamentales.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Misión */}
//             <Card className="border-t-4 border-t-[#0A9782] hover:shadow-lg transition-shadow">
//               <CardContent className="pt-6">
//                 <h3 className="text-xl font-bold mb-4 text-[#0A9782]">Misión</h3>
//                 <p className="text-gray-600">
//                   Somos una institución de educación superior comprometida con la inclusión, transparencia y la
//                   rendición de cuentas, que brinda servicios educativos científicos y tecnológicos con calidad, equidad
//                   y responsabilidad social para contribuir al desarrollo sustentable de la región, el estado y el país,
//                   cumpliendo los requerimientos de las partes interesadas, mediante un modelo formativo integral.
//                 </p>
//               </CardContent>
//               <CardFooter>
//                 <Button className="w-full bg-[#0A9782] hover:bg-[#097a6b] text-white">Misión</Button>
//               </CardFooter>
//             </Card>

//             {/* Visión */}
//             <Card className="border-t-4 border-t-[#D1672A] hover:shadow-lg transition-shadow">
//               <CardContent className="pt-6">
//                 <h3 className="text-xl font-bold mb-4 text-[#D1672A]">Visión</h3>
//                 <p className="text-gray-600">
//                   Siendo una universidad abierta, flexible, innovadora, promotora de cultura, ciencia y tecnología,
//                   vinculada con los sectores social y productivo, que contribuya al desarrollo integral de la región, el
//                   estado y del país, distinguida por su compromiso social, desempeño académico, procesos consolidados de
//                   evaluación, acreditación de sus programas educativos y transparencia en la rendición de cuentas.
//                 </p>
//               </CardContent>
//               <CardFooter>
//                 <Button className="w-full bg-[#D1672A] hover:bg-[#c05a23] text-white">Visión</Button>
//               </CardFooter>
//             </Card>

//             {/* Valores */}
//             <Card className="border-t-4 border-t-[#0A9782] hover:shadow-lg transition-shadow">
//               <CardContent className="pt-6">
//                 <h3 className="text-xl font-bold mb-4 text-[#0A9782]">Valores</h3>
//                 <ul className="text-gray-600 space-y-2">
//                   <li className="flex items-center gap-2">
//                     <span className="w-2 h-2 rounded-full bg-[#D1672A]"></span>
//                     Austeridad
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="w-2 h-2 rounded-full bg-[#D1672A]"></span>
//                     Honestidad
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="w-2 h-2 rounded-full bg-[#D1672A]"></span>
//                     Empatía
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="w-2 h-2 rounded-full bg-[#D1672A]"></span>
//                     Generosidad
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="w-2 h-2 rounded-full bg-[#D1672A]"></span>
//                     Respeto
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="w-2 h-2 rounded-full bg-[#D1672A]"></span>
//                     Tolerancia
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="w-2 h-2 rounded-full bg-[#D1672A]"></span>
//                     Igualdad
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="w-2 h-2 rounded-full bg-[#D1672A]"></span>
//                     Equidad
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="w-2 h-2 rounded-full bg-[#D1672A]"></span>
//                     Justicia
//                   </li>
//                 </ul>
//               </CardContent>
//               <CardFooter>
//                 <Button className="w-full bg-[#0A9782] hover:bg-[#097a6b] text-white">Valores</Button>
//               </CardFooter>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Programas Educativos */}
//       <section className="py-16 md:py-24 bg-gray-50">
//         <div className="container">
//           <div className="text-center max-w-3xl mx-auto mb-10">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A9782]">Programas Educativos</h2>
//             <p className="text-gray-600 text-lg mb-8">
//               Conoce nuestra oferta académica diseñada para formar profesionales competitivos.
//             </p>
//           </div>

//           <Tabs defaultValue="ingenierias" className="w-full">
//             <div className="flex justify-center mb-8">
//               <TabsList className="grid w-full max-w-md grid-cols-2">
//                 <TabsTrigger
//                   value="ingenierias"
//                   className="data-[state=active]:bg-[#0A9782] data-[state=active]:text-white"
//                 >
//                   Ingenierías
//                 </TabsTrigger>
//                 <TabsTrigger
//                   value="licenciaturas"
//                   className="data-[state=active]:bg-[#D1672A] data-[state=active]:text-white"
//                 >
//                   Licenciaturas
//                 </TabsTrigger>
//               </TabsList>
//             </div>

//             <TabsContent value="ingenierias" className="mt-0">
//               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {[
//                   {
//                     title: "Ingeniería en Sistemas Computacionales",
//                     description:
//                       "Forma profesionales capaces de diseñar, implementar y administrar sistemas de información, redes de computadoras y soluciones tecnológicas innovadoras.",
//                   },
//                   {
//                     title: "Ingeniería Industrial",
//                     description:
//                       "Desarrolla profesionales que optimizan procesos, recursos y sistemas integrados de personas, materiales, información y equipos.",
//                   },
//                   {
//                     title: "Ingeniería Mecatrónica",
//                     description:
//                       "Prepara expertos en el diseño, desarrollo e implementación de sistemas automatizados que integran componentes mecánicos, electrónicos y de control.",
//                   },
//                   {
//                     title: "Ingeniería en Energías Renovables",
//                     description:
//                       "Forma especialistas en el diseño, implementación y gestión de sistemas de energía renovable y sustentable.",
//                   },
//                   {
//                     title: "Ingeniería en Manufactura",
//                     description:
//                       "Desarrolla profesionales especializados en procesos de fabricación, control de calidad y optimización de la producción industrial.",
//                   },
//                   {
//                     title: "Ingeniería en Biotecnología",
//                     description:
//                       "Prepara expertos en la aplicación de la biología y tecnología para desarrollar productos y procesos en sectores como salud, agricultura e industria.",
//                   },
//                 ].map((item, index) => (
//                   <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
//                     <div className="relative h-48 bg-gray-100">
//                       <Image
//                         src={/placeholder.svg?height=200&width=400&text=Ingeniería}
//                         alt={item.title}
//                         fill
//                         className="object-cover"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
//                         <div className="p-4 text-white">
//                           <h4 className="font-bold">{item.title}</h4>
//                         </div>
//                       </div>
//                     </div>
//                     <CardContent className="pt-6">
//                       <h3 className="text-xl font-bold mb-2 text-[#0A9782]">{item.title}</h3>
//                       <p className="text-gray-600 line-clamp-3">{item.description}</p>
//                     </CardContent>
//                     <CardFooter>
//                       <Button className="w-full bg-[#0A9782] hover:bg-[#097a6b] text-white">Más información</Button>
//                     </CardFooter>
//                   </Card>
//                 ))}
//               </div>
//               <div className="mt-12 text-center">
//                 <Button className="bg-[#0A9782] hover:bg-[#097a6b] text-white">Ver todas las ingenierías</Button>
//               </div>
//             </TabsContent>

//             <TabsContent value="licenciaturas" className="mt-0">
//               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {[
//                   {
//                     title: "Licenciatura en Administración",
//                     description:
//                       "Forma profesionales capaces de gestionar recursos humanos, financieros y materiales en organizaciones públicas y privadas.",
//                   },
//                   {
//                     title: "Licenciatura en Contaduría",
//                     description:
//                       "Desarrolla expertos en el registro, análisis e interpretación de información financiera para la toma de decisiones empresariales.",
//                   },
//                   {
//                     title: "Licenciatura en Gestión Empresarial",
//                     description:
//                       "Prepara profesionales con visión estratégica para la creación, dirección y desarrollo de empresas competitivas.",
//                   },
//                   {
//                     title: "Licenciatura en Turismo",
//                     description:
//                       "Forma especialistas en la gestión y desarrollo de servicios turísticos sustentables y de calidad.",
//                   },
//                   {
//                     title: "Licenciatura en Gastronomía",
//                     description:
//                       "Desarrolla profesionales con conocimientos culinarios, administrativos y culturales para la industria gastronómica.",
//                   },
//                   {
//                     title: "Licenciatura en Diseño Digital",
//                     description:
//                       "Prepara expertos en la creación de contenidos visuales y experiencias digitales para diversos medios y plataformas.",
//                   },
//                 ].map((item, index) => (
//                   <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
//                     <div className="relative h-48 bg-gray-100">
//                       <Image
//                         src={/placeholder.svg?height=200&width=400&text=Licenciatura}
//                         alt={item.title}
//                         fill
//                         className="object-cover"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
//                         <div className="p-4 text-white">
//                           <h4 className="font-bold">{item.title}</h4>
//                         </div>
//                       </div>
//                     </div>
//                     <CardContent className="pt-6">
//                       <h3 className="text-xl font-bold mb-2 text-[#D1672A]">{item.title}</h3>
//                       <p className="text-gray-600 line-clamp-3">{item.description}</p>
//                     </CardContent>
//                     <CardFooter>
//                       <Button className="w-full bg-[#D1672A] hover:bg-[#c05a23] text-white">Más información</Button>
//                     </CardFooter>
//                   </Card>
//                 ))}
//               </div>
//               <div className="mt-12 text-center">
//                 <Button className="bg-[#D1672A] hover:bg-[#c05a23] text-white">Ver todas las licenciaturas</Button>
//               </div>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-[#0A9782] text-white py-16">
//         <div className="container">
//           <div className="max-w-3xl mx-auto text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para formar parte de nuestra comunidad?</h2>
//             <p className="text-lg mb-8 opacity-90">
//               Inicia tu proceso de admisión y forma parte de la Universidad Tecnológica de Tehuacán.
//             </p>
//             <div className="flex flex-wrap justify-center gap-4">
//               <Button className="bg-[#D1672A] hover:bg-[#c05a23] text-white border-none">Proceso de admisión</Button>
//               <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
//                 Contactar
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-gray-300">
//         <div className="container py-12">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <Image
//                 src="/logo-uttecam.png"
//                 alt="UTTECAM Logo"
//                 width={160}
//                 height={45}
//                 className="h-auto mb-4 brightness-200"
//               />
//               <p className="text-sm">
//                 Universidad Tecnológica de Tehuacán, comprometida con la educación de calidad y el desarrollo integral.
//               </p>
//             </div>

//             <div>
//               <h3 className="font-bold text-white mb-4">Enlaces rápidos</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link href="#" className="text-sm hover:text-[#D1672A] transition-colors">
//                     Nosotros
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="text-sm hover:text-[#D1672A] transition-colors">
//                     Servicios Escolares
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="text-sm hover:text-[#D1672A] transition-colors">
//                     Vinculación
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="text-sm hover:text-[#D1672A] transition-colors">
//                     Becas
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="text-sm hover:text-[#D1672A] transition-colors">
//                     Extensión Universitaria
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="font-bold text-white mb-4">Programas</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link href="#" className="text-sm hover:text-[#D1672A] transition-colors">
//                     Ingenierías
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="text-sm hover:text-[#D1672A] transition-colors">
//                     Licenciaturas
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="text-sm hover:text-[#D1672A] transition-colors">
//                     Posgrados
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="text-sm hover:text-[#D1672A] transition-colors">
//                     Educación Continua
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="font-bold text-white mb-4">Contacto</h3>
//               <address className="not-italic text-sm space-y-2">
//                 <p>Prolongación de la 1 sur No. 1101</p>
//                 <p>San Pablo Tepetzingo</p>
//                 <p>Tehuacán, Puebla</p>
//                 <p>C.P. 75859</p>
//                 <p>Teléfono: (238) 380 3100</p>
//                 <p>Email: info@uttecam.edu.mx</p>
//               </address>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
//             <p>© {new Date().getFullYear()} Universidad Tecnológica de Tehuacán. Todos los derechos reservados.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }