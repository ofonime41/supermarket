<template>
    <section class="my-12 overflow-hidden">
      <div class="container px-4 lg:px-20 mx-auto ">
    
   
  <section class="splide " aria-label="Slide Container Example ">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide px-1 ">
        <div class="splide__slide__container">
          <img class="w-full h-full"  src="~/assets/images/hero/pepsodent_2464by560_2_f4bce2f32d.gif">
        </div>
		
        
      </li>

	  <li class="splide__slide px-1 ">
        <div class="splide__slide__container  ">
          <img class="w-full h-full"  src="~/assets/images/hero/Microsoft_Teams_image_615_1ac3433160.avif">
        </div>
		
        
      </li>

	  <li class="splide__slide px-1 ">
        <div class="splide__slide__container  ">
          <img class="w-full h-full"  src="~/assets/images/hero/Carrefour_Hero_Banner_2464x618p_Aug_28_582345b598.jpg">
        </div>
		
        
      </li>

	  <li class="splide__slide px-1 ">
        <div class="splide__slide__container  ">
          <img class="w-full h-full"  src="~/assets/images/hero/MYCLUB_SHOPPING_FESTIVAL_WEB_HERO_BANNER_GIF_c4675219ca.webp">
        </div>
	
        
      </li>

	  <li class="splide__slide px-1 ">
        <div class="splide__slide__container  ">
          <img class="w-full h-full"  src="~/assets/images/hero/Microsoft_Teams_image_615_1ac3433160.avif">
        </div>
		
      </li>

	  
	  <li class="splide__slide px-1 ">
        <div class="splide__slide__container  ">
          <img class="w-full h-full"  src="~/assets/images/hero/MYCLUB_SHOPPING_FESTIVAL_WEB_HERO_BANNER_GIF_c4675219ca.webp">
        </div>
		
        
      </li>


	 
    </ul>
  </div>
</section>
      
      </div>   
        </section>
    </template>

<style>

  .splide__arrow svg {
    fill :white;
    height:5rem;
    width:5rem
    
    }

    .splide__track {
      border: 2px solid transparent;
        border-radius: 3rem;
    }
  
     

    @media only screen and (min-width: 40em) {
 
       .splide__arrow svg {
    fill :white;
    height:1rem;
    width:1rem
    
    } 
    }
 
</style>
    
<script>
import { onMounted } from 'vue';
import Splide from '@splidejs/splide';

export default {
  setup() {
    onMounted(() => {
		var splide = new Splide( '.splide', {
  type     : 'loop',
  height   : '20rem',
  // width:    '100rem',
  focus    : 'center',
  perPage    : 1,
  autoplay: true,

  breakpoints: {
    768: {
			height   : '1rem',
      // width:     '100%',
		},

		640: {
			height   : '6rem',
      // width:     '100%',
		},

   
  }

  
  
} );

splide.mount();
	  
    });

    return {};
  },
};
</script>
