import React, { useState } from "react";
const carros = [
  { categoria: "Esporte", preco: "110000", modelo: "Golf GTI" },
  { categoria: "Esporte", preco: "120000", modelo: "Camaro" },
  { categoria: "SUV", preco: "85000", modelo: "HRV" },
  { categoria: "SUV", preco: "83000", modelo: "T-Cross" },
  { categoria: "Utilitário", preco: "125000", modelo: "Hillux" },
  { categoria: "Utilitário", preco: "90000", modelo: "Ranger" },
];

const linhas = (categoria) => {
  const linha = [];
  carros.forEach((carro) => {
    if (
      carro.categoria.toUpperCase() === categoria.toUpperCase() ||
      categoria === ""
    ) {
      linha.push(
        <tr>
          <td>{carro.categoria}</td>
          <td>{carro.preco}</td>
          <td>{carro.modelo}</td>
        </tr>
      );
    }
  });
  return linha;
};

const TabelaCarros = (categoria) => {
  return (
    <table border="1" style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>Categoria</th>
          <th>Preço</th>
          <th>Modelo</th>
        </tr>
      </thead>
      <tbody>{linhas(categoria)}</tbody>
    </table>
  );
};

const pesquisaCategoria = (categoria, setCategoria) => {
  return (
    <section>
      <label>
        Digite uma categoria
        <input
          type="text"
          value={categoria}
          onChange={(element) => {
            setCategoria(element.target.value);
          }}
        />
      </label>
    </section>
  );
};
export default function App() {
  const [categoria, setCategoria] = useState("");

  return (
    <>
      {pesquisaCategoria(categoria, setCategoria)}
      {TabelaCarros(categoria)}
    </>
  );
}
