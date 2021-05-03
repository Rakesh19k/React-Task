import React, { useState, useEffect } from 'react'
import axios from "axios"

function FetchingApi() {
    const [datas, setData] = useState([])

    useEffect(() => {
       axios.get("http://www.example.com/api/get/1")
       .then(response => {
           console.log(response)
        //    setData(response.data)
       })
    },[])

    return (
        <div>
          {/* {datas.map((data, id) => {
              <h4 key={id}>{data.title}</h4>
          })} */}
          hello
        </div>
    )
}

export default FetchingApi
