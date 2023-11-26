import React from 'react'

function Main({children, paddingX}) {
  return (
    <main className={`w-full min-h-[calc(100vh-64px)] bg-slate-900 px-${paddingX} pb-4 pt-2`}>
     {children}
    </main>
  )
}

export default Main