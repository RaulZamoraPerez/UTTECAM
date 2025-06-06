import type { OrganizationChartNodeData } from "primereact/organizationchart";



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
      image: "https://img.freepik.com/foto-gratis/hombre-tiro-medio-corrigiendo-errores-gramaticales_23-2150171419.jpg?semt=ais_items_boosted&w=74",
      name: "Dr. Raúl Rector",
      title: "Rector",
    },
    children: [
      {
        expanded: true,
        type: "person",
        data: {
          image: "",
          name: "Mtra. Ana Lira",
          title: "Directora Académica",
        },
        children: [
          
          {
            expanded: true,
            type: "person",
            data: {
              name: "Dra. Lucía Navarro",
              title: "Jefa División Químico Biológicas",
              image: "",
            },
            children: [
              {
                type: "person",
                data: {
                  name: "Ing. Carlos Mendoza",
                  title: "Coordinador de Química",
                  image: "",
                },
              },
              {
                type: "person",
                data: {
                  name: "Lic. Ana Pérez",
                  title: "Coordinadora de Biología",
                  image: "",
                },
              },
            ],
          },
          {
            expanded: true,
            type: "person",
            data: {
              name: "Mtro. Esteban Gómez",
              title: "Jefe División TIC",
              image: "",
            },
            children: [
              {
                type: "person",
                data: {
                  name: "Ing. Patricia Ruiz",
                  title: "Coordinadora de Sistemas",
                  image: "",
                },
              },
              {
                type: "person",
                data: {
                  name: "Ing. Luis Hernández",
                  title: "Coordinador de Redes",
                  image: "",
                },
              },
            ],
          },
          {
            expanded: true,
            type: "person",
            data: {
              name: "Lic. Karen López",
              title: "Jefa de Negocios",
              image: "",
            },
            children: [
        
              
              {
                type: "person",
                data: {
                  name: "Lic. Gabriela Soto",
                  title: "Coordinadora de Finanzas",
                  image: "",
                },
              },
              
              {
                type: "person",
                data: {
                    name: "Lic. Mariana Torres",
                    title: "Coordinadora de Administración",
                    image: "",
                    
                    },
                
              },
            ],
          },
        ],
      },
      {
        expanded: true,
        type: "person",
        data: {
          image: "",
          name: "Lic. Juan Méndez",
          title: "Director Administrativo",
        },
        children: [
           
           {
                type: "person",
                data: {
                  name: "Lic. Andrés Torres",
                  title: "Coordinador de Mercadotecnia",
                  image: "",
                },
              },
          {
            expanded: true,
            type: "person",
            data: {
              name: "Lic. Diana Vargas",
              title: "Jefa de Vinculación",
              image: "",
            },
            children: [
               {
                type: "person",
                data: {
                  name: "Lic. xdxd",
                  title: "Coordinador de Mercadotecnia",
                  image: "",
                  
                },
                  children : [
                    {
                        type: "person",
                        data: {
                            name: "Lic. Raúl Pérez",
                            title: "Coordinador de Contabilidad",
                            image: "",
                        },
                    }
                  ]
                ,
              },
             
            ],
          },
        ],
      },
    ],
  },
];


export {
    dataOrganigrama
}