function Form({ action }) {
  return (
    <form action={action}>
      <label htmlFor="message-topic">Topic:</label>
      <input id="message-topic" type="text" />
      <label htmlFor="message-content">Message:</label>
      <textarea
        name="message-content"
        id="message-content"
        rows={10}
        cols={20}
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
