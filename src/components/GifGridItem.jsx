export const GifGridItem = ({title, url}) => {

    return (
        <div className="gif">
            <img className="gif-img" alt={title} src={url} />
            <h3 className="gif-title">{title ? title : 'Not Title'}</h3>
        </div>
    )
}
