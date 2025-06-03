import React from "react";

export const ItemRow = (item) => {
    return(
        <tr>
            <td>{item.displayName}</td>
            <td>{item.sellIn}</td>
            <td>{item.quality}</td>
        </tr>
    )
}