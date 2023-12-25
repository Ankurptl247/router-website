import React from 'react'

export default function About() {
  return (
    <>
      <main className='bg-3 back'>
        <div className='h140'></div>
        <center>
          <div className='col-md-8 col-12'>
            <h1 className='heading'>about us</h1>

            <div className='h140'></div>
          </div>
        </center>
      </main>
      <div className='h50'></div>


      <div className='container'>
        <div className='h50'></div>
        <div className='row ms-md-4'>
          <div className='col-md-4'>
            <img className='col-md-12 col-12 h500 object-fit-cover rounded' src='./img/6-home.jpg' />
          </div>
          <div className='col-md-7 ms-md-4'>
            <article className='ms-md-5 p-3 p-md-0'>
              <h1 className='col-md-11 col-12 heading text-black text-center text-md-start mb-4 fs-1'>I made this design specifically for our step by step tutorial.</h1>
              <p className='col-md-12 col-12 paragraph mt-md-4'>We’ve made the design <b>super easy to adapt</b> to any industry, so you can use it to build any type of website.</p>
              <p className='col-md-12 col-12 paragraph mt-md-4'>It allows me to show you <b>how easy it can be</b> to make an amazing website – by simply following along with me.</p>
              <p className='col-md-12 col-12 paragraph mt-md-4'>It is also <b>super easy to update.</b> For example, you can change the colors and fonts sitewide with a single click.</p>
              <p className='col-md-12 col-12 paragraph mt-md-4'>This way you can <b>try different designs fast</b> – and build an amazing website in hours, instead of months.</p>
            </article>
          </div>
        </div>
        <div className='h50'></div>
      </div>

      <div className='conatainer-fluid'>
        <center>
          <h1 className='col-md-9 col-11 p-md-0 article text-black'>I gave it
            my all to try and make this the best possible design that you can start from.</h1>
        </center>
      </div>

      <div className='container mt-md-4'>
        <div className='h50'></div>
        <div className='row ms-md-4'>
          <div className='col-md-7 order-1'>
            <article className='mt-md-2 p-3 p-md-0'>
              <h1 className='col-md-11 col-12  heading text-black fs-1 mb-4 mb-md-0'>I made this design specifically for our step by step tutorial.</h1>
              <p className='col-md-11 col-12 paragraph mt-md-4'>It allows me to show you <b>how easy it can be</b> to make an amazing website – by simply following along with me.</p>
              <p className='col-md-11 col-12 paragraph mt-md-4'>We’ve made the design <b>super easy to adapt</b> to any industry, so you can use it to build any type of website.</p>
              <p className='col-md-11 col-12 paragraph mt-md-4'>It is also <b>super easy to update.</b> For example, you can change the colors and fonts sitewide with a single click.</p>
              <p className='col-md-11 col-12 paragraph mt-md-4'>This way you can <b>try different designs fast</b> – and build an amazing website in hours, instead of months.</p>
            </article>
          </div>
          <div className='col-md-4 ms-md-4 order-0 order-md-1'>
            <img className='col-md-12 col-12 h500 object-fit-cover rounded' src='./img/2-about.jpg' />
          </div>
        </div>
        <div className='h50'></div>
      </div>

      <div className='conatainer-fluid'>
        <center>
          <h1 className='col-md-8 col-11 p-md-0 article text-black mt-md-4 mb-5'>I sincerely 
          hope this helps you make a website that you can be truly proud of!</h1>
        </center>
      </div>

      <div className='contanier-fluid bg-success-subtle '>
  <center>
    <div className='h60'></div>
    <div className='col-md-2'>
      <img className='col-md-4 col-2 rounded-5' src='./img/5-home.jpg' />
      <p className='paragraph mt-md-2 fs-6'>Astrid Hartman</p>
    </div>
    <div className='col-md-6'>
    <h1 className='paragraph fs-4 col-md-10 mt-md-5'>Excellent tutorial, 
    one of the best I've seen and I sorely needed this step-by-step instruction. 
    Thank you!</h1>
        <button className='client mt-md-4'>What My Clients Say</button>
    </div>
  </center>
  <div className='h100'></div>
</div>

    </>
  )
}
