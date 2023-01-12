import React from "react";
import "./table.css";

export default function Table(props) {

  const { bodyData, renderBody } = props

  const tableHead = [
    "STT",
    "name",
    "flags",
    "coatOfArms",
    "capital",
    "region",
    "timezones",
    "maps",
  ];

  const renderHead = () => tableHead.map((item, index) => <th key={index}>{item}</th>);

  return (
    <div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              {renderHead()}
            </tr>
          </thead>
          {bodyData ? (
            <tbody>
              {bodyData.map((item, index) =>
                renderBody(item, index)
              )}
            </tbody>
          ) : null}
        </table>
        
      </div>
    </div>
  );
}
