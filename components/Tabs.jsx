import React, { useState } from 'react';
import uuid from 'react-uuid';

export default function Tabs(props) {
  const { data } = props;
  const [activeTab, setActiveTab] = useState(data[0].id);
  const activeContent = data.filter((x) => x.id === activeTab).map((x) => x.content);

  return (
    <>
      <div className="tabs">
        {data.map((x, i) => (
          <div
            className="tabs_list"
            key={uuid()}
            onClick={() => setActiveTab(x.id)}
            onKeyDown={() => setActiveTab(x.id)}
            role="button"
            tabIndex={i}
          >
            {x.label}
          </div>
        ))}
      </div>
      <div>
        {activeContent}
      </div>
    </>
  );
}
