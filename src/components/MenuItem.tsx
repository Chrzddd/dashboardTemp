import Link from 'next/link'

interface MenuItemProps{
    name:string;
    onClick?:(evento:any)=>void
}

export default function MenuItem(props: MenuItemProps){
    return (
        <li className={` cursor-pointer pt-5 hover:text-gray-600`}>
            <a onClick={props.onClick}  className={`
                       w-full
                    `}>                  
                    {props.name}                 
            </a>
        </li>

    )
}