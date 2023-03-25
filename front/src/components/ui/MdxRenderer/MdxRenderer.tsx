import React from "react";

import "./styles.css";

const MdxRenderer = ({ mdxText }) => {
  const mdxRenderer = (mdxArr) => {
    return mdxArr.map((node, index) => {
      if (node.type === "p") {
        return (
          <p className="text-xl" key={index}>
            {node.props.children}
          </p>
        );
      }

      if (node.type === "h1") {
        return (
          <h1 className="title text-4xl" key={index}>
            {node.props.children}
          </h1>
        );
      }

      if (node.type === "h2") {
        return (
          <h2 className="subtitle text-2xl" key={index}>
            {node.props.children}
          </h2>
        );
      }

      if (node.type === "h3") {
        return (
          <h3 className="subtitle italic text-2xl" key={index}>
            {node.props.children}
          </h3>
        );
      }

      if (node.type === "table") {
        return (
          <table className="styled-table" key={index}>
            {node.props.children.map((table, index) => {
              if (table.type === "thead") {
                return (
                  <thead key={index}>
                    <tr key={index + 1}>
                      {table.props.children.props.children.map(
                        (th, thIndex) => (
                          <th key={thIndex}>{th.props.children}</th>
                        )
                      )}
                    </tr>
                  </thead>
                );
              }

              if (table.type === "tbody") {
                return (
                  <tbody key={index}>
                    {table.props.children.map((tr, trIndex) => {
                      return (
                        <tr key={trIndex}>
                          {tr.props.children.map((td, tdIndex) => {
                            return <td key={tdIndex}>{td.props.children}</td>;
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                );
              }
            })}
          </table>
        );
      }
      return null;
    });
  };
  return <>{mdxRenderer(mdxText)}</>;
};

export default MdxRenderer;
