import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function HelpLayout() {
  return (
  <div className="help-layout">
    <h1>Website Help</h1>
    <p>LLorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor assumen</p>


<nav>
  <NavLink to='faq'>Ask queries</NavLink>
  <NavLink to='contact'>Contact Support</NavLink>
</nav>


    <Outlet/>
  </div>)
}
