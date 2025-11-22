"use client";
import { Grid, Box } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
// components
import SalesOverview from "@/app/(DashboardLayout)/components/dashboard/SalesOverview";
import DailyActivity from "@/app/(DashboardLayout)/components/dashboard/DailyActivity";
import ProductPerformance from "@/app/(DashboardLayout)/components/dashboard/ProductPerformance";
import BlogCard from "@/app/(DashboardLayout)/components/dashboard/Blog";
import MonthlyEarnings from "./components/dashboard/MonthlyEarnings";
import RecentTransactions from "./components/dashboard/RecentTransactions";
import YearlyBreakup from "./components/dashboard/YearlyBreakup";

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="This is Dashboard">
      <Grid container={true} direction="column" 
        gap={{
          xs: 20,
          lg: 10
        }}
      >
        
        {/* Row 1 */}
        <Grid
          // border="5px solid blue"
          size={{
            xs: 12,
            lg: 12,
          }}
        >
          <Box
            sx={{
              display: "grid",
              width: '100%',
              // height: {
              //   xs: '700px',
              //   md: '400px'
              // },
              gap: "10px",
              gridTemplateColumns: {
                xs: "1fr",          // mobile → 1 colonne
                md: "repeat(2, 1fr)" // desktop → 2 colonnes
              }
            }}
          >
            <Box
              sx={{
                // border: "1px solid orange",
                gridRow: {
                  xs: "auto",   // mobile → pas de rowspan
                  md: "span 2", // desktop → span 2
                }
              }}
            >
              <SalesOverview />
            </Box>

            {/* b */}
            <Box
              sx={{
                // backgroundColor: "red",
                // border: "1px solid orange",
              }}
            >
              <YearlyBreakup/> 
            </Box>

            {/* b3 — column placement only on desktop */}
            <Box
              sx={{
                // backgroundColor: "red",
                // border: "1px solid orange",
                gridColumn: {
                  xs: "auto",   // mobile → normal
                  md: "2 / 3",  // desktop → colonne 2
                }
              }}
            >
              <MonthlyEarnings/>
            </Box>
          </Box>
        </Grid>

        {/* <Grid
          direction="column"
          size={{
            xs: 12,
            lg: 12,
          }}
        >
          <Box
            
          >
            <MonthlyEarnings/>
          </Box>

          <Box
            
          >
            <MonthlyEarnings/>
          </Box>
        </Grid> */}

        {/* Row 2  */}
        <Grid container >
          <Grid
            size={{
              xs: 12,
              lg: 4,
            }}
          >
            <RecentTransactions />
          </Grid>

          <Grid
            size={{
              xs: 12,
              lg: 8,
            }}
          >
            <ProductPerformance />
          </Grid>
        </Grid>

        {/* Row 3 */}
        <Grid>
          <BlogCard />
        </Grid>

      </Grid>
    </PageContainer>
  );
};

export default Dashboard;
