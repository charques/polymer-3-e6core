import Router from '../node_modules/es6-router/src/index.js';

let mainRouter = () => {
    console.log('mainRouter');

    let getPage = (path) => {
        console.log('page ' + path);
        let componentName = path.replace('/', '').replace('#', '');

        let fileName = './components/' + componentName + '.js';
        import(fileName).then((myComponent) => {

            let component = document.createElement(componentName);
            component.setAttribute("slot", "content");
            let appLayout = document.getElementsByTagName('app-layout')[0];
            console.log('appLayout ' + appLayout);
            while (appLayout.firstChild) {
                appLayout.removeChild(appLayout.firstChild);
            }
            appLayout.appendChild(component);

            console.log(componentName + ': Component loaded');
        }).catch((reason) => {
            console.log(componentName + ': Component failed to load - ', reason);
        });
    };

    const router = new Router()
        .add(/([a-z-])+/, () => {
            getPage(location.hash);
        })
        .listen();

    router.navigate('overall-position');
};

mainRouter();