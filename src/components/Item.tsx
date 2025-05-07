import type { ItemType } from '../App';
import todo from '../assets/todo.svg';
import trash from '../assets/trash.svg';

type ItemProps = {
    item: ItemType;
}

export default function Item({item}: ItemProps) {
    return(
        <>
            <article className="flex w-full gap-4">
                <img src={todo} alt="#" />
                <div className="flex-1">
                    <p>{item.nome}</p>
                    <p className="text-sm text-slate-400">{item.quantidade}</p>
                </div>
                <img
                    src={trash}
                    alt="ícone de lixeira"
                    className="justify-self-end"
                />
            </article>
            <hr />
        </>
    )

}