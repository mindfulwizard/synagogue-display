const React = require('react');


const Entry = ({title,updating,children,save})=> {
  	    return (
    	    <div>
                <h2>{title}: 
                    {
                        updating ? (
                            <input 
                                type="text"
                                value={children[title]}
                                placeholder="enter time"
                                onChange={(e)=>save(title,e.target.value)}
                            />
                        ) : (
                            children[title]
                        )      
                    }
                </h2>
    	    </div>
 	    );
}

module.exports = Entry;