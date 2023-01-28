import { useState, useEffect, Fragment, useRef } from "react"
import PropTypes from "prop-types"
import AppBar from "@material-ui/core/AppBar"
import clsx from "clsx"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import Container from "@material-ui/core/Container"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy"
import { useTranslation } from "react-i18next"
import Settings from "./Settings"
import MobileMenu from "./MobileMenu"
import logo from "~/public/images/header_logo.png"
import useStyles from "./header-style"
import navMenu from "./menu"
import {
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@material-ui/core"

let counter = 0
function createData(name, url) {
  counter += 1
  return {
    id: counter,
    name,
    url,
  }
}

// const LinkBtn = React.forwardRef((props, ref) =>
//    <AnchorLink to={props.to} {...props} innerRef={ref} /> // eslint-disable-line
// );

function Header(props) {
  const [fixed, setFixed] = useState(false)
  const [open, setOpen] = useState(false)
  const anchorRef = useRef(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = () => {
    setOpen(false)
  }

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault()
      setOpen(false)
    } else if (event.key === "Escape") {
      setOpen(false)
    }
  }

  const prevOpen = useRef(open)
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])
  let flagFixed = false
  const handleScroll = () => {
    const doc = document.documentElement
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
    const newFlagFixed = scroll > 80
    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed)
      flagFixed = newFlagFixed
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [])

  const classes = useStyles()
  const theme = useTheme()
  const { t } = useTranslation("common")
  const { onToggleDark, onToggleDir } = props
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"))
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [menuList] = useState([
    createData(navMenu[0], "#" + navMenu[0]),
    createData(navMenu[1], "#" + navMenu[1]),
    createData(navMenu[2], "#" + navMenu[2]),
    createData(navMenu[3], "#" + navMenu[3]),
    createData(navMenu[4], "#" + navMenu[4]),
  ])
  const [openDrawer, setOpenDrawer] = useState(false)
  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer)
  }
  return (
    <Fragment>
      {isMobile && (
        <MobileMenu open={openDrawer} toggleDrawer={handleOpenDrawer} />
      )}
      <AppBar
        position='relative'
        id='header'
        className={clsx(
          classes.header,
          fixed && classes.fixed,
          openDrawer && classes.openDrawer
        )}
      >
        <Container fixed>
          <div className={classes.headerContent}>
            <nav className={classes.navMenu}>
              {isMobile && (
                <IconButton
                  onClick={handleOpenDrawer}
                  className={clsx(
                    "hamburger hamburger--spin",
                    classes.mobileMenu,
                    openDrawer && "is-active"
                  )}
                >
                  <span className='hamburger-box'>
                    <span className={clsx(classes.bar, "hamburger-inner")} />
                  </span>
                </IconButton>
              )}
              <div className={classes.logo}>
                <AnchorLink href='#home'>
                  <img src={logo} alt='logo' />
                </AnchorLink>
              </div>
              {isDesktop && (
                <div className={classes.routesContainer}>
                  <Scrollspy items={navMenu} currentClassName='active'>
                    {menuList.map((item) =>
                      item.name !== "about_us" ? (
                        <li key={item.id.toString()}>
                          <Button component={AnchorLink} href={item.url}>
                            {t(item.name)}
                          </Button>
                        </li>
                      ) : (
                        <li key={item.id.toString()}>
                          <Button
                            ref={anchorRef}
                            id='composition-button'
                            aria-controls={
                              open ? "composition-menu" : undefined
                            }
                            aria-expanded={open ? "true" : undefined}
                            aria-haspopup='true'
                            onClick={handleToggle}
                          >
                            {t(item.name)}
                          </Button>
                          <Popper
                            open={open}
                            anchorEl={anchorRef.current}
                            role={undefined}
                            style={{
                              zIndex: 10,
                              width: "max-content",
                              textAlign: "left",
                            }}
                            placement='bottom-start'
                            transition
                            disablePortal
                          >
                            {({ TransitionProps, placement }) => (
                              <Grow
                                {...TransitionProps}
                                style={{
                                  zIndex: 10,
                                  transformOrigin:
                                    placement === "bottom-start"
                                      ? "left top"
                                      : "left bottom",
                                }}
                              >
                                <Paper>
                                  <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                      autoFocusItem={open}
                                      id='composition-menu'
                                      style={{
                                        display: "flex",
                                        flexDirection: "column",
                                      }}
                                      aria-labelledby='composition-button'
                                    >
                                      <Button
                                        component={AnchorLink}
                                        style={{ justifyContent: "start" }}
                                        href={item.url}
                                        onClick={handleClose}
                                      >
                                        {t("about_company")}
                                      </Button>
                                      <Button
                                        component={AnchorLink}
                                        style={{ justifyContent: "start" }}
                                        href='#for_agricultural_holdings'
                                        onClick={handleClose}
                                      >
                                        {t("for_agricultural_holdings")}
                                      </Button>
                                    </MenuList>
                                  </ClickAwayListener>
                                </Paper>
                              </Grow>
                            )}
                          </Popper>
                        </li>
                      )
                    )}
                    {/* <li>
                    <Button href='#'>Contact</Button>
                  </li> */}
                  </Scrollspy>
                </div>
              )}
            </nav>
            <nav className={classes.userMenu}>
              <span className={classes.vDivider} />
              <Settings toggleDark={onToggleDark} toggleDir={onToggleDir} />
            </nav>
          </div>
        </Container>
      </AppBar>
    </Fragment>
  )
}

Header.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
}

export default Header
