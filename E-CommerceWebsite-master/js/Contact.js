const form = document.getElementById("contact-form");
const result = document.getElementById("result");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  result.textContent = "Sending...";

  const formData = new FormData(form);
  formData.append("access_key", "c63202d7-269b-4ceb-b113-a1b72d489624");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();

    if (data.success) {
      result.textContent = "Form Submitted Successfully!";
      form.reset();
    } else {
      result.textContent = "Error: " + data.message;
      console.error(data);
    }
  } catch (error) {
    result.textContent = "Something went wrong!";
    console.error(error);
  }
});
