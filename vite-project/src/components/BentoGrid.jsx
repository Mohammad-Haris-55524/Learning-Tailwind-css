import React from 'react'

function BentoGrid() {
  return (
    <section >
    
    <div className='w-[30rem] border'>
        <h1 className='text-5xl font-bold'>ToDesktop handles the details</h1>
    </div>

      <div className='border-2 grid grid-cols-3 h-screen gap-8'>

        <div className="border">
          <h2>Native Notifications</h2>
        </div>

        <div className="border row-start-1 row-end-3 col-start-2">
          <h2>Auto Updates</h2>
          <p>We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.</p>
        </div>

        <div className="border">
          <h2>Plugins</h2>
        </div>

        
        <div className="border">
          <h2>Access to Native APIs</h2>
          <p>ToDesktop ensures the underlying browser, performance improvements, security patches and additional features are always up to date.</p>
        </div>


        <div className="border">
          <h2>Customizable look and feel</h2>
        </div>

        <div className="border">
          <h2>Native Installers</h2>
          <p>We even provide a magic link which will detect your users operating system & download the most up to date version of your app.</p>
        </div>



      </div>
     
    </section>
  )
}

export default BentoGrid