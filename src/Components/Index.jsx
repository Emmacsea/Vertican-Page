import index from "../assets/img/img-1.jpg";
import PropTypes from 'prop-types';


export const Home = ({
    onClickintro,
    onClickgallery,
    onClickcontact,
}) => {
    return(
        <div className="bg-gray-200 flex flex-col justify-center items-center h-full">
            
            <div className="flex flex-col justify-center items-center pr-12 space-y-5 mt-10 w-full">
                <h3 className="text-gray-600 text-2xl font-bold uppercase text-center">Vertican</h3>
                <span className="text-green-300 text-base font-bold ">new Tailwind Theme</span>
            </div>

            <div className="flex justify-center space-x-10 items-start px-72 w-full">
                <div>
                    <div className="bg-white flex flex-col justify-center items-center h-auto rounded-xl mt-10 w-full">
                        <div className="w-full"><img className="w-full rounded-t-xl" src={index} alt="" /></div>
                        <div className="space-y-6 px-8 py-10">
                            <h2 className="text-neutral-800 text-2xl text-center font-bold capitalize">Verticard simple CSS template</h2>
                            <p className="text-neutral-400 text-lg font-medium">
                                Vericard helps you to get a template you can use in build a project. 
                                It is free but should not be used inappropriately. Get Template for your projects.
                            </p>
                            <p className="text-neutral-400 text-lg font-medium">
                            Vericard is provided by TemplateMo site for 100% free download. 
                            You can use it absolutely free for any website. Template re-distribution 
                            is NOT allowed on any kind of download website. Thank you.
                            </p>
                        </div>

                    </div> 

                    <div className="flex justify-between items-center w-full my-10">
                        <p className="text-neutral-400 text-sm font-semibold">
                            Copyright &copy; {new Date().getFullYear()}
                        </p>
                        <p className="text-neutral-400 text-sm font-semibold">
                            Design by Emmac
                        </p>

                    </div>
                </div>

                <div className="flex flex-col justify-center items-start space-y-6 mt-24 ">
                    <button type="click" onClick={onClickintro} className="flex space-x-3 items-center">
                        <span className="w-5 h-2 bg-blue-400 "></span>
                        <p className="text-blue-400 text-lg font-semibold capitalize">Intro</p>
                    </button > 
                    <button type="click" onClick={onClickgallery} className="flex space-x-3 items-center">
                        <span className="w-5 h-2 bg-neutral-400 hover:bg-blue-400 "></span>
                        <p className="text-neutral-400 hover:text-blue-400 text-lg font-semibold capitalize">gallery</p>
                    </button >                            
                    <button type="click" onClick={onClickcontact} className="flex space-x-3 items-center">
                        <span className="w-5 h-2 bg-neutral-400 hover:bg-blue-400 "></span>
                        <p className="text-neutral-400 hover:text-blue-400 text-lg font-semibold capitalize">contact</p>
                    </button >                            
                </div>

            </div>

            
        </div>

    )
}
Home.propTypes = {
    onClickintro: PropTypes.func.isRequired,
    onClickgallery: PropTypes.func.isRequired,
    onClickcontact: PropTypes.func.isRequired,
}