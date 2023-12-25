import React from 'react'

export default function Contact() {
  return (
    <>
    <main className='bg-7 back'>
        <div className='h140'></div>
        <center>
          <div className='col-md-8 col-12'>
            <h1 className='heading'>contact us</h1>

            <div className='h140'></div>
          </div>
        </center>
      </main>
      <div className='h100'></div>

      <div className='conatainer-fluid'>
        <center>
          <h1 className='col-md-6 col-11 p-md-0 article text-black'>We respond to 
          all messages within 24 hours.</h1>

          <form className='g-3'>
            <div className='col-md-6'>
              <label for='inputname' className='fomr-label'></label>
              <input className='form-control form-control-lg' type='text' placeholder='Your Name'/>
            </div>
            <div className='col-md-6'>
              <label for='inputemail' className='fomr-label'></label>
              <input className='form-control form-control-lg' type='text' placeholder='Your E-mail'/>
            </div>
            <div className='col-md-6'>
              <label for='inputphone' className='fomr-label'></label>
              <input className='form-control form-control-lg' type='text' placeholder='Your Phone'/>
            </div>
            <div className='col-md-6'>
              <label for='inputmessage' className='fomr-label'></label>
              <textarea className='form-control form-control-lg' type='text' placeholder='Your Message'/>
            </div>
            <button className='service mb-3 mt-md-3'>Send Now</button>
          </form>
        </center>
      </div>
      <div className='h100'></div>


      <div className='conatainer-fluid bg-success-subtle'>
        <center>
          <div className='h70'></div>
          <h1 className='col-md-8 col-8 p-md-0 article fs-1 text-black'>Work with me online or in-person</h1>
        </center>


        <div className='container'>
          <div className='row'>

          <div className='col-md-5 col-12 mt-4 mt-md-0 p-4'>
            <article className='mb-4'>
              <p className='fs-6 paragraph mb-0'>E-MAIL</p>
              <p className='col-md-12 col-12 fs-5 paragraph'>contact@example.com</p>
            </article>
            <article className='mb-4'>
              <p className='fs-6 paragraph mb-0'>PHONE</p>
              <p className='col-md-12 col-12 fs-5 paragraph'>202-555-7890</p>
            </article>
            <article>
              <p className='fs-6 paragraph mb-0'>LOCATION</p>
              <p className='col-md-12 col-12 fs-5 paragraph'>123 Fifth Avenue, NY 10160, New York, USA</p>
            </article>

            <div className='social-icon col-md-5 col-5'>
              <span><button><i class="fa fa-twitter" aria-hidden="true"></i></button></span>
              <span><button><i class="fa fa-instagram" aria-hidden="true"></i></button></span>
              <span><button><i class="fa fa-youtube-play" aria-hidden="true"></i></button></span>
            </div>
          </div>

          <div className='col-md-7'>
          <article className='mt-md-2 p-3 p-md-0 mt-4'>
              <p className='col-md-12 col-12 paragraph mt-md-4'>You can use this final section to write some directions to your physical location, or any other useful information.</p>
              <p className='col-md-12 col-12 paragraph mt-md-4'><b>If you’re using this template</b> to build a website, and have any questions at all, I’d love to help!</p>
              <p className='col-md-12 col-12 paragraph mt-md-4'>Just search for WP Maker to find our YouTube channel. Leave a comment on any video – I always reply.</p>
              <p className='col-md-12 col-12 paragraph mt-md-4'>Thank you <b>so much</b> for watching our tutorials!</p>
            </article>
          </div>
        </div>
        </div>
       <div className='h80'></div>
      </div>
     
    
    </>
  )
}
