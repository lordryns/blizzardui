import 'fomantic-ui-css/semantic.min.css';
import 'fomantic-ui-css/semantic.min.js';


const createStoreBtn = document.getElementById("create-btn");


createStoreBtn.onclick = function () {
  $.toast({
    class: 'success',
    message: `Store created successfully!`
  })
;
}


