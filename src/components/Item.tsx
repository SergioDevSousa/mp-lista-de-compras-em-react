import type { ItemType } from '../App';
import todo from '../assets/todo.svg';
import done from '../assets/done.svg';
import trash from '../assets/trash.svg';

type ItemProps = {
    item: ItemType;
    handleClickComprado: (id: string) => void;
    handleClick: (id: string) => void;
}

export default function Item({item, handleClick, handleClickComprado}: ItemProps) {
    return(
        <>
            <article className="flex w-full gap-4">
                <button onClick={()=> handleClickComprado(item.id)}>
                    <img src={item.comprado ? done : todo} alt="#" />
                </button>
                <div className="flex-1">
                    <p className={`${item.comprado ? 'text-slate-400 line-through' : ''}`}>{item.nome}</p>
                    <p className={`text-sm text-slate-400 ${item.comprado && 'line-through'}`}>{item.quantidade}</p>
                </div>
                <button onClick={()=> handleClick(item.id)}>
                    <img
                        src={trash}
                        alt="ícone de lixeira"
                        className="justify-self-end"
                    />
                </button>
            </article>
            <hr />
        </>
    )

}