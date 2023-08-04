import React from 'react'

const DisplayBoxGenerator = ({ boxesInfo }) => {

  return (
    <div className="container mt-5">
      <div className='d-flex justify-content-center flex-wrap gap-4'>
        {
          boxesInfo
            .map((box, i) =>
              <div key={i} style={{ backgroundColor: `${box.color}`, height: `${box.height}px`, width: `${box.height}px` }}></div>)
        }
      </div>
    </div>

  )
}

export default DisplayBoxGenerator
