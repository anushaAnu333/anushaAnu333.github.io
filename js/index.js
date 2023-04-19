/*===== MENU SHOW =====*/
const showMenu = ( toggleId, navId ) => {
    const toggle = document.getElementById( toggleId ),
      nav = document.getElementById( navId );
  
    if ( toggle && nav ) {
      toggle.addEventListener( "click", () => {
        nav.classList.toggle( "show" );
      } );
    }
  };
  showMenu( "nav-toggle", "nav-menu" );
  
  /*===== ACTIVE AND REMOVE MENU =====*/
  const navLinks = document.querySelectorAll( ".nav-link" );
  const sections = document.querySelectorAll( ".section" );
  
  window.addEventListener( "scroll", () => {
    let current = '';
    sections.forEach( section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if ( scrollY >= sectionTop - 390 ) {
        current = section.getAttribute( 'id' );
      }
    } )
  
    navLinks.forEach( link => {
      link.classList.remove( 'active' );
      if ( link.classList.contains( current ) ) {
        link.classList.add( 'active' );
      }
    } )
  } )
  
  const navMenu = document.getElementById( "nav-menu" );
  navLinks.forEach( ( n ) => n.addEventListener( "click", () => { navMenu.classList.remove( "show" ) } ) );
  
  /*===== COPY Email =====*/
  const copy = document.getElementById( "copy" );
  copy.addEventListener( "click", () => {
    navigator.clipboard.writeText( "anushasurendrankp333@gmail.com" );
    copy.innerHTML = "copied";
    setTimeout( () => {
      copy.innerHTML = null;
    }, 1000 );
  } );
  
  /*===== SCROLL REVEAL ANIMATION =====*/
  const sr = ScrollReveal( {
   
    distance: "80px",
    duration: 1000,
    reset: true,
  } );
  
//   /*SCROLL HOME*/
//   sr.reveal( ".home-title", {} );
//   sr.reveal( ".button", { delay: 200 } );
//   sr.reveal( ".home-img", { delay: 400 } );
//   sr.reveal( ".home-social-icon", { interval: 200 } );
  
// //   /*SCROLL ABOUT*/
//   sr.reveal( ".about-img", {} );
//   sr.reveal( ".about-subtitle", { delay: 400 } );
//   sr.reveal( ".about-text", { delay: 400 } );
  
// //   /*SCROLL SKILLS*/
//   // sr.reveal( ".skills-subtitle", {} );
//   sr.reveal( ".skills-text", {} );
//   sr.reveal( ".skills-data", { interval: 100 } );
// //   sr.reveal(".skills-img", { delay: 600 });
  
//   /*SCROLL projects*/
  sr.reveal( ".project-img", {interval: 500 } );
  
//   /*SCROLL CONTACT*/e
//   // sr.reveal(".contact-input", { interval: 200 });

// gitHub calender part
  GitHubCalendar(".calendar", "anushaAnu333");
  // enable responsive functionality
   GitHubCalendar(".calendar", "anushaAnu333", { responsive: true });

  /* fully completed */


  document.getElementById("downloadResume").addEventListener("click",handleResumeDownload)

  function handleResumeDownload() {
   console.log("working")
   const link = document.createElement("a");
   window.open("https://drive.google.com/file/d/1x5MjVk7RpCN2rkVGVNytjlp1CdqJvb9L/view?usp=sharing", "_blank");
   link.download = "./img/Anusha-Surendran-Resume.pdf";
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
   // If download attribute is not supported, open the file in a new window
   
 }

 document.getElementById("downloadResumes").addEventListener("click",handleResumeDownload)

  function handleResumeDownload() {
   console.log("working")
   const link = document.createElement("a");
   window.open("https://drive.google.com/file/d/1x5MjVk7RpCN2rkVGVNytjlp1CdqJvb9L/view?usp=sharing", "_blank");
   link.download = "./img/Anusha-Surendran-Resume.pdf";
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
   // If download attribute is not supported, open the file in a new window
   
 }