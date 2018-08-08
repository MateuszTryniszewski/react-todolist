import React, {Component} from "react";

class Quests extends Component {
    
    
    removeQuest = (element) =>{
        this.props.removeQuest(element.key);
    }
    
    createQuest = (element) => {
        return <li onClick ={ () => this.removeQuest(element)} key={element.key}> <h4>{element.title}</h4>  {element.content}<p>{element.date}</p><hr /></li>
    }
    
    render(){
        
        let aaa = this.props.lista;
        let bbb = aaa.map(this.createQuest);
        
        
        
        
        return(
            <ol>
                {bbb}
            </ol>
        
        )
    
    }
}

export default Quests;
