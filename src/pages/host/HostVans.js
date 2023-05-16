import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HostVans = () => {
  const [vans, setVans] = useState([])

  useEffect(() => {
    fetch("/api/host/vans")
      .then(response => response.json())
      .then(data => {
        console.log(data.vans)
        setVans(data.vans)
    })
  }, [])

  const eachVanEls = vans.map(van => {
    return <Link
      to={ `/host/vans/${van.id}`}
      key={van.id}
      className="host-van-link-wrapper"
    >
      <div className='host-van-single' key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className='host-van-info'>
          <h3>{van.name}</h3>
          <p>${ van.price }</p>
        </div>
      </div>
    </Link>
  })
  return (
    <section>
      <h1 className='host-vans-title'>Your listed vans</h1>
      <div>
        {
          vans.length > 0 ? (
            <section>
              {eachVanEls}
            </section>
          ) : (
              <h2>Loading.....</h2>
          )
        }
      </div>
      
    </section>
  )
}

export default HostVans