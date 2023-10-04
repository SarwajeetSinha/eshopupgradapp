// Tabs.js
import React, { useState } from 'react';
// import  {Tabs as MuiTabs} from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';


const MyTabs = ({ tabLabels, children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newTab) => {
    setActiveTab(newTab);
  };

  return (
    <div>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {tabLabels.map((label, index) => (
          <Tab key={index} label={label} />
        ))}
      </Tabs>
    </div>
  );
};

export default MyTabs;
