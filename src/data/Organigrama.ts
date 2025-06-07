

export interface CustomOrgNode {
  key?: string;
  expanded?: boolean;
  type?: string; // <-- ahora sí se acepta
  data: {
    image: string;
    name: string;
    title: string;
  };
  children?: CustomOrgNode[];
}



const dataOrganigrama : CustomOrgNode[]= [
  {
    expanded: true,
    type: "person",
    data: {
      image: "public/Organigrama/Rector.png",
      name: "Ing. Enrique Salvador Fernández Lozada ",
      title: "Rector",
    },
    children: [
      {
        expanded: true,
        type: "person",
        data: {
          image: "public/Organigrama/AbogadoGeneral.png",
          name: "Mtro. Eleazar Carrillo Camacho ",
          title: "ENCARGADO DEL ÁREA DE ABOGADO GENERAL"
        },
        children: [
          
          // {
          //   expanded: true,
          //   type: "person",
          //   data: {
          //     name: "Dra. Lucía Navarro",
          //     title: "Jefa División Químico Biológicas",
          //     image: "",
          //   },
          //   children: [
          //     {
          //       type: "person",
          //       data: {
          //         name: "Ing. Carlos Mendoza",
          //         title: "Coordinador de Química",
          //         image: "",
          //       },
          //     },
          //     {
          //       type: "person",
          //       data: {
          //         name: "Lic. Ana Pérez",
          //         title: "Coordinadora de Biología",
          //         image: "",
          //       },
          //     },
          //   ],
          // },
          // {
          //   expanded: true,
          //   type: "person",
          //   data: {
          //     name: "Mtro. Esteban Gómez",
          //     title: "Jefe División TIC",
          //     image: "",
          //   },
          //   children: [
          //     {
          //       type: "person",
          //       data: {
          //         name: "Ing. Patricia Ruiz",
          //         title: "Coordinadora de Sistemas",
          //         image: "",
          //       },
          //     },
          //     {
          //       type: "person",
          //       data: {
          //         name: "Ing. Luis Hernández",
          //         title: "Coordinador de Redes",
          //         image: "",
          //       },
          //     },
          //   ],
          // },
         
        ],
      },
      {
        expanded: true,
        type: "person",
        data: {
          image: "public/Organigrama/ContraloriaInterna.png",
          name: "Abg. Alain Eloy Alvarez Sánchez ",
          title: "ENCARGADO DEL ÁREA DE  CONTRALORÍA INTERNA",
        },
       
        
      },{
      expanded: true,
        type: "person",
        data: {
          image: "public/Organigrama/secretariaAcademica.png",
          name: " Mtro. Carlos Islas Contreras ",
          title: "ENCARGADO DE LA SECRETARIA ACADÉMICA ",
        },
        children:[
            
               {
                type: "person",
                data: {
                  image: "public/Organigrama/directores/Agricultura.png",
                  name: " lng. Laura Rodríguez Peláez ",
                  title: " DIRECCIÓN  DEL P.E.  AGRICULTURA SUSTENTBLE Y  PROTEGIDA ",
  
                },
              },
                {
                  type: "person",
                  data: {
                    image: "public/Organigrama/directores/conta.png",
                    name: "Mtro. Luis Enrique Manzano Martínez ",
                    title: "ENC. DE LA  DIRECCIÓN  DEL P.E. CONTADURÍA  ",
                    
                  },
                },
                
                {
                  type: "person",
                  data: {
                    image: "public/Organigrama/directores/admin.png",
                    name: "Mtra. Miriam Garcilazo Alcántara  ",
                    title: "DIRECTORA  DEL P.E.ADMINISTRACIÓN   ",
                    
                  },
                },
                
                {
                  type: "person",
                  data: {
                    image: "public/Organigrama/directores/mercado.png",
                    name: "Mtro. Jesús Guadalupe Jiménez de Rosas   ",
                    title: "DIRECCIÓN DEL P.E. INNOVACIÓN DE NEGOCIOS Y MERCADOTECNIA ",
                    
                  },
                },
                {
                  type: "person",
                  data: {
                    image: "public/Organigrama/directores/industrial.png",
                    name: "Ing. Job Armando Henández Cortés",
                    title: " DIRECCIÓN  DEL P.E.INGENIERÍA INDUSTRIAL ",
                    
                  },
                  children:[
                    {
                      type: "person",
                      data: {
                        image: "public/Organigrama/directores/mant_indus.png",
                        name: "Ing. José Mario Cepeda Sorcia",
                        title: "DIRECCIÓN  DEL P.E. MANTENIMIENTO  INDUSTRIA ",
                        
                      },
                    },
                  ]
                },
                {
                  type: "person",
                  data: {
                    image: "public/Organigrama/directores/industrial.png",
                    name: "Ing. Job Armando Henández Cortés",
                    title: " DIRECCIÓN  DEL P.E.INGENIERÍA INDUSTRIAL ",
                    
                  },
                },
              
            ],
        
      },
      {
      expanded: true,
        type: "person",
        data: {
          image: "public/Organigrama/secretarioVinculacion.png",
          name: "  Lic. Daniel Huerta Conde ",
          title: "SECRETARIO  DE VINCULACIÓN ",
        },
      },
    ],
  },
];


export {
    dataOrganigrama
}