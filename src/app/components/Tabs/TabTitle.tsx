import React, { useCallback } from 'react';
import { Button } from './styles';

type Props = {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
  isActive: boolean;
};

const TabTitle = ({ title, setSelectedTab, index, isActive }: Props) => {
  const onClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  return (
    <Button className={isActive ? 'active' : ''} onClick={onClick}>
      {title}
    </Button>
  );
};

export default TabTitle;
