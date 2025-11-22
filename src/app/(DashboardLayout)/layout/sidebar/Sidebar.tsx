import { useMediaQuery, Box, Drawer } from "@mui/material";
import SidebarItems from "./SidebarItems";
import { DashboardContext } from "@/context/DashboardContext";
import { useContext } from "react";
import Upgrade from "./Updrade";
import Scrollbar from "../../components/custom-scroll/Scrollbar";
import { Logo } from "react-mui-sidebar";
import Link from "next/link";


const Sidebar = ({
}) => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));
  const { isMobileSidebar, setIsMobileSidebar } = useContext(DashboardContext);
  const sidebarWidth = "270px";


  if (lgUp) {
    return (
      <Box
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
        }}
      >
        {/* ------------------------------------------- */}
        {/* Sidebar for desktop */}
        {/* ------------------------------------------- */}

        <Drawer
          anchor="left"
          open
          variant="permanent"
          slotProps={{
            paper: {
              sx: {
                width: sidebarWidth,
                boxSizing: "border-box",
                // top: '72px'
              },
            }
          }}
        >

          <Box>
            <Logo img="/images/logos/logo-flash-dark.svg" component={Link} href="/">
              Spike
            </Logo>
          </Box>

          {/* ------------------------------------------- */}
          {/* Sidebar Box */}
          {/* ------------------------------------------- */}
          <Scrollbar sx={{ height: "calc(100% - 73px)" }}>
            <Box

            >
              {/* ------------------------------------------- */}
              {/* Sidebar Items */}
              {/* ------------------------------------------- */}
              <SidebarItems />
              <Upgrade />
            </Box>
          </Scrollbar>
        </Drawer>
      </Box>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={isMobileSidebar}
      onClose={() => setIsMobileSidebar(!isMobileSidebar)}
      variant="temporary"
      slotProps={{
        paper: {
          sx: {
            width: sidebarWidth,
            boxShadow: (theme) => theme.shadows[8],
          },
        }
      }}
    >
      {/* ------------------------------------------- */}
      {/* Sidebar For Mobile */}
      {/* ------------------------------------------- */}
      <Scrollbar sx={{ height: "calc(100% - 73px)" }}>
        <SidebarItems />
      </Scrollbar>
      
      <Upgrade />

    </Drawer>
  );
};

export default Sidebar;

