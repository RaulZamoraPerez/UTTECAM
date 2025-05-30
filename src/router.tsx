

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppLayout } from '@/layouts/AppLayout';
import NormatividadSeccion from '@/views/normatividad'
import PDF from '@/views/PDF';



export default function Router() {
    return (
        <BrowserRouter>
            <Routes >
                    < Route element={ <AppLayout/> }>
                         
                         <Route path='/'  element={<NormatividadSeccion/>}/>
                        <Route path="/ver-documento/:title" element={<PDF />} />



                         {/*DIS JURIDDICAS */}
                         <Route path='/'  element={<NormatividadSeccion/>}/>
                    </Route>

            </Routes>
        
        </BrowserRouter>
    )
}