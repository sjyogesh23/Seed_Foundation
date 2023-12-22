import React from 'react'
import { Carousels } from './Carousels'

export const Initiative = () => {

  const Internship = [
    {
      id:1,
      Imag:'url',
      title:'Some title',
      Domain: 'Batman',
      Company: 'XYZ company',
      Description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error nisi atque blanditiis corrupti sed! Mollitia sed molestiae error ad, aut nisi voluptates tempore quos dolores?',
      OtherDetails: [
        {
          id:1,
          Header: 'Roles',
          Description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quaerat omnis sed libero dolorem inventore nisi repellendus quia optio quisquam, laboriosam quos! Repellendus, tempore explicabo.'
        },
        {
          id:2,
          Header: 'Responsibility',
          Description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quaerat omnis sed libero dolorem inventore nisi repellendus quia optio quisquam, laboriosam quos! Repellendus, tempore explicabo.'
        },
        {
          id:3,
          Header: 'Other',
          Description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quaerat omnis sed libero dolorem inventore nisi repellendus quia optio quisquam, laboriosam quos! Repellendus, tempore explicabo.'
        }
      ]
    }
  ]



  return (
    <div>
      <Carousels/>
    </div>
  )
}
