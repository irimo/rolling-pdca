// window.ts  
interface MyWindow extends Window {  
    foo: string  
}  
declare var window: MyWindow;  
export default window;  