# React Redux Webpack Boilerplate

## To get started:
1. Open terminal and run "webpack"
2. Open another terminal and run "gulp"

### Styles ( CSS / Stylus )
1. Go to folder "/source/css/"
2. Go to "App.styl"
3. Add an import reference to new file or page: [ @import 'NewPage.styl' ]
4. Create 'NewPage.styl'
5. Start coding your CSS

### Page Component ( HTML )
1. Go to folder "/source/js/components/"
2. Duplicate "SampleComponent.js" as a base template
3. Change component name [ export default class SampleComponent ]
4. Import component in Pages that require it [ import SampleComponent from '../components/SampleComponent'; ]
5. Start coding your page component

### Page Container ( HTML + Logic )
1. Go to folder "/source/js/containers/"
2. Duplicate "route-index.js" as a base template
3. Change container name [ class PageIndex extends Component ]
4. Change container export naming [ export default connect(mapStateToProps, mapDispatchToProps)(PageIndex); ]
5. Start coding your pages

### Site Routing 
1. Go to folder "source/js/containers/"
2. Go to "app.js"
3. Import page [ import PageIndex from './route-index'; ]
4. Add React Router path [ <PortalLayout exact path='/' component={PageIndex} /> ]
