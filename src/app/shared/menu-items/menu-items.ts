import { Injectable } from '@angular/core';

export interface BadgeItem {
    type: string;
    value: string;
}
export interface Saperator {
    name: string;
    type?: string;
}
export interface SubChildren {
    state: string;
    name: string;
    type?: string;
}
export interface ChildrenItems {
    state: string;
    name: string;
    type?: string;
    child?: SubChildren[];
}

export interface Menu {
    state: string;
    name: string;
    type: string;
    icon: string;
    badge?: BadgeItem[];
    saperator?: Saperator[];
    children?: ChildrenItems[];
}

const MENUITEMS = [
    {
        state: 'dashboard',
        name: 'Dashboard',
        type: 'link',
        icon: 'av_timer'
    },
    {
        state: 'checklist',
        name: 'Checklist',
        type: 'link',
        icon: 'playlist_add_check'
    },
    {
        state: 'request',
        name: 'Requests',
        type: 'link',
        icon: 'exit_to_app'
    },
    {
        state: 'inventory',
        name: 'Inventory',
        type: 'sub',
        icon: 'dvr',
        badge: [{ type: 'purple', value: '3' }],
        children: [
            { state: 'equipments', name: 'Equipments', type: 'link', icon: "weekend"},
            { state: 'release-equipment', name: 'Release Equipments', type: 'link', icon: "vertical_align_top"},
            { state: 'recieve-equipment', name: 'Recieve Equipments', type: 'link', icon: "vertical_align_bottom" },
        ]
    },
    // {
    //     state: 'equipments',
    //     name: 'Equipments',
    //     type: 'link',
    //     icon: 'weekend'
    // },
    {
        state: 'reports',
        name: 'Reports',
        type: 'link',
        icon: 'trending_up'
    },
    {
        state: 'activity-log',
        name: 'Activity Log',
        type: 'link',
        icon: 'format_list_bulleted'
    },
    // {
    //     state: 'notes',
    //     name: 'Notes',
    //     type: 'link',
    //     icon: 'event_note'
    // },
    // {
    //     state: 'settings',
    //     name: 'Settings',
    //     type: 'link',
    //     icon: 'settings'
    // },
    // {
    //     state: 'about',
    //     name: 'About App',
    //     type: 'link',
    //     icon: 'info'
    // },
    // {
    //     state: 'material',
    //     name: 'Material Ui',
    //     type: 'sub',
    //     icon: 'bubble_chart',
    //     badge: [{ type: 'red', value: '17' }],
    //     children: [
    //         { state: 'badge', name: 'Badge', type: 'link' },
    //         { state: 'button', name: 'Buttons', type: 'link' },
    //         { state: 'cards', name: 'Cards', type: 'link' },
    //         { state: 'grid', name: 'Grid List', type: 'link' },
    //         { state: 'lists', name: 'Lists', type: 'link' },
    //         { state: 'menu', name: 'Menu', type: 'link' },
    //         { state: 'tabs', name: 'Tabs', type: 'link' },
    //         { state: 'stepper', name: 'Stepper', type: 'link' },
    //         { state: 'ripples', name: 'Ripples', type: 'link' },
    //         { state: 'expansion', name: 'Expansion Panel', type: 'link' },
    //         { state: 'chips', name: 'Chips', type: 'link' },
    //         { state: 'toolbar', name: 'Toolbar', type: 'link' },
    //         { state: 'progress-snipper', name: 'Progress snipper', type: 'link' },
    //         { state: 'progress', name: 'Progress Bar', type: 'link' },
    //         { state: 'dialog', name: 'Dialog', type: 'link' },
    //         { state: 'tooltip', name: 'Tooltip', type: 'link' },
    //         { state: 'snackbar', name: 'Snackbar', type: 'link' },
    //         { state: 'slider', name: 'Slider', type: 'link' },
    //         { state: 'slide-toggle', name: 'Slide Toggle', type: 'link' }
    //     ]
    // }
];

@Injectable()
export class MenuItems {
    getMenuitem(): Menu[] {
        return MENUITEMS;
    }
}
