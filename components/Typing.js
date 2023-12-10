import Typed from "typed.js";
import React, { Component } from "react";
import styled from "styled-components";

const Element = styled.span`
  text-align: center;
`;

const words = [
  "Bem-vindo ao Futteboxd.", // Portugues
  "Bienvenido a Futteboxd.", // Espanhol
  "Welcome to Futteboxd.", // Inglês
  "Bienvenue sur Futteboxd.", // Francês
  "Willkommen bei Futteboxd.", // Alemão
  "Benvenuto su Futteboxd.", // Italiano
];

class Typing extends React.Component {
  componentDidMount() {
    const options = {
      strings: words,
      typeSpeed: 85,
      backSpeed: 100,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <>
        <Element
          style={{ whiteSpace: "pre" }}
          ref={(el) => {
            this.el = el;
          }}
        />
      </>
    );
  }
}

export default Typing;
