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
  webContent.innerHTML += formanticLoader();
  try {
    let res = await axios.post(base_url + "/create_store")
    
    $.toast({
      class: 'success',
      title: 'Success',
      message: 'Store created successfully!',
      showProgress: 'bottom'
    })
    ;

    storeId = res.data.id;
    fillStoreContent();


    document.getElementById("page-loader").remove();
  } catch(err) {
    webContent.innerHTML = String(err);
  }
}

loadStoreBtn.onclick = function () {
  $('#load-store-modal')
    .modal('show')
  ;
}

function fillStoreContent() {
  let storeIdInput = document.getElementById("store-id");

  storeIdInput.value = storeId;
}

function formanticLoader() {
  return `<div class="ui active dimmer" id="page-loader">
    <div class="ui medium text loader">Loading</div>
  </div>
  <p></p>
  <p></p>`
}
