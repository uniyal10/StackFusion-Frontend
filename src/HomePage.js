import React, { useEffect, useState } from "react"

const get_all_forms = async () => {
  let myheaders = new Headers()
  myheaders.append("Content-Type", "application/json")

  let requestOptions = {
    method: "GET",
    headers: myheaders,
    redirect: "follow"
  }

  return await (await fetch(process.env.REACT_APP_URL + "/api/get-users", requestOptions)).json()
}

const HomePage = () => {
  const [all_forms, set_all_forms] = useState([])
  useEffect(() => {
    ;(async () => {
      set_all_forms(await get_all_forms())
    })()
  }, [])
  return (
    <div className=" grid grid-cols-2 m-2">
      {all_forms.map(data => {
        return (
          <div class="flex flex-col items-center m-10 p-2 justify-center w-full bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full  h-96 md:h-full md:w-48  md:rounded-lg" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data?.name}</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Email: {data?.email}</p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Phone: {data?.phone_number}</p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">DOB: {new Date(data?.dob).toDateString("hi")}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default HomePage
