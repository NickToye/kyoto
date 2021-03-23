import React from 'react';

const tabList = ['Demographics', 'Climate', 'Culture', 'Economy'];

export default function Tabs() {
  return (
    <div className="tabs">
      {tabList.map((x, i) => <div key={i}>{x}</div>)}
    </div>
  );
}
