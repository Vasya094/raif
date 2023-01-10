import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useTranslation } from 'react-i18next';
import useStyles from './header-style';
import navMenu from './menu';

function MobileMenu(props) {
  const { t } = useTranslation('common');
  const classes = useStyles();
  const { toggleDrawer, open } = props;
  const SideList = () => (
    <div
      className={classes.mobileNav}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <div className={clsx(classes.menu, open && classes.menuOpen)}>
        <List>
          {navMenu.map((item, index) => (
            <ListItem
              button
              component="a"
              href={`#${item}`}
              key={item}
              index={index.toString()}
              style={{ animationDuration: index * 0.15 + 's' }}
            >
              <ListItemText primary={t(item)} className={classes.menuList} />
            </ListItem>
          ))}
        </List>
        {/* <Divider />
        <List>
          {['login', 'register', 'contact'].map((text, index) => (
            <ListItem
              component="a"
              href={`/${text}`}
              button
              key={text}
              index={index.toString()}
              style={{ animationDuration: (index + navMenu.length) * 0.15 + 's' }}
            >
              <ListItemText className={classes.menuList} primary={text} />
            </ListItem>
          ))}
        </List> */}
      </div>
    </div>
  );

  return (
    <SwipeableDrawer
      open={open}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
      classes={{
        paper: classes.paperNav
      }}
    >
      <SideList />
    </SwipeableDrawer>
  );
}

MobileMenu.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default MobileMenu;
