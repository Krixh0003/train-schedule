import React from 'react';

const TrainItem = ({ train }) => {
  return (
    <tr>
      <td>{train.trainNumber}</td>
      <td>{train.origin}</td>
      <td>{train.destination}</td>
      <td>{train.departureTime}</td>
      <td>{train.arrivalTime}</td>
    </tr>
  );
};

export default TrainItem;
