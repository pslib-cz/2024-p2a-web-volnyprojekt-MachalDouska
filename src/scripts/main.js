
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../styles/swiper.css'
import '../styles/style.css'

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

 const models = {
    porsche: ["911 GT3RS", "Cayenne", "Taycan"],
    mclaren: ["720s", "Artura", "P1"],
    lamborghini: ["Huracan", "Aventador", "Urus"],
    ferrari: ["812", "Roma", "SF90"]
  };

  const brandSelect = document.getElementById("car-brand");
  const modelSelect = document.getElementById("car-model");

  brandSelect.addEventListener("change", () => {
    const selectedBrand = brandSelect.value;

    modelSelect.innerHTML = "";

    if (selectedBrand && models[selectedBrand]) {
      const defaultOption = document.createElement("option");
      defaultOption.value = "";
      defaultOption.textContent = "Vyberte model";
      modelSelect.appendChild(defaultOption);

      models[selectedBrand].forEach(model => {
        const option = document.createElement("option");
        option.value = model.toLowerCase().replace(/\s+/g, "-");
        option.textContent = model;
        modelSelect.appendChild(option);
      });
    } else {
      const option = document.createElement("option");
      option.value = "";
      option.textContent = "Vyberte značku";
      modelSelect.appendChild(option);
    }
  });