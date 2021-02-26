import React, { useState } from "react";

export default function Suma() {
  const [data, setData] = useState({
    num1: "",
    num2: "",
  });

  const handleOnClik = () => {
    fetch("http://localhost:8081/suma?num1=" + data.num1 + "&num2=" + data.num2)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    //console.log(data);
  };

  return (
    <div className="container">
      <form>
        <div className="row">
          <div className="mb-3 col-6">
            <label htmlFor="num1" className="form-label">
              Numero 1
            </label>
            <input
              type="number"
              onChange={handleChange}
              className="form-control"
              name="num1"
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="num2" className="form-label">
              Numero 2
            </label>
            <input
              type="number"
              onChange={handleChange}
              className="form-control"
              name="num2"
            />
          </div>
        </div>
      </form>
      <button
        onClick={handleOnClik}
        className="btn btn-primary col-4 offset-4 "
      >
        Resultado
      </button>
      <h3>Resultado:</h3>
    </div>
  );
}
