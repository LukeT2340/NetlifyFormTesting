const TestForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
      
        const myForm = event.target;
        const formData = new FormData(myForm);
        
        const urlSearchParams = new URLSearchParams();
        formData.forEach((value, key) => {
            urlSearchParams.append(key, value as string); 
        });

        fetch("/", {  
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(urlSearchParams).toString(),
        })
          .then(() => console.log("Form successfully submitted"))
          .catch(() => alert("Submission error"));
      };

    return (
        <form name="contact" method="POST" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <p>
                <label>Your Name: <input type="text" name="name" /></label>
            </p>
            <p>
                <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
                <label>Postcode: <input type="text" name="postcode" /></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    )
}

export default TestForm
