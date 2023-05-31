import { AiFillStar } from "react-icons/ai";

export function titleCase(str) {
    if(typeof str !== "string") return ""
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }

export function setStars(count){
    
    return Array.from({length:count}, (_, i)=><AiFillStar key={i}/>)
}