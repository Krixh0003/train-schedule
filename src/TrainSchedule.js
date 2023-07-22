import React from 'react';
import TrainItem from './TrainItem';
import trainData from '../data/trainData';

const TrainSchedule = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Train Number</th>
          <th>Origin</th>
          <th>Destination</th>
          <th>Departure Time</th>
          <th>Arrival Time</th>
        </tr>
      </thead>
      <tbody>
        {trainData.map((train) => (
          <TrainItem key={train.id} train={train} />
        ))}
      </tbody>
    </table>
  );
};

export default TrainSchedule;

