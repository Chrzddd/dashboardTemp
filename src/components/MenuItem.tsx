import Button from '@mui/material/Button';

interface MenuItemProps{
    name:string;
    onClick?:(evento:any)=>void
    startIcon?:any;
}

export default function MenuItem(props: MenuItemProps){
    return (
        <div className={`flex flex-col w-full h-10 items-center cursor-pointer mt-4 hover:text-black hover:shadow-md hover:rounded-md text-white`}>
            <Button startIcon={props.startIcon}color="inherit" variant="text" onClick={props.onClick}  className={`
                       h-full w-full text-center
                    `}>                  
                    <span className="hidden sm:block md:block">{props.name}</span>             
            </Button>
        </div>

    )
}