import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { Grid, Typography, useTheme } from '@material-ui/core';
// import { MenuItem, TextField } from '@material-ui/core';

// third-party
// import ApexCharts from 'apexcharts';
// import Chart from 'react-apexcharts';

// project imports
import SkeletonTotalGrowthBarChart from './../../../ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from './../../../ui-component/cards/MainCard';
import { gridSpacing } from './../../../store/constant';

// chart data
// import chartData from './chart-data/total-growth-bar-chart';

import PicGallery from './PicGallery';

// const status = [
//     {
//         value: 'today',
//         label: 'Today'
//     },
//     {
//         value: 'month',
//         label: 'This Month'
//     },
//     {
//         value: 'year',
//         label: 'This Year'
//     }
// ];

//-----------------------|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||-----------------------//

const TotalGrowthBarChart = ({ isLoading }) => {
    // const [value, setValue] = React.useState('today');
    const theme = useTheme();

    const primary = theme.palette.text.primary;
    const grey200 = theme.palette.grey[200];

    const primary200 = theme.palette.primary[200];
    const primaryDark = theme.palette.primary.dark;
    const secondaryMain = theme.palette.secondary.main;
    const secondaryLight = theme.palette.secondary.light;
    const grey500 = theme.palette.grey[500];

    React.useEffect(() => {
        // const newChartData = {
        //     ...chartData.options,
        //     colors: [primary200, primaryDark, secondaryMain, secondaryLight],
        //     xaxis: {
        //         labels: {
        //             style: {
        //                 colors: [primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary]
        //             }
        //         }
        //     },
        //     yaxis: {
        //         labels: {
        //             style: {
        //                 colors: [primary]
        //             }
        //         }
        //     },
        //     grid: {
        //         borderColor: grey200
        //     },
        //     tooltip: {
        //         theme: 'light'
        //     },
        //     legend: {
        //         labels: {
        //             colors: grey500
        //         }
        //     }
        // };
        // do not load chart when loading
        // if (!isLoading) {
        //     ApexCharts.exec(`bar-chart`, 'updateOptions', newChartData);
        // }
    }, [primary200, primaryDark, secondaryMain, secondaryLight, primary, grey200, isLoading, grey500]);

    return (
        <React.Fragment>
            {isLoading ? (
                <SkeletonTotalGrowthBarChart />
            ) : (
                <MainCard>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <Grid container direction="column" spacing={1}>
                                        <Grid item>
                                            <Typography variant="h3">Photo Gallery</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <PicGallery />
                        </Grid>
                    </Grid>
                </MainCard>
            )}
        </React.Fragment>
    );
};

TotalGrowthBarChart.propTypes = {
    isLoading: PropTypes.bool
};

export default TotalGrowthBarChart;
