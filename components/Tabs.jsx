import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

export default function Tabs({ data }) {
  const tabs = data;
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeContent = tabs.filter((x) => x.id === activeTab).map((x) => x.content);
  return (
    <>
      <div className="tabs flex">
        {tabs.map((x, i) => (
          <div
            className={`${activeTab === x.id ? 'bg-primary' : ''} tabs_list  font-display p-sm border  border-r-0  border-b-0 last:border-r`}
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
      <div className="p-md border">
        <p className="font-body">{activeContent}</p>
      </div>
    </>
  );
}

Tabs.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    content: PropTypes.string,
  }),
};

Tabs.defaultProps = {
  data: null,
};
