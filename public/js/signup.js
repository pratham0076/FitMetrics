$(document).ready(function () {
    $("#signup-form").submit(async function (event) {
      event.preventDefault();
      const username = $("#username").val();
      const email = $("#email").val();
      const password = $("#password").val();
  
      try {
        const response = await $.ajax({
          type: "POST",
          url: "/api/signup",
          data: { username, email, password },
        });
        alert(response.message);
        window.location.href = "/signin";
      } catch (error) {
        alert(error.responseJSON.error);
      }
    });
  });