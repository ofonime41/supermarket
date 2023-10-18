
  <template>
  <div class="container px-4 lg:px-20 mx-auto">
    <div class="w-auto p-2">
        <h2 class="font-heading text-2xl font-bold">Promotions</h2>
      </div>
    <section id="promotionSlide" class="splide" aria-label="Slide Container Example">
  <div class="splide__track ">
    <ul class="splide__list">
      <li class="splide__slide ">          
              <img class="w-[90%]"  src="~/assets/images/promotions/promo1.png">
      </li>
     

      <li class="splide__slide">          
        <img class="w-[90%]" src="~/assets/images/promotions/promo2.png">
      </li>

      <li class="splide__slide">          
        <img class="w-[90%]" src="~/assets/images/promotions/promo3.png">
      </li>

      <li class="splide__slide">          
        <img class="w-[90%]" src="~/assets/images/promotions/promo4.png">
      </li>
      <li class="splide__slide">          
        <img class="w-[90%]" src="~/assets/images/promotions/promo5.png">
      </li>

      <li class="splide__slide">          
        <img class="w-[90%]" src="~/assets/images/promotions/promo4.png">
      </li>
      
      <li class="splide__slide">          
              <img class="w-[90%]" src="~/assets/images/promotions/promo3.png">
      </li>
     

      <li class="splide__slide">          
        <img class="w-[90%]" src="~/assets/images/promotions/promo2.png">
      </li>

      <li class="splide__slide">          
        <img class="w-[90%]" src="~/assets/images/promotions/promo1.png">
      </li>

      <li class="splide__slide">          
        <img class="w-[90%]" src="~/assets/images/promotions/promo4.png">
      </li>
    </ul>
  </div>

  
</section> 

<!-- <section class="splide" aria-labelledby="carousel-heading">
  <h2 id="carousel-heading">Basic Structure Example</h2>

</section> -->

</div>
</template>

<style scoped>
#promotionSlide .splide__arrow {
    border: 3px solid red;
    
    }
</style>

<script>
// import { onMounted } from 'vue';
import Splide from '@splidejs/splide';

export default {
  setup() {
    onMounted(() => {
      
	 var splide = new Splide( '#promotionSlide', {
       autoplay: true,
        type       : 'loop',
        height     : 'auto',
        perPage    : 5,
  breakpoints: {
    640: {
      height: 'auto',
    },
  },
  
} );

splide.mount();
	  
    });

    return {};
  },
};
</script>
