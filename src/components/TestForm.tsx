
const TestForm = () => {
    return (
        <form name="contact" method="POST" netlify>
            <p>
                <label>Your Name: <input type="text" name="name" /></label>
            </p>
            <p>
                <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
                <label>Postcode: <input type="postcode" name="postcode" /></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    )
}

export default TestForm