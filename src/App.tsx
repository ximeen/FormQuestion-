
export function App(){
    return(
        <main className="h-screen grid items-center justify-center">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl inline sm:block">Faça parte da minha</h1>
                <h2 className="text-3xl font-extrabold tracking-tight text-blue-500 sm:text-4xl inline sm:block"> lista de amigos</h2> 

                <form className="mt-8 sm:flex" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdV2_qhPXgOSOaMuFqMANcSzQFpLD9JXyOJDOkjupBonk1NoA/formResponse">

                    <label htmlFor="insta-friend" className="sr-only">Digite teu @</label>
                    <input 
                        className="border
                         border-gray-500
                            rounded-md
                            px-5 py-3
                            text-center
                            focus:border-blue-500 focus:ring-blue-500
                            focus:outline-none focus:ring-2 focus:ring-offset-2 w-full"
                        type="text" 
                        placeholder="Digite o teu @"
                        required
                        name="entry.1185146724"
                        id="insta-friend"
                    />

                    <button
                        className="
                            bg-blue-500
                            px-5
                            py-3 
                            rounded-md
                             text-white 
                            flex
                            items-center
                            justify-center 
                            mt-3
                             hover:bg-blue-700 
                            focus:outline-none
                            focus:ring-2 
                            focus:ring-offset-2
                            focus:ring-blue-500
                            w-full 
                            sm:ml-3
                            sm:mt-0
                            "
                    >
                        Solicitar
                    </button>    
                </form>          
            </div>

        </main>
    )
}