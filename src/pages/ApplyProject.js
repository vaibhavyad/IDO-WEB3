import React, { useEffect, useState } from 'react';
import '../styles/style.css';
// import { Link, useLocation } from 'react-router-dom';
// import StepprtForm from '../components/Form/Publish/publishForm';
import PublishForm from "../components/Form/Publish/publishForm";
// import { AnimationOnScroll } from 'react-animation-on-scroll';
import * as s from "../styles/global";

const Publish = (props) => {
  
    return (
      <s.Container ai="center">
        <s.TextTitle></s.TextTitle>
        <s.SpacerMedium />
        <PublishForm></PublishForm>
      </s.Container>
    );
  };

// const ApplyProject = () => { 
    
//     useEffect(() => {
//         if(!localStorage.getItem('redirect')){
//             localStorage.setItem("redirect",0)
//             setTimeout(()=>{
//                 window.location.reload()
//             },10)           
//         }
//     }, [])
    
//     return (
//         <>
//             {/* <section className="page-header">
//                 <div className="container">
//                     <div className="page-header__content text-center">
//                         <h2 className="text-capitalize">Apply For Project</h2>
//                         <nav aria-label="breadcrumb">
//                             <ol className="breadcrumb justify-content-center mb-0">
//                                 <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
//                                 <li className="breadcrumb-item active" aria-current="page">apply project</li>
//                             </ol>
//                         </nav>
//                     </div>
//                 </div>
//             </section>
//             <section className="apply-project padding-top padding-bottom w-100">
//                 <div className="container">
//                     <div className="section-header section-header--middle">
//                         <div className="section-header__content">
//                             <div className="section-header__titlebar">
//                                 <h2 className="section__header__title">Please fill the form</h2>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="apply-project__wrapper">
//                         <form action="#" className="apply-project__form">
//                             <div className="row justify-content-center">
//                                 <div className="col-lg-6 col-md-8">


//                                     <div className="apply-project__block mb-4">
//                                         <div className="apply-project__block-header">
//                                             <h4>Contact Information</h4>
//                                         </div>
//                                         <div className="apply-project__block-content">

//                                             <div className="form-floating mb-3">
//                                                 <input type="text" className="form-control" id="applyinfo-name"
//                                                     placeholder="Full Name" required />
//                                                 <label for="applyinfo-name">Full Name*</label>
//                                             </div>

//                                             <div className="form-floating mb-3">
//                                                 <input type="email" className="form-control" id="applyinfo-mail"
//                                                     placeholder="name@example.com" required />
//                                                 <label for="applyinfo-mail">Email*</label>
//                                             </div>

//                                             <div className="form-floating mb-3">
//                                                 <input type="text" className="form-control" id="applyinfo-title" placeholder="title"
//                                                     required />
//                                                 <label for="applyinfo-title">Title*</label>
//                                             </div>
//                                             <div className="form-floating">
//                                                 <input type="text" className="form-control" id="applyinfo-telegram"
//                                                     placeholder="Telegram user" required />
//                                                 <label for="applyinfo-telegram">Telegram User</label>
//                                             </div>
//                                         </div>
//                                     </div>


//                                     <div className="apply-project__block mb-5">
//                                         <div className="apply-project__block-header">
//                                             <h4>Project Information</h4>
//                                         </div>
//                                         <div className="apply-project__block-content">

//                                             <div className="form-floating mb-3">
//                                                 <input type="text" className="form-control" id="project-name"
//                                                     placeholder="Project Name" required />
//                                                 <label for="project-name">Project Name*</label>
//                                             </div>

//                                             <div className="form-floating mb-3">
//                                                 <textarea className="form-control" placeholder="Project Description"
//                                                     id="project-description" required></textarea>
//                                                 <label for="project-description">Project Description *</label>
//                                             </div>

//                                             <div className="form-floating mb-3">
//                                                 <textarea className="form-control" placeholder="Project token" id="project-token"
//                                                     required></textarea>
//                                                 <label for="project-token">Token Information *</label>
//                                             </div>

//                                             <div className="form-floating mb-5">
//                                                 <input type="text" className="form-control" id="project-raise"
//                                                     placeholder="Project Raised ammount" required />
//                                                 <label for="project-raise">Target Raise Ammount *</label>
//                                             </div>

//                                             <div className="row g-3 mb-5">
//                                                 <div className="col-sm-6">
//                                                     <div className="form-floating">
//                                                         <select className="form-select" id="blockchain-select">
//                                                             <option selected>BSC</option>
//                                                             <option>Solana</option>
//                                                             <option>Ethereum</option>
//                                                             <option>Polkadot</option>
//                                                             <option>Polygon</option>
//                                                         </select>
//                                                         <label for="blockchain-select">Select Chain</label>
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-sm-6">
//                                                     <div className="form-floating">
//                                                         <select className="form-select" id="status-select">
//                                                             <option selected>Ready to launch</option>
//                                                             <option>In early development</option>
//                                                             <option>Idea with White Paper</option>
//                                                             <option>Just an initial idea</option>
//                                                         </select>
//                                                         <label for="status-select">Project Status</label>
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-sm-6">
//                                                     <div className="form-floating">
//                                                         <select className="form-select" id="raised-fund">
//                                                             <option selected>No</option>
//                                                             <option>Yes</option>
//                                                         </select>
//                                                         <label for="raised-fund">Raised before ?</label>
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-sm-6">
//                                                     <div className="form-floating">
//                                                         <select className="form-select" id="project-type">
//                                                             <option selected>IGO</option>
//                                                             <option>IGO</option>
//                                                             <option>IDO</option>
//                                                             <option>IncubatedIDO</option>
//                                                         </select>
//                                                         <label for="project-type">Project Type</label>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="form-floating mb-3">
//                                                 <input type="url" className="form-control" id="project-website"
//                                                     placeholder="Website URL" />
//                                                 <label for="project-website">Website URL </label>
//                                             </div>

//                                             <div className="form-floating mb-3">
//                                                 <input type="url" className="form-control" id="project-whitepaper"
//                                                     placeholder="Whitepaper url" />
//                                                 <label for="project-whitepaper"> Whitepaper URL</label>
//                                             </div>

//                                             <div className="form-floating mb-3">
//                                                 <input type="url" className="form-control" id="project-twitter"
//                                                     placeholder="Project Twitter" />
//                                                 <label for="project-twitter"> Project Twitter</label>
//                                             </div>

//                                             <div className="form-floating mb-3">
//                                                 <input type="url" className="form-control" id="project-telegram"
//                                                     placeholder="Project Telegram" />
//                                                 <label for="project-telegram"> Project Telegram</label>
//                                             </div>

//                                             <div className="form-floating mb-3">
//                                                 <input type="url" className="form-control" id="project-github"
//                                                     placeholder="Project github" />
//                                                 <label for="project-github"> Project Github</label>
//                                             </div>


//                                         </div>
//                                     </div>

//                                     <div className="text-center">
//                                         <button className="default-btn" type="submit"> <span>Submit Project</span> </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </form>

//                     </div>
//                 </div>
//             </section>
//             <section className="newsletter  padding-bottom w-100">
//                 <div className='animation-wrapper'>
//                     <AnimationOnScroll animateIn="animate__fadeInUp">
//                         <div className="container">
//                             <div className="newsletter__wrapper newsletter__wrapper--bg-shapes">
//                                 <div className="section-header section-header--middle">
//                                     <div className="section-header__content">
//                                         <div className="section-header__titlebar">
//                                             <p className="section-header__subtitle"> Stay Updated</p>
//                                             <h3 className="section__header__title"> Subscribe For Newsletter</h3>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="newsletter__form">
//                                     <div className="row justify-content-center">
//                                         <div className="col-lg-6">
//                                             <form action="#">
//                                                 <input type="email" className="form-control" placeholder="Email address"
//                                                     aria-label="Newsletter Email" />
//                                                 <button type="submit">Subscribe
//                                                 </button>
//                                             </form>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </AnimationOnScroll>
//                 </div>
//             </section> */}
           
//               {/* <StepprtForm/> */}
//         </>
//     );
// };
// export default {Publish, ApplyProject};
export default Publish;

