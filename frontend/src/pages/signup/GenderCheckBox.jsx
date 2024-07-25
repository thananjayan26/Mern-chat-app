import React from 'react'

const GenderCheckBox = ({onCheckBoxChange, selectedGender}) => {
  return (
      <div className='flex'>
          <div className='form-control'>
              <label className='label gap-2 cursor-pointer ${selecetedGender === "male" ? "selected" : ""}'>
                  <span className='labek-text'>Male</span>
                  <input type='checkbox' className='checkbox border-slate-900'
                      checked={selectedGender === "male"}
                        onChange={() => onCheckBoxChange("male")}/>
              </label>
          </div>

          <div className='form-control'>
              <label className='label gap-2 cursor-pointer ${selecetedGender === "female" ? "selected" : ""}'>
                  <span className='labek-text'>Female</span>
                  <input type='checkbox' className='checkbox border-slate-900'
                  checked={selectedGender === "female"}
                        onChange={() => onCheckBoxChange("female")}/>
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