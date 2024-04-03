import React from 'react';
import { Page, Navbar, Block, BlockTitle,Card,CardFooter,CardContent,List,ListItem} from 'framework7-react';



const Techstack = () => (
  <Page>
    <Navbar title="Tech stack" backLink="Back" ></Navbar>
  
    <Card title="Tech stack">
      <CardContent padding={false}>
        <List mediaList>
          <ListItem title="C#" subtitle="for 2 years">
            <img
              slot="media"
              src="../img/Techstack/c-sharp-c-seeklogo.svg"
              width="44"
            />
          </ListItem>
          <ListItem title=".Net core" subtitle="for 2 years">
            <img
              slot="media"
              src="../img/Techstack/net-core-seeklogo.svg"
              width="44"
            />
          </ListItem>
          <ListItem title="Microsoft sql server" subtitle="for 1 year">
            <img
              slot="media"
              src="../img/Techstack/microsoft-sql-server-seeklogo.svg"
              width="44"
            />
          </ListItem>
          <ListItem title="Java script" subtitle="for 2 years">
            <img
              slot="media"
              src="../img/Techstack/javascript-js-seeklogo.svg"
              width="44"
            />
          </ListItem>
          <ListItem title="Html" subtitle="for 2 years">
            <img
              slot="media"
              src="../img/Techstack/html5-with-wordmark-color-seeklogo.svg"
              width="44"
            />
          </ListItem>
          <ListItem title="Css" subtitle="for 2 years">
            <img
              slot="media"
              src="../img/Techstack/css-3-seeklogo.svg"
              width="44"
            />
          </ListItem>
          <ListItem title="React" subtitle="for 3 months">
            <img
              slot="media"
              src="../img/Techstack/react-seeklogo.svg"
              width="44"
            />
          </ListItem>
          <ListItem title="Vite" subtitle="for 1 year">
            <img
              slot="media"
              src="../img/Techstack/vite-seeklogo.svg"
              width="44"
            />
          </ListItem>
          <ListItem title="bootstrap" >
            <img
              slot="media"
              src="../img/Techstack/bootstrap-seeklogo.svg"
              width="44"
            />
          </ListItem>
          <ListItem title="tailwind css" >
            <img
              slot="media"
              src="../img/Techstack/tailwind-css-seeklogo.svg"
              width="44"
            />
          </ListItem>
          <ListItem title="typescript" >
            <img
              slot="media"
              src="../img/Techstack/typescript-seeklogo.svg"
              width="44"
            />
          </ListItem><ListItem title="node" subtitle="for 3 months" >
            <img
              slot="media"
              src="../img/Techstack/node-js-seeklogo.svg"
              width="44"
            />
          </ListItem>
          <ListItem title="Mongodb" subtitle="for 3 months">
            <img
              slot="media"
              src="../img/Techstack/logo-mongodb-png-standard-logo-4167.jpg"
              width="44"
            />
          </ListItem>
         
          
          <ListItem title="Three js" subtitle="Michael Jackson">
            <img
              slot="media"
              src="../img/Techstack/three-js-seeklogo.svg"
              width="44"
            />
          </ListItem>
          <ListItem title="Linux">
            <img
              slot="media"
              src="../img/Techstack/tux-seeklogo.svg"
              width="44"
            />
          </ListItem>
          <ListItem title="Docker">
            <img
              slot="media"
              src="../img/Techstack/docker-seeklogo.svg"
              width="44"
            />
          </ListItem>
          <ListItem title="Java" subtitle="for 4 months">
            <img
              slot="media"
              src="../img/Techstack/java-seeklogo.svg"
              width="44"
            />
          </ListItem>
          <ListItem title="Spring" subtitle="for 3 months">
            <img
              slot="media"
              src="../img/Techstack/spring-seeklogo.svg"
              width="44"
            />
          </ListItem>
        </List>
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  
  </Page>
);

export default Techstack;
