
import React from 'react';
import PropTypes from 'prop-types';





export const List = (props) => (
  <tr>
    {props.values.map((value) => (
      <tr>
        <td key={value.msisdn}><ListItem value={value} /></td>
        <td>
          <button className="pinchoButt" key={value.msisdn} onClick={() => props.viewCustomer(value)}>Click</button>
        </td>
      </tr>
    ))}
  </tr>
);

List.propTypes = {
  values: PropTypes.array.isRequired,
};


const ListItem = (props) => (
  <tr >
    <td>SeatingData Type:    {props.value.seatingDate.__type}   Iso:  {props.value.seatingDate.iso}</td>
    <td>Kund Nummer:    {props.value.msisdn} </td>
  </tr>

);

export default List;
