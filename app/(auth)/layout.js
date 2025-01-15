import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div className="flex justify-center pt-20 pb-7">
      {children}
    </div>
  )
}

export default AuthLayout;
