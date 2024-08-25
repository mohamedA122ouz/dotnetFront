"use client";
import AdCard from "@/app/components/adCard/adCard";

export default function Home() {
    //connectServer
    //react hook useState homeCards -> json -JS Object-
    //for loop to add the cards to the home page
    return (<>
        {
            (function build() {
                let allCards = [];
                let homeCards = {
                    "title": ["subtitle", "buttonName", "imageURL", "imageALT"],
                    "title1": ["subtitle", "buttonName", "imageURL", "imageALT"],
                    "title2": ["subtitle", "buttonName", "imageURL", "imageALT"],
                    "title3": ["subtitle", "buttonName", "imageURL", "imageALT"],
                    "title4": ["subtitle", "buttonName", "imageURL", "imageALT"]
                };
                let ii = 0;
                for(let i in homeCards){
                    allCards.push(<AdCard alt={homeCards[i][3]} src={homeCards[i][2]} title={i} key={i+(ii++)} details={homeCards[i][0]} />);
                }
                return allCards;
            })()
        }
    </>);
}