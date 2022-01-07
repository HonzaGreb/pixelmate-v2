import React from 'react';

const HeroForm = () => {
  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={formSubmitHandler} className="hero__form">
      <h4 className="h4 h4--heavy">Přihlašte se</h4>
      <input
        type="text"
        className="form__input"
        id="input-email"
        placeholder="Váš email"
      />
      <label htmlFor="input-email">Váš email</label>
      <input
        type="text"
        className="form__input"
        id="input-password"
        placeholder="Heslo"
      />
      <label htmlFor="input-password">Heslo</label>
      <div className="form__block">
        <input type="checkbox" id="input-checkbox" />
        <label htmlFor="input-checkbox">
          Souhlasím se všeobecnými podmínkami a Zásadou o ochranně osobních
          údajů.
        </label>
      </div>
      <button className="btn btn--primary">přihlásit se &rarr;</button>
    </form>
  );
};

export default HeroForm;
