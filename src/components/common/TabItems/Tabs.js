import { useState } from 'react';
import PropTypes from 'prop-types';

import TabItem from '../TabItem/TabItem';

import s from './Tabs.module.scss';

const Tabs = ({ items }) => {
  const [activeItem, setActiveItem] = useState('Популярные');

  const onSelectItem = (item) => {
    setActiveItem(item);
  };

  return (
    <div className={s.tabs}>
      {items.map((item, index) => (
        <TabItem
          key={`${item}_${index}`}
          item={item}
          activeItem={activeItem}
          onClick={onSelectItem}
        />
      ))}
    </div>
  );
};

export default Tabs;

Tabs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};
