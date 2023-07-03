var showFormLink = document.getElementById("showFormLink");
var formContainer = document.getElementById("formContainer");

showFormLink.addEventListener("click", function (event) {
  event.preventDefault();
  formContainer.style.display = "block";
});



//   form
var showFormLink = document.getElementById("showFormLink");
var formContainer = document.getElementById("formContainer");

showFormLink.addEventListener("click", function () {
  formContainer.style.display = "block";
  setTimeout(function () {
    formContainer.classList.add("show");
  }, 100);
});




// nhập đúng dữ liệu
const input1 = document.getElementById("inputText1");
const input2 = document.getElementById("inputText2");
const submitButton = document.getElementById("submitButton");

// Xử lý sự kiện click vào nút Submit
submitButton.addEventListener("click", function(event) {
  event.preventDefault(); // Ngăn form submit mặc định

  // Kiểm tra giá trị nhập vào
  if (input1.value.trim().toLowerCase() === "05/07/2003" && input2.value.trim().toLowerCase() === "28/05/2003") {
    // Nếu nhập đúng, chuyển qua trang khác
    window.location.href = "trang_phụ.html";
  } else {
    // Nếu nhập sai, hiển thị thông báo
    alert("NHẬP SAI RỒI!");
  }
});

// dấu X tắt form
document.addEventListener("DOMContentLoaded", function() {
  var formContainer = document.getElementById("formContainer");
  var closeButton = document.querySelector(".close-X");
  var showFormLink = document.getElementById("showFormLink");
  var isFormVisible = false;

  closeButton.addEventListener("click", function() {
    formContainer.classList.remove("form-show");
    isFormVisible = false;
  });

  showFormLink.addEventListener("click", function() {
    if (!isFormVisible) {
      formContainer.style.display = "block";
      setTimeout(function() {
        formContainer.classList.add("form-show");
        isFormVisible = true;
      }, 10);
    }
  });
  closeButton.addEventListener("click", function() {
    formContainer.style.opacity = "0";
    setTimeout(function() {
      formContainer.style.display = "none";
      formContainer.style.opacity = "1";
    }, 300);
  });
});

