import "/src/style.css";
import 'fomantic-ui-css/semantic.min.css';
import 'fomantic-ui-css/semantic.min.js';
import axios from "axios";

let storeId = null;

const createStoreBtn = document.getElementById("create-new-btn");
const loadStoreBtn = document.getElementById("load-store-btn");

const webContent = document.getElementById("content");

let base_url = "https://weblizzard.onrender.com";

createStoreBtn.onclick = async function () {
  webContent.innerHTML = formanticLoader();
  try {
    let res = await axios.post(base_url + "/create_store")
    webContent.innerHTML = res.data.id;
    $.toast({
      class: 'success',
      title: 'Success',
      message: 'Store created successfully!',
      showProgress: 'bottom'
    })
    ;
  } catch(err) {
    webContent.innerHTML = String(err);
  }
}

loadStoreBtn.onclick = function () {
  $('#load-store-modal')
    .modal('show')
  ;
}

function formanticLoader() {
  return `<div class="ui active dimmer">
    <div class="ui medium text loader">Loading</div>
  </div>
  <p></p>
  <p></p>`
}
