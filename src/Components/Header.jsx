import"../Styles/Header.css";
import image from  "../assets/images/plane.png";
import image1 from  "../assets/images/Group 688.png";
import image2 from  "../assets/images/Vector.png";
import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';


const Header = () => {
    return ( 
        <>
        <main>
            <aside className="left">
                <h1>Travelista  Tours</h1>
                <p>Travel is the only purchase that enrivches you in ways<br/> beyond material wealth</p>
            </aside>

            <aside className="right">

                <section className="plane">
                     <img src={image} />
                </section>
                <section className="welcome">
                    <h1>Welcome</h1>
                    <p>Login with Email</p>
                </section>
                <section className="details">
                    
                    <input type="text" placeholder="enter your mail" />

                    <input type="password" placeholder="************" />

                    <a href="">forgot your password</a>

                    <button>LOGIN</button>
                    <p className="fine">OR</p>
                    
                </section>
                <section className="links">

                    <div>
                    <FcGoogle size={40} />

                    </div>


                    <div>
                    < BsFacebook size={40} color="lightskyblue"/>


                    </div>
                    <div>
                     < AiFillApple size={40}/>

                    </div>
                   
                </section>
                <div className="dont">

                    <p>Don't have account?<b> Register Now</b></p>

                </div>

                <footer>
                    <img src={image2} />
                    <img src={image1} />
                </footer>

            </aside>
        </main>
        </>
     );
}
 
export default Header;