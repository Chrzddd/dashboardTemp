import Link from 'next/link'

interface MenuItemProps{
    name:string;
    onClick?:(evento:any)=>void
}

export default function MenuItem(props: MenuItemProps){
    return (
        <div className={`flex flex-col w-full h-10 items-center cursor-pointer mt-4 hover:text-white hover:shadow-md hover:rounded-md text-black`}>
            <a onClick={props.onClick}  className={`
                       h-full w-full text-center
                    `}>                  
                    {props.name}                 
            </a>
        </div>

    )
}