export interface OrganigramaNode {
    id?: number;
    key?: string;
    parent_id?: number | null;
    expanded?: boolean;
    type?: string;
    data: {
        image: string;
        name: string;
        title: string;
        text?: string;
    };
    children?: OrganigramaNode[];
    order_position?: number;
}
