export interface ParentItemData {
    key: number;
    name: string;
    platform: string;
    version: string;
    upgradeNum: number | string;
    creator: string;
    createdAt: string;
    expand: boolean;
}

export interface ChildrenItemData {
    key: number;
    name: string;
    date: string;
    upgradeNum: string;
}

