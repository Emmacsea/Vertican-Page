import gall1 from "../assets/img/gallery/gallery-img-01.jpg";
import gall2 from "../assets/img/gallery/gallery-img-02.jpg";
import gall3 from "../assets/img/gallery/gallery-img-03.jpg";
import gall4 from "../assets/img/gallery/gallery-img-04.jpg";
import gall5 from "../assets/img/gallery/gallery-img-05.jpg";
import gall6 from "../assets/img/gallery/gallery-img-06.jpg";

import PropTypes from 'prop-types';

const images = [gall1, gall2, gall3, gall4, gall5, gall6];


export default function Gallery ({
    onClickintro,
    onClickgallery,
    onClickcontact,
}) {
    return(
        <div className="bg-gray-200 flex flex-col justify-center items-center h-full">
            
            <div className="flex flex-col justify-center items-center pr-12 space-y-5 mt-10 w-full">
                <h3 className="text-gray-600 text-2xl font-bold uppercase text-center">Vertican</h3>
                <span className="text-green-300 text-base font-bold ">new Tailwind Theme</span>
            </div>

            <div className="flex justify-center space-x-10 items-start px-72 w-full">
                <div>
                    <div className="bg-white justify-center items-center h-auto rounded-xl px-8 py-10 mt-10 w-full">
                        <div>
                            <p className="text-neutral-400 text-lg font-medium">
                                This gallery contains a beautiful hover effect and pop-up larger images. Please mention TemplateMo site to your friends.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-7 mt-8">                            

                            {
                                images.map((src, index) => (
                                    <div key={index} className="group relative w-full">
                                        <img className="block w-full h-auto" src={src} alt={`gallary images ${index + 1}`} />
                                        <div className="lay ">
                                            <p className="lay-text">
                                                Vericard is reliable source for projects
                                            </p>
                                        </div>
                                    </div>  
                                    
                                ))
                            }                                                     
                            
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
                        <span className="w-5 h-2 bg-neutral-400 "></span>
                        <p className="text-neutral-400 hover:text-blue-400 text-lg font-semibold capitalize">Intro</p>
                    </button > 
                    <button type="click" onClick={onClickgallery} className="flex space-x-3 items-center">
                        <span className="w-5 h-2 bg-blue-400 hover:bg-blue-400 "></span>
                        <p className="text-blue-400 hover:text-blue-400 text-lg font-semibold capitalize">gallery</p>
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
Gallery.propTypes = {
    onClickintro: PropTypes.func.isRequired,
    onClickgallery: PropTypes.func.isRequired,
    onClickcontact: PropTypes.func.isRequired,
}