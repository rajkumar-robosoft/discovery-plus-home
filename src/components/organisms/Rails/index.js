import React, { useState, useEffect }  from 'react'
import RailsImage from '../../molecules/rails-image'
import RailsDesc from '../../molecules/rails-desc'
import RailsIndicator from '../../molecules/rails-indicator'
import Link from '../../atoms/link'
import Image from '../../atoms/image'
import './style.css'
const RailsContent = [
    {
      heading: "21 Sarfarosh: Saragarhi 1897",
      subHeading:"This drama recounts the battle of 21 Sikhs versus 12,000 Pashtuns.",
      tag1: "Editor's Pick",
      tag2: "Must Watch",
      image: {
        img: "slider1.jpeg",
        imgAlt: "21 Sarfarosh: Saragarhi 1897"
      }
    },
    {
      heading: "Johnny vs. Amber",
      subHeading:"Explosive evidence in a libel case exposes a troubled celebrity marriage.",
      tag1: "Trending",
      tag2: "Recommended",
      image: {
        img: "slider2.jpeg",
        imgAlt: "SJohnny vs. Amber"
      }
    },
    {
      heading: "Being Serena",
      subHeading:"Explosive evidence in a libel case exposes a troubled celebrity marriage.",
      tag1: "New",
      tag2: "Stream Now",
      image: {
        img: "slider3.jpeg",
        imgAlt: "Being Serena"
      }
    }
    
  ];

  const Rails = ({content}) => {
    const [activeContent, setActiveContent] = useState(0);
    
    useEffect(() => {
        const next = (activeContent + 1) % RailsContent.length;
        const id = setTimeout(() => setActiveContent(next), 3000);
        return () => clearTimeout(id);
        }, [activeContent]);
    
    const prevContent = (e) => {
        e.preventDefault();
        if (activeContent === 0) setActiveContent(RailsContent.length - 1);
        else setActiveContent(activeContent - 1);
    }
    
    const nextContent = (e) => {
        e.preventDefault();
        if (activeContent === RailsContent.length - 1) setActiveContent(0);
        else setActiveContent(activeContent + 1);
    }
    
    const currentContent = (current) => {
        setActiveContent(current);
    }
    
        return (
            <React.Fragment>
                {RailsContent.map((item, index) => {
                    return (
                        (index === activeContent) && <div className="rails" key={index}>
                            <Link name={<Image src="/previous.png" alt="Previous" width="24"/>} handleClick={prevContent} style="nav-icon text-nav"/>
                            <RailsDesc heading={item.heading} subHeading={item.subHeading} tag1={item.tag1} tag2={item.tag2} key={index}/>
                            <RailsImage src={item.image.img} alt={item.image.imgAlt} width='880' />
                            <Link text={<Image src="/next.png" alt="Next" width="24"/>} url="/" handleClick={nextContent} style="nav-icon text-nav"/>
                        </div>
                    );
                })}
                <div className="rails-indicator-position">
                {(RailsContent).map((indicator, index) => {
                    return (
                        <RailsIndicator key={index} onClick={(e) =>{e.preventDefault(); currentContent(index)}} type={activeContent === index ? "Rails-indicator-active" : "Rails-indicator-inactive"}/>
                    );
                })}
                </div>
          </React.Fragment>
        );
    };

    export default Rails;