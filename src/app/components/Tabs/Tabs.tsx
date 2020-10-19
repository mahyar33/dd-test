import React, { memo, ReactElement, useState } from 'react';
import TabTitle from './TabTitle';
import { TabHeader } from './styles';

type Props = {
  children: ReactElement[];
};

const Tabs: React.FC<Props> = memo(({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <TabHeader>
        {children.map((item, index) => (
          <TabTitle
            key={item.props.title}
            title={item.props.title}
            index={index}
            isActive={selectedTab === index}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </TabHeader>
      {children[selectedTab]}
    </>
  );
});

export default Tabs;
