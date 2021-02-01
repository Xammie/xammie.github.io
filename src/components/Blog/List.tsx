import React from "react";
import Card from "../Card";
import Button from "../Button";
import Item from "./Item";

export default function List({title = 'Blog posts', data}) {
    return (
        <Card>
            <h2 className="font-bold text-2xl">{title}</h2>
            <div className="grid grid-cols-1 gap-3 mt-3">
                {data.nodes.map(({remark}, index) => <Item data={remark} key={index}/>)}
            </div>
            {data.pageInfo.hasNextPage &&
            <div className="flex justify-end mt-3">
                <Button to="/blog">
                    View all
                </Button>
            </div>}
        </Card>
    )
}