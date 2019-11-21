import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { BrowserRouter, Route, Link } from 'react-router-dom'
/* App from '../App'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
            ↑ここを任意のアイコン名にすればサイドメニューの各ボタンにアイコンを設定可能
<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>

material-uiを使用してます
npm install --save material-ui必須。*/

const drawerWidth = 215; //横幅

const useStyles = makeStyles(theme => ({

  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },

  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Sidelist() {
  const classes = useStyles();

  return (
    <BrowserRouter>
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.root}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        
      <Button variant="contained" backgroundcolor="primary" color="primary" size="large" className="home_btn">
        <Link to="/home">Espresso</Link>
      </Button>

      <Button variant="contained" color="primary" size="large" className="beans_btn">
        <Link to="/beans">焼豆</Link>
      </Button>

      <Button variant="contained" color="primary" size="large" className="dripbag_btn">
        <Link to="/dripbag_coffee">ドリップバッグコーヒー</Link>
      </Button>

      <Button variant="contained" color="primary" size="large" className="instant_btn">
        <Link to="/instant_coffee">インスタント</Link>
      </Button>

      <Button variant="contained" color="primary" size="large" className="ice_btn">
        <Link to="/ice_coffee">アイスコーヒー</Link>
      </Button>

      <Divider />

      <Button variant="contained" color="primary" size="large" className="othorproducts_btn">
        <Link to="/othor_products">その他（コーヒー関連商品）</Link>
      </Button>

      <Button variant="contained" color="primary" size="large" className="equipmentexpendables_btn">
        <Link to="/equipment_expendables">備品・消耗品</Link>
      </Button>

      </Drawer>
    </div>
    </BrowserRouter>
  );
}
