function Form({ action, subject, handleSubject, body, handleBody }) {
  return (
    <form onSubmit={(event) => action(event)}>
      <label htmlFor="message-subject">Topic:</label>
      <input
        id="message-subject"
        type="text"
        value={subject}
        onInput={handleSubject}
      />
      <label htmlFor="message-body">Message:</label>
      <textarea
        name="message-body"
        id="message-body"
        value={body}
        onInput={handleBody}
        rows={10}
        cols={20}
      ></textarea>

      <button type="submit" disabled>
        Submit
      </button>
    </form>
  );
}

export default Form;
