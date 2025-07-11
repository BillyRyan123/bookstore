import Button from './Button.jsx'
import  { Search, BookPlus, ShieldCheck, Zap } from 'lucide-react'
import {Link} from 'react-router-dom'
import CardsDisplay from './CardsDisplay.jsx'
import gridbook1 from './pics/gridbook1.webp'
import gridbook2 from './pics/gridbook2.webp'
import gridbook3 from './pics/gridbook3.jpg'
const Homepage= ()=>{
    const items= [
        {
            image:gridbook1,
            name:'nill',
            category:'Comic',
            description:'A wonderful....',
            price:'$8.00'
        },

         {
            image:gridbook2,
            name:'fiction',
            category:'fiction',
            description:'Blue dark ....',
            price:'$4.59'
        },

         {
            image:gridbook3,
            name:'ham',
            category:'magazine',
            description:'A white bob...',
            price:'$6.00'
        },

         
       
    ]
    return(
        <main>

        <section className="bg-[url('./images/herobackground.jpg')]  bg-cover bg-center h-[300px] w-[100%] px-4 py-4  rounded-lg">
        
             <h1 className="text-white text-lg font-bold ">Discover Thousands of Books at Your Fingertips</h1>
        <p className="text-white text-sm p-4 ">From fiction to tech manuals - your next read is here!</p>

        <Button className="px-4 py-2 text-lg bg-amber-500 rounded-md hover:bg-amber-400 hover:text-white transition-transform ">Browse Books</Button>
        
        </section>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-10">
            <Link to="/search"  className="block hover:text-amber-600 transition-colors">
            <Search className='w-8 h-8 mx-auto text-black'/>
            <p className="mt-2 font-semibold ">  Search Books </p>
            <p className="text-sm text-black">Search books by name or category</p>
            </Link>

            <Link to="/add" className="block hover:text-amber-600 transition-colors">
            <BookPlus className="w-8 h-8 mx-auto text-black" />
            <p className="mt-2 font-semibold">Add to Collection</p>
            <p className="text-sm text-black">Upload books to personalize your shelf</p>
            </Link>

            <Link to="/security" className="block hover:text-amber-600 transition-colors">
           <ShieldCheck className="w-8 h-8 mx-auto text-black" />
           <p className="mt-2 font-semibold">Secure & Private</p>
           <p className="text-sm text-black">Your data is encrypted and safe</p>
           </Link>

           <Link to="/login" className="block hover:text-amber-600 transition-colors">
           <Zap className="w-8 h-8 mx-auto text-black" />
           <p className="mt-2 font-semibold">Fast Access</p>
           <p className="text-sm text-black">Quick and smooth experience</p>
           </Link>
        </div>


       <div className='flex flex-wrap'>

         {items.map((content, index)=>{
            return<div key={index} className='transition-transform transform hover: scale-105 flex-1 p-4 box-border border-black h-auto w-16 min-w-[250px] m-2'>
                <CardsDisplay image={content.image}
                 name={content.name} 
                 category={content.category}
                 description ={content.description}
                 price={content.price}/>
            </div>;
        }
        )}

       </div>
        
        </main>
    );
}
export default Homepage;