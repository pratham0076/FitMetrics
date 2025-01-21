$(document).ready(function () {
    $("#signin-form").submit(async function (event) {
      event.preventDefault();
      const email = $("#email").val();
      const password = $("#password").val();
  
      try {
        const response = await $.ajax({
          type: "POST",
          url: "/api/signin",
          data: { email, password },
        });
        alert(response.message);
        window.location.href = "/";
      } catch (error) {
        alert(error.responseJSON.error);
      }
    });
  });