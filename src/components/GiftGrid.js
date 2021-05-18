import React from 'react'
import { useFechGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifts';
import GiftGridItem from './GiftGridItem';

const GiftGrid = ({category}) => {
    const {data, loading} = useFechGifs(category);

    return (
        <div>
            <h3>{category.toUpperCase()}</h3>
            {loading && <p>Cargando...</p>}
            <ol className="content">
                {
                    data.map( img => (
                        <GiftGridItem 
                        key={img.id} 
                        {...img}
                        />
                    ))
                }
            </ol>
        </div>
    )
}

export default GiftGrid;
