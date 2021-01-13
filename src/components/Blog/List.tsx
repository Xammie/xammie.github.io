import React from "react";
import Card from "../Card";
import Button from "../Button";
import Item from "./Item";

export default function List({title = 'Blog', data}) {
    return (
        <Card>
            <h2 className="title text-2xl">{title}</h2>
            {data.nodes.map(({remark}, index) => <Item data={remark} key={index}/>)}
            {data.pageInfo.hasNextPage &&
            <div className="flex justify-end mt-2">
                <Button to="/blog">
                    View all
                </Button>
            </div>}
        </Card>
    )
}