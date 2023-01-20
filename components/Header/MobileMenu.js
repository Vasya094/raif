import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { useTranslation } from "react-i18next"
import useStyles from "./header-style"
import navMenu from "./menu"
import { Collapse, ListItemIcon } from "@material-ui/core"

function MobileMenu(props) {
  const { t } = useTranslation("common")
  const classes = useStyles()
  const [openCollapse, setOpenCollapse] = React.useState(true)

  const handleClick = () => {
    setOpenCollapse(!open)
  }

  const { toggleDrawer, open } = props
  const SideList = () => (
    <div
      className={classes.mobileNav}
      role='presentation'
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <div className={clsx(classes.menu, open && classes.menuOpen)}>
        <List>
          {navMenu.map((item, index) =>
            item !== "about_us" ? (
              <ListItem
                button
                component='a'
                href={`#${item}`}
                key={item}
                index={index.toString()}
                style={{ animationDuration: index * 0.15 + "s" }}
              >
                <ListItemText primary={t(item)} className={classes.menuList} />
              </ListItem>
            ) : (
              <>
                <ListItem
                  button
                  component='a'
                  href={`#${item}`}
                  key={item}
                  index={index.toString()}
                  style={{ animationDuration: index * 0.15 + "s" }}
                >
                  <ListItemText
                    primary={t(item)}
                    className={classes.menuList}
                  />
                </ListItem>
                <ListItem
                  button
                  component='a'
                  href='#for_agricultural_holdings'
                  key={item}
                  index={index.toString()}
                  style={{ animationDuration: index * 0.15 + "s" }}
                >
                  <ListItemText
                    primary={t("for_agricultural_holdings")}
                    className={classes.menuList}
                  />
                </ListItem>
              </>
            )
          )}
        </List>
      </div>
    </div>
  )

  return (
    <SwipeableDrawer
      open={open}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
      classes={{
        paper: classes.paperNav,
      }}
    >
      <SideList />
    </SwipeableDrawer>
  )
}

MobileMenu.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

export default MobileMenu
