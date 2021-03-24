import React, { useState } from 'react';
import uuid from 'react-uuid';

const tabsList = ['Demographics', 'Climate', 'Culture', 'Economy'];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(tabsList[0]);
  return (
    <>
      <span>
        Active Tab is
        {' '}
        {activeTab}
      </span>
      <div className="tabs">
        {tabsList.map((x, i) => (
          <div
            className="tabs_list"
            key={uuid()}
            onClick={() => setActiveTab(x)}
            onKeyDown={() => setActiveTab(x)}
            role="button"
            tabIndex={i}
          >
            {x}
            {' '}
            data
          </div>
        ))}
      </div>
    </>
  );
}
