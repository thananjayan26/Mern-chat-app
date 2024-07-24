import React from 'react'

const GenderCheckBox = () => {
  return (
      <div className='flex'>
          <div className='form-control'>
              <label className='label gap-2 cursor-pointer'>
                  <span className='labek-text'>Male</span>
                  <input type='checkbox' className='checkbox border-slate-900' />
              </label>
          </div>

          <div className='form-control'>
              <label className='label gap-2 cursor-pointer'>
                  <span className='labek-text'>Female</span>
                  <input type='checkbox' className='checkbox border-slate-900' />
              </label>
          </div>
    </div>
  )
}

export default GenderCheckBox

// Started code

// import React from 'react'

// const GenderCheckBox = () => {
//   return (
//       <div className='flex'>
//           <div className='form-control'>
//               <label className='label gap-2 cursor-pointer'>
//                   <span className='labek-text'>Male</span>
//                   <input type='checkbox' className='checkbox border-slate-900' />
//               </label>
//           </div>

//           <div className='form-control'>
//               <label className='label gap-2 cursor-pointer'>
//                   <span className='labek-text'>Female</span>
//                   <input type='checkbox' className='checkbox border-slate-900' />
//               </label>
//           </div>
//     </div>
//   )
// }

// export default GenderCheckBox