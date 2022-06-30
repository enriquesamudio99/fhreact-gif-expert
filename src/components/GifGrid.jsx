import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { Loading } from './Loading';

export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category);

    if (isLoading) return <Loading />;

    return (
        <div className='gif-grid'>
            <h2>Results for: {category}</h2>

            <div className='gif-grid-container'>
                {
                    images.map(image => (
                        <GifGridItem 
                            key={image.id} 
                            {...image}
                        />
                    ))
                }        
            </div>
        </div>
    )
}
