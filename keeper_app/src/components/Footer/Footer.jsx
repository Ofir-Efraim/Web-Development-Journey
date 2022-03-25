import React from 'react'

const date = new Date();
const year = date.getFullYear()


const Footer = () => {
  return (
    <footer>
        <p>@{year} Ofir Efraim</p>
    </footer>
  )
}

export default Footer