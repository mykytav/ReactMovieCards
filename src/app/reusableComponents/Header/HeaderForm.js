import React from 'react';

const HeaderForm = ({
  handleInputChange,
  handleSubmitForm,
  query,
  refInput
}) => (
  <form className="form is-flex field has-addons" onSubmit={handleSubmitForm}>
    <div className="control is-expanded">
      <input
        type="text "
        className="input"
        placeholder="Enter a movie name..."
        value={query}
        onChange={handleInputChange}
        ref={refInput}
      />
    </div>
    <div className="control">
      <button className="form__button button">Search</button>
    </div>
  </form>
);

export default HeaderForm;
