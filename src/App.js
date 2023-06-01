import "./App.css"
import React, { useState } from "react"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import HomePage from "./HomePage"

const FormComponent = () => {
  const [name, set_name] = useState("")
  const [email, set_email] = useState("")
  const [dob, set_dob] = useState()
  const [phone_number, set_phone_number] = useState()
  const navigate = useNavigate()

  async function handleSubmit() {
    let myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    let raw = JSON.stringify({
      name: name,
      email: email,
      phone_number: phone_number,
      dob: dob
    })

    let headerOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    }

    const res = await fetch(process.env.REACT_APP_URL + "/api/create-user", headerOptions)
    if (res.ok) {
      navigate("/home")
    }
  }
  return (
    <div className="container w-1/4 mx-auto py-8 shadow-lg p-10 ">
      <h1 className="text-2xl font-bold mb-6 text-center">Add User</h1>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" HtmlFor="name">
          Name
        </label>
        <input onChange={e => set_name(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" type="text" id="name" name="name" placeholder="John Doe" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" HtmlFor="email">
          Email
        </label>
        <input onChange={e => set_email(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" type="email" id="email" name="email" placeholder="john@example.com" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" HtmlFor="phone_number">
          Phone Number
        </label>
        <input onChange={e => set_phone_number(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" type="text" id="phone_number" name="phone_number" placeholder="Enter Phone Number" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" HtmlFor="date">
          Date of Birth
        </label>
        <input onChange={e => set_dob(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" type="date" id="date" name="date" />
      </div>
      <button onClick={handleSubmit} className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300" type="submit">
        Add User
      </button>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormComponent />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
