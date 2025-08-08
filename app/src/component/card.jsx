export default function Card({name,image,id,onHandleClick})
{
    return (
        <div className="card" onClick={() => onHandleClick(id)}>
            <img src={image} alt={name} />
            <h2>{name}</h2>
        </div>
    );
}
