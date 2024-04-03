import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Button,
  Panel,
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from 'framework7-react';


const HomePage = () => (
  
  <Page name="home">

    <Navbar >
    Georgi Angelov
      <NavRight >
        <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="right" />
      </NavRight>
      
    
    </Navbar>

  

    {/* Page content */}
    <BlockTitle>This is my cv build with Framework7.</BlockTitle>
    <BlockTitle>Here are my some of my projects</BlockTitle>
    <Block androidTextColor="white">
      <div className="grid grid-cols-2 grid-gap">
      
        <Card outlineMd className="demo-card-header-pic">
      <CardHeader
        valign="bottom"
        style={{
          backgroundImage: 'url(../img/MusicPLayerApp.png)',
        }}
        
      >
        
       <p className="text-color-white" > Music player app</p>
      </CardHeader>
      <CardContent>
        <p className="date">Posted on Dec 1, 2023</p>
        <p>
        MusicPlayerApp is an app simple music player that runs exclusively in browser without the back end. 
        </p>
      </CardContent>
      <CardFooter>
        
        <Link href="https://github.com/Gogo200202/MusicPlayerApp" external>See in GitHub</Link>
      </CardFooter>
    </Card>
        
    <Card outlineMd className="demo-card-header-pic">
      <CardHeader
        valign="bottom"
        style={{
          backgroundImage: 'url(../img/portFolioWindowsXp.png)',
        }}
      >
      <p className="text-color-white" > Port folio on windows xp </p>
      </CardHeader>
      <CardContent>
        <p className="date">Posted on Apr 29, 2023</p>
        <p>
        This repository is to showcase my ability to learn new skills. For this reason, I decided to learn three.js and use it to build small application to show it. 
        </p>
      </CardContent>
      <CardFooter>
      
        <Link href="https://github.com/Gogo200202/portFolioWindowsXp" external>See in GitHub</Link>
      </CardFooter>
    </Card>
    <Card outlineMd className="demo-card-header-pic">
      <CardHeader
        valign="bottom"
        style={{
          backgroundImage: 'url(../img/productSellStor.png)',
        }}
      >
<p className="text-color-white" > </p>
      </CardHeader>
      <CardContent>
        <p className="date">Posted on Jul 2, 2023</p>
        <p>
        Full Stack mvc application in asp.net.core framework 
        </p>
      </CardContent>
      <CardFooter>
       
        <Link href="https://github.com/Gogo200202/ProductSellStore/activity?ref=master" external >See in GitHub</Link>
      </CardFooter>

    </Card>

      </div>
      </Block>


      
   {/* 
    <BlockTitle>Navigation</BlockTitle>
    <List strong inset dividersIos>
      <ListItem link="/about/" title="About"/>
      <ListItem link="/form/" title="Form"/>
    </List>

    <BlockTitle>Modals</BlockTitle>
    <Block className="grid grid-cols-2 grid-gap">
      <Button fill popupOpen="#my-popup">Popup</Button>
      <Button fill loginScreenOpen="#my-login-screen">Login Screen</Button>
    </Block>

    <BlockTitle>Panels</BlockTitle>
    <Block className="grid grid-cols-2 grid-gap">
      <Button fill panelOpen="left">Left Panel</Button>
      <Button fill panelOpen="right">Right Panel</Button>
    </Block>

    <List strong inset dividersIos>
      <ListItem
        title="Dynamic (Component) Route"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
      />
      <ListItem
        title="Default Route (404)"
        link="/load-something-that-doesnt-exist/"
      />
      <ListItem
        title="Request Data & Load"
        link="/request-and-load/user/123456/"
      />
</List>*/}


    {/* Toolbar */}
    <Toolbar bottom>
    </Toolbar>
  </Page>
);
export default HomePage;