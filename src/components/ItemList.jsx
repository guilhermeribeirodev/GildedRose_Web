import {ItemRow} from "./ItemRow";

export const ItemList = ({ items }) => {
    return (
        <table>
            {items && items.map((item) => (
                <tr>
                    <ItemRow item={item} />
                </tr>
            ))}
        </table>
    );
};