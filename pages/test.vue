
<template>
    <div class="container py-20 px-4 lg:px-20 mx-auto">
      <div class="w-auto p-2">
          <h2 class="font-heading text-xl ">Fresh from Farm!</h2>
        </div>

      <section id="freshSlide" class="splide" aria-label="Slide Arrows">
        <div class="splide__arrows">
		<button class="splide__arrow splide__arrow--prev -ml-6 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg>
		</button>
		<button class="splide__arrow splide__arrow--next mr-2">
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg>
		</button>
  </div>

    <div class="splide__track ">
      <ul class="splide__list space-x-1 ">

       
       <!-- one -->
  
      <li class="splide__slide bg-white hover relative py-4 rounded-2xl">               
                   <div class="inner_play">
                    <div id="innerslide1" class="splide"  role="group" aria-label="Splide ">
                        <div class="splide__track ">
		            <ul class="splide__list ">
			            <!-- <li class="splide__slide w-[10%] my-2"><img class="w-24 content-center mx-auto"  src="~/assets/images/fresh/milk1.png"></li> -->
			            <!-- <li class="splide__slide w-[10%] my-2 "><img class=" w-24 content-center mx-auto"  src="~/assets/images/fresh/milk2.png"></li> -->
			            <!-- <li class="splide__slide">Slide 03</li> -->
		            </ul>
                         </div>
                         <div class="px-4 text-black">
                      <div class="flex ">
                        <p class="text-xl -mb-2 leading-tight">
                          <b>345</b>
                      </p>
                      
                      <div class="ml-1  block ">
                          <sup class="">
                              <b> .00</b>      
                          </sup>
                          <sup><p> Ngn</p></sup></div> 
                      </div>

                          <p class="my-2 text-md">Brookside Whole Milk 1L</p>
                     
                        </div>
                          <div class="absolute top-[50%] right-6">
                            <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#1d4ed8" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                         <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                        </svg>
                       </button>
                          </div>
                </div>
                   </div>
                   
               
        </li>
        
           <!-- two -->

        <li class="splide__slide bg-white hover relative py-4 rounded-2xl">               
          <div class="">
           <div id="" class="splide" data-splide='{"type":"loop","perPage":1, "arrows":false,, }'>
               <div class="splide__track ">
       <ul class="splide__list ">
         <!-- <li class="splide__slide w-[10%] my-2"><img class="w-24 content-center mx-auto"  src="~/assets/images/fresh/chicken1.png"></li> -->
         <!-- <li class="splide__slide w-[10%] my-2 "><img class=" w-24 content-center mx-auto"  src="~/assets/images/fresh/chicken1.png"></li> -->
         <!-- <li class="splide__slide">Slide 03</li> -->
       </ul>
                </div>
                <div class="px-4 text-black">
             <div class="flex ">
               <p class="text-xl -mb-2 leading-tight">
                 <b>345</b>
             </p>
             
             <div class="ml-1  block ">
                 <sup class="">
                     <b> .00</b>      
                 </sup>
                 <sup><p> Ngn</p></sup></div> 
             </div>

                 <p class="my-2 text-md">Brookside Whole Milk 1L</p>
            
               </div>
                 <div class="absolute top-[50%] right-6">
                   <button>
                   <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#1d4ed8" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
               </svg>
           </button>
                 </div>
       </div>

          </div>
        
      
</li>

      </ul>
    </div>
  
    
  </section> 

  
  </div>
  </template>
  
  <style scoped>
 #freshSlide .splide__arrow svg {
    fill :#0e0e0e;
    height:10rem;
    width:10rem;
  
   
    } 
     .splide__track{

        border:0px;
        border-radius:0; 
    }
  
    #innerslide1 .splide__pagination__page.is-active {
    background: #f9f611;
    transform: scale(1.4);
    z-index: 1;
}
  
  .splide__arrow {
      background:transparent;
      box-sizing: border-box;
      opacity: 1;
      }
     
  </style>
  
  <script>
  // import { onMounted } from 'vue';
  import Splide from '@splidejs/splide';
  
  export default {
    setup() {
      onMounted(() => {
        
       var splide = new Splide(  {

        type   : 'slide',

            rewind: true,

            perPage: 3,
          
   })


  
  splide.mount();
  // innerslide.mount();
        
      });
  
      return {};
    },
  };
  </script>
  