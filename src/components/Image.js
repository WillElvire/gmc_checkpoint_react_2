export function Image({url,style}) {
    return (
        <div>
            <img src={url} alt="product" style={style || {width: '100%', height: '100%'}} />
        </div>
    )
}