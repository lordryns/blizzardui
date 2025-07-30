import "/src/style.css";
import 'fomantic-ui-css/semantic.min.css';
import 'fomantic-ui-css/semantic.min.js';
import axios from "axios";

const createStoreBtn = document.getElementById("create-btn");
const createEditGroup = document.getElementById("create-edit-group");


var base_url = "https://weblizzard.onrender.com";
createStoreBtn.onclick = async function () {
  createEditGroup.innerHTML = "Loading...";
  try {
    var res = await axios.post(base_url + "/create_store")
    createEditGroup.innerHTML = res.data.id;
    $.toast({
      class: 'success',
      message: `Store created successfully!`
    })

  } catch (err) {
    console.log(err)
  }
 ;
}


