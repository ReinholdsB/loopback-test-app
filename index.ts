import {Application} from "@loopback/core";

const app = new Application();
app.bind('message').to('Hello World!');
app.get('message').then(value => {
    console.log(value);
});