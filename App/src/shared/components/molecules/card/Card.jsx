import React from "react";
import { Button } from "primereact/button";
import "../../../../assets/css/Home.css"

export function Cards (props){
    const { error, name, label,label2,label3,labelButton, plan, description, time, price, style, icon, control, rules, block } = props

    return(
        <div className="col-12 lg:col-4 cards__item">
        <div className="p-3 h-full card">
            <div className="shadow-2 p-3 h-full flex flex-column surface-card card__content" style={{ borderRadius: '6px' }}>
                <div className="text-900 font-medium text-xl mb-2 card__title fw-bold" >{plan}</div>
                <div className="text-600">{description}</div> 
                <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                <div className="flex align-items-center">
                    <span className="font-bold text-2xl text-900 fw-bold">{price}</span>
                    <span className="ml-2 font-medium text-600">{time}</span>
                </div>
                <hr className="my-3 mx-0 border-top-1 border-none surface-border" />
                <ul className="list-none p-0 m-0 flex-grow-1 card__text">
                    <li className="flex align-items-center mb-3">
                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                        <span> {label}</span>
                    </li>
                    <li className="flex align-items-center mb-3">
                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                        <span> {label2}</span>
                    </li>
                    <li className="flex align-items-center mb-3">
                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                        <span> {label3}</span>
                    </li>
                </ul>
                <hr className="mb-3 mx-0 border-top-1 border-none surface-border mt-auto" />
                
                <Button className="pi pi-shopping-cart button">{labelButton}</Button>
            </div>
        </div>
    </div>
    )
}