// import React, { useEffect, useState } from 'react'
// import Card from './Card'

// function Newsapp() {
//   const API_KEY='6b737543d63a4e04a54ee478717fe83d';
//   const [Search,setSearch]=useState('India')
//   const handleInput=(e)=>{
//       console.log(e.target.value)
//       setSearch(e.target.value)
//   }

//   const [newsData,setNewsData]=useState(null)
  
//   useEffect(()=>{
//     getData()
//   },[])

//   const getData=async()=>{
//     const response=await fetch(`https://newsapi.org/v2/everything?q=${Search}&apiKey=${API_KEY}`)
//     const jsonData=await response.json()
//     console.log(jsonData.articles)
//     setNewsData(jsonData.articles)
//   }

//   const userInput=(e)=>{
//     setSearch(e.target.value)

//   }
//   return (
//     <div>
//       <nav>
//         <div>
//             <h1><strong>NewsHub</strong></h1>
//         </div>
//         <ul>
//             <a href="">All News</a>
//             <a href="">Trending</a>
//         </ul>
//         <div className="SearchBar">
//             <input type="text"
//             placeholder='Search'
//             onChange={handleInput}
//             value={Search} />
//             <button onClick={getData}>Search</button>
//         </div>
//       </nav>
//       <div>
//         <p className='head'>Stay update with Trending News</p>
//       </div>
//       <div className="categoryBtn">
//         <button onClick={userInput} value={sports}>Sports</button>
//         <button onClick={userInput} value={politics}>Politics</button>
//         <button onClick={userInput} value={health}>Health</button>
//         <button onClick={userInput} value={entertainment}>Entertainment</button>
//         <button onClick={userInput} value={technology}>Technology</button>
//       </div>

//       <div>
//         {newsData?<Card data={newsData}/>:null}
//       </div>
//     </div>
//   )
// }

// export default Newsapp


import React, { useEffect, useState } from 'react'
import Card from './Card'

const Newsapp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null)
    const API_KEY = "6b737543d63a4e04a54ee478717fe83d";

    const getData = async() =>{
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        let dt = jsonData.articles.slice(0,10)
        setNewsData(dt)
        
    }

    useEffect(()=>{
        getData()
    },[])

    const handleInput = (e) =>{
        console.log(e.target.value);
        setSearch(e.target.value)
        
    }
    const userInput = (event) =>{
        setSearch(event.target.value)
    }

  return (
    <div>
        <nav>
            <div>
                <h1>Trendy News</h1>
            </div>
            <ul style={{display:"flex", gap:"11px"}}>
                <a style={{fontWeight:600, fontSize:"17px"}}>All News</a>
                <a style={{fontWeight:600, fontSize:"17px"}}>Trending</a>

            </ul>
            <div className='searchBar'>
                <input type='text' placeholder='Search News' value={search} onChange={handleInput}/>
                <button onClick={getData}>Search</button>
            </div>
        </nav>
        <div>
            <p className='head'>Stay Update with TrendyNews</p>
        </div>
        <div className='categoryBtn'>
            <button onClick={userInput} value="sports">Sports</button>
            <button onClick={userInput} value="politics">Politics</button>
            <button onClick={userInput} value="entertainment">Entertainment</button>
            <button onClick={userInput} value="health">Health</button>
            <button onClick={userInput} value="fitness">Fitness</button>
        </div>

        <div>
        {newsData?  <Card data={newsData}/> : null}
            
        </div>
    </div>
  )
}

export default Newsapp