import Router from '../node_modules/es6-router/src/index.js';

let main = () => {
    console.log('main init');

    initRouter();
};

let initRouter = () => {
    console.log('mainRouter');

    let getPage = (path) => {
        console.log('page ' + path);

        var fileName = './components/test-component.js';
        import(fileName).then((myComponent) => {

            var testComponent = document.createElement('test-component');
            document.body.appendChild(testComponent);

            console.log("TestComponent loaded");
        }).catch((reason) => {
            console.log("TestComponent failed to load", reason);
        });
    };

    const router = new Router()
        .add(() => {
            getPage('/');
        })
        .add(/home/, () => {
            getPage('/home');
        })
        .add(/contact/, () => {
            getPage('/contact');
        })
        .listen();

    router.navigate('home');
};

main();