import Link from 'next/link'

interface MenuItemProps{
    url:string;
    name:string;
}

export default function MenuItem(props: MenuItemProps){
    return (
        <li className={` cursor-pointer pt-5 hover:text-gray-600`}>
            <a href={props.url}className={`
                       w-full
                    `}>                  
                    {props.name}                 
            </a>
        </li>

    )
}