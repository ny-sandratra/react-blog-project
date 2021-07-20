import React, { Component } from 'react'
import "./Accueil.css"

export class Accueil extends Component {
    render() {
        return (
            <div>
                <section className="section0">
                

                </section>
                <section className="section1">
                    <div className="row" id="profil">
                        <img src={process.env.PUBLIC_URL+"/images/profil.JPG"} alt=""  width="300" className="my-auto rounded-full"/>
                    </div>
                    <div className=" row" id="welcome" >
                        <svg viewBox="0 -15 1350 600" >
                            <text x="50%" y="30%" fill="transparent" >
                                    Blog

                            </text>
                            <text x="40%" y="50%" fill="transparent" >
                                    Personnal
                              <text x="40%" y="70%"  className="text-2xl">Partage - Commentaire - Avis personnel</text>
                            </text>
                           
                       </svg>
                    </div>   

                </section>
                <section>
                    
                    <div className="container mx-auto my-5">
    
    <div className="relative flex flex-col items-center mx-2 rounded-lg md:flex-row md:h-72 md:shadow-xl">
        
        <div className="relative z-0 order-1 w-full overflow-hidden rounded-lg md:order-2 md:w-2/5 h-80 md:h-full md:rounded-none md:rounded-r-lg">
           
            <div className="absolute inset-0 flex flex-col-reverse items-start justify-start h-full p-6 pb-6 md:hidden bg-gradient-to-b from-transparent via-transparent to-gray-900">
                <h3 className="w-full mb-2 text-2xl font-bold leading-tight text-white">ISPM Friendship</h3>
                <h4 className="w-full text-xl leading-tight text-blue-600">#Friends #School #ISPM</h4>
            </div>
            <div className="absolute inset-0 object-fill object-center w-full h-full bg-blue-400 bg-bottom bg-cover bg-opacity-30" > <img src={process.env.PUBLIC_URL+"./images/friends.JPG"} alt=""/></div>
            <svg className="absolute inset-y-0 hidden w-24 h-full -ml-12 text-white fill-current md:block" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
        </div>
    
        <div className="z-10 flex items-center order-2 w-full h-full -mt-6 md:order-1 md:w-3/5 md:mt-0">
            <div className="h-full p-8 mx-2 bg-white rounded-lg shadow-xl md:pr-18 md:pl-14 md:py-12 md:mx-0 md:rounded-none md:rounded-l-lg md:shadow-none">
                <h4 className="hidden text-xl text-gray-400 md:block">ISPM Friendship </h4>
                <h3 className="hidden text-xl font-bold text-blue-600 md:block">#Friens #School</h3>
                <p className="text-justify text-gray-600">These people are my friends at ispm. I love them. They share with me our follies, our laughter ... We help each other and I want to see them succeed in life ... Love you gyus</p>
                <div className="flex items-baseline mt-3 text-blue-600 hover:text-blue-900 focus:text-blue-900" >
                  {/* icones si possibe */}
                </div>
            </div>
        </div>
    
    </div>
    </div>
    
                    </section>
                    <section>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">

      <div className="p-2 bg-white md:p-8">
          
        <img  className="w-full rounded-lg "
          src={process.env.PUBLIC_URL+"./images/netflix.JPG"} alt=""
        />

      
        <p className="mt-2 text-base font-semibold text-indigo-500">Series</p>
       
        <h1
          className="mt-1 text-lg font-semibold leading-none text-gray-900 capitalize truncate"
        >
          My hobbies, passe-times
        </h1>
     
        <div className="max-w-full">
          <p className="mt-1 text-base font-medium tracking-wide text-gray-600">
          My greatest pleasure when I am too stressed is to watch series.You can said that I am an addict ... When I launch a new series, I can not stop myself, that's why I use it to clear my head when I can't debug my code for example. After that, I will be calm and continue my programming. You should try, life doesn't just revolve around your job no matter what job you do. You also have to relax and release the pressure a little. Your brain needs it. Of course, it's not just the series, you can practice other hobbies like sports, dancing, singing. Try it, you will see
          </p>
        </div>
        <div className="flex items-center mt-20 space-x-2">
          
          <img
            className="object-cover object-center w-10 h-10 rounded-full"
            src={process.env.PUBLIC_URL+"./images/profil.JPG"}
            alt="random user"
          />
          <div>
           
            <p className="font-semibold text-gray-900">Sandratra Andrianahary</p>
            <p className="text-sm font-semibold text-gray-500">
              July 20,2021 &middot; 6 min read
            </p>
          </div>
        </div>
      </div>
   

    
      <div className="p-8 bg-white">
        
        <img alt=""
          className="w-full rounded-lg "
          src={process.env.PUBLIC_URL+"./images/burger-rossini.JPG"}
        />
        
        <p className="mt-2 text-base font-semibold text-indigo-500">
          FoodLovers
        </p>
      
        <h1
          className="mt-1 text-xl font-semibold leading-none text-gray-900 capitalize truncate"
        >
          I love cooking,eating...
        </h1>
        
        <div className="max-w-full">
          <p className="mt-1 text-base font-medium tracking-wide text-gray-600">
          I love food
It was the first word that came to my mind. It is one of my talents, to cook. After being disappointed with the various culinary tastes outside, I started to learn to cook on the net. But I have a lot of crush on fast food in Madagascar (among those where I visited). For example, Food Zone Ankorahotra. I love going on a culinary journey but for the moment, I'm a little broke so my first sentence in this comment
          </p>
        </div>
        <div className="flex items-center mt-20 space-x-2">
        
          <img
            className="object-cover object-center w-10 h-10 rounded-full"
            src={process.env.PUBLIC_URL+"./images/profil.JPG"}
            alt="random user"
          />
          <div>
         
            <p className="font-semibold text-gray-900">Sandratra Andrianahary</p>
            <p className="text-sm font-semibold text-gray-500">
             July 20,2021 &middot; 18 min read
            </p>
          </div>
        </div>
      </div>
   

    
      <div className="p-8 bg-white">
    
        <img  alt=""className="object-cover object-center w-full rounded-lg " src={process.env.PUBLIC_URL+"./images/studies.JPG"}  />
        
        <p className="mt-2 text-base font-semibold text-indigo-500">Studies</p>
        
        <h1
          className="mt-1 text-xl font-semibold leading-none text-gray-900 capitalize truncate"
        >
          Coding Learning...
        </h1>
        
        <div className="max-w-full">
          <p className="mt-1 text-base font-medium tracking-wide text-gray-600">
          If you are passionate about creating websites, mobile applications etc, I invite you to study programming. Besides, this is the only way to design them. For my part, I was not very interested at the beginning but gradually, I ended up finding my click. At the moment, I am still a student more precisely in the third year of the License. I will really hope to get an internship to finish my bachelor's degree and start the world of programming work.
So, I hope my comment will be helpful to you in your decision. In fact, programming may well annoy you but you will feel the joy when you see your mistake.
          </p>
        </div>
        <div className="flex items-center mt-20 space-x-2">
       
          <img
            className="object-cover object-center w-10 h-10 rounded-full"
            src={process.env.PUBLIC_URL+"./images/profil.JPG"}
            alt="random user"
          />
          <div>
         
            <p className="font-semibold text-gray-900">Sandratra Andrianahary</p>
            <p className="text-sm font-semibold text-gray-500">
              July 20,2020 &middot;  One year
            </p>
          </div>
        </div>
      </div>

    </div>
  

    <script src="" async defer></script>
    
                    </section>
                
                <section>
                    
                <div className="container mx-auto my-5">

<div className="relative flex flex-col items-center mx-2 rounded-lg md:flex-row md:shadow-xl md:h-72">
    
    <div className="relative z-0 order-1 w-full overflow-hidden rounded-lg md:order-2 md:w-2/5 h-80 md:h-full md:rounded-none md:rounded-r-lg">
        <div className="absolute inset-0 object-fill object-center w-full h-full bg-blue-400 bg-bottom bg-cover bg-opacity-30" ><img src={process.env.PUBLIC_URL+"./images/projet.JPG" } alt=""/></div>
        <div className="absolute inset-0 flex flex-col-reverse items-start justify-start h-full p-6 pb-6 md:hidden bg-gradient-to-b from-transparent via-transparent to-gray-900">
            <h3 className="w-full mb-2 text-2xl font-bold leading-tight text-white">Project 2018</h3>
            <h4 className="w-full text-xl leading-tight text-blue-500">#ISPM #2018 #Memories</h4>
        </div>
        <svg className="absolute inset-y-0 hidden w-24 h-full -ml-12 text-white fill-current md:block" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
    </div>

    <div className="z-10 flex items-center order-2 w-full h-full -mt-6 md:order-1 md:w-3/5 md:mt-0">
        <div className="h-full p-8 mx-2 bg-white rounded-lg shadow-xl md:pr-18 md:pl-14 md:py-12 md:mx-0 md:rounded-none md:rounded-l-lg md:shadow-none">
            <h4 className="hidden text-xl text-gray-400 md:block">Project</h4>
            <h3 className="hidden text-xl font-bold text-blue-500 md:block">#ISPM #PROJECT #2018 #Memories</h3>
            <p className="text-justify text-gray-600">I would like to share this photo with you. It was the presentation of our first project within ISPM. We were in the first year and we had created our first web application concerning the management of Fokontany in Madagscar. We won a place to present our project to Carlton Anosy on August 07, 2019 ...</p>
            <div className="flex items-baseline mt-3 text-blue-600 hover:text-blue-900 focus:text-blue-900" >
               
                
            </div>
        </div>
    </div>

</div>
</div>

                </section>
            </div>
        )
    }
}

export default Accueil
