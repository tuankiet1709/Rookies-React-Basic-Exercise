## Questions

<br>

### 1.  What is the diffference between the React's "function" components and "class" components ?

#### Function components

  
   Function components have "props" object which contains values passed to the component via props/attributes 
   
   There is no "render" method used in functional components

   React lifecycle methods cannot be used in functional components		
   
   Function components "return" a JSX string.


<br>

#### Class components
   

   Class components have "state" and "props".

   Class components have "render()" method which renders the JSX

   It must have the render() method returning HTML

   React lifecycle methods can be used inside class components

### 2.  What is the component "state" ?

- Local variable of component 
- Use setState() to update component’s states 
- Page will be re-rendered when state changed