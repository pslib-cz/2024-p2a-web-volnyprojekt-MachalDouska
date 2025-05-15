
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import 'normalize.css'
import '../styles/hamburger.css'
import '../styles/style.css'
import '../styles/fonts.css'
import '../styles/swiper.css'

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';



const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});