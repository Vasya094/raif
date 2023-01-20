import { Tooltip } from "@material-ui/core"
import { styled } from "@material-ui/styles"

const TooltipToCircle = styled(({ className, ...props }) => (
  <Tooltip arrow {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .tooltip`]: {
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))

export default TooltipToCircle
