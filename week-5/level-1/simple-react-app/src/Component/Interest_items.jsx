export function Interest_items({item})
{
    return <ul>
        {item.map((i)=>{return <li>{i}</li> })}
    </ul>
}