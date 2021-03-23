import React from 'react';
import uuid from 'react-uuid';

const tabList = ['Demographics', 'Climate', 'Culture', 'Economy'];

export default function Tabs() {
  return (
    <div className="tabs">
      {tabList.map((x) => <div key={uuid()}>{x}</div>)}
    </div>
  );
}
