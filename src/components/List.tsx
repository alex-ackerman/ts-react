import * as React from 'react';

const Component = React.Component;

export interface ListItem {
    id: number,
    value: string
}

export interface ListProps {
    items: ListItem[]
}

export class List extends Component<ListProps, {}> {

    render() {
        const { items } = this.props;
        const listItems = items.map(item => <li key={item.id}>{item.value}</li>);
        return (
            <ul>
                { listItems }
            </ul>
        );
    }

}

export const futuramaCharacters: ListItem[] = [
    { id: 1001, value: 'Phillip J. Fry' },
    { id: 1002, value: 'Turanga Leela' },
    { id: 1003, value: 'Zapp Brannigan' }
];