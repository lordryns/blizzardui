import "/src/style.css";
import 'fomantic-ui-css/semantic.min.css';
import 'fomantic-ui-css/semantic.min.js';
import axios from "axios";


const createStoreBtn = document.getElementById("create-new-btn");
const loadStoreBtn = document.getElementById("load-store-btn"); // launches modal
const loadStoreBtnMain = document.getElementById("load-store-btn-main"); // the main one
const webContent = document.getElementById("content");

let base_url = "https://weblizzard.onrender.com";

fillStoreContent();

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

    sessionStorage.setItem("store-id", res.data.id);
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

loadStoreBtnMain.onclick = function () {
    const loadStoreInput = document.getElementById("load-store-input");
  if (loadStoreInput.value.length > 0) {
    sessionStorage.setItem("store-id", loadStoreInput.value);
    fillStoreContent();
  } else {
      $.toast({
        class: 'error',
        title: 'Error',
        message: 'Enter a valid store key!',
        showProgress: 'bottom'
      })
    ;
  }
}

function fillStoreContent() {
  let storeIdInput = document.getElementById("store-id");
  let storeId = sessionStorage.getItem("store-id");
  storeIdInput.value = storeId;

  let keyInput = document.getElementById("key-input");
  let valueInput = document.getElementById("value-input");
  let addBtn = document.getElementById("add-btn");



  addBtn.onclick = function () {
  let storeId = sessionStorage.getItem("store-id");
  if (!storeId) {
    $.toast({
      class: 'error',
      title: 'Error',
      message: 'No store is currently open!',
      showProgress: 'bottom'
    })
    ;


  } else {
      if (keyInput.value.length < 1 || valueInput.value.length < 1) {
        $.toast({
          class: 'error',
          title: 'Error',
          message: 'Neither key nor value can be left empty!',
          showProgress: 'bottom'
        })
        ;
      } else {
          $.toast({
            class: 'success',
            title: 'Success',
            message: `${keyInput.value} added successfully!`,
            showProgress: 'bottom'
          })
          ;
          }
    }
}
}

function formanticLoader() {
  return `<div class="ui active dimmer" id="page-loader">
    <div class="ui medium text loader">Loading</div>
  </div>
  <p></p>
  <p></p>`
}


