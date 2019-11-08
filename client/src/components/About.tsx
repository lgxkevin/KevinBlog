import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import {useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ExploreIcon from '@material-ui/icons/Explore';

import VideoTab from './AboutTabPabelComponents/VideoTab'
import SkillsTab from "./AboutTabPabelComponents/SkillsTab";

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: any;
}

function TabPanel(props: TabPanelProps):JSX.Element{
    const {children, value, index, ...other} = props;
    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}


export default function FullWidthTabs():JSX.Element {
    const theme = useTheme();
    const [value, setValue] = React.useState<number>(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    return (
        <div style={{backgroundColor: 'transparent'}}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="icon label tabs example"
                >
                    <Tab icon={<OndemandVideoOutlinedIcon/>} label="Liked Videos" {...a11yProps(0)} />
                    <Tab icon={<DescriptionOutlinedIcon/>} label="Skills" {...a11yProps(1)} />
                    <Tab icon={<ExploreIcon/>} label="journey" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <VideoTab/>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <SkillsTab/>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    Coming soon...
                </TabPanel>
            </SwipeableViews>
        </div>
    )
};
