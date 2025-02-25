document.addEventListener("nav", () => {
  const form = document.getElementById("contact-form") as HTMLFormElement | null;
  if (!form) return;

  // Get the worker URL from the form's data attribute.
  const workerUrl = form.getAttribute("data-worker-url");
  if (!workerUrl) {
    console.error("No worker URL found on the form");
    return;
  } else {
    console.log("Worker URL found:", workerUrl);
  }

  // Attach the submit event listener
  form.addEventListener("submit", async function (event: Event) {
    event.preventDefault();
    console.log("Form submitted");

    // Gather the form data into a plain object
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string | null,
      email: formData.get("email") as string | null,
      subject: formData.get("subject") as string | null,
      body: formData.get("body") as string | null
    };

    console.log("Form data:", data);

    try {
      // Send the form data as JSON to the provided worker URL
      const response = await fetch(workerUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      alert("Success: " + result.message);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message.");
    }
  });
});