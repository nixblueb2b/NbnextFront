
'use client'
import React, { useState, useRef } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Avatar } from 'primereact/avatar';
import { Ripple } from 'primereact/ripple';
import { StyleClass } from 'primereact/styleclass';
import {SidebarHeader} from '@/app/ui/shared/sections'
import { useOpenSidebarStore } from '@/app/stores/user/homeHeaderProvider'




export default function SimpleSidebar() {

    
    const {isOpen, closeSidebar} = useOpenSidebarStore((store)=>store)

    const [visible, setVisible] = useState(true);
    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);
    const btnRef4 = useRef(null);

    console.log(isOpen)

    return (
        <div className="card flex justify-content-center">
            <Sidebar
                className=''
                position='left'
                visible={isOpen}
                onHide={() => closeSidebar(isOpen)}
                content={() => (
                    <div className="min-h-screen flex relative lg:static surface-ground">
                        <div id="app-sidebar-2" className="surface-section h-screen block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none w-full">
                            <div className="flex flex-col h-full">
                                <div className="flex align-items-center justify-between px-4 py-5 flex-shrink-0">
                                    <SidebarHeader />
                                </div>

                                <div className="overflow-y-auto bg-blue-300">
                                    <ul className="list-none p-3 m-0">
                                        <li>
                                            <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                <div ref={btnRef1} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                                    <span className="font-medium">FAVORITES</span>
                                                    <i className="pi pi-chevron-down"></i>
                                                    <Ripple />
                                                </div>
                                            </StyleClass>
                                            <ul className="list-none p-0 m-0 overflow-hidden">
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-home mr-2"></i>
                                                        <span className="font-medium">Dashboard</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-bookmark mr-2"></i>
                                                        <span className="font-medium">Bookmarks</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                        <a ref={btnRef2} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-chart-line mr-2"></i>
                                                            <span className="font-medium">Reports</span>
                                                            <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                            <Ripple />
                                                        </a>
                                                    </StyleClass>
                                                    <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                        <li>
                                                            <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                                <a ref={btnRef3} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                    <i className="pi pi-chart-line mr-2"></i>
                                                                    <span className="font-medium">Revenue</span>
                                                                    <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                                    <Ripple />
                                                                </a>
                                                            </StyleClass>
                                                            <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                                <li>
                                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                        <i className="pi pi-table mr-2"></i>
                                                                        <span className="font-medium">View</span>
                                                                        <Ripple />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                        <i className="pi pi-search mr-2"></i>
                                                                        <span className="font-medium">Search</span>
                                                                        <Ripple />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                <i className="pi pi-chart-line mr-2"></i>
                                                                <span className="font-medium">Expenses</span>
                                                                <Ripple />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-users mr-2"></i>
                                                        <span className="font-medium">Team</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-comments mr-2"></i>
                                                        <span className="font-medium">Messages</span>
                                                        <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>
                                                            3
                                                        </span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-calendar mr-2"></i>
                                                        <span className="font-medium">Calendar</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-cog mr-2"></i>
                                                        <span className="font-medium">Settings</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul className="list-none p-3 m-0">
                                        <li>
                                            <StyleClass nodeRef={btnRef4} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                <div ref={btnRef4} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                                    <span className="font-medium">APPLICATION</span>
                                                    <i className="pi pi-chevron-down"></i>
                                                    <Ripple />
                                                </div>
                                            </StyleClass>
                                            <ul className="list-none p-0 m-0 overflow-hidden">
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-folder mr-2"></i>
                                                        <span className="font-medium">Projects</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-chart-bar mr-2"></i>
                                                        <span className="font-medium">Performance</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-cog mr-2"></i>
                                                        <span className="font-medium">Settings</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-auto bg-red-200 w-full">
                                    <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                                    <a v-ripple className="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                                        <span className="font-bold">Amy Elsner</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            ></Sidebar>
        </div>
    )
}
        