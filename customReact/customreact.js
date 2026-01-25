function customRender(reactElement,container){
//     const domElement=document.createElement(reactElement.type)//createElement('a')
//     //set attributes
//     domElement.innerHTML=reactElement.children//Click Me
//     domElement.setAttribute('href',reactElement.props.href)//setting href attribute
//     domElement.setAttribute('target',reactElement.props.target)//setting target attribute
//     container.appendChild(domElement);//injecting into the container
  const domElement=  document.createElement(reactElement.type)//createElement('a')
  domElement.innerHTML=reactElement.children//Click Me
    //set attributes
    
for (const prop in reactElement.props) {
    if(prop=='children'){continue;
    }
    domElement.setAttribute(prop, reactElement.props[prop]);
    
}
container.appendChild(domElement);
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