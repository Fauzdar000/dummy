import React, {useState } from 'react';

import './product.css'; 

export default function Products() {

const items = [
  {
    id: 1,
    name: 'Wireless Mouse',
    category: 'Electronics',
    price: '$1200',
    description: 'Ergonomic wireless mouse with adjustable DPI and long battery life.',
    image: 'https://i.pinimg.com/736x/18/f6/de/18f6de7ccedabcbf15960d99dac3cb90.jpg'
  },
  {
    id: 2,
    name: 'Bluetooth Headphones',
    category: 'Electronics',
    price: '$2500',
    description: 'Noise-cancelling over-ear headphones with deep bass and 20-hour playtime.',
    image: 'https://i.pinimg.com/736x/e0/a6/25/e0a62568972e9ee41851cc8e8f246f6c.jpg'
  },
  {
    id: 3,
    name: 'Notebook',
    category: 'Stationery',
    price: '$150',
    description: 'Hardcover ruled notebook with 100 pages, ideal for school or journaling.',
    image: 'https://i.pinimg.com/736x/bb/e8/33/bbe833056aa9203de4db191257fad94a.jpg'
  },
  {
    id: 4,
    name: 'T-shirt',
    category: 'Clothing',
    price: '$900',
    description: '100% cotton unisex t-shirt with a soft feel and modern fit.',
    image: 'https://i.pinimg.com/736x/14/a9/14/14a9144d01950bd72d125b7801033634.jpg'
  },
  {
    id: 5,
    name: 'Running Shoes',
    category: 'Footwear',
    price: '$3200',
    description: 'Lightweight running shoes with breathable mesh and cushioned sole.',
    image: ''
  },
  {
    id: 6,
    name: 'Coffee Mug',
    category: 'Kitchenware',
    price: '$350',
    description: 'Ceramic mug with 350ml capacity and motivational print.',
    image: 'https://i.pinimg.com/736x/39/26/2c/39262c74179c531e97447a6800b811e4.jpg'
  },
  {
    id: 7,
    name: 'USB-C Charger',
    category: 'Electronics',
    price: '$1100',
    description: 'Fast-charging 65W USB-C wall charger compatible with most devices.',
    image: ''
  },
  {
    id: 8,
    name: 'Backpack',
    category: 'Accessories',
    price: '$1800',
    description: 'Water-resistant travel backpack with padded laptop sleeve.',
    image: 'https://i.pinimg.com/736x/af/3c/d5/af3cd57f2a5e7940432a878988a64b9c.jpg'
  },
  {
    id: 9,
    name: 'Ball Pen',
    category: 'Stationery',
    price: '$30',
    description: 'Smooth-writing ballpoint pen with comfortable grip and long ink life.',
    image: 'https://i.pinimg.com/736x/eb/89/8c/eb898c6967bbbfda054c7a5d8caacc27.jpg'
  },
  {
    id: 10,
    name: 'LED Desk Lamp',
    category: 'Home Decor',
    price: '$1450',
    description: 'Adjustable LED lamp with touch control and USB charging port.',
    image: ''
  },
  {
    id: 11,
    name: 'Smartphone Case',
    category: 'Accessories',
    price: '$500',
    description: 'Shockproof TPU case with anti-scratch coating and precise cutouts.',
    image: 'https://i.pinimg.com/736x/bb/d1/04/bbd104811efd6bf7122458f6b922fc14.jpg'
  },
  {
    id: 12,
    name: 'Water Bottle',
    category: 'Kitchenware',
    price: '$250',
    description: 'Leak-proof BPA-free bottle, 750ml capacity, perfect for workouts.',
    image: 'https://i.pinimg.com/736x/ef/09/31/ef09310a9c6acc2ecb6304ea07b1b59c.jpg'
  },
  {
    id: 13,
    name: 'Bluetooth Speaker',
    category: 'Electronics',
    price: '$2100',
    description: 'Portable speaker with deep bass and 12-hour playtime.',
    image: 'https://i.pinimg.com/736x/8c/bb/eb/8cbbeb7ffaa8aaf9afe0a5c4167fa993.jpg'
  },
  {
    id: 14,
    name: 'Yoga Mat',
    category: 'Sports',
    price: '$1200',
    description: 'Non-slip yoga mat with extra cushioning and carrying strap.',
    image: 'https://i.pinimg.com/736x/9b/41/3f/9b413fc59fd6c01dcc1f0b66cb11f6ca.jpg'
  },
  {
    id: 15,
    name: 'Sunglasses',
    category: 'Accessories',
    price: '$950',
    description: 'UV400-protected stylish sunglasses with lightweight frame.',
    image: 'https://i.pinimg.com/736x/4f/d7/0d/4fd70dd1fe1151681277c069513eade1.jpg'
  },
  {
    id: 16,
    name: 'Desk Organizer',
    category: 'Office Supplies',
    price: '$400',
    description: 'Multi-compartment organizer for pens, papers, and tools.',
    image: 'https://imgs.search.brave.com/pbyXTe4iSXiof4EFkQnaG4u7GJcoHU4s-et8af3Q6tM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/aWtlYS5jb20vdXMv/ZW4vaW1hZ2VzL3By/b2R1Y3RzL3Jpc2F0/b3JwLWRlc2stb3Jn/YW5pemVyLXdoaXRl/X18xMTUwNzU1X3Bl/ODg0Njg1X3M1Lmpw/Zz9mPXh4cw'
  },
  {
    id: 17,
    name: 'Wireless Keyboard',
    category: 'Electronics',
    price: '$1350',
    description: 'Slim and quiet keyboard with Bluetooth support for all devices.',
    image: 'https://i.pinimg.com/736x/4e/3b/fc/4e3bfc318529e1065cc256ef1b29df21.jpg'
  },
  {
    id: 18,
    name: 'Sneakers',
    category: 'Footwear',
    price: '$2700',
    description: 'Street-style sneakers with high ankle support and cushioned heel.',
    image: 'https://i.pinimg.com/736x/8f/be/7b/8fbe7bfcf37f2c95b07fd365b8b14fa0.jpg'
  },
  {
    id: 19,
    name: 'Backpack',
    category: 'Accessories',
    price: '$1500',
    description: 'Stylish school backpack with water bottle pocket and durable zippers.',
    image: 'https://i.pinimg.com/736x/48/89/e1/4889e1a080880057046502945bd9ff13.jpg'
  },
  {
    id: 20,
    name: 'Cookbook',
    category: 'Books',
    price: '$600',
    description: 'Easy and healthy recipes for beginners with colorful photos.',
    image: 'https://i.pinimg.com/736x/71/b0/6e/71b06e21a0fd34f0a82111e200fb0072.jpg'
  },
  {
    id: 21,
    name: 'Portable Hard Drive',
    category: 'Electronics',
    price: '$2300',
    description: '1TB USB 3.0 portable drive with backup and encryption features.',
    image: 'https://i.pinimg.com/736x/d0/b2/0c/d0b20c541ed19897e26eb54d4a643561.jpg'
  },
  {
    id: 22,
    name: 'Ballpoint Pen Set',
    category: 'Stationery',
    price: '$110',
    description: 'Set of smooth ballpoint pens with vibrant ink colors.',
    image: 'https://i.pinimg.com/736x/55/06/1f/55061f649cedf562143c45e2b8366e03.jpg'
  },
  {
    id: 23,
    name: 'Office Chair',
    category: 'Furniture',
    price: '$5400',
    description: 'Ergonomic mesh office chair with adjustable lumbar support.',
    image: 'https://i.pinimg.com/736x/e0/1c/e3/e01ce310290fcebdb4303b8e903477cd.jpg'
  },
  {
    id: 24,
    name: 'Wireless Earbuds',
    category: 'Electronics',
    price: '$1900',
    description: 'Touch control earbuds with charging case and noise isolation.',
    image: 'https://i.pinimg.com/736x/9d/d3/d7/9dd3d74fb7c965791906d8a8a78fce7e.jpg'
  },
  {
    id: 25,
    name: 'Graphic T-Shirt',
    category: 'Clothing',
    price: '$850',
    description: 'Trendy graphic tee with anime design and breathable fabric.',
    image: 'https://i.pinimg.com/736x/bf/ca/05/bfca058b5f765cc17ea4e0ff4ebe28a5.jpg'
  },
  {
    id: 26,
    name: 'Laptop Stand',
    category: 'Office Supplies',
    price: '$1250',
    description: 'Aluminum stand with adjustable angles for laptops up to 17".',
    image: 'https://i.pinimg.com/736x/75/b3/00/75b300e529567da6418c5c766090f347.jpg'
  },
  {
    id: 27,
    name: 'Running Shorts',
    category: 'Clothing',
    price: '$700',
    description: 'Quick-dry shorts with built-in liner and zip pocket.',
    image: 'https://i.pinimg.com/736x/d1/21/35/d121358c76f5560502ca48ac0bf3f95c.jpg'
  },
  {
    id: 28,
    name: 'Ceramic Vase',
    category: 'Home Decor',
    price: '$1450',
    description: 'Elegant handcrafted ceramic vase for minimalist spaces.',
    image: 'https://i.pinimg.com/736x/8a/c5/a3/8ac5a3b98f4acad59da991d5bcc98b70.jpg'
  },
  {
    id: 29,
    name: 'Gaming Mouse Pad',
    category: 'Electronics',
    price: '$400',
    description: 'Extended surface mouse pad with anti-slip base and stitched edges.',
    image: 'https://i.pinimg.com/736x/09/34/7d/09347ddfb8bbc87604ce161ce01eb78d.jpg'
  },
  {
    id: 30,
    name: 'Wall Clock',
    category: 'Home Decor',
    price: '$1200',
    description: 'Modern wall clock with silent movement and bold numerals.',
    image: 'https://i.pinimg.com/736x/9a/a0/13/9aa0132cd406b2522e165c6092229af0.jpg'
  },
  {
    id: 31,
    name: 'Tablet Stand',
    category: 'Electronics',
    price: '$1100',
    description: 'Wooden stand compatible with phones and tablets.',
    image: 'https://i.pinimg.com/736x/5a/c8/c8/5ac8c839750dc268a063696f40e84f40.jpg'
  },
  {
    id: 32,
    name: 'Sketchbook',
    category: 'Stationery',
    price: '$200',
    description: 'Premium acid-free paper, ideal for pencils, ink, and watercolor.',
    image: 'https://i.pinimg.com/736x/48/de/6d/48de6de4d054aabb701988a3bb1d0705.jpg'
  },
  {
    id: 33,
    name: 'Hoodie',
    category: 'Clothing',
    price: '$1100',
    description: 'Cozy fleece hoodie with front pockets and adjustable hood.',
    image: 'https://i.pinimg.com/736x/55/fb/ea/55fbea0a85dbe7f31a04d46bee6ecb1a.jpg'
  },
  {
    id: 34,
    name: 'Coffee Maker',
    category: 'Kitchenware',
    price: '$3500',
    description: 'Automatic drip coffee machine with programmable timer.',
    image: 'https://i.pinimg.com/736x/55/cb/b5/55cbb5f15494c98e9edc64ca2d52388e.jpg'
  },
  {
    id: 35,
    name: 'Wireless Charger',
    category: 'Electronics',
    price: '$1400',
    description: 'Qi-enabled fast wireless charger with LED indicator.',
    image: 'https://i.pinimg.com/736x/70/07/d8/7007d8414b2b70c1aef7a743a53d94ac.jpg'
  },
  {
    id: 36,
    name: 'Beach Towel',
    category: 'Accessories',
    price: '$850',
    description: 'Large microfiber towel with quick-dry and sand-free design.',
    image: 'https://i.pinimg.com/736x/ed/71/9d/ed719d0c91f0279939a0d8631d65ca1d.jpg'
  },
  {
    id: 37,
    name: 'Floor Lamp',
    category: 'Home Decor',
    price: '$2200',
    description: 'Standing lamp with 3 brightness levels and adjustable neck.',
    image: 'https://i.pinimg.com/736x/00/e0/07/00e007c34c46c4f317b3899b21c3ef10.jpg'
  },
  {
    id: 38,
    name: 'Notebook Set',
    category: 'Stationery',
    price: '$350',
    description: 'Pack of 3 colorful notebooks with durable covers.',
    image: 'https://i.pinimg.com/736x/64/1e/b1/641eb1b4082e1856da185a3a70b9807f.jpg'
  },
  {
    id: 39,
    name: 'Running Shoes',
    category: 'Footwear',
    price: '$2800',
    description: 'Cushioned shoes for daily jogging and intense workouts.',
    image: 'https://i.pinimg.com/736x/94/55/37/945537dd3fa9a8f4723616fdb0068639.jpg'
  },
  {
    id: 40,
    name: 'Bluetooth Keyboard',
    category: 'Electronics',
    price: '$1600',
    description: 'Compact wireless keyboard for iPad, tablets, and phones.',
    image: 'https://i.pinimg.com/736x/aa/36/97/aa3697debdc084691b3ecd5f13776c9a.jpg'
  }
];



const [search,values] = useState('');
 const [sort , sortby] = useState('');
 const [categorys , showcategory] = useState('');
 const uniquecategory =[... new Set(items.map((item)=> item.category))]

const filtereditems = items.filter((item) => {
    const match =item.name.toLowerCase().includes(search.toLowerCase());
    const matchcategory = item.category.toLowerCase().includes(categorys.toLowerCase());
  
    return match && matchcategory;
})
.sort((a,b)=>{
 return sort=== 'lowtohigh'? parseInt(a.price.slice(1)) - parseInt(b.price.slice(1)) :
  sort === 'hightolow'? parseInt(b.price.slice(1)) - parseInt(a.price.slice(1)) : 0;
}) 


 


//  const sizeClasses = ['small', 'medium', 'large'];


 



    return(
        <>
    
<div className="container">
  
    <div className="search">
        <input type="text" placeholder="Search" 
        value={search}
                onChange={(e) => values(e.target.value)}/>
    
    </div>


 <div className="sort-product">

 <select onChange={(e)=> sortby(e.target.value)} value={sort} >
  <option value="" > Sort by</option>
  {/* <p>sort by</p> */}
  <option value="lowtohigh">Low To High</option>
  <option value="hightolow">High To Low</option>
 </select>


 </div>

 <div className="category">
  <select  onChange={(e)=> showcategory(e.target.value)} value={categorys} >
    <option value="">Select Category</option>
    {
      uniquecategory.map((unique,index) => 
        <option key={index} value={unique}>{unique}</option>)
    }

  </select>
 </div>



</div>

 <div className="card-container">
  
      {filtereditems.map((item) => (
        <div className="card" key={item.id}>
           <img src={item.image} alt={item.name} className="card-image" />
          <h3>{item.name}</h3>
          <p><strong>Category:</strong> {item.category}</p>
          <p><strong>Price:</strong> {item.price}</p>
          <p><strong>description :</strong>{item.description}</p>
        </div>
      ))}
    </div>

    {/* <div className="card-container">
      {items.map((item, index) => {
        const sizeClass = sizeClasses[index % sizeClasses.length]; // cycle sizes
        return (
          <div key={item.id} className={`card ${sizeClass}`}>
            <h3>{item.name}</h3>
            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>Price:</strong> {item.price}</p>
          </div>
        );
      })}
    </div> */}












        </>
    )
}