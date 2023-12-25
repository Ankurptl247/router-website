import React from 'react'

export default function Home() {
  return (
    <>
    
    <main className='bg-1 back'>
      <div className='h140'></div>
      <center>
        <div className='col-md-8 col-12'>
          <h1 className='heading'>Once you choose hope, <br/> anything is possible...</h1>
          <button type="button" class="btn btn-lg btn-success mt-md-4 mt-3" >Get Started</button>
          <div className='h140'></div>
        </div>
      </center>
    </main>
    <div className='h100'></div>



<div className='conatainer-fluid'>

    <article>
      <center>
        <p className='small-paragraph col-md-6 col-12'>CERTIFIED WEB DESIGNER BASED IN OAKLAND, CALIFORNIA</p>
        <h1 className='black-heading text-black col-md-6'>Problems I can help with</h1>
        <div className='hr mt-md-4'/>
      </center>
    </article>

<div className='container mt-md-5'>

  <div className='row ms-md-3 ms-0'>
    <div className='col-md-4 col-12 p-3 p-md-0'>
      <img className='col-md-11 h450 col-12 rounded object-fit-cover' src='./img/2-home.jpg'/>
        <article className='p-md-2 mt-md-4 mt-4'> 
          <h4 className='small-heading mb-3'>Web Design</h4> 
          <p className='col-md-11 col-12 paragraph'>Focus on how you can help and benefit your user. Use simple words to avoid confusion.</p>                                                                          
        </article>
    </div>

    <div className='col-md-4 col-12 p-3 p-md-0'>
      <img className='col-md-11 h450 col-12 rounded object-fit-cover' src='./img/3-home.jpg'/>
        <article className='p-md-2 mt-md-4 mt-4'> 
          <h4 className='small-heading mb-3'>Graphi Design</h4> 
          <p className='col-md-11 paragraph'>Focus on how you can help and benefit your user. Use simple words to avoid confusion.</p>                                                                          
        </article>
    </div>

    <div className='col-md-4 col-12 p-3 p-md-0'>
      <img className='col-md-11 h450 col-12 rounded object-fit-cover' src='./img/4-home.jpg'/>
        <article className='p-md-2 mt-md-4 mt-4'> 
          <h4 className='small-heading mb-3'>Content Creation</h4> 
          <p className='col-md-11 paragraph'>Focus on how you can help and benefit your user. Use simple words to avoid confusion.</p>                                                                          
        </article>
    </div> 
  </div>
</div>
<div className='h100'></div>
</div>

<div className='contanier-fluid bg-success-subtle '>
  <center>
    <div className='h60'></div>
    <div className='col-md-2'>
      <img className='col-md-4 rounded-5' src='./img/5-home.jpg' />
      <p className='paragraph mt-md-2 fs-6'>Ruth A. Flora</p>
    </div>
    <div className='col-md-6'>
    <h1 className='paragraph fs-4 col-md-11 mt-md-5'>You can showcase a client review here. Make
       it nice and short, then use this button to send them to your reviews
        or services page.</h1>
        <button className='client mt-md-4'>What My Clients Say</button>
    </div>
  </center>
  <div className='h100'></div>
</div>

<div className='container'>
  <div className='h100'></div>
  <div className='row'>
    <div className='col-md-4'>
      <img className='col-md-12 col-12 h500 object-fit-cover rounded' src='./img/6-home.jpg'/>
      <article>
        <center>
          <h4 className='small-heading fs-2 mt-md-4 d-none d-md-block'>Dragos Andrei Atudorei</h4>
          <p className='paragraph fs-6 mb-1 d-none d-md-block'>WordPress Content Creator</p>
          <p className='paragraph fs-6 mb-1 d-none d-md-block'>Certified Web Designer</p>
          <p className='paragraph fs-6 mb-1 d-none d-md-block'>Incurable Perfectionist</p>
        </center>
      </article>
    </div>
  
    <div className='col-md-8'>
      <article className='ms-md-5'>
        <p className='fs-6 paragraph d-none d-md-block'>WELCOME!</p>
        <h1 className='col-md-8 col-12 p-4 p-md-0 heading text-black fs-1'>My name is 
        Andrei and I am the creator of this template.</h1>
        <p className='col-md-10 paragraph mt-md-4'>I gave it my all to make this the best 
        design to start from. <b> I named it Hope,</b>  in honor of my client who 
        inspired me to make it – her middle name is Hope.</p>
        <p className='col-md-10 paragraph mt-md-4'>For the first section at the top of 
        the page, I recommend writing something that will <b>pique the interest</b>  of your
         target audience. Make them curious to read more!</p>
        <p className='col-md-10 paragraph mt-md-4'>These middle sections are the 
        perfect place to introduce yourself, and to perhaps start introducing <b>your services.</b></p>
        <p className='col-md-10 paragraph mt-md-4'>The last section below is great for a
         call to action.</p>
        <div className='p-2'>
          <button className='service mb-3 '>See My Services</button>
          <button className='about ms-md-3'>More About Me</button>
        </div>
      </article> 
   </div>
    </div>
    <div className='h100'></div>
</div>

<div className='bg-2 back'>
  <div className='h120'> </div>
    <center>
      <h1 className='heading'>Insert a call to action</h1>
      <p className='paragraph text-white fs-4 col-md-6 mb-4'>Think of what you want your visitor to 
      do next. Maybe they should contact you?</p>
      <button className='touch '>Get In Touch</button>
    </center>
    <div className='h100'></div>
</div>


    </>
  )
}
