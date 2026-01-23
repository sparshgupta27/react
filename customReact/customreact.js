function customRender(reactElement,container){
    
}
const reactElement={
    type:'a'//tells the type of HTML element to be created
    ,props:{
        href:'https://www.google.com',
        target:'_blank'
    
}
    ,children:'Click Me'
}
//JSX syntax to create a React element

const maincontainer=document.querySelector('#root')

customRender(reactElement,maincontainer)//(why inject karu,kaha inject karu)