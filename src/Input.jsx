import React from "react";

export default function Inputs({ onChange, InputValue }) {
  return (
    <React.Fragment>
      <section className="container">
        <div className="input-user">
          <p>
            <label htmlFor="Initial-Invest">INITIAL INVESTMENT</label>
            <input
              type="number"
              value={InputValue.initialInvestment}
              id="initial-Item"
              required
              onChange={(event) => onChange("initialInvestment", event.target.value)}
            />
          </p>
          <p>
            <label htmlFor="Anua-Invest">ANUAL INVESTMENT</label>
            <input
              type="number"
              value={InputValue.annualInvestment}
              id="anual"
              required
              onChange={(event) => onChange("annualInvestment", event.target.value)}
            />
          </p>
        </div>
        <div className="input-user">
          <p>
            <label htmlFor="ExpectReturn">EXPECT RETURN</label>
            <input
              type="number"
              value={InputValue.expectedReturn}
              id="expect-return"
              required
              onChange={(event) => onChange("expectedReturn", event.target.value)}
            />
          </p>
          <p>
            <label htmlFor="Duratuin">DURATION</label>
            <input
              type="number"
              value={InputValue.duration}
              id="duration"
              required
              onChange={(event) => onChange("duration", event.target.value)}
            />
          </p>
        </div>
      </section>
    </React.Fragment>
  );
}