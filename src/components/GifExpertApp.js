import React, {useState} from 'react'
import AddCategory from './AddCategory';
import GiftGrid from './GiftGrid';

const GifExpertApp = () => {

    //const categories = ['One Punch Man', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories]= useState(['One Punch Man'])
 
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map(categoria => {
                        return <GiftGrid 
                        key={categoria} 
                        category={categoria} />
                    })
                }
            </ol>
        
        </>
    )
}

export default GifExpertApp
