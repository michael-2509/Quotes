import { Fragment, useRef, useState } from "react";
// import NavigationPrompt from "react-router-navigation-prompt";
// import NavigationPrompt from "react-router-navigation-prompt";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [isEntering, setIsEntering] = useState(false);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const focusHandler = () => {
    setIsEntering(true);
    setIsEntering(false);
  };

  const finishedHandler = () => {
    setIsEntering(false);
  };

  return (
    <Fragment>
      {/* <NavigationPrompt
        when={isEntering}
        message={() => {
          <p>are you sure motherfucjer</p>;
        }}
      /> */}
      <Card>
        <form
          onFocus={focusHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishedHandler} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
