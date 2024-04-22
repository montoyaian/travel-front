import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Standart } from '../Standart/Standart.jsx'
import { CreateCS } from '../Standart/createCS.jsx'
import { EditCS } from '../Standart/EditCS.jsx'
import { Premium } from '../Premium/Premium.jsx'
import { Add } from '../Premium/add.jsx'
import { Edit } from '../Premium/edit.jsx'
import { RutasReservas } from '../Reservas/RutasReservas.jsx'
function RutasClient ()  {
  return (
    <div>
    <Routes>
      <Route path="clientstandart" element={<Standart />} />
      <Route path="createClientstandart" element={<CreateCS />} />
      <Route path="editClientStandart/:id" element={<EditCS/>} />
      <Route path="bookings" element={<RutasReservas />} ></Route>

      <Route path="clientpremium" element={<Premium />} />
      <Route path="createClientpremium" element={<Add />} />
      <Route path="editClientPremium/:id" element={<Edit />} />
      <Route path="bookings" element={<RutasReservas />} ></Route>
    </Routes>
  </div>
  )
}
export default RutasClient
