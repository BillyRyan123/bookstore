import Button from './Button.jsx';

const Navbar= ()=>{
return(
    <div className='flex w-full space-x-6 items-center justify-between  py-4 mb-3'>
        
             <h1 className='text-4xl '>My Bookstore</h1>
        
            <Button onClick="" className=' px-6 py-2 border rounded-md  hover:bg-black hover:text-white transition'> Login </Button>
     </div>
);
}
export default Navbar;